var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var dliy;
(function (dliy) {
    var BaseUI = (function (_super) {
        __extends(BaseUI, _super);
        function BaseUI() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this);
            return _this;
        }
        BaseUI.prototype.onRemove = function () {
        };
        BaseUI.prototype.close = function () {
            if (this.parent) {
                this.parent.removeChild(this);
            }
        };
        return BaseUI;
    }(eui.Component));
    dliy.BaseUI = BaseUI;
    __reflect(BaseUI.prototype, "dliy.BaseUI");
})(dliy || (dliy = {}));
var dliy;
(function (dliy) {
    var DragonCache = (function () {
        function DragonCache() {
            this.cacheMap = new dliy.HashMap();
        }
        Object.defineProperty(DragonCache, "instance", {
            get: function () {
                if (!DragonCache._instance) {
                    DragonCache._instance = new DragonCache();
                }
                return DragonCache._instance;
            },
            enumerable: true,
            configurable: true
        });
        DragonCache.prototype.getDragonFactory = function (dragonbonesData, textureData, texture) {
            if (this.cacheMap.contains(dragonbonesData)) {
                return this.cacheMap.get(dragonbonesData);
            }
            var dragonbonesDataC = RES.getRes(dragonbonesData);
            var textureDataC = RES.getRes(textureData);
            var textureC = RES.getRes(texture);
            var dragonbonesFactory = new dragonBones.EgretFactory();
            dragonbonesFactory.parseDragonBonesData(dragonbonesDataC);
            dragonbonesFactory.parseTextureAtlasData(textureDataC, textureC);
            return dragonbonesFactory;
        };
        return DragonCache;
    }());
    dliy.DragonCache = DragonCache;
    __reflect(DragonCache.prototype, "dliy.DragonCache");
    var CommonDB = (function (_super) {
        __extends(CommonDB, _super);
        function CommonDB(dragonbonesData, textureData, texture, anim, isloop, playOnStage, isTouch) {
            if (isloop === void 0) { isloop = true; }
            if (playOnStage === void 0) { playOnStage = true; }
            if (isTouch === void 0) { isTouch = true; }
            var _this = _super.call(this) || this;
            _this.startTime = 0;
            _this.isTouch = true;
            _this.isloop = false;
            _this.playOnStage = true;
            _this.dragonbonesData = dragonbonesData;
            _this.textureData = textureData;
            _this.texture = texture;
            _this.anim = anim;
            _this.isloop = isloop;
            _this.playOnStage = playOnStage;
            _this.isTouch = isTouch;
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
            return _this;
        }
        CommonDB.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            var factory = DragonCache.instance.getDragonFactory(this.dragonbonesData, this.textureData, this.texture);
            this.armature = factory.buildArmature("Armature");
            var display = this.armature.display;
            this.addChild(display);
            this.animDisplay = display;
            this.animDisplay.touchEnabled = this.isTouch;
            this.animDisplay.touchChildren = this.isTouch;
            if (this.playOnStage) {
                this.armature.animation.play(this.anim, this.isloop ? 0 : 1);
            }
            this.startTime = egret.getTimer();
        };
        CommonDB.prototype.playOnce = function (cont) {
            if (cont === void 0) { cont = 1; }
            if (!dragonBones.WorldClock.clock.contains(this.armature)) {
                dragonBones.WorldClock.clock.add(this.armature);
            }
            this.armature.animation.play(this.anim, this.isloop ? 0 : cont);
        };
        CommonDB.prototype.play = function () {
            if (!dragonBones.WorldClock.clock.contains(this.armature)) {
                dragonBones.WorldClock.clock.add(this.armature);
            }
            this.armature.animation.play(this.anim, this.isloop ? 0 : 1);
        };
        CommonDB.prototype.playerAnimOnce = function (anim, cont) {
            if (cont === void 0) { cont = 1; }
            if (!dragonBones.WorldClock.clock.contains(this.armature)) {
                dragonBones.WorldClock.clock.add(this.armature);
            }
            // egret.log("播放================" + anim + "  " +this.isloop);
            this.armature.animation.play(anim, this.isloop ? 0 : cont);
        };
        CommonDB.prototype.playAnim = function (anim) {
            if (!dragonBones.WorldClock.clock.contains(this.armature)) {
                dragonBones.WorldClock.clock.add(this.armature);
            }
            this.armature.animation.play(anim, 0);
        };
        CommonDB.prototype.showFrame = function (anim, frame) {
            this.armature.animation.gotoAndStopByFrame(anim, frame);
        };
        CommonDB.prototype.playFromFrame = function (frame) {
            this.armature.animation.gotoAndStopByFrame(this.anim, frame);
            this.armature.animation.play(this.anim, 1);
        };
        CommonDB.prototype.playFromProgress = function (progress) {
            this.armature.animation.gotoAndPlayByProgress(this.anim, progress, 1);
        };
        CommonDB.prototype.showProgress = function (progress, anim) {
            if (anim === void 0) { anim = ""; }
            if (anim == "") {
                this.armature.animation.gotoAndStopByProgress(this.anim, progress);
            }
            else {
                this.armature.animation.gotoAndStopByProgress(anim, progress);
            }
        };
        CommonDB.prototype.addToStage = function () {
            dragonBones.WorldClock.clock.add(this.armature);
            this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeStage, this);
        };
        CommonDB.prototype.removeStage = function () {
            dragonBones.WorldClock.clock.remove(this.armature);
            this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeStage, this);
        };
        /**
         * 替换插槽图片。
         * @param slotName - 插槽名称。
         * @param textureName - 素材名称。
         */
        CommonDB.prototype.setNewSlot = function (slotName, textureName) {
            //方法1
            var slot = this.armature.getSlot(slotName);
            var b = new egret.Bitmap();
            b.texture = RES.getRes(textureName);
            b.x = slot.display.x;
            b.y = slot.display.y;
            b.anchorOffsetX = b.width / 2;
            b.anchorOffsetY = b.height / 2;
            slot.setDisplay(b);
        };
        CommonDB.prototype.stop = function () {
            dragonBones.WorldClock.clock.remove(this.armature);
        };
        return CommonDB;
    }(eui.UILayer));
    dliy.CommonDB = CommonDB;
    __reflect(CommonDB.prototype, "dliy.CommonDB");
})(dliy || (dliy = {}));
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
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        //装载Riddle json
                        game.RiddleData.instance.initRiddles();
                        //小游戏 全局映射
                        window["CharOptionButton"] = CharOptionButton;
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        console.log("result: ", result);
                        // this.startAnimation(result);
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        // this.startAnimation(result);
                        _a.sent();
                        platform.shop();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log("userInfo: ", userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("loadingUI")];
                    case 2:
                        _a.sent();
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, this.loadTheme()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 4:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        this.init();
        var button = this.button = new eui.Button();
        button.label = "Click!";
        button.horizontalCenter = 0;
        button.verticalCenter = 0;
        this.addChild(button);
        button.visible = false;
        // button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        dliy.DLIYMsgCenter.instance.sendMsg(game.GameNotice.LOGIN, null);
    };
    Main.prototype.init = function () {
        this.addChild(GameLayerManager.gameLayer());
        dliy.DLIYMsgCenter.instance.registerMsgHandle(game.GameNotice.LOGIN, new game.LoginCmdHandler());
        dliy.UIMng.instance.setUIProps(game.UI1.UIName, game.UI1.UIResGroup, game.UI1);
        dliy.UIMng.instance.setUIProps(game.UI2.UIName, game.UI2.UIResGroup, game.UI2);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main.prototype.startAnimation = function (result) {
        var _this = this;
        var parser = new egret.HtmlTextParser();
        var textflowArr = result.map(function (text) { return parser.parse(text); });
        this.textfield = new egret.TextField();
        this.addChild(this.textfield);
        this.textfield.x = 10;
        this.textfield.y = 10;
        var textfield = this.textfield;
        var count = -1;
        var change = function () {
            count++;
            if (count >= textflowArr.length) {
                count = 0;
            }
            var textFlow = textflowArr[count];
            // 切换描述内容
            // Switch to described content
            textfield.textFlow = textFlow;
            var tw = egret.Tween.get(textfield);
            tw.to({ "alpha": 1 }, 200);
            tw.wait(2000);
            tw.to({ "alpha": 0 }, 200);
            tw.call(change, _this);
        };
        change();
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main.prototype.onButtonClick = function (e) {
        dliy.utils.Http.create()
            .success(this.onLoginSuc, this)
            .error(this.onLoginError, this)
            .dataFormat(egret.URLLoaderDataFormat.TEXT)
            .get("http://res.online.9aiyouxi.com/gamedata.json");
    };
    Main.prototype.onLoginSuc = function (data) {
        this.button.visible = false;
        dliy.DLIYMsgCenter.instance.sendMsg(game.GameNotice.LOGIN, data);
    };
    Main.prototype.onLoginError = function () {
        // 需要自己实现
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.getLocalStore = function (key) {
        return;
    };
    DebugPlatform.prototype.setLocalStore = function (key, value) {
    };
    DebugPlatform.prototype.removeLocalItem = function (key) {
    };
    DebugPlatform.prototype.shop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.shareAppMessage = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    DebugPlatform.prototype.onWxShow = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
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
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var dliy;
(function (dliy) {
    /**
     * 不适用MVC  直接使用一个简单的消息通知处理
     */
    var DLIYMsgCenter = (function () {
        function DLIYMsgCenter() {
            this.msgHandlerMap = {};
            this.msgFuncMap = {};
        }
        Object.defineProperty(DLIYMsgCenter, "instance", {
            get: function () {
                if (!DLIYMsgCenter._instance)
                    DLIYMsgCenter._instance = new DLIYMsgCenter();
                return DLIYMsgCenter._instance;
            },
            enumerable: true,
            configurable: true
        });
        DLIYMsgCenter.prototype.registerMsgHandle = function (msg, msgHandler) {
            this.msgHandlerMap[msg] = msgHandler;
        };
        DLIYMsgCenter.prototype.registerMsgFunc = function (msg, msgFunc, msgFuncCaller) {
            this.msgFuncMap[msg] = { f: msgFunc, c: msgFuncCaller };
        };
        DLIYMsgCenter.prototype.removeMsg = function (msg) {
            if (this.msgHandlerMap[msg]) {
                this.msgHandlerMap[msg] = null;
                delete this.msgHandlerMap[msg];
            }
            if (this.msgFuncMap[msg]) {
                this.msgFuncMap[msg] = null;
                delete this.msgFuncMap[msg];
            }
        };
        DLIYMsgCenter.prototype.sendMsg = function (msg, data) {
            try {
                if (this.msgHandlerMap[msg]) {
                    this.msgHandlerMap[msg].handle(msg, data);
                }
            }
            catch (e) {
                DLog.errorM('DLIYCenter', this, e);
            }
            try {
                if (this.msgFuncMap[msg]) {
                    var obj = this.msgFuncMap[msg];
                    if (obj && obj.f && obj.c) {
                        obj.f.call(obj.c, data);
                    }
                }
            }
            catch (e) {
                DLog.errorM('DLIYCenter', this, e);
            }
        };
        return DLIYMsgCenter;
    }());
    dliy.DLIYMsgCenter = DLIYMsgCenter;
    __reflect(DLIYMsgCenter.prototype, "dliy.DLIYMsgCenter");
})(dliy || (dliy = {}));
var CommonUtil;
(function (CommonUtil) {
    function RandomRange(min, max) {
        return (max - min) * Math.random() + min;
    }
    CommonUtil.RandomRange = RandomRange;
    function RandomRangeInt(min, max) {
        return Math.floor((max - min) * Math.random() + min);
    }
    CommonUtil.RandomRangeInt = RandomRangeInt;
    function shuffleArr(arr) {
        for (var i = 1; i < arr.length; i++) {
            var random = Math.floor(Math.random() * (i + 1));
            _a = [arr[random], arr[i]], arr[i] = _a[0], arr[random] = _a[1];
        }
        var _a;
    }
    CommonUtil.shuffleArr = shuffleArr;
    function TimeStampToDateHM(stamp) {
        var date = new Date(stamp);
        var min = "";
        if (date.getMinutes() / 10 < 1) {
            min = "0" + date.getMinutes();
        }
        else {
            min = date.getMinutes() + "";
        }
        return (date.getHours() + ":" + min);
    }
    CommonUtil.TimeStampToDateHM = TimeStampToDateHM;
    /**
     * 汉字长度2，字符长度1
     */
    function sizeOf(str) {
        var size = 0;
        if (str == null || str.length == 0) {
            return size;
        }
        for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (/^[\u0000-\u00ff]$/.test(c)) {
                size += 1;
            }
            else {
                size += 2;
            }
        }
        return size;
    }
    CommonUtil.sizeOf = sizeOf;
    /**
     * 缩略字符串
     * @param 指定字符串
     * @param 超过len长度则缩略
     */
    function omittStr(str, len) {
        if (str == null || str.length == 0) {
            return str;
        }
        if (sizeOf(str) > len) {
            return (str.slice(0, len - 2) + "...");
        }
        return str;
    }
    CommonUtil.omittStr = omittStr;
    function base64ToUint8(base64Data) {
        var array = egret.Base64Util.decode(base64Data);
        var uint8 = new Uint8Array(array);
        return uint8;
    }
    CommonUtil.base64ToUint8 = base64ToUint8;
    function Uint8ArrayToString(fileData) {
        var dataString = "";
        for (var i = 0; i < fileData.length; i++) {
            dataString += String.fromCharCode(fileData[i]);
        }
        return dataString;
    }
    CommonUtil.Uint8ArrayToString = Uint8ArrayToString;
    function getSuffix(name) {
        var lastIdx = name.lastIndexOf(".");
        var suffix = "";
        if (lastIdx > -1) {
            suffix = name.substring(lastIdx + 1);
            return suffix;
        }
        else {
            return null;
        }
    }
    CommonUtil.getSuffix = getSuffix;
})(CommonUtil || (CommonUtil = {}));
var DLog = (function () {
    function DLog() {
    }
    DLog.getNowDate = function () {
        var date = new Date();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month <= 9) {
            month = "0" + month;
        }
        if (strDate <= 9) {
            strDate = "0" + strDate;
        }
        return date.getFullYear() + "-" + month + "-" + strDate + " "
            + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
    DLog.logMsg = function (msg) {
        if (true) {
            console.log(msg);
        }
    };
    DLog.log = function (tObj) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        var type = egret.getQualifiedClassName(tObj);
        var outputMsg = "[" + type + "] " + DLog.getNowDate() + " " + msg.join(',');
        DLog.logMsg(outputMsg);
    };
    DLog.logM = function (moduleName, tObj) {
        var msg = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            msg[_i - 2] = arguments[_i];
        }
        var type = egret.getQualifiedClassName(tObj);
        var outputMsg = "[" + moduleName + "|" + type + "] " + DLog.getNowDate() + " " + msg.join(',');
        DLog.logMsg(outputMsg);
    };
    DLog.errorM = function (moduleName, tObj, e) {
        var msg = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            msg[_i - 3] = arguments[_i];
        }
        var type = egret.getQualifiedClassName(tObj);
        var outputMsg = "[" + moduleName + "|" + type + "] " + DLog.getNowDate() + " " + e + msg.join(',');
        DLog.logMsg(outputMsg);
    };
    DLog.error = function (tObj, e) {
        var msg = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            msg[_i - 2] = arguments[_i];
        }
        var type = egret.getQualifiedClassName(tObj);
        var outputMsg = "[" + type + "] " + DLog.getNowDate() + " " + e + msg.join(',');
        DLog.logMsg(outputMsg);
    };
    return DLog;
}());
__reflect(DLog.prototype, "DLog");
/**
  * 游戏配置文件
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 存放游戏的配置数据
  * 比如：游戏界面尺寸、分享随机百分比、获取系统数据
  */
var GameConfig;
(function (GameConfig) {
    //是否在线
    GameConfig.isOnLine = false;
    //全局字体颜色表--可以扩展
    GameConfig.TextColors = {
        white: 0xFFFFFF,
        milkWhite: 0xfbf1af,
        grayWhite: 0xceb6a2,
        yellow: 0xffff00,
        lightYellow: 0xffd375,
        orangeYellow: 0xff9900,
        red: 0xf11300,
        green: 0x00e500,
        blue: 0x1a94d7,
        grayBlue: 0x2f5177,
        purple: 0xe938f2,
        pink: 0xFF3030,
        black: 0x2e2d2d,
        golden: 0xFFD700 //金色
    };
    //全局字体大小表--可以扩展
    GameConfig.LabelFontSize = {
        littleSize: 12,
        middleSize: 18,
        normalSize: 24,
        bigSize: 36 //大型字体大小
    };
    //是不是微信浏览
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        var microStr = "" + ua.match(/MicroMessenger/i);
        if (microStr == "null") {
            return false;
        }
        else if (microStr == "micromessenger") {
            return true;
        }
    }
    GameConfig.isWeiXin = isWeiXin;
    //是不是大屏
    function isBigScreen() {
        return (document.body.clientHeight / document.body.clientWidth > 1.32);
    }
    GameConfig.isBigScreen = isBigScreen;
    //获得浏览器类型 pc android ios -- 可扩展为其他 如 微信、qqzone、qq、微博、校内、facebook
    function systemType() {
        var ua = window.navigator.userAgent.toLowerCase();
        var microStr = "" + ua.match(/MicroMessenger/i);
        if (("" + ua.match(/windows nt/i)) == "windows nt") {
            return "windows";
        }
        else if (("" + ua.match(/iphone/i)) == "iphone") {
            return "ios";
        }
        else if (("" + ua.match(/android/i)) == "android") {
            return "android";
        }
        else if (("" + ua.match(/ipad/i)) == "ipad") {
            return "ipad";
        }
        else if (("" + ua.match(/linux/i)) == "linux") {
            return "linux";
        }
        else if (("" + ua.match(/mac/i)) == "mac") {
            return "mac";
        }
        else if (("" + ua.match(/ucbrower/i)) == "ucbrower") {
            return "ucbrower";
        }
        else {
            console.log("未知系统类型");
        }
    }
    GameConfig.systemType = systemType;
    //获得平台类型 如 微信、qqzone、qq、微博、校内、facebook
    function platformType() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (("" + ua.match(/micromessenger/i)) == "micromessenger") {
            return "micromessenger";
        }
        else if (("" + ua.match(/qzone/i)) == "qzone") {
            return "qzone";
        }
        else if (("" + ua.match(/weibo/i)) == "weibo") {
            return "weibo";
        }
        else if (("" + ua.match(/qq/i)) == "qq") {
            return "qq";
        }
        else if (("" + ua.match(/renren/i)) == "renren") {
            return "renren";
        }
        else if (("" + ua.match(/txmicroblog/i)) == "txmicroblog") {
            return "txmicroblog";
        }
        else if (("" + ua.match(/douban/i)) == "douban") {
            return "douban";
        }
        else {
            return "other";
        }
    }
    GameConfig.platformType = platformType;
    //当前舞台
    function curStage() {
        return egret.MainContext.instance.stage;
    }
    GameConfig.curStage = curStage;
    //当前游戏宽度
    function curWidth() {
        var width = egret.MainContext.instance.stage.stageWidth;
        if (width > 1624) {
            return 1624;
        }
        return width;
    }
    GameConfig.curWidth = curWidth;
    //当前游戏宽度
    function curHeight() {
        return egret.MainContext.instance.stage.stageHeight;
    }
    GameConfig.curHeight = curHeight;
})(GameConfig || (GameConfig = {}));
var dliy;
(function (dliy) {
    var HashMap = (function (_super) {
        __extends(HashMap, _super);
        function HashMap() {
            return _super.call(this) || this;
        }
        /**
         * 加入数据
         * @param key 键
         * @param value 值
         */
        HashMap.prototype.put = function (key, value) {
            this[key] = value;
        };
        /**
         * 获得数据
         * @param key 键
         */
        HashMap.prototype.get = function (key) {
            return this[key];
        };
        /**
         * 移除数据
         * @param key 键
         */
        HashMap.prototype.remove = function (key) {
            var value = this[key];
            if (value) {
                delete this[key];
            }
            return value;
        };
        /**
         * 是否存在
         * @param key 键
         */
        HashMap.prototype.contains = function (key) {
            return this[key] != null;
        };
        /**
         * 获得所有键值
         */
        HashMap.prototype.keys = function () {
            var keys = Object.keys(this);
            var index = keys.indexOf("$hashCode");
            if (index > -1) {
                keys.splice(index, 1);
            }
            return keys;
        };
        HashMap.prototype.sortIntKeys = function () {
            var keys = Object.keys(this);
            var index = keys.indexOf("$hashCode");
            if (index > -1) {
                keys.splice(index, 1);
            }
            var intKeys = new Array();
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var keyStr = keys_1[_i];
                intKeys.push(parseInt(keyStr));
            }
            intKeys.sort(function (a, b) {
                return a - b;
            });
            return intKeys;
        };
        HashMap.prototype.size = function () {
            return this.keys().length;
        };
        /**
         * 清空
         */
        HashMap.prototype.clear = function () {
            var keys = this.keys();
            var len = keys.length;
            for (var i = 0; i < len; i++) {
                this.remove(keys[i]);
            }
        };
        return HashMap;
    }(egret.HashObject));
    dliy.HashMap = HashMap;
    __reflect(HashMap.prototype, "dliy.HashMap");
})(dliy || (dliy = {}));
var dliy;
(function (dliy) {
    var utils;
    (function (utils) {
        var Http = (function () {
            function Http() {
                this.loader = new egret.URLLoader();
                this.httpReq = new egret.HttpRequest();
            }
            ;
            Http.create = function () {
                return new Http();
            };
            Http.prototype.success = function (handle, thisObj) {
                if (thisObj === void 0) { thisObj = null; }
                this.httpReq.addEventListener(egret.Event.COMPLETE, function (e) {
                    var loader = e.currentTarget;
                    DLog.log(this, "req success " + loader.response);
                    handle.call(thisObj, loader.response);
                }, thisObj);
                return this;
            };
            Http.prototype.error = function (handle, thisObj) {
                if (thisObj === void 0) { thisObj = null; }
                this.httpReq.addEventListener(egret.IOErrorEvent.IO_ERROR, handle, thisObj);
                return this;
            };
            Http.prototype.add = function (source) {
                if (!this.variables) {
                    this.variables = new egret.URLVariables();
                }
                this.variables.decode(source);
                return this;
            };
            Http.prototype.dataFormat = function (dataFormat) {
                // this.httpReq. = dataFormat;
                return this;
            };
            Http.prototype.get = function (url) {
                this.httpReq.timeout = 2000;
                this.httpReq.open(url);
                this.httpReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                this.httpReq.send();
                DLog.log(this, "request " + url);
            };
            Http.prototype.post = function (url) {
                var req = new egret.URLRequest(url);
                req.method = egret.URLRequestMethod.POST;
                this.variables && (req.data = this.variables);
                this.loader.load(req);
            };
            return Http;
        }());
        utils.Http = Http;
        __reflect(Http.prototype, "dliy.utils.Http");
    })(utils = dliy.utils || (dliy.utils = {}));
})(dliy || (dliy = {}));
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
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.initUI();
        this.bg = new egret.Bitmap(RES.getRes("main_bg_png"));
        this.bg.x = this.bg.y = 0;
        this.addChild(this.bg);
        this.prgsBar1 = new eui.Image(RES.getRes("loading_bar1_png"));
        this.prgsBar2 = new eui.Image(RES.getRes("loading_bar2_png"));
        this.prgsBar1.width = 301;
        this.prgsBar1.height = 27;
        this.prgsBar2.width = 563;
        this.prgsBar2.height = 27;
        this.prgsBar1.scale9Grid = new egret.Rectangle(13, 0, 277, 27);
        // this.prgsBar2.horizontalCenter = this.prgsBar2.verticalCenter = 0
        this.prgsBar2.x = (this.width - this.prgsBar2.width) / 2;
        this.prgsBar2.y = this.height / 2 + 300;
        this.prgsBar1.x = this.prgsBar2.x;
        this.prgsBar1.y = this.prgsBar2.y;
        this.addChild(this.prgsBar2);
        this.addChild(this.prgsBar1);
        this.textField.textAlign = "center";
        this.textField.width = 180;
        this.textField.height = 30;
        this.textField.x = this.width / 2 - this.textField.width / 2;
        this.textField.y = this.prgsBar2.y;
        this.textField.textColor = 0xffffff;
        this.textField.fontFamily = "Microsoft YaHei";
        this.textField.size = 20;
        this.addChild(this.textField);
    };
    LoadingUI.prototype.initUI = function () {
        this.width = GameConfig.curWidth();
        this.height = GameConfig.curHeight();
        this.textField = new egret.TextField();
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = Math.ceil((current / total) * 100).toString() + "%";
        this.prgsBar1.width = 27 + (current / total) * (563 - 27);
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var dliy;
(function (dliy) {
    /**
     * 龙骨动画包装类
     */
    var DragonAnim = (function (_super) {
        __extends(DragonAnim, _super);
        function DragonAnim() {
            var _this = _super.call(this) || this;
            _this.anim = "";
            _this.aligntype = "";
            _this.isloop = true;
            _this.playOnStage = true;
            _this.isTouch = true;
            _this.defaultPlayAnim = "animation";
            _this.listenerArr = [];
            _this.cacheDBMap = {};
            _this.isTouchByGroup = false;
            _this._waitToPlay = false;
            _this.offsetX = 0;
            _this.offsetY = 0;
            _this.animScale = 1;
            _this.frameBinds = [];
            return _this;
        }
        DragonAnim.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
        };
        DragonAnim.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.commonDB = new dliy.CommonDB(this.anim + "_ske_dbbin", this.anim + "_tex_json", this.anim + "_tex_png", this.defaultPlayAnim, this.isloop, this.playOnStage, this.isTouch);
            this.addChild(this.commonDB);
            this.initCommonDb();
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkTrueArea, this);
        };
        DragonAnim.prototype.initCommonDb = function () {
            if (this.aligntype == "bottom") {
                this.commonDB.y = this.height;
            }
            else if (this.aligntype == "middle") {
                this.commonDB.y = this.height / 2 + this.offsetY;
            }
            if (this.aligntype != 'origin') {
                this.commonDB.x = this.width / 2 + this.offsetX;
            }
            else {
                this.commonDB.x = this.width;
                this.commonDB.y = this.height;
            }
            if (this.aligntype == 'zero') {
                this.commonDB.x = 0;
                this.commonDB.y = 0;
            }
            if (this.isTouchByGroup) {
                this.commonDB.touchEnabled = false;
                this.commonDB.touchChildren = false;
                this.touchChildren = false;
            }
            this.commonDB.scaleX = this.commonDB.scaleY = this.animScale;
        };
        DragonAnim.prototype.changeAnim = function (anim) {
            if (this.commonDB && this.commonDB.parent) {
                this.commonDB.parent.removeChild(this.commonDB);
            }
            this.anim = anim;
            this.commonDB = new dliy.CommonDB(this.anim + "_ske_dbbin", this.anim + "_tex_json", this.anim + "_tex_png", this.defaultPlayAnim, this.isloop, this.playOnStage, this.isTouch);
            this.addChild(this.commonDB);
            this.initCommonDb();
        };
        /**
         * 切换动画 并把之前的放入缓存，等待下次切换。
         * @param anim
         */
        DragonAnim.prototype.changeAnimWithCache = function (anim) {
            if (this.commonDB && this.commonDB.parent) {
                this.commonDB.parent.removeChild(this.commonDB);
                this.cacheDBMap[this.anim] = this.commonDB;
            }
            this.anim = anim;
            if (this.cacheDBMap[anim]) {
                this.commonDB = this.cacheDBMap[anim];
            }
            else {
                this.commonDB = new dliy.CommonDB(this.anim + "_ske_dbbin", this.anim + "_tex_json", this.anim + "_tex_png", this.defaultPlayAnim, this.isloop, this.playOnStage, this.isTouch);
            }
            this.addChild(this.commonDB);
            this.initCommonDb();
        };
        DragonAnim.prototype.checkTrueArea = function (e) {
            if (this.commonDB.animDisplay && this.commonDB.animDisplay.stage) {
                if (!this.commonDB.animDisplay.hitTestPoint(e.stageX, e.stageY, true)) {
                    e.stopImmediatePropagation();
                }
            }
        };
        DragonAnim.prototype.playerOnce = function (listener, target, anim) {
            if (listener === void 0) { listener = null; }
            if (target === void 0) { target = null; }
            if (anim === void 0) { anim = null; }
            if (this.commonDB) {
                this.setLoop(false);
                if (listener) {
                    this.listenerArr.push({ listener: listener, target: target });
                    if (!this.commonDB.armature.hasEventListener(dragonBones.AnimationEvent.COMPLETE)) {
                        this.commonDB.armature.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAnimComplete, this);
                    }
                }
                if (anim != null) {
                    this.commonDB.playerAnimOnce(anim);
                }
                else {
                    this.commonDB.playOnce();
                }
            }
        };
        DragonAnim.prototype.playerTimes = function (listener, target, count, anim) {
            if (listener === void 0) { listener = null; }
            if (target === void 0) { target = null; }
            if (count === void 0) { count = 1; }
            if (anim === void 0) { anim = null; }
            if (this.commonDB) {
                if (listener) {
                    this.listenerArr.push({ listener: listener, target: target });
                    if (!this.commonDB.armature.hasEventListener(dragonBones.AnimationEvent.COMPLETE)) {
                        this.commonDB.armature.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAnimComplete, this);
                    }
                }
                if (anim != null) {
                    this.commonDB.playerAnimOnce(anim, count);
                }
                else {
                    this.commonDB.playOnce(count);
                }
            }
        };
        DragonAnim.prototype.onAnimComplete = function () {
            for (var _i = 0, _a = this.listenerArr; _i < _a.length; _i++) {
                var d = _a[_i];
                d.listener.call(d.target);
            }
            this.listenerArr = [];
            this.commonDB.armature.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAnimComplete, this);
        };
        DragonAnim.prototype.playerAnimOnce = function (anim, count) {
            if (count === void 0) { count = 1; }
            if (this.commonDB)
                this.commonDB.playerAnimOnce(anim);
        };
        DragonAnim.prototype.playAnim = function (anim) {
            if (this.commonDB)
                this.commonDB.playAnim(anim);
        };
        DragonAnim.prototype.play = function () {
            if (this.commonDB) {
                this.commonDB.play();
            }
        };
        DragonAnim.prototype.showFrame = function (anim, frame) {
            if (this.commonDB)
                this.commonDB.showFrame(anim, frame);
        };
        DragonAnim.prototype.playFromFrame = function (frame) {
            if (this.commonDB)
                this.commonDB.playFromFrame(frame);
        };
        DragonAnim.prototype.playFromProgress = function (progress) {
            if (this.commonDB)
                this.commonDB.playFromProgress(progress);
        };
        DragonAnim.prototype.showProgress = function (progress, anim) {
            if (anim === void 0) { anim = ""; }
            if (this.commonDB)
                this.commonDB.showProgress(progress, anim);
        };
        DragonAnim.prototype.getDB = function () {
            return this.commonDB;
        };
        DragonAnim.prototype.bindFrameHandler = function (func, funcObj, frame) {
            function onFrame(e) {
                if (e.frameLabel == frame) {
                    func.call(funcObj);
                }
            }
            this.commonDB.armature.addEventListener(dragonBones.EgretEvent.FRAME_EVENT, onFrame, this);
            this.frameBinds.push(onFrame);
        };
        DragonAnim.prototype.stop = function () {
            if (this.commonDB) {
                this.commonDB.stop();
                this.clearAllListener();
            }
        };
        DragonAnim.prototype.setLoop = function (v) {
            this.isloop = v;
            if (this.commonDB)
                this.commonDB.isloop = v;
        };
        DragonAnim.prototype.clearAllListener = function () {
            this.listenerArr = [];
            this.commonDB.armature.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAnimComplete, this);
            for (var _i = 0, _a = this.frameBinds; _i < _a.length; _i++) {
                var f = _a[_i];
                this.commonDB.armature.removeEventListener(dragonBones.EgretEvent.FRAME_EVENT, f, this);
            }
        };
        return DragonAnim;
    }(eui.Component));
    __reflect(DragonAnim.prototype, "DragonAnim", ["eui.UIComponent", "egret.DisplayObject"]);
})(dliy || (dliy = {}));
/**
  * 游戏容器类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * EgerPro显示对象层级
  * Main-GameScene（sceneLayer、mainLayer、popLayer、effectLayer、maskLayer、loadLayer）
  *
  */
var GameLayerManager = (function (_super) {
    __extends(GameLayerManager, _super);
    //构造方法
    function GameLayerManager() {
        var _this = _super.call(this) || this;
        // 场景层 如 战场、主城、副本战场之类的
        _this.loginLayer = new eui.UILayer();
        // 主UI层 如 底部功能栏
        _this.mainLayer = new eui.UILayer();
        // 加载遮罩层 场景切换的时候加载资源UI
        _this.battleLayer = new eui.UILayer();
        // 弹窗层 如 设置、背包、装备之类的
        _this.panelLayer = new eui.UILayer();
        // 特效层 如 闪烁、飘字之类的
        _this.effectLayer = new eui.UILayer();
        // 通讯遮罩层 和服务器通讯UI
        _this.maskLayer = new eui.UILayer();
        // 加载遮罩层 场景切换的时候加载资源UI
        _this.loadLayer = new eui.UILayer();
        _this.init();
        return _this;
    }
    //游戏容器管理器单例
    GameLayerManager.gameLayer = function () {
        if (!this._instance)
            this._instance = new GameLayerManager();
        return this._instance;
    };
    //初始化场景类
    GameLayerManager.prototype.init = function () {
        this.touchThrough = true;
        this.loginLayer.touchThrough = true;
        this.mainLayer.touchThrough = true;
        this.panelLayer.touchThrough = true;
        this.effectLayer.touchThrough = true;
        this.maskLayer.touchThrough = true;
        this.loadLayer.touchThrough = true;
        this.battleLayer.touchThrough = true;
        this.addChild(this.loginLayer);
        this.addChild(this.mainLayer);
        this.addChild(this.battleLayer);
        this.addChild(this.panelLayer);
        this.addChild(this.effectLayer);
        this.addChild(this.maskLayer);
        this.addChild(this.loadLayer);
    };
    GameLayerManager.prototype.removePanelLayer = function () {
        this.panelLayer.removeChildren();
    };
    return GameLayerManager;
}(eui.UILayer));
__reflect(GameLayerManager.prototype, "GameLayerManager");
/**
  * 面板弹出管理类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 面板弹出的管理类
  */
var PopUpManager;
(function (PopUpManager) {
    /**
    * 添加面板方法
    * panel       		面板
    * dark        		背景是否变黑
    * popUpWidth      	指定弹窗宽度，定位使用
    * popUpHeight      	指定弹窗高度，定位使用
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    function addPopUp(panel, dark, popUpWidth, popUpHeight, effectType, isAlert) {
        if (dark === void 0) { dark = false; }
        if (popUpWidth === void 0) { popUpWidth = 0; }
        if (popUpHeight === void 0) { popUpHeight = 0; }
        if (effectType === void 0) { effectType = 0; }
        if (isAlert === void 0) { isAlert = false; }
        if (GameLayerManager.gameLayer().panelLayer.contains(panel)) {
            return;
        }
        panel.scaleX = 1;
        panel.scaleY = 1;
        panel.x = 0;
        panel.y = 0;
        panel.alpha = 1;
        if (dark) {
            this.darkSprite = new egret.Sprite();
            this.darkSprite.graphics.clear();
            this.darkSprite.graphics.beginFill(0x000000, 0.5);
            this.darkSprite.graphics.drawRect(0, 0, GameConfig.curWidth(), GameConfig.curHeight());
            this.darkSprite.graphics.endFill();
            this.darkSprite.width = GameConfig.curWidth();
            this.darkSprite.height = GameConfig.curHeight();
            panel["dark"] = this.darkSprite;
            // if(!GameLayerManager.gameLayer().panelLayer.contains(this.darkSprite)){
            GameLayerManager.gameLayer().panelLayer.addChild(this.darkSprite);
            // }
            this.darkSprite.touchEnabled = true;
            egret.Tween.get(this.darkSprite).to({ alpha: 1 }, 150);
            this.darkSprite.visible = true;
        }
        GameLayerManager.gameLayer().panelLayer.addChild(panel);
        GameConfig.curPanel = panel;
        if (popUpWidth != 0) {
            panel.x = GameConfig.curWidth() / 2 - popUpWidth / 2;
            panel.y = GameConfig.curHeight() / 2 - popUpHeight / 2;
        }
        else {
            popUpWidth = panel.width;
            popUpHeight = panel.height;
        }
        if (panel["title"] != null) {
            panel["title"].alpha = 0;
            panel["title"].scaleX = 0.5;
            panel["title"].scaleY = 0.5;
            egret.Tween.get(panel["title"]).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 400, egret.Ease.backOut);
        }
        //以下是弹窗动画
        var leftX = GameConfig.curWidth() / 2 - popUpWidth / 2;
        var upY = GameConfig.curHeight() / 2 - popUpHeight / 2;
        switch (effectType) {
            case 0:
                break;
            case 1:
                panel.alpha = 0;
                panel.scaleX = 0.5;
                panel.scaleY = 0.5;
                panel.x = panel.x + popUpWidth / 4;
                panel.y = panel.y + popUpHeight / 4;
                egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 350, egret.Ease.backOut);
                break;
            case 2:
                panel.alpha = 0;
                panel.scaleX = 0.5;
                panel.scaleY = 0.5;
                panel.x = panel.x + popUpWidth / 4;
                panel.y = panel.y + popUpHeight / 4;
                egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 600, egret.Ease.elasticOut);
                break;
            case 3:
                if (isAlert) {
                    panel.x = -popUpWidth;
                    egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.x = -popUpWidth;
                    egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 4:
                if (isAlert) {
                    panel.x = popUpWidth;
                    egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.x = popUpWidth;
                    egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 5:
                if (isAlert) {
                    panel.y = -popUpHeight;
                    egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.y = -popUpHeight;
                    egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 6:
                if (isAlert) {
                    panel.y = GameConfig.curHeight();
                    egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.y = popUpHeight;
                    egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            default:
                break;
        }
    }
    PopUpManager.addPopUp = addPopUp;
    /**
    * 移除面板方法
    * panel       		面板
    * effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    function removePopUp(panel, effectType) {
        if (effectType === void 0) { effectType = 0; }
        var onComplete = function () {
            if (GameLayerManager.gameLayer().panelLayer.contains(panel["dark"])) {
                GameLayerManager.gameLayer().panelLayer.removeChild(panel["dark"]);
            }
        };
        if (panel["dark"] != null) {
            egret.Tween.get(panel["dark"]).to({ alpha: 0 }, 100).call(onComplete, this);
        }
        var remove = function () {
            //以下是弹窗动画
            switch (effectType) {
                case 0:
                    break;
                case 1:
                    egret.Tween.get(panel).to({ alpha: 0, scaleX: 0, scaleY: 0, x: panel.x + panel.width / 2, y: panel.y + panel.height / 2 }, 300);
                    break;
                case 2:
                    break;
                case 3:
                    egret.Tween.get(panel).to({ x: panel.width }, 500, egret.Ease.cubicOut);
                    break;
                case 4:
                    egret.Tween.get(panel).to({ x: -panel.width }, 500, egret.Ease.cubicOut);
                    break;
                case 5:
                    egret.Tween.get(panel).to({ y: panel.height }, 500, egret.Ease.cubicOut);
                    break;
                case 6:
                    egret.Tween.get(panel).to({ y: -panel.height }, 500, egret.Ease.cubicOut);
                    break;
                default:
                    break;
            }
            var waitTime = 500;
            if (effectType == 0) {
                waitTime = 0;
            }
            egret.setTimeout(function () {
                if (GameLayerManager.gameLayer().panelLayer.contains(panel)) {
                    GameLayerManager.gameLayer().panelLayer.removeChild(panel);
                }
                onComplete();
            }, this, waitTime);
        };
        if (panel["title"] != null) {
            egret.Tween.get(panel["title"]).to({
                alpha: 0, scaleX: 0.5, scaleY: 0.5, x: panel["title"].x +
                    panel["title"].width / 2, y: panel["title"].y + panel["title"].height / 2
            }, 80).call(function () {
                remove();
            });
        }
        else {
            remove();
        }
    }
    PopUpManager.removePopUp = removePopUp;
})(PopUpManager || (PopUpManager = {}));
var dliy;
(function (dliy) {
    var UIMng = (function () {
        function UIMng() {
            this.uiInstanceMap = {};
            this.uiResMap = {};
            this.uiClassMap = {};
        }
        Object.defineProperty(UIMng, "instance", {
            get: function () {
                if (!UIMng._instance) {
                    UIMng._instance = new UIMng();
                }
                return UIMng._instance;
            },
            enumerable: true,
            configurable: true
        });
        UIMng.prototype.setUIProps = function (uiName, uires, clazz) {
            this.uiResMap[uiName] = uires;
            this.uiClassMap[uiName] = clazz;
        };
        UIMng.prototype.showUI = function (uiName) {
            return __awaiter(this, void 0, void 0, function () {
                var ui, ui;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this.uiInstanceMap[uiName]) return [3 /*break*/, 2];
                            // 先加载资源
                            return [4 /*yield*/, RES.loadGroup(this.uiResMap[uiName], 0)];
                        case 1:
                            // 先加载资源
                            _a.sent();
                            ui = new this.uiClassMap[uiName];
                            this.uiInstanceMap[uiName] = ui;
                            PopUpManager.addPopUp(ui, false);
                            return [3 /*break*/, 3];
                        case 2:
                            ui = this.uiInstanceMap[uiName];
                            PopUpManager.addPopUp(ui, false);
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        UIMng.prototype.closeUI = function (uiName) {
            if (!this.uiInstanceMap[uiName]) {
                this.uiInstanceMap[uiName].close();
            }
        };
        return UIMng;
    }());
    dliy.UIMng = UIMng;
    __reflect(UIMng.prototype, "dliy.UIMng");
})(dliy || (dliy = {}));
var game;
(function (game) {
    var LoginCmdHandler = (function () {
        function LoginCmdHandler() {
        }
        LoginCmdHandler.prototype.handle = function (msg, data) {
            // 显示UI1
            dliy.UIMng.instance.showUI(game.UI1.UIName);
        };
        return LoginCmdHandler;
    }());
    game.LoginCmdHandler = LoginCmdHandler;
    __reflect(LoginCmdHandler.prototype, "game.LoginCmdHandler", ["dliy.IMsgHandler"]);
})(game || (game = {}));
var game;
(function (game) {
    var GameNotice = (function () {
        function GameNotice() {
        }
        GameNotice.LOGIN = "LOGIN";
        GameNotice.UI1_SHOW_MSG = "UI1_SHOW_MSG";
        GameNotice.REFRESH_REMAIN = "REFRESH_REMAIN";
        GameNotice.PLUS_REMAIN = "PLUS_REMAIN";
        GameNotice.CHAR_SELECT_TAP = "CHAR_SELECT_TAP";
        GameNotice.CHAR_CANCEL_TAP = "CHAR_CANCEL_TAP";
        return GameNotice;
    }());
    game.GameNotice = GameNotice;
    __reflect(GameNotice.prototype, "game.GameNotice");
})(game || (game = {}));
// TypeScript file
var game;
(function (game) {
    var RiddleData = (function () {
        function RiddleData() {
            this.REMAIN = 10;
        }
        Object.defineProperty(RiddleData, "instance", {
            get: function () {
                if (this._instance == null) {
                    this._instance = new RiddleData();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        RiddleData.prototype.initRiddles = function () {
            this.riddleData = new Array();
            this.riddleData = RES.getRes("riddles_json");
            this.riddleNum = this.riddleData.length;
            this.randomCharArr = '';
            for (var i = 0; i < this.riddleData.length; i++) {
                var char = this.riddleData[i].answer[0];
                this.randomCharArr += char;
            }
        };
        RiddleData.prototype.resetRemain = function () {
            platform.removeLocalItem("remain");
            platform.setLocalStore("remain", this.REMAIN);
            dliy.DLIYMsgCenter.instance.sendMsg(game.GameNotice.REFRESH_REMAIN, null);
        };
        RiddleData.prototype.shuffleSerial = function () {
            var length = this.riddleNum;
            this.serialArr = new Array();
            //得到顺序序号数组
            for (var i = 0; i < length; i++) {
                this.serialArr.push(i);
            }
            CommonUtil.shuffleArr(this.serialArr);
            console.log(this.serialArr);
        };
        RiddleData.prototype.getShuffledRiddle = function (ranRidIdx) {
            return new Riddle(this.riddleData[ranRidIdx].question, this.riddleData[ranRidIdx].tip, this.riddleData[ranRidIdx].answer, ranRidIdx);
        };
        return RiddleData;
    }());
    game.RiddleData = RiddleData;
    __reflect(RiddleData.prototype, "game.RiddleData");
    ;
    var Riddle = (function () {
        function Riddle(q, t, a, idx) {
            this.question = q;
            this.tip = t;
            this.answer = a;
            this.idx = idx;
            console.log(this);
        }
        return Riddle;
    }());
    game.Riddle = Riddle;
    __reflect(Riddle.prototype, "game.Riddle");
    var SaveData = (function () {
        function SaveData(remain, ridIdx, isAns) {
            this.remain = remain;
            this.riddleIdx = ridIdx;
            this.isAnswered = isAns;
        }
        SaveData.save = function (remain, ridIdx, isAns) {
            var sData = new SaveData(remain, ridIdx, isAns);
            platform.setLocalStore("save", JSON.stringify(sData));
        };
        SaveData.load = function () {
            var lData = platform.getLocalStore("save");
            if (lData == null || lData == "") {
                return null;
            }
            else {
                lData = JSON.parse(lData);
                return new SaveData(lData.remain, lData.riddleIdx, lData.isAnswered);
            }
        };
        return SaveData;
    }());
    game.SaveData = SaveData;
    __reflect(SaveData.prototype, "game.SaveData");
})(game || (game = {}));
var CharOptionButton = (function (_super) {
    __extends(CharOptionButton, _super);
    function CharOptionButton() {
        var _this = _super.call(this) || this;
        _this.charLabel = new eui.Label();
        _this.isUp = false;
        _this.skinName = "resource/eui_skins/ui1/CharButtonSkin.exml";
        return _this;
    }
    CharOptionButton.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    /**
     * type:: 0: 下方选项  1: 上方已选
     */
    CharOptionButton.prototype.create = function (char, type) {
        var _this = this;
        if (type == 0) {
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                dliy.DLIYMsgCenter.instance.sendMsg(game.GameNotice.CHAR_SELECT_TAP, _this.char);
            }, this);
        }
        else if (type == 1) {
            //不绑定了，在UI1里绑
        }
        this.char = char;
        this.charLabel.text = char;
        this.height = this.width = 80;
        this.addChild(this.charLabel);
        this.charLabel.size = 33;
        this.charLabel.fontFamily = "Microsoft YaHei";
        this.charLabel.textColor = 0x715105;
        this.charLabel.textAlign = "center";
        this.charLabel.verticalAlign = "middle";
        this.charLabel.horizontalCenter = this.charLabel.verticalCenter = 0;
    };
    return CharOptionButton;
}(eui.Button));
__reflect(CharOptionButton.prototype, "CharOptionButton");
var ToastAnim = (function (_super) {
    __extends(ToastAnim, _super);
    function ToastAnim() {
        var _this = _super.call(this) || this;
        _this.TIME = 800;
        _this.skinName = "resource/eui_skins/common/ToastAnimUISkin.exml";
        return _this;
    }
    ToastAnim.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    ToastAnim.showToast = function (animType) {
        if (ToastAnim.instance == null) {
            ToastAnim.instance = new ToastAnim();
        }
        GameLayerManager.gameLayer().effectLayer.addChild(ToastAnim.instance);
        ToastAnim.instance.animImage.source = animType;
        ToastAnim.instance.updateToast();
        var p = ToastAnim.instance.effectExec();
        return p;
    };
    ToastAnim.prototype.updateToast = function () {
        this.animImage.width = this.animImage.texture.textureWidth;
        this.animImage.height = this.animImage.texture.textureHeight;
        this.animImage.anchorOffsetX = this.animImage.width / 2;
        this.animImage.anchorOffsetY = this.animImage.height / 2;
        this.animImage.horizontalCenter = this.animImage.verticalCenter = 0;
        this.horizontalCenter = 0;
        this.verticalCenter = 0;
    };
    ToastAnim.prototype.effectExec = function () {
        var self = this;
        return new Promise(function (resolve) {
            self.animImage.alpha = 0.5;
            self.animImage.scaleX = self.animImage.scaleY = 0.5;
            egret.Tween.get(self.animImage)
                .to({ alpha: 1, scaleX: 1.2, scaleY: 1.2 }, 200)
                .to({ alpha: 1, scaleX: 0.95, scaleY: 0.95 }, 100)
                .to({ alpha: 1, scaleX: 1, scaleY: 1 }, 100)
                .wait(self.TIME).to({ alpha: 0 }, 200)
                .call(function () {
                self.removeToast();
                resolve();
            }, self);
        });
    };
    ToastAnim.prototype.removeToast = function () {
        if (GameLayerManager.gameLayer().effectLayer.contains(this)) {
            GameLayerManager.gameLayer().effectLayer.removeChild(this);
        }
    };
    return ToastAnim;
}(eui.Component));
__reflect(ToastAnim.prototype, "ToastAnim", ["eui.UIComponent", "egret.DisplayObject"]);
var Anim_Type = (function () {
    function Anim_Type() {
    }
    Anim_Type.bingo = "main_img_right_png";
    Anim_Type.wrong_answer = "main_img_wrong_png";
    return Anim_Type;
}());
__reflect(Anim_Type.prototype, "Anim_Type");
var ToastUI = (function (_super) {
    __extends(ToastUI, _super);
    function ToastUI() {
        var _this = _super.call(this) || this;
        _this.time = 1500;
        _this.skinName = "resource/eui_skins/common/ToastUISkin.exml";
        return _this;
    }
    ToastUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    ToastUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ToastUI.showToast = function (msg) {
        if (ToastUI.instance == null) {
            ToastUI.instance = new ToastUI();
        }
        ToastUI.instance.message = msg;
        ToastUI.instance.updateToast();
        ToastUI.instance.effectExec();
    };
    ToastUI.prototype.updateToast = function () {
        this.horizontalCenter = 0;
        this.verticalCenter = 0;
        this.toastLabel.text = this.message;
    };
    ToastUI.prototype.effectExec = function () {
        GameLayerManager.gameLayer().effectLayer.addChild(this);
        this.alpha = 0;
        egret.Tween.get(this).to({ alpha: 0.8 }, 100).wait(this.time).to({ alpha: 0 }, 100).call(this.removeToast, this);
    };
    ToastUI.prototype.removeToast = function () {
        if (GameLayerManager.gameLayer().effectLayer.contains(this)) {
            GameLayerManager.gameLayer().effectLayer.removeChild(this);
        }
    };
    return ToastUI;
}(eui.Component));
__reflect(ToastUI.prototype, "ToastUI", ["eui.UIComponent", "egret.DisplayObject"]);
var game;
(function (game) {
    var UI1 = (function (_super) {
        __extends(UI1, _super);
        function UI1() {
            var _this = _super.call(this) || this;
            _this.OPTION_NUM = 12;
            _this.SPACE = 15;
            _this.selectedNum = 0;
            _this.tt = 0;
            _this.skinName = "resource/eui_skins/ui1/UI1.exml";
            dliy.DLIYMsgCenter.instance.registerMsgFunc(game.GameNotice.UI1_SHOW_MSG, _this.showMsg, _this);
            dliy.DLIYMsgCenter.instance.registerMsgFunc(game.GameNotice.REFRESH_REMAIN, _this.showRemain, _this);
            dliy.DLIYMsgCenter.instance.registerMsgFunc(game.GameNotice.PLUS_REMAIN, _this.plusRemain, _this);
            dliy.DLIYMsgCenter.instance.registerMsgFunc(game.GameNotice.CHAR_SELECT_TAP, _this.addSelectedOption, _this);
            return _this;
        }
        Object.defineProperty(UI1, "UIName", {
            get: function () {
                return "game.UI1";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UI1, "UIResGroup", {
            get: function () {
                return "GameUI1";
            },
            enumerable: true,
            configurable: true
        });
        UI1.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            // 我需要明确的name
            instance.name = partName;
        };
        UI1.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.seeAnswerBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onAnswerTap, this);
            this.nextQstBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNextTap, this);
            this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShareTap, this);
            this.testBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTest, this);
            this.selectedChar0.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeSelectedOption, this);
            this.selectedChar1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeSelectedOption, this);
            this.selectedChar2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeSelectedOption, this);
            this.selectedChar3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.removeSelectedOption, this);
            this.selectedCharItemArr = [this.selectedChar0, this.selectedChar1, this.selectedChar2, this.selectedChar3];
            this.selectedCharBgArr = [this.selectedCharBg0, this.selectedCharBg1, this.selectedCharBg2, this.selectedCharBg3];
            this.touchableBtns = [this.selectedChar0, this.selectedChar1, this.selectedChar2, this.selectedChar3];
            this.touchableBtns1 = [this.nextQstBtn, this.seeAnswerBtn, this.shareBtn];
            // this.openUI2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openUI2tap, this);
            this.init();
            this.startGame();
        };
        UI1.prototype.init = function () {
            this.selectedChar0.visible = false;
            this.selectedChar1.visible = false;
            this.selectedChar2.visible = false;
            this.loadData();
            this.showRemain();
        };
        UI1.prototype.loadData = function () {
            var load = game.SaveData.load();
            if (load == null) {
                this.riddleIdx = Math.floor(Math.random() * game.RiddleData.instance.riddleNum);
                this.remainTimes = game.RiddleData.instance.REMAIN;
                this.isAnswered = false;
            }
            else {
                this.riddleIdx = load.riddleIdx;
                this.remainTimes = load.remain;
                this.isAnswered = load.isAnswered;
            }
        };
        UI1.prototype.startGame = function () {
            this.showNewRiddle();
            this.createCharOption();
            this.createSelectedPos();
            this.showOptions();
            this.clearAllSelected();
            this.enableAllBtns(true);
        };
        UI1.prototype.startNewRound = function () {
            if (this.remainTimes < 1) {
                //todo 结束
                console.log("次数用完");
                return;
            }
            this.riddleIdx = Math.floor(Math.random() * game.RiddleData.instance.riddleNum);
            this.showNewRiddle();
            this.createCharOption();
            this.showOptions();
            this.createSelectedPos();
            this.clearAllSelected();
            this.enableAllBtns(true);
            this.logSavedata();
            game.SaveData.save(this.remainTimes, this.riddleIdx, this.isAnswered);
        };
        UI1.prototype.showNewRiddle = function () {
            var riddleData = game.RiddleData.instance;
            this.riddle = riddleData.getShuffledRiddle(this.riddleIdx);
            var question = this.riddle.question;
            var tip = this.riddle.tip;
            var answer = this.riddle.answer;
            this.questionLabel.text = question;
            this.tipLabel.text = tip;
            this.answerLabel.text = answer;
            this.questionLabel.visible = true;
            this.tipLabel.visible = true;
            this.answerLabel.visible = false;
            this.isAnswered = false;
            this.answerLength = answer.length;
            this.showRemain();
        };
        UI1.prototype.createCharOption = function () {
            var riddleData = game.RiddleData.instance;
            this.optionCharArr = new Array();
            var answer = this.riddle.answer;
            for (var i = 0; i < answer.length; i++) {
                this.optionCharArr.push(answer[i]);
            }
            for (var i = 0; i < this.OPTION_NUM - answer.length; i++) {
                var ran = Math.floor(riddleData.riddleNum * Math.random());
                this.optionCharArr.push(riddleData.randomCharArr[ran]);
            }
            CommonUtil.shuffleArr(this.optionCharArr);
            console.log("-------打乱选项：" + this.optionCharArr);
        };
        UI1.prototype.showOptions = function () {
            this.optionGroup.removeChildren();
            for (var i = 0; i < this.OPTION_NUM; i++) {
                var optionItem = new CharOptionButton();
                optionItem.create(this.optionCharArr[i], 0);
                this.optionGroup.addChild(optionItem);
            }
        };
        UI1.prototype.createSelectedPos = function () {
            var space = this.SPACE;
            var itemWid = this.selectedCharBg0.width;
            var num = this.answerLength;
            for (var i = 0; i < 4; i++) {
                var item = this.selectedCharBgArr[i];
                if (i < num) {
                    item.visible = true;
                }
                else {
                    item.visible = false;
                }
                item.horizontalCenter = -(num - 1) * (space / 2 + itemWid / 2) + i * (space + itemWid);
            }
        };
        UI1.prototype.addSelectedOption = function (data) {
            //判断选中数
            if (this.selectedNum > this.answerLength) {
                return;
            }
            this.addChar(data);
            if (this.selectedNum == this.answerLength) {
                this.checkSelected();
            }
        };
        UI1.prototype.addChar = function (char) {
            var space = this.SPACE;
            var itemWid = this.selectedChar0.width;
            var num = this.answerLength;
            for (var i = 0; i < 4; i++) {
                var item = this.selectedCharItemArr[i];
                item.horizontalCenter = -(num - 1) * (space / 2 + itemWid / 2) + i * (space + itemWid);
                if (i < num) {
                    if (!item.isUp) {
                        item.visible = true;
                        item.isUp = true;
                        item.create(char, 1);
                        this.selectedNum++;
                        break;
                    }
                }
                else {
                    item.visible = false;
                }
            }
        };
        UI1.prototype.removeSelectedOption = function (event) {
            console.log(event.currentTarget);
            if (event.currentTarget instanceof CharOptionButton) {
                var item = event.currentTarget;
                item.isUp = false;
                item.visible = false;
                this.selectedNum--;
            }
        };
        UI1.prototype.checkSelected = function () {
            var _this = this;
            var result = "";
            for (var i = 0; i < this.answerLength; i++) {
                if (this.selectedCharItemArr[i].isUp) {
                    result += this.selectedCharItemArr[i].char;
                }
                else {
                    console.error("选中状态错误!!!!!!!!!!!!!!!!!!!!");
                }
            }
            this.enableAllBtns(false);
            if (result == this.riddle.answer) {
                console.log("答对了~~~");
                ToastAnim.showToast(Anim_Type.bingo).then(function () {
                    _this.startNewRound();
                    _this.clearAllSelected();
                    _this.enableAllBtns(true);
                });
            }
            else {
                console.log("答错了");
                ToastAnim.showToast(Anim_Type.wrong_answer).then(function () {
                    _this.clearAllSelected();
                    _this.enableAllBtns(true);
                });
            }
        };
        UI1.prototype.clearAllSelected = function () {
            for (var i = 0; i < 4; i++) {
                this.selectedCharItemArr[i].isUp = false;
                this.selectedCharItemArr[i].visible = false;
            }
            this.selectedNum = 0;
        };
        UI1.prototype.showRemain = function () {
            this.remainNumLabel.text = this.remainTimes + "";
        };
        UI1.prototype.plusRemain = function () {
            console.log("------plus remain");
            this.remainTimes += 2;
        };
        UI1.prototype.decreaseRemain = function () {
            if (this.remainTimes < 1) {
                //todo 结束
                console.log("次数用完");
                return;
            }
            this.remainTimes--;
        };
        UI1.prototype.onAnswerTap = function () {
            if (!this.isAnswered) {
                this.isAnswered = true;
                this.showAnswer();
                this.decreaseRemain();
                this.showRemain();
                game.SaveData.save(this.remainTimes, this.riddleIdx, this.isAnswered);
            }
            this.logSavedata();
        };
        UI1.prototype.onNextTap = function () {
            var now = egret.getTimer();
            if (now - this.tt < 800) {
                console.log("点击过于频繁");
                return;
            }
            else {
                this.tt = now;
                this.startNewRound();
            }
        };
        UI1.prototype.showAnswer = function () {
            // this.answerLabel.visible = true;
            var answer = this.riddle.answer;
            this.clearAllSelected();
            for (var i = 0; i < answer.length; i++) {
                this.addChar(answer.charAt(i));
            }
            for (var i = 0; i < this.touchableBtns.length; i++) {
                this.touchableBtns[i].touchEnabled = false;
            }
            for (var i = 0; i < this.optionGroup.numChildren; i++) {
                var item = this.optionGroup.getChildAt(i);
                if (item instanceof CharOptionButton) {
                    item.touchEnabled = false;
                }
            }
        };
        UI1.prototype.onShareTap = function () {
            var _this = this;
            platform.shareAppMessage();
            platform.onWxShow().then(function () {
                console.log("----------分享完成");
                _this.plusRemain();
                _this.showRemain();
            });
        };
        UI1.prototype.enableAllBtns = function (isEnable) {
            for (var i = 0; i < this.touchableBtns.length; i++) {
                this.touchableBtns[i].touchEnabled = isEnable;
            }
            for (var i = 0; i < this.touchableBtns1.length; i++) {
                this.touchableBtns[i].touchEnabled = isEnable;
            }
            for (var i = 0; i < this.optionGroup.numChildren; i++) {
                var item = this.optionGroup.getChildAt(i);
                if (item instanceof CharOptionButton) {
                    item.touchEnabled = isEnable;
                }
            }
        };
        //test
        UI1.prototype.openUI2tap = function () {
            dliy.UIMng.instance.showUI(game.UI2.UIName);
        };
        UI1.prototype.showMsg = function (data) {
            this.msgLabel.text = data;
        };
        UI1.prototype.onTest = function () {
            // platform.removeLocalItem("save");
            // this.init();
            // this.startGame();
            ToastAnim.showToast(Anim_Type.bingo);
        };
        UI1.prototype.logSavedata = function () {
            console.log("-----remain-----" + this.remainTimes);
            console.log("-----riddleIdex-----" + this.riddleIdx);
            console.log("-----isAnswered-----" + this.isAnswered);
        };
        return UI1;
    }(dliy.BaseUI));
    game.UI1 = UI1;
    __reflect(UI1.prototype, "game.UI1");
})(game || (game = {}));
var game;
(function (game) {
    var UI2 = (function (_super) {
        __extends(UI2, _super);
        function UI2() {
            var _this = _super.call(this) || this;
            _this.skinName = "resource/eui_skins/ui2/UI2.exml";
            return _this;
        }
        Object.defineProperty(UI2, "UIName", {
            get: function () {
                return "game.UI2";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UI2, "UIResGroup", {
            get: function () {
                return "GameUI2";
            },
            enumerable: true,
            configurable: true
        });
        UI2.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            // 我需要明确的name
            instance.name = partName;
        };
        UI2.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.sendMsg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsend, this);
        };
        UI2.prototype.onsend = function () {
            this.close();
            dliy.DLIYMsgCenter.instance.sendMsg(game.GameNotice.UI1_SHOW_MSG, "来自UI2的通知");
        };
        return UI2;
    }(dliy.BaseUI));
    game.UI2 = UI2;
    __reflect(UI2.prototype, "game.UI2");
})(game || (game = {}));

;window.Main = Main;