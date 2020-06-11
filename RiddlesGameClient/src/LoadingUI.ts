
class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private textField: egret.TextField;
    public bg: egret.Bitmap;
    public prgsBar1: eui.Image;
    public prgsBar2: eui.Image;

    private createView(): void {
        this.initUI();

        this.bg = new egret.Bitmap(RES.getRes("main_bg_png"));
        
        this.bg.x = this.bg.y = 0
        this.addChild(this.bg);

        this.prgsBar1 = new eui.Image(RES.getRes("loading_bar1_png"));
        this.prgsBar2 = new eui.Image(RES.getRes("loading_bar2_png"));
        this.prgsBar1.width = 301;
        this.prgsBar1.height = 27;
        this.prgsBar2.width = 563;
        this.prgsBar2.height = 27;
        this.prgsBar1.scale9Grid = new egret.Rectangle(13,0,277,27);
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


    }

    public initUI() {
        this.width = GameConfig.curWidth();
        this.height = GameConfig.curHeight();
        this.textField = new egret.TextField();
    }

    public onProgress(current: number, total: number): void {
        this.textField.text = Math.ceil((current / total) * 100).toString() + "%";
        this.prgsBar1.width = 27 + (current / total) * (563 - 27)
    }


}
