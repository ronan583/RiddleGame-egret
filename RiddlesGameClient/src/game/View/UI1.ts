module game {
	export class UI1 extends dliy.BaseUI {

		public constructor() {
			super();
			this.skinName = "resource/eui_skins/ui1/UI1.exml";

			dliy.DLIYMsgCenter.instance.registerMsgFunc(GameNotice.UI1_SHOW_MSG, this.showMsg, this);
			dliy.DLIYMsgCenter.instance.registerMsgFunc(GameNotice.REFRESH_REMAIN, this.showRemain, this);
			dliy.DLIYMsgCenter.instance.registerMsgFunc(GameNotice.PLUS_REMAIN, this.plusRemain, this);
			dliy.DLIYMsgCenter.instance.registerMsgFunc(GameNotice.CHAR_SELECT_TAP, this.addSelectedOption, this);
		}

		public static get UIName(): string {
			return "game.UI1";
		}

		public static get UIResGroup(): string {
			return "GameUI1";
		}
		public OPTION_NUM = 12;
		public SPACE = 15;

		public seeAnswerBtn: eui.Button;
		public nextQstBtn: eui.Button;
		public shareBtn: eui.Button;
		public remainNumLabel: eui.Label;
		public questionLabel: eui.Label;
		public tipLabel: eui.Label;
		public answerLabel: eui.Label;
		public optionGroup: eui.Group;
		public selectedChar0: CharOptionButton;
		public selectedChar1: CharOptionButton;
		public selectedChar2: CharOptionButton;
		public selectedChar3: CharOptionButton;
		public selectedCharItemArr: CharOptionButton[];

		public selectedCharBg0: eui.Image;
		public selectedCharBg1: eui.Image;
		public selectedCharBg2: eui.Image;
		public selectedCharBg3: eui.Image;
		public selectedCharBgArr: eui.Image[];

		public touchableBtns: eui.Button[];
		public touchableBtns1: eui.Button[];

		public remainTimes: number;
		public riddleIdx: number;
		public isAnswered: boolean;

		public riddle: Riddle;
		public optionCharArr: Array<any>;
		public selectedNum: number = 0;
		public answerLength: number;

		// test
		private openUI2: eui.Button;
		private msgLabel: eui.Label;
		private testBtn: eui.Button;

		protected partAdded(partName: string, instance: any): void {
			super.partAdded(partName, instance);
			// 我需要明确的name
			instance.name = partName;
		}

		protected childrenCreated(): void {
			super.childrenCreated();
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
		}

		public init() {
			this.selectedChar0.visible = false;
			this.selectedChar1.visible = false;
			this.selectedChar2.visible = false;
			this.loadData();
			this.showRemain();
		}

		public loadData() {
			var load: SaveData = SaveData.load();
			if (load == null) {
				this.riddleIdx = Math.floor(Math.random() * RiddleData.instance.riddleNum);
				this.remainTimes = RiddleData.instance.REMAIN;
				this.isAnswered = false;
			} else {
				this.riddleIdx = load.riddleIdx;
				this.remainTimes = load.remain;
				this.isAnswered = load.isAnswered;
			}

		}

		public startGame() {
			this.showNewRiddle();
			this.createCharOption();
			this.createSelectedPos();
			this.showOptions()
			this.clearAllSelected();
			this.enableAllBtns(true);
		}

		public startNewRound() {
			if (this.remainTimes < 1) {
				//todo 结束
				console.log("次数用完");
				return;
			}
			this.riddleIdx = Math.floor(Math.random() * RiddleData.instance.riddleNum);
			this.showNewRiddle();
			this.createCharOption();
			this.showOptions();
			this.createSelectedPos();
			this.clearAllSelected();
			this.enableAllBtns(true);
			this.logSavedata();
			SaveData.save(this.remainTimes, this.riddleIdx, this.isAnswered);
		}

		public showNewRiddle() {
			var riddleData = RiddleData.instance;
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
		}


		public createCharOption() {
			var riddleData = RiddleData.instance;
			this.optionCharArr = new Array<any>();
			let answer = this.riddle.answer;
			for (let i = 0; i < answer.length; i++) {
				this.optionCharArr.push(answer[i]);
			}
			for (let i = 0; i < this.OPTION_NUM - answer.length; i++) {
				let ran = Math.floor(riddleData.riddleNum * Math.random());
				this.optionCharArr.push(riddleData.randomCharArr[ran]);
			}
			CommonUtil.shuffleArr(this.optionCharArr);
			console.log("-------打乱选项：" + this.optionCharArr);
		}

		public showOptions() {
			this.optionGroup.removeChildren();
			for (let i = 0; i < this.OPTION_NUM; i++) {
				let optionItem = new CharOptionButton();
				optionItem.create(this.optionCharArr[i], 0);
				this.optionGroup.addChild(optionItem);
			}
		}

		public createSelectedPos() {
			let space = this.SPACE;
			let itemWid = this.selectedCharBg0.width;
			let num = this.answerLength;
			for (let i = 0; i < 4; i++) {
				let item = this.selectedCharBgArr[i];
				if (i < num) {
					item.visible = true;
				} else {
					item.visible = false;
				}
				item.horizontalCenter = -(num - 1) * (space / 2 + itemWid / 2) + i * (space + itemWid);
			}
		}

		public addSelectedOption(data) {		//data是传来的单字
			//判断选中数
			if (this.selectedNum > this.answerLength) {
				return;
			}
			this.addChar(data);
			if (this.selectedNum == this.answerLength) {
				this.checkSelected();
			}
		}

		public addChar(char: string){
			let space = this.SPACE;
			let itemWid = this.selectedChar0.width;
			let num = this.answerLength;
			for (let i = 0; i < 4; i++) {
				let item = this.selectedCharItemArr[i];
				item.horizontalCenter = -(num - 1) * (space / 2 + itemWid / 2) + i * (space + itemWid);
				if (i < num) {
					if (!item.isUp) {
						item.visible = true;
						item.isUp = true;
						item.create(char, 1);
						this.selectedNum++;
						break;
					}
				} else {
					item.visible = false;
				}
			}
		}

		public removeSelectedOption(event) {
			console.log(event.currentTarget);
			if (event.currentTarget instanceof CharOptionButton) {
				let item = event.currentTarget;
				item.isUp = false;
				item.visible = false;
				this.selectedNum--;
			}
		}

		public checkSelected() {
			let result = "";
			for (let i = 0; i < this.answerLength; i++) {
				if (this.selectedCharItemArr[i].isUp) {
					result += this.selectedCharItemArr[i].char;
				} else {
					console.error("选中状态错误!!!!!!!!!!!!!!!!!!!!");
				}
			}
			this.enableAllBtns(false);
			if (result == this.riddle.answer) {
				console.log("答对了~~~");
				ToastAnim.showToast(Anim_Type.bingo).then(() => {
					this.startNewRound();
					this.clearAllSelected();
					this.enableAllBtns(true);
				});
			} else {
				console.log("答错了");
				ToastAnim.showToast(Anim_Type.wrong_answer).then(() => {
					this.clearAllSelected();
					this.enableAllBtns(true);
				});
			}
		}

		public clearAllSelected() {
			for (let i = 0; i < 4; i++) {
				this.selectedCharItemArr[i].isUp = false;
				this.selectedCharItemArr[i].visible = false;
			}
			this.selectedNum = 0;
		}

		public showRemain() {
			this.remainNumLabel.text = this.remainTimes + "";
		}

		public plusRemain() {
			console.log("------plus remain");
			this.remainTimes += 2;
		}

		public decreaseRemain() {
			if (this.remainTimes < 1) {
				//todo 结束
				console.log("次数用完");
				return;
			}
			this.remainTimes--;
		}

		public onAnswerTap() {
			if (!this.isAnswered) {
				this.isAnswered = true;
				this.showAnswer();
				this.decreaseRemain();
				this.showRemain();
				SaveData.save(this.remainTimes, this.riddleIdx, this.isAnswered);
			}
			this.logSavedata();
		}

		private tt: number = 0;
		public onNextTap() {
			let now = egret.getTimer();
			if (now - this.tt < 800) {
				console.log("点击过于频繁");
				return;
			} else {
				this.tt = now;
				this.startNewRound();
			}
		}

		public showAnswer() {
			// this.answerLabel.visible = true;
			let answer = this.riddle.answer;
			this.clearAllSelected();
			for(let i = 0; i < answer.length; i++){
				this.addChar(answer.charAt(i));
			}
			for (let i = 0; i < this.touchableBtns.length; i++) {
				this.touchableBtns[i].touchEnabled = false;
			}
			for (let i = 0; i < this.optionGroup.numChildren; i++) {
				let item = this.optionGroup.getChildAt(i);
				if (item instanceof CharOptionButton) {
					item.touchEnabled = false;
				}
			}
		}

		public onShareTap() {
			platform.shareAppMessage();
			platform.onWxShow().then(() => {
				console.log("----------分享完成");
				this.plusRemain();
				this.showRemain();
			});
		}

		public enableAllBtns(isEnable: boolean) {
			for (let i = 0; i < this.touchableBtns.length; i++) {
				this.touchableBtns[i].touchEnabled = isEnable;
			}
			for (let i = 0; i < this.touchableBtns1.length; i++) {
				this.touchableBtns[i].touchEnabled = isEnable;
			}
			for (let i = 0; i < this.optionGroup.numChildren; i++) {
				let item = this.optionGroup.getChildAt(i);
				if (item instanceof CharOptionButton) {
					item.touchEnabled = isEnable;
				}
			}
		}

		//test
		private openUI2tap() {
			dliy.UIMng.instance.showUI(game.UI2.UIName);
		}
		private showMsg(data: any) {
			this.msgLabel.text = data;
		}

		private onTest() {
			// platform.removeLocalItem("save");
			// this.init();
			// this.startGame();


			ToastAnim.showToast(Anim_Type.bingo);
		}

		private logSavedata() {
			console.log("-----remain-----" + this.remainTimes);
			console.log("-----riddleIdex-----" + this.riddleIdx);
			console.log("-----isAnswered-----" + this.isAnswered);
		}
	}
}