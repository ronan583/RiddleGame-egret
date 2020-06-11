module game {
	export class StartScene extends dliy.BaseUI {
		public constructor() {
			super();
			this.skinName = "resource/eui_skins/game/StartSceneSkin.exml";
			dliy.DLIYMsgCenter.instance.registerMsgFunc(GameNotice.SET_GAME_STORE, this.initStore, this);
		}

		private backBtn: eui.Button;

		private titleImg: eui.Image;

		private startGrp: eui.Group;
		private currStore: eui.Image;
		private storeName: eui.Image;
		private startBtn: eui.Button;
		private changeBtn: eui.Button;
		private shareBtn: eui.Button;

		private gameGrp: eui.Group;
		private countdownGrp: eui.Group;
		private readyCountLabel: eui.BitmapLabel;
		private contentGrp: eui.Group;
		private contentLabel: eui.Label;
		private gameCountLabel: eui.Label;
		private bingoBtn: eui.Button;
		private skipBtn: eui.Button;

		private resultGrp: eui.Group;
		private againBtn: eui.Button;
		private totalRiddle: eui.BitmapLabel;
		private bingoRiddle: eui.BitmapLabel;
		private bingoPercent: eui.BitmapLabel;
		private congratLabel: eui.Label;

		private readyCountdown: CountdownTimer;
		private readyDownTime = 3;
		private gameCountdown: CountdownTimer;
		private gameDownTime = 99;

		private totalNum: number = 0;
		private shownNum: number = 0;
		private bingoNum: number = 0;
		private bingoPer: number = 0;


		private storeNamePath = {
			chengyu: "main_type_chengyu_png",
			film: "main_type_film_png",
			star: "main_type_star_png",
			plant: "main_type_plant_png",
			shuihu: "main_type_shuihu_png"
		}
		public currRiddleArr: Array<any>;

		public static get UIName(): string {
			return "game.StartScene";
		}

		public static get UIResGroup(): string {
			return "GameStartScene";
		}

		protected childrenCreated() {
			super.childrenCreated();
			this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGameTap, this);
			this.changeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeStoreTap, this);
			this.bingoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBingoTap, this);
			this.skipBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSkipTap, this);
			this.againBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGameTap, this);
			this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShareTap, this);
			this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackTap, this);
			this.createCountdown();
			this.initStore();
		}

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
			instance.name = partName;
		}

		private initStore() {
			this.showScenePart(GamePart.START);
			let store: string = GameData.instance.currentStore;
			this.storeName.source = this.storeNamePath[store];
			this.getCurrRiddleArr(store);
		}

		private createCountdown() {
			this.gameCountdown = new CountdownTimer();
			this.readyCountdown = new CountdownTimer();
			this.gameCountdown.setTimer(this.gameCountLabel, this.endGame, this);
			this.readyCountdown.setTimer(this.readyCountLabel, this.startGame, this);
			this.gameCountdown.stop();
			this.readyCountdown.stop();
		}

		private onChangeStoreTap() {
			dliy.UIMng.instance.showUI(StoreChooseUI.UIName);
		}

		private onStartGameTap() {
			this.initSceneData();
			this.showScenePart(GamePart.READY);
			this.readyCountdown.startCountdown(this.readyDownTime);
		}

		private initSceneData() {
			this.shownNum = 0;
			this.bingoNum = 0;
		}

		private initUI() {
			this.contentLabel.text = "";
			this.gameCountLabel.text = "";
		}

		private startGame() {
			this.showScenePart(GamePart.GAME);
			this.gameCountdown.startCountdown(this.gameDownTime);
			this.showNextRiddle();
			this.shownNum++;
		}

		private getCurrRiddleArr(name) {
			let unlock = GameData.instance.getStatus(name).unlockNum;
			let riddles = RiddleData.instance.getRiddles(name);
			this.currRiddleArr = riddles.slice(0, unlock);
			this.totalNum = unlock;
			CommonUtil.shuffleArr(this.currRiddleArr);
		}

		private showNextRiddle(): void {
			if (this.shownNum >= this.totalNum) {
				this.endGame();
				return;
			}
			let riddle = this.currRiddleArr[this.shownNum];
			this.contentLabel.text = riddle.content;
		}

		private tt: number = 0;
		private onBingoTap() {
			let now = egret.getTimer();
			if (now - this.tt < 400) {
				console.log("点击过于频繁");
				return;
			} else {
				this.tt = now;
				this.doBingo();
			}
		}
		private doBingo() {
			this.showNextRiddle();
			this.shownNum++;
			this.bingoNum++;
			this.testLog();
		}

		private onSkipTap() {
			let now = egret.getTimer();
			if (now - this.tt < 400) {
				console.log("点击过于频繁");
				return;
			} else {
				this.tt = now;
				this.doSkip();
			}
		}
		private doSkip() {
			this.showNextRiddle();
			this.shownNum++;
			this.testLog();
		}

		private onBackTap() {
			this.showScenePart(GamePart.START);
			this.initSceneData();
			this.initUI();
		}

		private endGame() {
			this.gameCountdown.stop();
			this.readyCountdown.stop();
			this.showScenePart(GamePart.RESULT);
			this.setResultUI();
		}

		private showScenePart(type: GamePart) {
			if (type == GamePart.START) {
				this.startGrp.visible = true;
				this.gameGrp.visible = false;
				this.resultGrp.visible = false;
				this.titleImg.visible = true;
				this.backBtn.visible = false;
			}
			if (type == GamePart.READY) {
				this.startGrp.visible = false;
				this.gameGrp.visible = true;
				this.countdownGrp.visible = true;
				this.contentGrp.visible = false;
				this.resultGrp.visible = false;
				this.titleImg.visible = false;
				this.backBtn.visible = true;
			}
			if (type == GamePart.GAME) {
				this.startGrp.visible = false;
				this.gameGrp.visible = true;
				this.countdownGrp.visible = false;
				this.contentGrp.visible = true;
				this.resultGrp.visible = false;
				this.titleImg.visible = false;
				this.backBtn.visible = true;
			}
			if (type == GamePart.RESULT) {
				this.startGrp.visible = false;
				this.gameGrp.visible = false;
				this.resultGrp.visible = true;
				this.titleImg.visible = false;
				this.backBtn.visible = true;
			}
		}

		private setResultUI() {
			this.totalRiddle.text = this.totalNum + "";
			this.bingoRiddle.text = this.bingoNum + "";
			this.bingoPercent.text = Math.floor(this.bingoNum / this.totalNum * 100) + "%";
			let percent = 30 + (this.bingoNum - 8) * 5;
			percent = this.bingoNum > 8 ? percent : 30;
			percent = percent >= 99 ? 99 : percent;
			this.congratLabel.text = "恭喜你超越了" + percent + "%的用户";
		}

		public onShareTap() {
			platform.shareAppMessage();
		}		

		private testLog() {
			console.log("--总解锁数--已查看数--答对数--");
			console.log(this.totalNum);
			console.log(this.shownNum);
			console.log(this.bingoNum);
		}
	}

	export enum GamePart {
		START,
		READY,
		GAME,
		RESULT
	}
}