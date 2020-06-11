class CharOptionButton extends eui.Button {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/ui1/CharButtonSkin.exml"
	}
	public char: string;
	public charLabel: eui.Label = new eui.Label();
	public isUp: boolean = false;

	protected childrenCreated() {
		super.childrenCreated();
	}

	/**
	 * type:: 0: 下方选项  1: 上方已选
	 */
	public create(char: string, type: number) {
		if (type == 0) {
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				dliy.DLIYMsgCenter.instance.sendMsg(game.GameNotice.CHAR_SELECT_TAP, this.char);
			}, this);

		} else if (type == 1) {
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
	}
}
