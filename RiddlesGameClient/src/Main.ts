//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource();
        //装载Riddle json
        game.RiddleData.instance.initRiddles();
        //小游戏 全局映射
        window["CharOptionButton"] = CharOptionButton;
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
        console.log("result: ", result);
        // this.startAnimation(result);
        await platform.login();
        platform.shop();
        // platform.onWxShow();
        const userInfo = await platform.getUserInfo();
        console.log("userInfo: ", userInfo);

    }

    private async loadResource() {
        try {
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("loadingUI");
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await this.loadTheme();
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private button: eui.Button;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        this.init();

        let button = this.button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        button.visible = false;
        // button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        dliy.DLIYMsgCenter.instance.sendMsg(game.GameNotice.LOGIN, null);        
    }

    private textfield: egret.TextField;

    private init() {
        this.addChild(GameLayerManager.gameLayer());
        dliy.DLIYMsgCenter.instance.registerMsgHandle(game.GameNotice.LOGIN, new game.LoginCmdHandler());
        dliy.UIMng.instance.setUIProps(game.UI1.UIName, game.UI1.UIResGroup, game.UI1);
        dliy.UIMng.instance.setUIProps(game.UI2.UIName, game.UI2.UIResGroup, game.UI2);
    }

    
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    private startAnimation(result: Array<any>): void {
        let parser = new egret.HtmlTextParser();

        let textflowArr = result.map(text => parser.parse(text));
        this.textfield = new egret.TextField();
        this.addChild(this.textfield);
        this.textfield.x = 10;
        this.textfield.y = 10;
        let textfield = this.textfield;
        let count = -1;
        let change = () => {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            let textFlow = textflowArr[count];

            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            let tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, this);
        };

        change();
    }

    /**
     * 点击按钮
     * Click the button
     */
    private onButtonClick(e: egret.TouchEvent) {
        dliy.utils.Http.create()
            .success(this.onLoginSuc, this)
            .error(this.onLoginError, this)
            .dataFormat(egret.URLLoaderDataFormat.TEXT)
            .get("http://res.online.9aiyouxi.com/gamedata.json");
    }

    private onLoginSuc(data: string) {
        this.button.visible = false;
        dliy.DLIYMsgCenter.instance.sendMsg(game.GameNotice.LOGIN, data);
    }

    private onLoginError() {
        // 需要自己实现
    }
}
