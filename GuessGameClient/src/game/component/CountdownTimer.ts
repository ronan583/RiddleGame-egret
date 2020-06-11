module game {
	export class CountdownTimer {
		public constructor() {
		}
		private timerLabel: eui.BitmapLabel | eui.Label;
		private endTime: number;
		private endFunc: Function;
		private endObj: any;
		
		public setTimer(labelUI: eui.BitmapLabel | eui.Label, func?: Function, obj?: any){
			this.timerLabel = labelUI;
			if(func){
				this.endFunc = func;
				this.endObj = obj;
			}
		}

		public startCountdown(time: number) {
			if (this.endTime > 0) {
				this.stop();
			}
			this.endTime = Math.floor(egret.getTimer() / 1000) + time;
			egret.startTick(this.updateTime, this);
		}

		public stop() {
			this.endTime = 0;
			egret.stopTick(this.updateTime, this);
		}

		public doEndFunc(){
			if(this.endFunc){
				this.endFunc.call(this.endObj);
			}
		}

		private lastTime = -1;
		private updateTime(timestamp: number): boolean {
			let time = this.endTime - Math.floor(timestamp / 1000);
			if (time < 0) {
				this.stop();
				this.doEndFunc();
			} else {
				this.lastTime = time;
				if (time) this.timerLabel.text = time.toString();
			}
			return true;
		}
	}
}