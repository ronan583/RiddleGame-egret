module game {
	export class RiddleType {
		public static CHENGYU = "chengyu";
		public static FILM = "film";
		public static STAR = "star";
		public static PLANT = "plant";
		public static SHUIHU = "shuihu";
	}


	export class GameData {
		private static _instance: GameData;
		public static get instance(): GameData {
			if (this._instance == null) {
				this._instance = new GameData();
			}
			return this._instance;
		}
		public constructor() {
			this.chengyuStatus = new RiddleStatus(RiddleType.CHENGYU, RiddleData.instance.chengyuData.length, "");
			this.filmStatus = new RiddleStatus(RiddleType.FILM, RiddleData.instance.filmData.length, "");
			this.starStatus = new RiddleStatus(RiddleType.STAR, RiddleData.instance.starData.length, "");
			this.plantStatus = new RiddleStatus(RiddleType.PLANT, RiddleData.instance.plantData.length, "");
			this.shuihuStatus = new RiddleStatus(RiddleType.SHUIHU, RiddleData.instance.shuihuData.length, "");
			this.statusArr = [this.chengyuStatus, this.filmStatus, this.starStatus, this.plantStatus, this.shuihuStatus];
		}
		public static BASE_NUM = 100;
		public static INCREASE_NUM = 30;

		private chengyuStatus: RiddleStatus;
		private filmStatus: RiddleStatus;
		private starStatus: RiddleStatus;
		private plantStatus: RiddleStatus;
		private shuihuStatus: RiddleStatus;
		public statusArr: RiddleStatus[];

		public currentStore: string;
		public static nameText = [
			RiddleType.CHENGYU, RiddleType.FILM, RiddleType.STAR, RiddleType.PLANT, RiddleType.SHUIHU
		]		

		public initGamedata() {
			this.currentStore = RiddleType.CHENGYU;
			SaveData.load();
			for (let i = 0; i < 5; i++) {
				this.statusArr[i].logStatus()
			}
		}

		/**
		 * 扩展解锁词汇的方法，第一次解锁100，往后解锁30，封顶为止
		 */
		public expandStore(name) {
			let status = this.getStatus(name);
			let newUnlock;
			if (status.unlockNum == 0) {
				newUnlock = status.unlockNum + GameData.BASE_NUM;
			} else {
				newUnlock = status.unlockNum + GameData.INCREASE_NUM;
				if (newUnlock > status.totalNum) {
					newUnlock = status.totalNum;
				}
			}
			status.setUnlock(newUnlock);
			SaveData.save(name, newUnlock);
		}
		/**
		 * 得到对应类目的词库状态
		 */
		public getStatus(name): RiddleStatus {
			for (let i = 0; i < this.statusArr.length; i++) {
				let status = this.statusArr[i];
				if (status.storeName == name) {
					return status;
				}
			}
			return null;
		}

		public getCurrentStore() {

		}
	}

	export class RiddleStatus {
		public storeName: string;
		public totalNum: number;
		public unlockNum: number = 0;
		public coverPath: string;
		public constructor(name, num, cover) {
			this.storeName = name;
			this.totalNum = num;
			this.coverPath = cover;
		}

		public setUnlock(num) {
			this.unlockNum = num;
		}

		public logStatus() {
			console.log(this);
		}
	}


	export var testSave = [
		{ name: RiddleType.CHENGYU, unlock: "24" },
		{ name: RiddleType.FILM, unlock: "24" },
		{ name: RiddleType.STAR, unlock: "24" },
		{ name: RiddleType.PLANT, unlock: "24" },
		{ name: RiddleType.SHUIHU, unlock: "24" }
	]

	export class SaveData {
		public storeName: string;
		public unlockNum: number;
		public constructor(name, unlock) {
			this.storeName = name;
			this.unlockNum = unlock;
		}

		public static save(storeName, unlock) {
			let data = new Array<any>();
			for(let i = 0; i < 5; i++){
				let name = GameData.nameText[i];
				let originUnlock;
				if(name == storeName){
					originUnlock = unlock;
				} else{
					originUnlock = GameData.instance.statusArr[i].unlockNum;
				}
				console.log("storeName, name, unlock, originUnlock", storeName, name, unlock, originUnlock);
				data.push({name: name, unlock: originUnlock});
			}
			platform.setLocalStore("unlockProgress", JSON.stringify(data));
		}

		public static load() {
			console.log("-----------load");
			let data = platform.getLocalStore("unlockProgress");
			if(data == null || data == ""){
				for(let i = 0; i < 5; i++){
					if(i == 0){
						GameData.instance.statusArr[i].setUnlock(GameData.BASE_NUM);
					} else {
						GameData.instance.statusArr[i].setUnlock(0);
					}
				}
			} else {
				data = JSON.parse(data);
				console.log("save data is ", data);
				for(let i = 0; i < 5; i++){
					console.log("save data is ", data[i].unlock);
					GameData.instance.statusArr[i].setUnlock(data[i].unlock);
				}
			}
		}
	}
}