module game {
	export class StoreChooseUI extends dliy.BaseUI {
		public constructor() {
			super();
			this.skinName = "resource/eui_skins/game/StoreChooseUISkin.exml";
		}
		private backBtn: eui.Button;
		private cover0: eui.Image;
		private cover1: eui.Image;
		private cover2: eui.Image;
		private cover3: eui.Image;
		private cover4: eui.Image;
		private coverArr: eui.Image[];
		private info0: eui.Label;
		private info1: eui.Label;
		private info2: eui.Label;
		private info3: eui.Label;
		private info4: eui.Label;
		private infoArr: eui.Label[];
		private mask0: eui.Image;
		private mask1: eui.Image;
		private mask2: eui.Image;
		private mask3: eui.Image;
		private mask4: eui.Image;
		private maskArr: eui.Image[];
		private storeCover0: StoreCover;
		private storeCover1: StoreCover;
		private storeCover2: StoreCover;
		private storeCover3: StoreCover;
		private storeCover4: StoreCover;
		private storeArr;

		private testBtn: eui.Button;
		private testGrp: eui.Group;
		private expand0: eui.Button;
		private expand1: eui.Button;
		private expand2: eui.Button;
		private expand3: eui.Button;
		private expand4: eui.Button;
		private expandArr: eui.Button[];

		public static get UIName(): string {
			return "game.StoreChooseUI";
		}

		public static get UIResGroup(): string {
			return "GameStoreChooseUI";
		}

		private isCreated: boolean = false;
		protected childrenCreated() {
			super.childrenCreated();
			this.coverArr = [this.cover0, this.cover1, this.cover2, this.cover3, this.cover4];
			this.infoArr = [this.info0, this.info1, this.info2, this.info3, this.info4];
			this.maskArr = [this.mask0, this.mask1, this.mask2, this.mask3, this.mask4];
			this.expandArr = [this.expand0, this.expand1, this.expand2, this.expand3, this.expand4];
			this.storeArr = new Array<StoreCover>();
			this.testGrp.visible = false;
			this.testBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTest, this);
			for (let i = 0; i < 5; i++) {
				let store = new StoreCover();
				this.storeArr.push(store);
				store.cover = this.coverArr[i];
				store.info = this.infoArr[i];
				store.mask = this.maskArr[i];
				store.storeName = GameData.nameText[i];
				store.cover.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChooseStoreTap, this);
				//test 扩展词库接口
				this.expandArr[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExpand, this);
			}
			this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);
			this.isCreated = true;
			this.updateStoreCover();
		}

		protected onAddToStage() {
			if (this.isCreated) {
				this.updateStoreCover();
			}
		}

		private updateStoreCover() {
			console.log("------------add to stage");
			for (let i = 0; i < 5; i++) {
				let status = GameData.instance.statusArr[i];
				let store = this.storeArr[i];
				store.isUnlock = status.unlockNum > 0 ? true : false;
				store.mask.visible = !store.isUnlock;
				let num = status.unlockNum;
				let perc;
				if (status.unlockNum == status.totalNum) {
					perc = "(全)"
				} else if (status.unlockNum == 0) {
					perc = "";
				} else {
					perc = "(" + Math.floor(status.unlockNum / status.totalNum * 100) + "%)";
				}
				store.infoText = "词数" + num + perc;
				store.info.text = store.infoText;
			}
		}

		private onExpand(event){
			let obj = event.currentTarget;
			if(obj instanceof eui.Button){
				let idx = this.expandArr.indexOf(obj);
				GameData.instance.expandStore(GameData.nameText[idx]);
			}
			this.updateStoreCover();
			this.onTest();
		}

		private onChooseStoreTap(event) {
			let obj = event.currentTarget;
			if(obj instanceof eui.Image){
				let idx = this.coverArr.indexOf(obj);
				GameData.instance.currentStore = GameData.nameText[idx];
			}
			this.close();
			dliy.UIMng.instance.showUI(StartScene.UIName);
			dliy.DLIYMsgCenter.instance.sendMsg(GameNotice.SET_GAME_STORE, null);
		}

		private onBack(){
			this.close();
			dliy.UIMng.instance.showUI(StartScene.UIName);
		}

		private onTest(){
			this.testGrp.visible = !this.testGrp.visible;
		}
	}

	export class StoreCover {
		public cover: eui.Image;
		public info: eui.Label;
		public mask: eui.Image;
		public infoText: string;
		public storeName: string;
		public isUnlock: boolean;
	}
}