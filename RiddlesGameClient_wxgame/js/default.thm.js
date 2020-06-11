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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","dliy.DragonAnim":"resource/eui_skins/DragonAnim.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/ToastAnimUISkin.exml'] = window.ToastAnimUISkin = (function (_super) {
	__extends(ToastAnimUISkin, _super);
	function ToastAnimUISkin() {
		_super.call(this);
		this.skinParts = ["toastLabel","animImage"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.toastLabel_i(),this.animImage_i()];
	}
	var _proto = ToastAnimUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0xfcfcfc;
		t.height = 60;
		t.horizontalCenter = 0;
		t.strokeAlpha = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 140;
		return t;
	};
	_proto.toastLabel_i = function () {
		var t = new eui.Label();
		this.toastLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "复制成功";
		t.textColor = 0x232323;
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.animImage_i = function () {
		var t = new eui.Image();
		this.animImage = t;
		t.anchorOffsetX = 11.6;
		t.anchorOffsetY = 8.8;
		t.source = "main_img_right_png";
		t.x = -44.42;
		t.y = 107.13;
		return t;
	};
	return ToastAnimUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/common/ToastUISkin.exml'] = window.ToastUISkin = (function (_super) {
	__extends(ToastUISkin, _super);
	function ToastUISkin() {
		_super.call(this);
		this.skinParts = ["toastLabel"];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Rect1_i(),this.toastLabel_i()];
	}
	var _proto = ToastUISkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillAlpha = 1;
		t.fillColor = 0xfcfcfc;
		t.height = 60;
		t.horizontalCenter = 0;
		t.strokeAlpha = 0;
		t.verticalCenter = 0;
		t.width = 140;
		return t;
	};
	_proto.toastLabel_i = function () {
		var t = new eui.Label();
		this.toastLabel = t;
		t.fontFamily = "Microsoft YaHei";
		t.horizontalCenter = 0;
		t.size = 15;
		t.text = "复制成功";
		t.textColor = 0x232323;
		t.verticalCenter = 0;
		return t;
	};
	return ToastUISkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DragonAnim.exml'] = window.$exmlClass1 = (function (_super) {
	__extends($exmlClass1, _super);
	function $exmlClass1() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = $exmlClass1.prototype;

	return $exmlClass1;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/ui1/CharButtonSkin.exml'] = window.CharButtonSkin = (function (_super) {
	__extends(CharButtonSkin, _super);
	function CharButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.height = 80;
		this.minHeight = 50;
		this.minWidth = 100;
		this.width = 80;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","main_img_itembg1_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = CharButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "main_img_itembg_png";
		t.top = 0;
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
	return CharButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ui1/UI1.exml'] = window.UI1 = (function (_super) {
	__extends(UI1, _super);
	var UI1$Skin2 = 	(function (_super) {
		__extends(UI1$Skin2, _super);
		function UI1$Skin2() {
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
						new eui.SetProperty("_Image1","source","main_btn_seeanswer1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UI1$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_btn_seeanswer0_png";
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
		return UI1$Skin2;
	})(eui.Skin);

	var UI1$Skin3 = 	(function (_super) {
		__extends(UI1$Skin3, _super);
		function UI1$Skin3() {
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
						new eui.SetProperty("_Image1","source","main_btn_share1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UI1$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_btn_share0_png";
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
		return UI1$Skin3;
	})(eui.Skin);

	var UI1$Skin4 = 	(function (_super) {
		__extends(UI1$Skin4, _super);
		function UI1$Skin4() {
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
						new eui.SetProperty("_Image1","source","main_btn_next1_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = UI1$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "main_btn_next0_png";
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
		return UI1$Skin4;
	})(eui.Skin);

	function UI1() {
		_super.call(this);
		this.skinParts = ["bg","title","board","riddleTitle","openUI2","seeAnswerBtn","testBtn","shareBtn","nextQstBtn","star","remainNumLabel","msgLabel","questionLabel","tipLabel","optionGroup","selectedCharBg0","selectedCharBg1","selectedCharBg2","selectedCharBg3","selectedChar0","selectedChar1","selectedChar2","selectedChar3","answerLabel"];
		
		this.height = 1280;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.title_i(),this.board_i(),this.riddleTitle_i(),this.openUI2_i(),this.seeAnswerBtn_i(),this.testBtn_i(),this.shareBtn_i(),this.nextQstBtn_i(),this.star_i(),this.remainNumLabel_i(),this.msgLabel_i(),this.questionLabel_i(),this.tipLabel_i(),this.optionGroup_i(),this.selectedCharBg0_i(),this.selectedCharBg1_i(),this.selectedCharBg2_i(),this.selectedCharBg3_i(),this.selectedChar0_i(),this.selectedChar1_i(),this.selectedChar2_i(),this.selectedChar3_i(),this.answerLabel_i(),this._Image1_i(),this._Image2_i()];
	}
	var _proto = UI1.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(131,149,787,458);
		t.source = "main_bg_png";
		t.top = 0;
		return t;
	};
	_proto.title_i = function () {
		var t = new eui.Image();
		this.title = t;
		t.anchorOffsetX = 0;
		t.left = 38;
		t.source = "main_img_title0_png";
		t.top = 73;
		return t;
	};
	_proto.board_i = function () {
		var t = new eui.Image();
		this.board = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 585.31;
		t.horizontalCenter = 0;
		t.source = "main_img_boardbg1_png";
		t.top = 149;
		t.width = 583.62;
		return t;
	};
	_proto.riddleTitle_i = function () {
		var t = new eui.Image();
		this.riddleTitle = t;
		t.horizontalCenter = 5;
		t.source = "main_img_title_png";
		t.y = 178.85;
		return t;
	};
	_proto.openUI2_i = function () {
		var t = new eui.Button();
		this.openUI2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.01;
		t.horizontalCenter = 0;
		t.label = "查看谜底";
		t.visible = false;
		t.width = 154;
		t.y = 45.33;
		return t;
	};
	_proto.seeAnswerBtn_i = function () {
		var t = new eui.Button();
		this.seeAnswerBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 241.5;
		t.label = "";
		t.top = 571;
		t.skinName = UI1$Skin2;
		return t;
	};
	_proto.testBtn_i = function () {
		var t = new eui.Button();
		this.testBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.34;
		t.horizontalCenter = 253.5;
		t.label = "重置次数";
		t.visible = false;
		t.width = 108.66;
		t.y = 300.1;
		return t;
	};
	_proto.shareBtn_i = function () {
		var t = new eui.Button();
		this.shareBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 238.5;
		t.label = "";
		t.y = 182.28;
		t.skinName = UI1$Skin3;
		return t;
	};
	_proto.nextQstBtn_i = function () {
		var t = new eui.Button();
		this.nextQstBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 0;
		t.label = "";
		t.top = 676;
		t.skinName = UI1$Skin4;
		return t;
	};
	_proto.star_i = function () {
		var t = new eui.Image();
		this.star = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = -232;
		t.source = "main_img_star_png";
		t.top = 580;
		return t;
	};
	_proto.remainNumLabel_i = function () {
		var t = new eui.Label();
		this.remainNumLabel = t;
		t.anchorOffsetX = 0;
		t.fontFamily = "Microsoft YaHei";
		t.size = 33;
		t.text = "9";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.top = 609;
		t.width = 45.34;
		t.x = 64.4;
		return t;
	};
	_proto.msgLabel_i = function () {
		var t = new eui.Label();
		this.msgLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.text = "";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 474;
		t.x = 104;
		t.y = 330;
		return t;
	};
	_proto.questionLabel_i = function () {
		var t = new eui.Label();
		this.questionLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 252.24;
		t.horizontalCenter = 1;
		t.lineSpacing = 10;
		t.size = 33;
		t.text = "明又明，亮又亮\n一团火球挂天上\n冬天呆的时间短\n夏天呆的时间长\n（打一自然现象）";
		t.textAlign = "center";
		t.textColor = 0x483e1c;
		t.top = 272;
		t.verticalAlign = "middle";
		t.width = 361.94;
		return t;
	};
	_proto.tipLabel_i = function () {
		var t = new eui.Label();
		this.tipLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 56.66;
		t.horizontalCenter = -0.5;
		t.lineSpacing = 10;
		t.size = 25;
		t.text = "打一自然现象";
		t.textAlign = "center";
		t.textColor = 0x483E1C;
		t.top = 530;
		t.verticalAlign = "middle";
		t.width = 451.33;
		return t;
	};
	_proto.optionGroup_i = function () {
		var t = new eui.Group();
		this.optionGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 229.88;
		t.horizontalCenter = 0;
		t.width = 594.36;
		t.y = 788.63;
		t.layout = this._TileLayout1_i();
		return t;
	};
	_proto._TileLayout1_i = function () {
		var t = new eui.TileLayout();
		t.horizontalGap = 15;
		t.paddingLeft = 20;
		t.paddingTop = 5;
		t.verticalGap = 12;
		return t;
	};
	_proto.selectedCharBg0_i = function () {
		var t = new eui.Image();
		this.selectedCharBg0 = t;
		t.height = 80;
		t.source = "main_img_itembg2_png";
		t.width = 80;
		t.x = 133.05;
		t.y = 588.01;
		return t;
	};
	_proto.selectedCharBg1_i = function () {
		var t = new eui.Image();
		this.selectedCharBg1 = t;
		t.height = 80;
		t.source = "main_img_itembg2_png";
		t.width = 80;
		t.x = 228.2;
		t.y = 588.01;
		return t;
	};
	_proto.selectedCharBg2_i = function () {
		var t = new eui.Image();
		this.selectedCharBg2 = t;
		t.height = 80;
		t.source = "main_img_itembg2_png";
		t.width = 80;
		t.x = 323.35;
		t.y = 588.01;
		return t;
	};
	_proto.selectedCharBg3_i = function () {
		var t = new eui.Image();
		this.selectedCharBg3 = t;
		t.height = 80;
		t.source = "main_img_itembg2_png";
		t.width = 80;
		t.x = 418.5;
		t.y = 588.01;
		return t;
	};
	_proto.selectedChar0_i = function () {
		var t = new CharOptionButton();
		this.selectedChar0 = t;
		t.isUp = false;
		t.label = "";
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "CharButtonSkin";
		t.x = 158.65;
		t.y = 589.01;
		return t;
	};
	_proto.selectedChar1_i = function () {
		var t = new CharOptionButton();
		this.selectedChar1 = t;
		t.isUp = false;
		t.label = "";
		t.skinName = "CharButtonSkin";
		t.x = 234.65;
		t.y = 589.01;
		return t;
	};
	_proto.selectedChar2_i = function () {
		var t = new CharOptionButton();
		this.selectedChar2 = t;
		t.isUp = false;
		t.label = "";
		t.skinName = "CharButtonSkin";
		t.x = 314.65;
		t.y = 589.01;
		return t;
	};
	_proto.selectedChar3_i = function () {
		var t = new CharOptionButton();
		this.selectedChar3 = t;
		t.isUp = false;
		t.label = "";
		t.skinName = "CharButtonSkin";
		t.x = 394.65;
		t.y = 589.01;
		return t;
	};
	_proto.answerLabel_i = function () {
		var t = new eui.Label();
		this.answerLabel = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 73.33;
		t.horizontalCenter = -0.5;
		t.size = 33;
		t.text = "答案：太阳";
		t.textAlign = "center";
		t.textColor = 0x483e1c;
		t.top = 543;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 287.33;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "loading_bar2_png";
		t.verticalCenter = 0;
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.scale9Grid = new egret.Rectangle(13,0,277,27);
		t.source = "loading_bar1_png";
		t.visible = false;
		t.width = 452;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return UI1;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ui2/UI2.exml'] = window.UI = (function (_super) {
	__extends(UI, _super);
	function UI() {
		_super.call(this);
		this.skinParts = ["sendMsg"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.sendMsg_i()];
	}
	var _proto = UI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "ui2_bg_png";
		t.top = 0;
		return t;
	};
	_proto.sendMsg_i = function () {
		var t = new eui.Button();
		this.sendMsg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 246;
		t.label = "SendMsg";
		t.width = 200;
		t.x = 250;
		t.y = 754;
		return t;
	};
	return UI;
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