module dliy {

	/**
	 * 消息事件处理
	 */
	export interface IMsgHandler {
		handle(msg: string, data: any);
	}

	/**
	 * 不适用MVC  直接使用一个简单的消息通知处理
	 */
	export class DLIYMsgCenter {
		private static _instance: DLIYMsgCenter;
		public constructor() {
		}

		public static get instance(): DLIYMsgCenter {
			if (!DLIYMsgCenter._instance) DLIYMsgCenter._instance = new DLIYMsgCenter();
			return DLIYMsgCenter._instance
		}

		private msgHandlerMap: { [key: string]: IMsgHandler } = {}
		private msgFuncMap: { [key: string]: any } = {}

		public registerMsgHandle(msg: string, msgHandler: IMsgHandler) {
			this.msgHandlerMap[msg] = msgHandler;
		}

		public registerMsgFunc(msg: string, msgFunc: Function, msgFuncCaller: any) {
			this.msgFuncMap[msg] = { f: msgFunc, c: msgFuncCaller };
		}

		public removeMsg(msg: string) {
			if (this.msgHandlerMap[msg]) {
				this.msgHandlerMap[msg] = null;
				delete this.msgHandlerMap[msg];
			}
			if (this.msgFuncMap[msg]) {
				this.msgFuncMap[msg] = null;
				delete this.msgFuncMap[msg];
			}
		}

		public sendMsg(msg: string, data: any) {
			try {
				if (this.msgHandlerMap[msg]) {
					this.msgHandlerMap[msg].handle(msg, data);
				}
			} catch (e) {
				DLog.errorM('DLIYCenter', this, e)
			}

			try {
				if (this.msgFuncMap[msg]) {
					let obj = this.msgFuncMap[msg]
					if (obj && obj.f && obj.c) {
						obj.f.call(obj.c, data);
					}
				}
			} catch (e) {
				DLog.errorM('DLIYCenter', this, e)
			}
		}

	}
}