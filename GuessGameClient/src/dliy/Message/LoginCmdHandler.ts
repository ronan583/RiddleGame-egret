module game {
	export class LoginCmdHandler implements dliy.IMsgHandler {
		public constructor() {
		}

		handle(msg: string, data: any) {
			// 显示UI1
			dliy.UIMng.instance.showUI(game.StartScene.UIName)
		}

	}
}