var egret = window.egret;window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/StartSceneSkin.exml'] = window.StartSceneSkin = (function (_super) {
	__extends(StartSceneSkin, _super);
	var StartSceneSkin$Skin1 = 	(function (_super) {
		__extends(StartSceneSkin$Skin1, _super);
		function StartSceneSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_btn_back_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin1;
	})(eui.Skin);

	var StartSceneSkin$Skin2 = 	(function (_super) {
		__extends(StartSceneSkin$Skin2, _super);
		function StartSceneSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_btn_start_png")
					])
				,
				new eui.State ("disabled",
					[
						new eui.SetProperty("_Image1","source","main_btn_start_png")
					])
			];
		}
		var _proto = StartSceneSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_btn_start_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin2;
	})(eui.Skin);

	var StartSceneSkin$Skin3 = 	(function (_super) {
		__extends(StartSceneSkin$Skin3, _super);
		function StartSceneSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_btn_change_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_btn_change_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin3;
	})(eui.Skin);

	var StartSceneSkin$Skin4 = 	(function (_super) {
		__extends(StartSceneSkin$Skin4, _super);
		function StartSceneSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_btn_share_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_btn_share_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin4;
	})(eui.Skin);

	var StartSceneSkin$Skin5 = 	(function (_super) {
		__extends(StartSceneSkin$Skin5, _super);
		function StartSceneSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_btn_skip_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_btn_skip_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin5;
	})(eui.Skin);

	var StartSceneSkin$Skin6 = 	(function (_super) {
		__extends(StartSceneSkin$Skin6, _super);
		function StartSceneSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_btn_bingo_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_btn_bingo_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin6;
	})(eui.Skin);

	var StartSceneSkin$Skin7 = 	(function (_super) {
		__extends(StartSceneSkin$Skin7, _super);
		function StartSceneSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_btn_again_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StartSceneSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_btn_again_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StartSceneSkin$Skin7;
	})(eui.Skin);

	function StartSceneSkin() {
		_super.call(this);
		this.skinParts = ["bg","boardBg","titleImg","backBtn","currStore","storeName","startBtn","changeBtn","shareBtn","startGrp","readyCountLabel","countdownGrp","skipBtn","bingoBtn","contentLabel","gameCountLabel","contentGrp","gameGrp","againBtn","totalRiddle","bingoRiddle","bingoPercent","congratLabel","resultGrp"];
		
		this.height = 1280;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.boardBg_i(),this.titleImg_i(),this.backBtn_i(),this.startGrp_i(),this.gameGrp_i(),this.resultGrp_i()];
	}
	var _proto = StartSceneSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "main_img_bg_png";
		t.top = 0;
		return t;
	};
	_proto.boardBg_i = function () {
		var t = new eui.Image();
		this.boardBg = t;
		t.source = "main_img_board_png";
		t.x = -20;
		t.y = 192;
		return t;
	};
	_proto.titleImg_i = function () {
		var t = new eui.Image();
		this.titleImg = t;
		t.source = "main_titlelabel_title_png";
		t.x = 80;
		t.y = 50;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.x = 0;
		t.y = 40;
		t.skinName = StartSceneSkin$Skin1;
		return t;
	};
	_proto.startGrp_i = function () {
		var t = new eui.Group();
		this.startGrp = t;
		t.anchorOffsetY = 0;
		t.height = 858;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 248;
		t.elementsContent = [this.currStore_i(),this.storeName_i(),this.startBtn_i(),this.changeBtn_i(),this.shareBtn_i()];
		return t;
	};
	_proto.currStore_i = function () {
		var t = new eui.Image();
		this.currStore = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_titlelabel_store_png";
		t.y = 232.66;
		return t;
	};
	_proto.storeName_i = function () {
		var t = new eui.Image();
		this.storeName = t;
		t.horizontalCenter = 1;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_type_film_png";
		t.y = 361.66;
		return t;
	};
	_proto.startBtn_i = function () {
		var t = new eui.Button();
		this.startBtn = t;
		t.horizontalCenter = 0.5;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 546;
		t.skinName = StartSceneSkin$Skin2;
		return t;
	};
	_proto.changeBtn_i = function () {
		var t = new eui.Button();
		this.changeBtn = t;
		t.label = "";
		t.left = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 699;
		t.skinName = StartSceneSkin$Skin3;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new eui.Button();
		this.shareBtn = t;
		t.label = "";
		t.right = 33;
		t.scaleX = 1;
		t.scaleY = 1;
		t.y = 698.73;
		t.skinName = StartSceneSkin$Skin4;
		return t;
	};
	_proto.gameGrp_i = function () {
		var t = new eui.Group();
		this.gameGrp = t;
		t.anchorOffsetY = 0;
		t.height = 858;
		t.width = 640;
		t.x = 0;
		t.y = 248;
		t.elementsContent = [this.countdownGrp_i(),this.contentGrp_i()];
		return t;
	};
	_proto.countdownGrp_i = function () {
		var t = new eui.Group();
		this.countdownGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 342;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 382;
		t.y = 130;
		t.elementsContent = [this._Image1_i(),this.readyCountLabel_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0.5;
		t.source = "main_labelready_png";
		t.y = 120;
		return t;
	};
	_proto.readyCountLabel_i = function () {
		var t = new eui.BitmapLabel();
		this.readyCountLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "guess_countdown_fnt";
		t.height = 68;
		t.horizontalCenter = 0;
		t.text = "3";
		t.textAlign = "center";
		t.width = 102;
		t.y = 244;
		return t;
	};
	_proto.contentGrp_i = function () {
		var t = new eui.Group();
		this.contentGrp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 858;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 640;
		t.y = 0;
		t.elementsContent = [this.skipBtn_i(),this.bingoBtn_i(),this.contentLabel_i(),this.gameCountLabel_i()];
		return t;
	};
	_proto.skipBtn_i = function () {
		var t = new eui.Button();
		this.skipBtn = t;
		t.label = "";
		t.right = 33;
		t.y = 549.78;
		t.skinName = StartSceneSkin$Skin5;
		return t;
	};
	_proto.bingoBtn_i = function () {
		var t = new eui.Button();
		this.bingoBtn = t;
		t.label = "";
		t.left = 33;
		t.y = 548.85;
		t.skinName = StartSceneSkin$Skin6;
		return t;
	};
	_proto.contentLabel_i = function () {
		var t = new eui.Label();
		this.contentLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 96.67;
		t.horizontalCenter = 0.5;
		t.size = 56;
		t.stroke = 2;
		t.text = "千钧一发";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 364.91;
		t.y = 235.92;
		return t;
	};
	_proto.gameCountLabel_i = function () {
		var t = new eui.Label();
		this.gameCountLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 96.67;
		t.horizontalCenter = 0.5;
		t.size = 30;
		t.stroke = 0;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 364.91;
		t.y = 341.97;
		return t;
	};
	_proto.resultGrp_i = function () {
		var t = new eui.Group();
		this.resultGrp = t;
		t.anchorOffsetY = 0;
		t.height = 858;
		t.horizontalCenter = 0;
		t.width = 640;
		t.y = 248;
		t.elementsContent = [this.againBtn_i(),this._Image2_i(),this.totalRiddle_i(),this._Image3_i(),this.bingoRiddle_i(),this._Image4_i(),this.bingoPercent_i(),this.congratLabel_i()];
		return t;
	};
	_proto.againBtn_i = function () {
		var t = new eui.Button();
		this.againBtn = t;
		t.horizontalCenter = 0;
		t.label = "";
		t.y = 549.78;
		t.skinName = StartSceneSkin$Skin7;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "main_result_labeltotal_png";
		t.x = 183.67;
		t.y = 200;
		return t;
	};
	_proto.totalRiddle_i = function () {
		var t = new eui.BitmapLabel();
		this.totalRiddle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "guess_green_fnt";
		t.height = 51.99;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "423";
		t.textAlign = "center";
		t.width = 96.67;
		t.x = 283.69;
		t.y = 207;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "main_result_labelbingo_png";
		t.x = 204;
		t.y = 291;
		return t;
	};
	_proto.bingoRiddle_i = function () {
		var t = new eui.BitmapLabel();
		this.bingoRiddle = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "guess_red_fnt";
		t.height = 51.99;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "423";
		t.textAlign = "center";
		t.width = 96.67;
		t.x = 304.02;
		t.y = 300;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "main_result_labelpercent_png";
		t.x = 196;
		t.y = 385;
		return t;
	};
	_proto.bingoPercent_i = function () {
		var t = new eui.BitmapLabel();
		this.bingoPercent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "guess_purple_fnt";
		t.height = 51.99;
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "99%";
		t.textAlign = "center";
		t.width = 111.67;
		t.x = 354.02;
		t.y = 390;
		return t;
	};
	_proto.congratLabel_i = function () {
		var t = new eui.Label();
		this.congratLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0.5;
		t.size = 26;
		t.text = "恭喜你超越了99%的用户";
		t.textAlign = "center";
		t.width = 313;
		t.y = 472;
		return t;
	};
	return StartSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/game/StoreChooseUISkin.exml'] = window.StoreChooseUISkin = (function (_super) {
	__extends(StoreChooseUISkin, _super);
	var StoreChooseUISkin$Skin8 = 	(function (_super) {
		__extends(StoreChooseUISkin$Skin8, _super);
		function StoreChooseUISkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","main_btn_back_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StoreChooseUISkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StoreChooseUISkin$Skin8;
	})(eui.Skin);

	function StoreChooseUISkin() {
		_super.call(this);
		this.skinParts = ["boardBg","backBtn","titleImg","cover0","info0","mask0","cover1","info1","mask1","cover2","info2","mask2","cover3","info3","mask3","cover4","info4","mask4","storeScroller","testBtn","expand0","expand1","expand2","expand3","expand4","testGrp"];
		
		this.height = 1280;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.boardBg_i(),this.backBtn_i(),this.titleImg_i(),this.storeScroller_i(),this.testBtn_i(),this.testGrp_i()];
	}
	var _proto = StoreChooseUISkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "main_img_bg_png";
		t.top = 0;
		return t;
	};
	_proto.boardBg_i = function () {
		var t = new eui.Image();
		this.boardBg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 111;
		t.left = 23;
		t.right = 17;
		t.scale9Grid = new egret.Rectangle(87,73,526,993);
		t.source = "choose_boardbg_png";
		t.top = 142;
		return t;
	};
	_proto.backBtn_i = function () {
		var t = new eui.Button();
		this.backBtn = t;
		t.label = "";
		t.x = 0;
		t.y = 40;
		t.skinName = StoreChooseUISkin$Skin8;
		return t;
	};
	_proto.titleImg_i = function () {
		var t = new eui.Image();
		this.titleImg = t;
		t.source = "main_titlelabel_choose_png";
		t.x = 80;
		t.y = 50;
		return t;
	};
	_proto.storeScroller_i = function () {
		var t = new eui.Scroller();
		this.storeScroller = t;
		t.bottom = 163;
		t.left = 23;
		t.right = 17;
		t.top = 178;
		t.viewport = this._Group6_i();
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.layout = this._TileLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalAlign = "center";
		t.horizontalGap = 15;
		t.orientation = "rows";
		t.paddingLeft = 30;
		t.paddingRight = 0;
		t.requestedColumnCount = 2;
		t.verticalGap = 14;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 335;
		t.width = 262;
		t.x = 83;
		t.y = 340;
		t.elementsContent = [this.cover0_i(),this.info0_i(),this.mask0_i()];
		return t;
	};
	_proto.cover0_i = function () {
		var t = new eui.Image();
		this.cover0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "choose_cover_chengyu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.info0_i = function () {
		var t = new eui.Label();
		this.info0 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -0.5;
		t.size = 33;
		t.text = "词数99(63%)";
		t.textAlign = "center";
		t.width = 237.33;
		t.y = 273.34;
		return t;
	};
	_proto.mask0_i = function () {
		var t = new eui.Image();
		this.mask0 = t;
		t.source = "choose_mask_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 335;
		t.width = 262;
		t.x = 93;
		t.y = 350;
		t.elementsContent = [this.cover1_i(),this.info1_i(),this.mask1_i()];
		return t;
	};
	_proto.cover1_i = function () {
		var t = new eui.Image();
		this.cover1 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "choose_cover_film_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.info1_i = function () {
		var t = new eui.Label();
		this.info1 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -0.5;
		t.size = 33;
		t.text = "词数99(63%)";
		t.textAlign = "center";
		t.width = 237.33;
		t.y = 273.34;
		return t;
	};
	_proto.mask1_i = function () {
		var t = new eui.Image();
		this.mask1 = t;
		t.source = "choose_mask_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 335;
		t.width = 262;
		t.x = 103;
		t.y = 360;
		t.elementsContent = [this.cover2_i(),this.info2_i(),this.mask2_i()];
		return t;
	};
	_proto.cover2_i = function () {
		var t = new eui.Image();
		this.cover2 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "choose_cover_star_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.info2_i = function () {
		var t = new eui.Label();
		this.info2 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -0.5;
		t.size = 33;
		t.text = "词数99(63%)";
		t.textAlign = "center";
		t.width = 237.33;
		t.y = 273.34;
		return t;
	};
	_proto.mask2_i = function () {
		var t = new eui.Image();
		this.mask2 = t;
		t.source = "choose_mask_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.height = 335;
		t.width = 262;
		t.x = 113;
		t.y = 370;
		t.elementsContent = [this.cover3_i(),this.info3_i(),this.mask3_i()];
		return t;
	};
	_proto.cover3_i = function () {
		var t = new eui.Image();
		this.cover3 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "choose_cover_plant_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.info3_i = function () {
		var t = new eui.Label();
		this.info3 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -0.5;
		t.size = 33;
		t.text = "词数99(63%)";
		t.textAlign = "center";
		t.width = 237.33;
		t.y = 273.34;
		return t;
	};
	_proto.mask3_i = function () {
		var t = new eui.Image();
		this.mask3 = t;
		t.source = "choose_mask_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.height = 335;
		t.width = 262;
		t.x = 123;
		t.y = 380;
		t.elementsContent = [this.cover4_i(),this.info4_i(),this.mask4_i()];
		return t;
	};
	_proto.cover4_i = function () {
		var t = new eui.Image();
		this.cover4 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "choose_cover_shuihu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.info4_i = function () {
		var t = new eui.Label();
		this.info4 = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = -0.5;
		t.size = 33;
		t.text = "词数99(63%)";
		t.textAlign = "center";
		t.width = 237.33;
		t.y = 273.34;
		return t;
	};
	_proto.mask4_i = function () {
		var t = new eui.Image();
		this.mask4 = t;
		t.source = "choose_mask_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.testBtn_i = function () {
		var t = new eui.Button();
		this.testBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "解锁接口";
		t.width = 98;
		t.x = 300;
		t.y = 99;
		return t;
	};
	_proto.testGrp_i = function () {
		var t = new eui.Group();
		this.testGrp = t;
		t.height = 200;
		t.width = 200;
		t.x = 300;
		t.y = 99;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.expand0_i(),this.expand1_i(),this.expand2_i(),this.expand3_i(),this.expand4_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = -2;
		return t;
	};
	_proto.expand0_i = function () {
		var t = new eui.Button();
		this.expand0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "chengyu";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 98;
		t.x = 33;
		t.y = -63;
		return t;
	};
	_proto.expand1_i = function () {
		var t = new eui.Button();
		this.expand1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "film";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 98;
		t.x = 43;
		t.y = -53;
		return t;
	};
	_proto.expand2_i = function () {
		var t = new eui.Button();
		this.expand2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "star";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 98;
		t.x = 53;
		t.y = -43;
		return t;
	};
	_proto.expand3_i = function () {
		var t = new eui.Button();
		this.expand3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "plant";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 98;
		t.x = 63;
		t.y = -33;
		return t;
	};
	_proto.expand4_i = function () {
		var t = new eui.Button();
		this.expand4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "shuihu";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 98;
		t.x = 73;
		t.y = -23;
		return t;
	};
	return StoreChooseUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);