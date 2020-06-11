module dliy {
	export class BaseUI extends eui.Component {
		public constructor() {
			super();
			this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemove, this);
		}

		protected onRemove() {

		}

		public close() {
			if (this.parent) {
				this.parent.removeChild(this);
			}
		}
	}
}