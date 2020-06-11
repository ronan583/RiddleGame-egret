module game {
	export class UI2 extends dliy.BaseUI {

		public constructor() {
			super();
			this.skinName = "resource/eui_skins/ui2/UI2.exml";
		}

		public static get UIName(): string {
			return "game.UI2";
		}

		public static get UIResGroup(): string {
			return "GameUI2";
		}

		private sendMsg: eui.Button;

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
			// 我需要明确的name
			instance.name = partName;
		}

		protected childrenCreated(): void {
			super.childrenCreated();
			this.sendMsg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onsend, this);
		}

		private onsend() {
			this.close();
			dliy.DLIYMsgCenter.instance.sendMsg(GameNotice.UI1_SHOW_MSG, "来自UI2的通知");
		}

	}
}