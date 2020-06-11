module dliy {
	export class UIMng {
		private static _instance: UIMng;
		public constructor() {
		}
		public static get instance(): UIMng {
			if (!UIMng._instance) {
				UIMng._instance = new UIMng();
			}
			return UIMng._instance;
		}

		private uiInstanceMap: { [key: string]: BaseUI } = {};
		private uiResMap: { [key: string]: string } = {};
		private uiClassMap: { [key: string]: any } = {};
		public setUIProps(uiName: string, uires: string, clazz: any) {
			this.uiResMap[uiName] = uires;
			this.uiClassMap[uiName] = clazz;
		}

		public async showUI(uiName: string) {
			if (!this.uiInstanceMap[uiName]) {
				// 先加载资源
				await RES.loadGroup(this.uiResMap[uiName], 0);
				let ui = new this.uiClassMap[uiName];
				this.uiInstanceMap[uiName] = ui;
				PopUpManager.addPopUp(ui, false);
			} else {
				let ui = this.uiInstanceMap[uiName];
				PopUpManager.addPopUp(ui, false);
			}
		}

		public closeUI(uiName: string) {
			if (!this.uiInstanceMap[uiName]) {
				this.uiInstanceMap[uiName].close();
			}
		}
	}
}