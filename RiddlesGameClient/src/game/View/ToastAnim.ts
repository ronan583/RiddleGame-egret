class ToastAnim extends eui.Component implements eui.UIComponent {
	public static instance: ToastAnim;
	public animImage: eui.Image;
	public TIME: number = 800;

	public toastLabel: eui.Label;
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/common/ToastAnimUISkin.exml";
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}

	public static showToast(animType: string): Promise<any> {
		if (ToastAnim.instance == null) {
			ToastAnim.instance = new ToastAnim();
		}
		GameLayerManager.gameLayer().effectLayer.addChild(ToastAnim.instance);
		ToastAnim.instance.animImage.source = animType;
		ToastAnim.instance.updateToast();
		let p = ToastAnim.instance.effectExec();
		return p;
	}

	public updateToast() {
		this.animImage.width = this.animImage.texture.textureWidth;
		this.animImage.height = this.animImage.texture.textureHeight;
		this.animImage.anchorOffsetX = this.animImage.width / 2;
		this.animImage.anchorOffsetY = this.animImage.height / 2;
		this.animImage.horizontalCenter = this.animImage.verticalCenter = 0;
		this.horizontalCenter = 0;
		this.verticalCenter = 0;
	}

	public effectExec(): Promise<any> {
		var self = this;
		return new Promise((resolve) => {
			self.animImage.alpha = 0.5;
			self.animImage.scaleX = self.animImage.scaleY = 0.5;
			egret.Tween.get(self.animImage)
				.to({ alpha: 1, scaleX: 1.2, scaleY: 1.2 }, 200)
				.to({ alpha: 1, scaleX: 0.95, scaleY: 0.95 }, 100)
				.to({ alpha: 1, scaleX: 1, scaleY: 1 }, 100)
				.wait(self.TIME).to({ alpha: 0 }, 200)
				.call(() => {
					self.removeToast();
					resolve();
				}, self);
		});
	}

	public removeToast() {
		if (GameLayerManager.gameLayer().effectLayer.contains(this)) {
			GameLayerManager.gameLayer().effectLayer.removeChild(this);
		}
	}
}

class Anim_Type {
	public static bingo = "main_img_right_png";
	public static wrong_answer = "main_img_wrong_png";
}