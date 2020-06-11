module dliy {
	export class BaseUI extends eui.Component {
		public constructor() {
			super();
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
			this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
		}

		protected onRemove() {

		}

		protected onAddToStage(){
			
		}

		public close() {
			if (this.parent) {
				this.parent.removeChild(this);
			}
		}
	}
}