// TypeScript file
module game {
    export class RiddleData {
        private static _instance: RiddleData;
        public static get instance(): RiddleData {
            if (this._instance == null) {
                this._instance = new RiddleData();
            }
            return this._instance;
        }


        public chengyuData: Array<any> = new Array<any>();
        public filmData: Array<any> = new Array<any>();
        public starData: Array<any> = new Array<any>();
        public plantData: Array<any> = new Array<any>();
        public shuihuData: Array<any> = new Array<any>();


        public constructor() {

        }

		/**
		 * 加载词库
		 */
        public initRiddles() {
            let names = RES.getRes("riddleName_json");
            let riddleAll = new Array<any>();
            riddleAll = RES.getRes("riddle_json");
            for (let item of riddleAll) {
                if (item.type == "chengyu") {
                    this.chengyuData.push(item);
                }
                if (item.type == "film") {
                    this.filmData.push(item);
                }
                if (item.type == "star") {
                    this.starData.push(item);
                }
                if (item.type == "plant") {
                    this.plantData.push(item);
                }
                if (item.type == "shuihu") {
                    this.shuihuData.push(item);
                }
            }
        }

		/**
		 * 得到对应类目的词库数组
		 */        
        public getRiddles(name: string): Array<any> {
            if (name == "chengyu") {
                return this.chengyuData;
            }
            if (name == "film") {
                return this.filmData;
            }
            if (name == "star") {
                return this.starData;
            }
            if (name == "plant") {
                return this.plantData;
            }
            if (name == "shuihu") {
                return this.shuihuData;
            }
        }
    }

    export class Riddle {
        public question: string;
        public tip: string
        public answer: string;
        public idx: number;

        public constructor(q: string, t: string, a: string, idx: number) {
            this.question = q;
            this.tip = t;
            this.answer = a;
            this.idx = idx;
            console.log(this);
        }
    }


}