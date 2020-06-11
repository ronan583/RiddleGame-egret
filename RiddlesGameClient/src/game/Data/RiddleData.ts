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

        public REMAIN: number = 10;

        private riddleData: Array<any>;
        public riddleNum: number;
        public randomCharArr: string;


        public constructor() {

        }

        public serialArr: Array<number>;

        public initRiddles() {
            this.riddleData = new Array<any>();
            this.riddleData = RES.getRes("riddles_json");
            this.riddleNum = this.riddleData.length;

            this.randomCharArr = '';
            for(let i = 0; i < this.riddleData.length; i++){
                let char = this.riddleData[i].answer[0];
                this.randomCharArr += char
            }
        }

        public resetRemain() {
            platform.removeLocalItem("remain");
            platform.setLocalStore("remain", this.REMAIN);
            dliy.DLIYMsgCenter.instance.sendMsg(GameNotice.REFRESH_REMAIN, null);
        }

        public shuffleSerial() {
            let length = this.riddleNum;
            this.serialArr = new Array<number>();
            //得到顺序序号数组
            for (let i = 0; i < length; i++) {
                this.serialArr.push(i);
            }
            CommonUtil.shuffleArr(this.serialArr);
            console.log(this.serialArr);
        }

        public getShuffledRiddle(ranRidIdx: number) {
            return new Riddle(
                this.riddleData[ranRidIdx].question,
                this.riddleData[ranRidIdx].tip,
                this.riddleData[ranRidIdx].answer,
                ranRidIdx         
            )
        }
    };

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

    export class SaveData {
        public remain: number;
        public riddleIdx: number;
        public isAnswered: boolean;
        public constructor(remain, ridIdx, isAns) {
            this.remain = remain;
            this.riddleIdx = ridIdx;
            this.isAnswered = isAns;
        }

        public static save(remain, ridIdx, isAns) {
            let sData: SaveData = new SaveData(remain, ridIdx, isAns);
            platform.setLocalStore("save", JSON.stringify(sData));
        }

        public static load(): SaveData {
            let lData = platform.getLocalStore("save");
            if(lData == null || lData == ""){
                return null;
            } else {
                lData = JSON.parse(lData);
                return new SaveData(
                    lData.remain,
                    lData.riddleIdx,
                    lData.isAnswered
                );
            }
        }
    }
}