var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var dliy;
(function (dliy) {
    var BaseUI = (function (_super) {
        __extends(BaseUI, _super);
        function BaseUI() {
            var _this = _super.call(this) || this;
            _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this);
            _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
            return _this;
        }
        BaseUI.prototype.onRemove = function () {
        };
        BaseUI.prototype.onAddToStage = function () {
        };
        BaseUI.prototype.close = function () {
            if (this.parent) {
                this.parent.removeChild(this);
            }
        };
        return BaseUI;
    }(eui.Component));
    dliy.BaseUI = BaseUI;
    __reflect(BaseUI.prototype, "dliy.BaseUI");
})(dliy || (dliy = {}));
var dliy;
(function (dliy) {
    var utils;
    (function (utils) {
        var Http = (function () {
            function Http() {
                this.loader = new egret.URLLoader();
                this.httpReq = new egret.HttpRequest();
            }
            ;
            Http.create = function () {
                return new Http();
            };
            Http.prototype.success = function (handle, thisObj) {
                if (thisObj === void 0) { thisObj = null; }
                this.httpReq.addEventListener(egret.Event.COMPLETE, function (e) {
                    var loader = e.currentTarget;
                    DLog.log(this, "req success " + loader.response);
                    handle.call(thisObj, loader.response);
                }, thisObj);
                return this;
            };
            Http.prototype.error = function (handle, thisObj) {
                if (thisObj === void 0) { thisObj = null; }
                this.httpReq.addEventListener(egret.IOErrorEvent.IO_ERROR, handle, thisObj);
                return this;
            };
            Http.prototype.add = function (source) {
                if (!this.variables) {
                    this.variables = new egret.URLVariables();
                }
                this.variables.decode(source);
                return this;
            };
            Http.prototype.dataFormat = function (dataFormat) {
                // this.httpReq. = dataFormat;
                return this;
            };
            Http.prototype.get = function (url) {
                this.httpReq.timeout = 2000;
                this.httpReq.open(url);
                this.httpReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
                this.httpReq.send();
                DLog.log(this, "request " + url);
            };
            Http.prototype.post = function (url) {
                var req = new egret.URLRequest(url);
                req.method = egret.URLRequestMethod.POST;
                this.variables && (req.data = this.variables);
                this.loader.load(req);
            };
            return Http;
        }());
        utils.Http = Http;
        __reflect(Http.prototype, "dliy.utils.Http");
    })(utils = dliy.utils || (dliy.utils = {}));
})(dliy || (dliy = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        return [4 /*yield*/, RES.getResAsync("description_json")];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, platform.login()];
                    case 3:
                        _a.sent();
                        platform.shop();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 4:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main.prototype.createGameScene = function () {
        this.init();
        dliy.DLIYMsgCenter.instance.sendMsg(game.GameNotice.LOGIN, null);
    };
    Main.prototype.init = function () {
        this.addChild(GameLayerManager.gameLayer());
        dliy.DLIYMsgCenter.instance.registerMsgHandle(game.GameNotice.LOGIN, new game.LoginCmdHandler());
        dliy.UIMng.instance.setUIProps(game.StartScene.UIName, game.StartScene.UIResGroup, game.StartScene);
        // dliy.UIMng.instance.setUIProps(game.GuessGameScene.UIName, game.GuessGameScene.UIResGroup, game.GuessGameScene);
        dliy.UIMng.instance.setUIProps(game.StoreChooseUI.UIName, game.StoreChooseUI.UIResGroup, game.StoreChooseUI);
        game.RiddleData.instance.initRiddles();
        game.GameData.instance.initGamedata();
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.getLocalStore = function (key) {
        return;
    };
    DebugPlatform.prototype.setLocalStore = function (key, value) {
    };
    DebugPlatform.prototype.removeLocalItem = function (key) {
    };
    DebugPlatform.prototype.shop = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DebugPlatform.prototype.shareAppMessage = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    DebugPlatform.prototype.onWxShow = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        var _this = this;
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else if (typeof generateEUI2 !== 'undefined') {
            RES.getResByUrl("resource/gameEui.json", function (data, url) {
                window["JSONParseClass"]["setData"](data);
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateEUI2);
                }, _this);
            }, this, RES.ResourceItem.TYPE_JSON);
        }
        else if (typeof generateJSON !== 'undefined') {
            if (url.indexOf(".exml") > -1) {
                var dataPath = url.split("/");
                dataPath.pop();
                var dirPath = dataPath.join("/") + "_EUI.json";
                if (!generateJSON.paths[url]) {
                    RES.getResByUrl(dirPath, function (data) {
                        window["JSONParseClass"]["setData"](data);
                        egret.callLater(function () {
                            onSuccess.call(thisObject, generateJSON.paths[url]);
                        }, _this);
                    }, this, RES.ResourceItem.TYPE_JSON);
                }
                else {
                    egret.callLater(function () {
                        onSuccess.call(thisObject, generateJSON.paths[url]);
                    }, this);
                }
            }
            else {
                egret.callLater(function () {
                    onSuccess.call(thisObject, generateJSON);
                }, this);
            }
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var dliy;
(function (dliy) {
    /**
     * 不适用MVC  直接使用一个简单的消息通知处理
     */
    var DLIYMsgCenter = (function () {
        function DLIYMsgCenter() {
            this.msgHandlerMap = {};
            this.msgFuncMap = {};
        }
        Object.defineProperty(DLIYMsgCenter, "instance", {
            get: function () {
                if (!DLIYMsgCenter._instance)
                    DLIYMsgCenter._instance = new DLIYMsgCenter();
                return DLIYMsgCenter._instance;
            },
            enumerable: true,
            configurable: true
        });
        DLIYMsgCenter.prototype.registerMsgHandle = function (msg, msgHandler) {
            this.msgHandlerMap[msg] = msgHandler;
        };
        DLIYMsgCenter.prototype.registerMsgFunc = function (msg, msgFunc, msgFuncCaller) {
            this.msgFuncMap[msg] = { f: msgFunc, c: msgFuncCaller };
        };
        DLIYMsgCenter.prototype.removeMsg = function (msg) {
            if (this.msgHandlerMap[msg]) {
                this.msgHandlerMap[msg] = null;
                delete this.msgHandlerMap[msg];
            }
            if (this.msgFuncMap[msg]) {
                this.msgFuncMap[msg] = null;
                delete this.msgFuncMap[msg];
            }
        };
        DLIYMsgCenter.prototype.sendMsg = function (msg, data) {
            try {
                if (this.msgHandlerMap[msg]) {
                    this.msgHandlerMap[msg].handle(msg, data);
                }
            }
            catch (e) {
                DLog.errorM('DLIYCenter', this, e);
            }
            try {
                if (this.msgFuncMap[msg]) {
                    var obj = this.msgFuncMap[msg];
                    if (obj && obj.f && obj.c) {
                        obj.f.call(obj.c, data);
                    }
                }
            }
            catch (e) {
                DLog.errorM('DLIYCenter', this, e);
            }
        };
        return DLIYMsgCenter;
    }());
    dliy.DLIYMsgCenter = DLIYMsgCenter;
    __reflect(DLIYMsgCenter.prototype, "dliy.DLIYMsgCenter");
})(dliy || (dliy = {}));
var game;
(function (game) {
    var GameNotice = (function () {
        function GameNotice() {
        }
        GameNotice.LOGIN = "LOGIN";
        GameNotice.SHOW_GAME_SCENE = "SHOW_GAME_SCENE";
        GameNotice.SHOW_CHOOSE_SCENE = "SHOW_CHOOSE_SCENE";
        GameNotice.UI1_SHOW_MSG = "UI1_SHOW_MSG";
        GameNotice.REFRESH_REMAIN = "REFRESH_REMAIN";
        GameNotice.PLUS_REMAIN = "PLUS_REMAIN";
        GameNotice.CHAR_SELECT_TAP = "CHAR_SELECT_TAP";
        GameNotice.CHAR_CANCEL_TAP = "CHAR_CANCEL_TAP";
        GameNotice.SET_GAME_STORE = "SET_GAME_STORE";
        return GameNotice;
    }());
    game.GameNotice = GameNotice;
    __reflect(GameNotice.prototype, "game.GameNotice");
})(game || (game = {}));
var game;
(function (game) {
    var LoginCmdHandler = (function () {
        function LoginCmdHandler() {
        }
        LoginCmdHandler.prototype.handle = function (msg, data) {
            // 显示UI1
            dliy.UIMng.instance.showUI(game.StartScene.UIName);
        };
        return LoginCmdHandler;
    }());
    game.LoginCmdHandler = LoginCmdHandler;
    __reflect(LoginCmdHandler.prototype, "game.LoginCmdHandler", ["dliy.IMsgHandler"]);
})(game || (game = {}));
var CommonUtil;
(function (CommonUtil) {
    function RandomRange(min, max) {
        return (max - min) * Math.random() + min;
    }
    CommonUtil.RandomRange = RandomRange;
    function RandomRangeInt(min, max) {
        return Math.floor((max - min) * Math.random() + min);
    }
    CommonUtil.RandomRangeInt = RandomRangeInt;
    function shuffleArr(arr) {
        for (var i = 1; i < arr.length; i++) {
            var random = Math.floor(Math.random() * (i + 1));
            _a = [arr[random], arr[i]], arr[i] = _a[0], arr[random] = _a[1];
        }
        var _a;
    }
    CommonUtil.shuffleArr = shuffleArr;
    function TimeStampToDateHM(stamp) {
        var date = new Date(stamp);
        var min = "";
        if (date.getMinutes() / 10 < 1) {
            min = "0" + date.getMinutes();
        }
        else {
            min = date.getMinutes() + "";
        }
        return (date.getHours() + ":" + min);
    }
    CommonUtil.TimeStampToDateHM = TimeStampToDateHM;
    /**
     * 汉字长度2，字符长度1
     */
    function sizeOf(str) {
        var size = 0;
        if (str == null || str.length == 0) {
            return size;
        }
        for (var i = 0; i < str.length; i++) {
            var c = str.charAt(i);
            if (/^[\u0000-\u00ff]$/.test(c)) {
                size += 1;
            }
            else {
                size += 2;
            }
        }
        return size;
    }
    CommonUtil.sizeOf = sizeOf;
    /**
     * 缩略字符串
     * @param 指定字符串
     * @param 超过len长度则缩略
     */
    function omittStr(str, len) {
        if (str == null || str.length == 0) {
            return str;
        }
        if (sizeOf(str) > len) {
            return (str.slice(0, len - 2) + "...");
        }
        return str;
    }
    CommonUtil.omittStr = omittStr;
    function base64ToUint8(base64Data) {
        var array = egret.Base64Util.decode(base64Data);
        var uint8 = new Uint8Array(array);
        return uint8;
    }
    CommonUtil.base64ToUint8 = base64ToUint8;
    function Uint8ArrayToString(fileData) {
        var dataString = "";
        for (var i = 0; i < fileData.length; i++) {
            dataString += String.fromCharCode(fileData[i]);
        }
        return dataString;
    }
    CommonUtil.Uint8ArrayToString = Uint8ArrayToString;
    function getSuffix(name) {
        var lastIdx = name.lastIndexOf(".");
        var suffix = "";
        if (lastIdx > -1) {
            suffix = name.substring(lastIdx + 1);
            return suffix;
        }
        else {
            return null;
        }
    }
    CommonUtil.getSuffix = getSuffix;
})(CommonUtil || (CommonUtil = {}));
var DLog = (function () {
    function DLog() {
    }
    DLog.getNowDate = function () {
        var date = new Date();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month <= 9) {
            month = "0" + month;
        }
        if (strDate <= 9) {
            strDate = "0" + strDate;
        }
        return date.getFullYear() + "-" + month + "-" + strDate + " "
            + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
    DLog.logMsg = function (msg) {
        if (true) {
            console.log(msg);
        }
    };
    DLog.log = function (tObj) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        var type = egret.getQualifiedClassName(tObj);
        var outputMsg = "[" + type + "] " + DLog.getNowDate() + " " + msg.join(',');
        DLog.logMsg(outputMsg);
    };
    DLog.logM = function (moduleName, tObj) {
        var msg = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            msg[_i - 2] = arguments[_i];
        }
        var type = egret.getQualifiedClassName(tObj);
        var outputMsg = "[" + moduleName + "|" + type + "] " + DLog.getNowDate() + " " + msg.join(',');
        DLog.logMsg(outputMsg);
    };
    DLog.errorM = function (moduleName, tObj, e) {
        var msg = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            msg[_i - 3] = arguments[_i];
        }
        var type = egret.getQualifiedClassName(tObj);
        var outputMsg = "[" + moduleName + "|" + type + "] " + DLog.getNowDate() + " " + e + msg.join(',');
        DLog.logMsg(outputMsg);
    };
    DLog.error = function (tObj, e) {
        var msg = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            msg[_i - 2] = arguments[_i];
        }
        var type = egret.getQualifiedClassName(tObj);
        var outputMsg = "[" + type + "] " + DLog.getNowDate() + " " + e + msg.join(',');
        DLog.logMsg(outputMsg);
    };
    return DLog;
}());
__reflect(DLog.prototype, "DLog");
/**
  * 游戏配置文件
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 存放游戏的配置数据
  * 比如：游戏界面尺寸、分享随机百分比、获取系统数据
  */
var GameConfig;
(function (GameConfig) {
    //是否在线
    GameConfig.isOnLine = false;
    //全局字体颜色表--可以扩展
    GameConfig.TextColors = {
        white: 0xFFFFFF,
        milkWhite: 0xfbf1af,
        grayWhite: 0xceb6a2,
        yellow: 0xffff00,
        lightYellow: 0xffd375,
        orangeYellow: 0xff9900,
        red: 0xf11300,
        green: 0x00e500,
        blue: 0x1a94d7,
        grayBlue: 0x2f5177,
        purple: 0xe938f2,
        pink: 0xFF3030,
        black: 0x2e2d2d,
        golden: 0xFFD700 //金色
    };
    //全局字体大小表--可以扩展
    GameConfig.LabelFontSize = {
        littleSize: 12,
        middleSize: 18,
        normalSize: 24,
        bigSize: 36 //大型字体大小
    };
    //是不是微信浏览
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        var microStr = "" + ua.match(/MicroMessenger/i);
        if (microStr == "null") {
            return false;
        }
        else if (microStr == "micromessenger") {
            return true;
        }
    }
    GameConfig.isWeiXin = isWeiXin;
    //是不是大屏
    function isBigScreen() {
        return (document.body.clientHeight / document.body.clientWidth > 1.32);
    }
    GameConfig.isBigScreen = isBigScreen;
    //获得浏览器类型 pc android ios -- 可扩展为其他 如 微信、qqzone、qq、微博、校内、facebook
    function systemType() {
        var ua = window.navigator.userAgent.toLowerCase();
        var microStr = "" + ua.match(/MicroMessenger/i);
        if (("" + ua.match(/windows nt/i)) == "windows nt") {
            return "windows";
        }
        else if (("" + ua.match(/iphone/i)) == "iphone") {
            return "ios";
        }
        else if (("" + ua.match(/android/i)) == "android") {
            return "android";
        }
        else if (("" + ua.match(/ipad/i)) == "ipad") {
            return "ipad";
        }
        else if (("" + ua.match(/linux/i)) == "linux") {
            return "linux";
        }
        else if (("" + ua.match(/mac/i)) == "mac") {
            return "mac";
        }
        else if (("" + ua.match(/ucbrower/i)) == "ucbrower") {
            return "ucbrower";
        }
        else {
            console.log("未知系统类型");
        }
    }
    GameConfig.systemType = systemType;
    //获得平台类型 如 微信、qqzone、qq、微博、校内、facebook
    function platformType() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (("" + ua.match(/micromessenger/i)) == "micromessenger") {
            return "micromessenger";
        }
        else if (("" + ua.match(/qzone/i)) == "qzone") {
            return "qzone";
        }
        else if (("" + ua.match(/weibo/i)) == "weibo") {
            return "weibo";
        }
        else if (("" + ua.match(/qq/i)) == "qq") {
            return "qq";
        }
        else if (("" + ua.match(/renren/i)) == "renren") {
            return "renren";
        }
        else if (("" + ua.match(/txmicroblog/i)) == "txmicroblog") {
            return "txmicroblog";
        }
        else if (("" + ua.match(/douban/i)) == "douban") {
            return "douban";
        }
        else {
            return "other";
        }
    }
    GameConfig.platformType = platformType;
    //当前舞台
    function curStage() {
        return egret.MainContext.instance.stage;
    }
    GameConfig.curStage = curStage;
    //当前游戏宽度
    function curWidth() {
        var width = egret.MainContext.instance.stage.stageWidth;
        if (width > 1624) {
            return 1624;
        }
        return width;
    }
    GameConfig.curWidth = curWidth;
    //当前游戏宽度
    function curHeight() {
        return egret.MainContext.instance.stage.stageHeight;
    }
    GameConfig.curHeight = curHeight;
})(GameConfig || (GameConfig = {}));
var dliy;
(function (dliy) {
    var HashMap = (function (_super) {
        __extends(HashMap, _super);
        function HashMap() {
            return _super.call(this) || this;
        }
        /**
         * 加入数据
         * @param key 键
         * @param value 值
         */
        HashMap.prototype.put = function (key, value) {
            this[key] = value;
        };
        /**
         * 获得数据
         * @param key 键
         */
        HashMap.prototype.get = function (key) {
            return this[key];
        };
        /**
         * 移除数据
         * @param key 键
         */
        HashMap.prototype.remove = function (key) {
            var value = this[key];
            if (value) {
                delete this[key];
            }
            return value;
        };
        /**
         * 是否存在
         * @param key 键
         */
        HashMap.prototype.contains = function (key) {
            return this[key] != null;
        };
        /**
         * 获得所有键值
         */
        HashMap.prototype.keys = function () {
            var keys = Object.keys(this);
            var index = keys.indexOf("$hashCode");
            if (index > -1) {
                keys.splice(index, 1);
            }
            return keys;
        };
        HashMap.prototype.sortIntKeys = function () {
            var keys = Object.keys(this);
            var index = keys.indexOf("$hashCode");
            if (index > -1) {
                keys.splice(index, 1);
            }
            var intKeys = new Array();
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var keyStr = keys_1[_i];
                intKeys.push(parseInt(keyStr));
            }
            intKeys.sort(function (a, b) {
                return a - b;
            });
            return intKeys;
        };
        HashMap.prototype.size = function () {
            return this.keys().length;
        };
        /**
         * 清空
         */
        HashMap.prototype.clear = function () {
            var keys = this.keys();
            var len = keys.length;
            for (var i = 0; i < len; i++) {
                this.remove(keys[i]);
            }
        };
        return HashMap;
    }(egret.HashObject));
    dliy.HashMap = HashMap;
    __reflect(HashMap.prototype, "dliy.HashMap");
})(dliy || (dliy = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
/**
  * 游戏容器类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * EgerPro显示对象层级
  * Main-GameScene（sceneLayer、mainLayer、popLayer、effectLayer、maskLayer、loadLayer）
  *
  */
var GameLayerManager = (function (_super) {
    __extends(GameLayerManager, _super);
    //构造方法
    function GameLayerManager() {
        var _this = _super.call(this) || this;
        // 场景层 如 战场、主城、副本战场之类的
        _this.loginLayer = new eui.UILayer();
        // 主UI层 如 底部功能栏
        _this.mainLayer = new eui.UILayer();
        // 加载遮罩层 场景切换的时候加载资源UI
        _this.battleLayer = new eui.UILayer();
        // 弹窗层 如 设置、背包、装备之类的
        _this.panelLayer = new eui.UILayer();
        // 特效层 如 闪烁、飘字之类的
        _this.effectLayer = new eui.UILayer();
        // 通讯遮罩层 和服务器通讯UI
        _this.maskLayer = new eui.UILayer();
        // 加载遮罩层 场景切换的时候加载资源UI
        _this.loadLayer = new eui.UILayer();
        _this.init();
        return _this;
    }
    //游戏容器管理器单例
    GameLayerManager.gameLayer = function () {
        if (!this._instance)
            this._instance = new GameLayerManager();
        return this._instance;
    };
    //初始化场景类
    GameLayerManager.prototype.init = function () {
        this.touchThrough = true;
        this.loginLayer.touchThrough = true;
        this.mainLayer.touchThrough = true;
        this.panelLayer.touchThrough = true;
        this.effectLayer.touchThrough = true;
        this.maskLayer.touchThrough = true;
        this.loadLayer.touchThrough = true;
        this.battleLayer.touchThrough = true;
        this.addChild(this.loginLayer);
        this.addChild(this.mainLayer);
        this.addChild(this.battleLayer);
        this.addChild(this.panelLayer);
        this.addChild(this.effectLayer);
        this.addChild(this.maskLayer);
        this.addChild(this.loadLayer);
    };
    GameLayerManager.prototype.removePanelLayer = function () {
        this.panelLayer.removeChildren();
    };
    return GameLayerManager;
}(eui.UILayer));
__reflect(GameLayerManager.prototype, "GameLayerManager");
/**
  * 面板弹出管理类
  * by dily
  * (c) copyright 2014 - 2035
  * All Rights Reserved.
  * 面板弹出的管理类
  */
var PopUpManager;
(function (PopUpManager) {
    /**
    * 添加面板方法
    * panel       		面板
    * dark        		背景是否变黑
    * popUpWidth      	指定弹窗宽度，定位使用
    * popUpHeight      	指定弹窗高度，定位使用
    * effectType        0：没有动画 1:从中间轻微弹出 2：从中间猛烈弹出  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    function addPopUp(panel, dark, popUpWidth, popUpHeight, effectType, isAlert) {
        if (dark === void 0) { dark = false; }
        if (popUpWidth === void 0) { popUpWidth = 0; }
        if (popUpHeight === void 0) { popUpHeight = 0; }
        if (effectType === void 0) { effectType = 0; }
        if (isAlert === void 0) { isAlert = false; }
        if (GameLayerManager.gameLayer().panelLayer.contains(panel)) {
            return;
        }
        panel.scaleX = 1;
        panel.scaleY = 1;
        panel.x = 0;
        panel.y = 0;
        panel.alpha = 1;
        if (dark) {
            this.darkSprite = new egret.Sprite();
            this.darkSprite.graphics.clear();
            this.darkSprite.graphics.beginFill(0x000000, 0.5);
            this.darkSprite.graphics.drawRect(0, 0, GameConfig.curWidth(), GameConfig.curHeight());
            this.darkSprite.graphics.endFill();
            this.darkSprite.width = GameConfig.curWidth();
            this.darkSprite.height = GameConfig.curHeight();
            panel["dark"] = this.darkSprite;
            // if(!GameLayerManager.gameLayer().panelLayer.contains(this.darkSprite)){
            GameLayerManager.gameLayer().panelLayer.addChild(this.darkSprite);
            // }
            this.darkSprite.touchEnabled = true;
            egret.Tween.get(this.darkSprite).to({ alpha: 1 }, 150);
            this.darkSprite.visible = true;
        }
        GameLayerManager.gameLayer().panelLayer.addChild(panel);
        GameConfig.curPanel = panel;
        if (popUpWidth != 0) {
            panel.x = GameConfig.curWidth() / 2 - popUpWidth / 2;
            panel.y = GameConfig.curHeight() / 2 - popUpHeight / 2;
        }
        else {
            popUpWidth = panel.width;
            popUpHeight = panel.height;
        }
        if (panel["title"] != null) {
            panel["title"].alpha = 0;
            panel["title"].scaleX = 0.5;
            panel["title"].scaleY = 0.5;
            egret.Tween.get(panel["title"]).to({ alpha: 1, scaleX: 1, scaleY: 1 }, 400, egret.Ease.backOut);
        }
        //以下是弹窗动画
        var leftX = GameConfig.curWidth() / 2 - popUpWidth / 2;
        var upY = GameConfig.curHeight() / 2 - popUpHeight / 2;
        switch (effectType) {
            case 0:
                break;
            case 1:
                panel.alpha = 0;
                panel.scaleX = 0.5;
                panel.scaleY = 0.5;
                panel.x = panel.x + popUpWidth / 4;
                panel.y = panel.y + popUpHeight / 4;
                egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 350, egret.Ease.backOut);
                break;
            case 2:
                panel.alpha = 0;
                panel.scaleX = 0.5;
                panel.scaleY = 0.5;
                panel.x = panel.x + popUpWidth / 4;
                panel.y = panel.y + popUpHeight / 4;
                egret.Tween.get(panel).to({ alpha: 1, scaleX: 1, scaleY: 1, x: panel.x - popUpWidth / 4, y: panel.y - popUpHeight / 4 }, 600, egret.Ease.elasticOut);
                break;
            case 3:
                if (isAlert) {
                    panel.x = -popUpWidth;
                    egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.x = -popUpWidth;
                    egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 4:
                if (isAlert) {
                    panel.x = popUpWidth;
                    egret.Tween.get(panel).to({ x: leftX }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.x = popUpWidth;
                    egret.Tween.get(panel).to({ x: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 5:
                if (isAlert) {
                    panel.y = -popUpHeight;
                    egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.y = -popUpHeight;
                    egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            case 6:
                if (isAlert) {
                    panel.y = GameConfig.curHeight();
                    egret.Tween.get(panel).to({ y: upY }, 500, egret.Ease.cubicOut);
                }
                else {
                    panel.y = popUpHeight;
                    egret.Tween.get(panel).to({ y: 0 }, 500, egret.Ease.cubicOut);
                }
                break;
            default:
                break;
        }
    }
    PopUpManager.addPopUp = addPopUp;
    /**
    * 移除面板方法
    * panel       		面板
    * effectType        0：没有动画 1:从中间缩小消失 2：  3：从左向右 4：从右向左 5、从上到下 6、从下到上
    */
    function removePopUp(panel, effectType) {
        if (effectType === void 0) { effectType = 0; }
        var onComplete = function () {
            if (GameLayerManager.gameLayer().panelLayer.contains(panel["dark"])) {
                GameLayerManager.gameLayer().panelLayer.removeChild(panel["dark"]);
            }
        };
        if (panel["dark"] != null) {
            egret.Tween.get(panel["dark"]).to({ alpha: 0 }, 100).call(onComplete, this);
        }
        var remove = function () {
            //以下是弹窗动画
            switch (effectType) {
                case 0:
                    break;
                case 1:
                    egret.Tween.get(panel).to({ alpha: 0, scaleX: 0, scaleY: 0, x: panel.x + panel.width / 2, y: panel.y + panel.height / 2 }, 300);
                    break;
                case 2:
                    break;
                case 3:
                    egret.Tween.get(panel).to({ x: panel.width }, 500, egret.Ease.cubicOut);
                    break;
                case 4:
                    egret.Tween.get(panel).to({ x: -panel.width }, 500, egret.Ease.cubicOut);
                    break;
                case 5:
                    egret.Tween.get(panel).to({ y: panel.height }, 500, egret.Ease.cubicOut);
                    break;
                case 6:
                    egret.Tween.get(panel).to({ y: -panel.height }, 500, egret.Ease.cubicOut);
                    break;
                default:
                    break;
            }
            var waitTime = 500;
            if (effectType == 0) {
                waitTime = 0;
            }
            egret.setTimeout(function () {
                if (GameLayerManager.gameLayer().panelLayer.contains(panel)) {
                    GameLayerManager.gameLayer().panelLayer.removeChild(panel);
                }
                onComplete();
            }, this, waitTime);
        };
        if (panel["title"] != null) {
            egret.Tween.get(panel["title"]).to({
                alpha: 0, scaleX: 0.5, scaleY: 0.5, x: panel["title"].x +
                    panel["title"].width / 2, y: panel["title"].y + panel["title"].height / 2
            }, 80).call(function () {
                remove();
            });
        }
        else {
            remove();
        }
    }
    PopUpManager.removePopUp = removePopUp;
})(PopUpManager || (PopUpManager = {}));
var ToastAnim = (function (_super) {
    __extends(ToastAnim, _super);
    function ToastAnim() {
        var _this = _super.call(this) || this;
        _this.TIME = 800;
        _this.skinName = "resource/eui_skins/common/ToastAnimUISkin.exml";
        return _this;
    }
    ToastAnim.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    ToastAnim.showToast = function (animType) {
        if (ToastAnim.instance == null) {
            ToastAnim.instance = new ToastAnim();
        }
        GameLayerManager.gameLayer().effectLayer.addChild(ToastAnim.instance);
        ToastAnim.instance.animImage.source = animType;
        ToastAnim.instance.updateToast();
        var p = ToastAnim.instance.effectExec();
        return p;
    };
    ToastAnim.prototype.updateToast = function () {
        this.animImage.width = this.animImage.texture.textureWidth;
        this.animImage.height = this.animImage.texture.textureHeight;
        this.animImage.anchorOffsetX = this.animImage.width / 2;
        this.animImage.anchorOffsetY = this.animImage.height / 2;
        this.animImage.horizontalCenter = this.animImage.verticalCenter = 0;
        this.horizontalCenter = 0;
        this.verticalCenter = 0;
    };
    ToastAnim.prototype.effectExec = function () {
        var self = this;
        return new Promise(function (resolve) {
            self.animImage.alpha = 0.5;
            self.animImage.scaleX = self.animImage.scaleY = 0.5;
            egret.Tween.get(self.animImage)
                .to({ alpha: 1, scaleX: 1.2, scaleY: 1.2 }, 200)
                .to({ alpha: 1, scaleX: 0.95, scaleY: 0.95 }, 100)
                .to({ alpha: 1, scaleX: 1, scaleY: 1 }, 100)
                .wait(self.TIME).to({ alpha: 0 }, 200)
                .call(function () {
                self.removeToast();
                resolve();
            }, self);
        });
    };
    ToastAnim.prototype.removeToast = function () {
        if (GameLayerManager.gameLayer().effectLayer.contains(this)) {
            GameLayerManager.gameLayer().effectLayer.removeChild(this);
        }
    };
    return ToastAnim;
}(eui.Component));
__reflect(ToastAnim.prototype, "ToastAnim", ["eui.UIComponent", "egret.DisplayObject"]);
var Anim_Type = (function () {
    function Anim_Type() {
    }
    Anim_Type.bingo = "main_img_right_png";
    Anim_Type.wrong_answer = "main_img_wrong_png";
    return Anim_Type;
}());
__reflect(Anim_Type.prototype, "Anim_Type");
var ToastUI = (function (_super) {
    __extends(ToastUI, _super);
    function ToastUI() {
        var _this = _super.call(this) || this;
        _this.time = 1500;
        _this.skinName = "resource/eui_skins/common/ToastUISkin.exml";
        return _this;
    }
    ToastUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    ToastUI.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ToastUI.showToast = function (msg) {
        if (ToastUI.instance == null) {
            ToastUI.instance = new ToastUI();
        }
        ToastUI.instance.message = msg;
        ToastUI.instance.updateToast();
        ToastUI.instance.effectExec();
    };
    ToastUI.prototype.updateToast = function () {
        this.horizontalCenter = 0;
        this.verticalCenter = 0;
        this.toastLabel.text = this.message;
    };
    ToastUI.prototype.effectExec = function () {
        GameLayerManager.gameLayer().effectLayer.addChild(this);
        this.alpha = 0;
        egret.Tween.get(this).to({ alpha: 0.8 }, 100).wait(this.time).to({ alpha: 0 }, 100).call(this.removeToast, this);
    };
    ToastUI.prototype.removeToast = function () {
        if (GameLayerManager.gameLayer().effectLayer.contains(this)) {
            GameLayerManager.gameLayer().effectLayer.removeChild(this);
        }
    };
    return ToastUI;
}(eui.Component));
__reflect(ToastUI.prototype, "ToastUI", ["eui.UIComponent", "egret.DisplayObject"]);
var dliy;
(function (dliy) {
    var UIMng = (function () {
        function UIMng() {
            this.uiInstanceMap = {};
            this.uiResMap = {};
            this.uiClassMap = {};
        }
        Object.defineProperty(UIMng, "instance", {
            get: function () {
                if (!UIMng._instance) {
                    UIMng._instance = new UIMng();
                }
                return UIMng._instance;
            },
            enumerable: true,
            configurable: true
        });
        UIMng.prototype.setUIProps = function (uiName, uires, clazz) {
            this.uiResMap[uiName] = uires;
            this.uiClassMap[uiName] = clazz;
        };
        UIMng.prototype.showUI = function (uiName) {
            if (!this.uiInstanceMap[uiName]) {
                // 先加载资源
                // await RES.loadGroup(this.uiResMap[uiName], 0);
                var ui = new this.uiClassMap[uiName];
                this.uiInstanceMap[uiName] = ui;
                PopUpManager.addPopUp(ui, false);
            }
            else {
                var ui = this.uiInstanceMap[uiName];
                PopUpManager.addPopUp(ui, false);
            }
        };
        UIMng.prototype.closeUI = function (uiName) {
            if (!this.uiInstanceMap[uiName]) {
                this.uiInstanceMap[uiName].close();
            }
        };
        return UIMng;
    }());
    dliy.UIMng = UIMng;
    __reflect(UIMng.prototype, "dliy.UIMng");
})(dliy || (dliy = {}));
var game;
(function (game) {
    var RiddleType = (function () {
        function RiddleType() {
        }
        RiddleType.CHENGYU = "chengyu";
        RiddleType.FILM = "film";
        RiddleType.STAR = "star";
        RiddleType.PLANT = "plant";
        RiddleType.SHUIHU = "shuihu";
        return RiddleType;
    }());
    game.RiddleType = RiddleType;
    __reflect(RiddleType.prototype, "game.RiddleType");
    var GameData = (function () {
        function GameData() {
            this.chengyuStatus = new RiddleStatus(RiddleType.CHENGYU, game.RiddleData.instance.chengyuData.length, "");
            this.filmStatus = new RiddleStatus(RiddleType.FILM, game.RiddleData.instance.filmData.length, "");
            this.starStatus = new RiddleStatus(RiddleType.STAR, game.RiddleData.instance.starData.length, "");
            this.plantStatus = new RiddleStatus(RiddleType.PLANT, game.RiddleData.instance.plantData.length, "");
            this.shuihuStatus = new RiddleStatus(RiddleType.SHUIHU, game.RiddleData.instance.shuihuData.length, "");
            this.statusArr = [this.chengyuStatus, this.filmStatus, this.starStatus, this.plantStatus, this.shuihuStatus];
        }
        Object.defineProperty(GameData, "instance", {
            get: function () {
                if (this._instance == null) {
                    this._instance = new GameData();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        GameData.prototype.initGamedata = function () {
            this.currentStore = RiddleType.CHENGYU;
            SaveData.load();
            for (var i = 0; i < 5; i++) {
                this.statusArr[i].logStatus();
            }
        };
        /**
         * 扩展解锁词汇的方法，第一次解锁100，往后解锁30，封顶为止
         */
        GameData.prototype.expandStore = function (name) {
            var status = this.getStatus(name);
            var newUnlock;
            if (status.unlockNum == 0) {
                newUnlock = status.unlockNum + GameData.BASE_NUM;
            }
            else {
                newUnlock = status.unlockNum + GameData.INCREASE_NUM;
                if (newUnlock > status.totalNum) {
                    newUnlock = status.totalNum;
                }
            }
            status.setUnlock(newUnlock);
            SaveData.save(name, newUnlock);
        };
        /**
         * 得到对应类目的词库状态
         */
        GameData.prototype.getStatus = function (name) {
            for (var i = 0; i < this.statusArr.length; i++) {
                var status_1 = this.statusArr[i];
                if (status_1.storeName == name) {
                    return status_1;
                }
            }
            return null;
        };
        GameData.prototype.getCurrentStore = function () {
        };
        GameData.BASE_NUM = 100;
        GameData.INCREASE_NUM = 30;
        GameData.nameText = [
            RiddleType.CHENGYU, RiddleType.FILM, RiddleType.STAR, RiddleType.PLANT, RiddleType.SHUIHU
        ];
        return GameData;
    }());
    game.GameData = GameData;
    __reflect(GameData.prototype, "game.GameData");
    var RiddleStatus = (function () {
        function RiddleStatus(name, num, cover) {
            this.unlockNum = 0;
            this.storeName = name;
            this.totalNum = num;
            this.coverPath = cover;
        }
        RiddleStatus.prototype.setUnlock = function (num) {
            this.unlockNum = num;
        };
        RiddleStatus.prototype.logStatus = function () {
            console.log(this);
        };
        return RiddleStatus;
    }());
    game.RiddleStatus = RiddleStatus;
    __reflect(RiddleStatus.prototype, "game.RiddleStatus");
    game.testSave = [
        { name: RiddleType.CHENGYU, unlock: "24" },
        { name: RiddleType.FILM, unlock: "24" },
        { name: RiddleType.STAR, unlock: "24" },
        { name: RiddleType.PLANT, unlock: "24" },
        { name: RiddleType.SHUIHU, unlock: "24" }
    ];
    var SaveData = (function () {
        function SaveData(name, unlock) {
            this.storeName = name;
            this.unlockNum = unlock;
        }
        SaveData.save = function (storeName, unlock) {
            var data = new Array();
            for (var i = 0; i < 5; i++) {
                var name_1 = GameData.nameText[i];
                var originUnlock = void 0;
                if (name_1 == storeName) {
                    originUnlock = unlock;
                }
                else {
                    originUnlock = GameData.instance.statusArr[i].unlockNum;
                }
                console.log("storeName, name, unlock, originUnlock", storeName, name_1, unlock, originUnlock);
                data.push({ name: name_1, unlock: originUnlock });
            }
            platform.setLocalStore("unlockProgress", JSON.stringify(data));
        };
        SaveData.load = function () {
            console.log("-----------load");
            var data = platform.getLocalStore("unlockProgress");
            if (data == null || data == "") {
                for (var i = 0; i < 5; i++) {
                    if (i == 0) {
                        GameData.instance.statusArr[i].setUnlock(GameData.BASE_NUM);
                    }
                    else {
                        GameData.instance.statusArr[i].setUnlock(0);
                    }
                }
            }
            else {
                data = JSON.parse(data);
                console.log("save data is ", data);
                for (var i = 0; i < 5; i++) {
                    console.log("save data is ", data[i].unlock);
                    GameData.instance.statusArr[i].setUnlock(data[i].unlock);
                }
            }
        };
        return SaveData;
    }());
    game.SaveData = SaveData;
    __reflect(SaveData.prototype, "game.SaveData");
})(game || (game = {}));
// TypeScript file
var game;
(function (game) {
    var RiddleData = (function () {
        function RiddleData() {
            this.chengyuData = new Array();
            this.filmData = new Array();
            this.starData = new Array();
            this.plantData = new Array();
            this.shuihuData = new Array();
        }
        Object.defineProperty(RiddleData, "instance", {
            get: function () {
                if (this._instance == null) {
                    this._instance = new RiddleData();
                }
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 加载词库
         */
        RiddleData.prototype.initRiddles = function () {
            var names = RES.getRes("riddleName_json");
            var riddleAll = new Array();
            riddleAll = RES.getRes("riddle_json");
            for (var _i = 0, riddleAll_1 = riddleAll; _i < riddleAll_1.length; _i++) {
                var item = riddleAll_1[_i];
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
        };
        /**
         * 得到对应类目的词库数组
         */
        RiddleData.prototype.getRiddles = function (name) {
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
        };
        return RiddleData;
    }());
    game.RiddleData = RiddleData;
    __reflect(RiddleData.prototype, "game.RiddleData");
    var Riddle = (function () {
        function Riddle(q, t, a, idx) {
            this.question = q;
            this.tip = t;
            this.answer = a;
            this.idx = idx;
            console.log(this);
        }
        return Riddle;
    }());
    game.Riddle = Riddle;
    __reflect(Riddle.prototype, "game.Riddle");
})(game || (game = {}));
var game;
(function (game) {
    var StartScene = (function (_super) {
        __extends(StartScene, _super);
        function StartScene() {
            var _this = _super.call(this) || this;
            _this.readyDownTime = 3;
            _this.gameDownTime = 99;
            _this.totalNum = 0;
            _this.shownNum = 0;
            _this.bingoNum = 0;
            _this.bingoPer = 0;
            _this.storeNamePath = {
                chengyu: "main_type_chengyu_png",
                film: "main_type_film_png",
                star: "main_type_star_png",
                plant: "main_type_plant_png",
                shuihu: "main_type_shuihu_png"
            };
            _this.tt = 0;
            _this.skinName = "resource/eui_skins/game/StartSceneSkin.exml";
            dliy.DLIYMsgCenter.instance.registerMsgFunc(game.GameNotice.SET_GAME_STORE, _this.initStore, _this);
            return _this;
        }
        Object.defineProperty(StartScene, "UIName", {
            get: function () {
                return "game.StartScene";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StartScene, "UIResGroup", {
            get: function () {
                return "GameStartScene";
            },
            enumerable: true,
            configurable: true
        });
        StartScene.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.startBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGameTap, this);
            this.changeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChangeStoreTap, this);
            this.bingoBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBingoTap, this);
            this.skipBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSkipTap, this);
            this.againBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartGameTap, this);
            this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShareTap, this);
            this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBackTap, this);
            this.createCountdown();
            this.initStore();
        };
        StartScene.prototype.partAdded = function (partName, instance) {
            _super.prototype.partAdded.call(this, partName, instance);
            instance.name = partName;
        };
        StartScene.prototype.initStore = function () {
            this.showScenePart(GamePart.START);
            var store = game.GameData.instance.currentStore;
            this.storeName.source = this.storeNamePath[store];
            this.getCurrRiddleArr(store);
        };
        StartScene.prototype.createCountdown = function () {
            this.gameCountdown = new game.CountdownTimer();
            this.readyCountdown = new game.CountdownTimer();
            this.gameCountdown.setTimer(this.gameCountLabel, this.endGame, this);
            this.readyCountdown.setTimer(this.readyCountLabel, this.startGame, this);
            this.gameCountdown.stop();
            this.readyCountdown.stop();
        };
        StartScene.prototype.onChangeStoreTap = function () {
            dliy.UIMng.instance.showUI(game.StoreChooseUI.UIName);
        };
        StartScene.prototype.onStartGameTap = function () {
            this.initSceneData();
            this.showScenePart(GamePart.READY);
            this.readyCountdown.startCountdown(this.readyDownTime);
        };
        StartScene.prototype.initSceneData = function () {
            this.shownNum = 0;
            this.bingoNum = 0;
        };
        StartScene.prototype.initUI = function () {
            this.contentLabel.text = "";
            this.gameCountLabel.text = "";
        };
        StartScene.prototype.startGame = function () {
            this.showScenePart(GamePart.GAME);
            this.gameCountdown.startCountdown(this.gameDownTime);
            this.showNextRiddle();
            this.shownNum++;
        };
        StartScene.prototype.getCurrRiddleArr = function (name) {
            var unlock = game.GameData.instance.getStatus(name).unlockNum;
            var riddles = game.RiddleData.instance.getRiddles(name);
            this.currRiddleArr = riddles.slice(0, unlock);
            this.totalNum = unlock;
            CommonUtil.shuffleArr(this.currRiddleArr);
        };
        StartScene.prototype.showNextRiddle = function () {
            if (this.shownNum >= this.totalNum) {
                this.endGame();
                return;
            }
            var riddle = this.currRiddleArr[this.shownNum];
            this.contentLabel.text = riddle.content;
        };
        StartScene.prototype.onBingoTap = function () {
            var now = egret.getTimer();
            if (now - this.tt < 400) {
                console.log("点击过于频繁");
                return;
            }
            else {
                this.tt = now;
                this.doBingo();
            }
        };
        StartScene.prototype.doBingo = function () {
            this.showNextRiddle();
            this.shownNum++;
            this.bingoNum++;
            this.testLog();
        };
        StartScene.prototype.onSkipTap = function () {
            var now = egret.getTimer();
            if (now - this.tt < 400) {
                console.log("点击过于频繁");
                return;
            }
            else {
                this.tt = now;
                this.doSkip();
            }
        };
        StartScene.prototype.doSkip = function () {
            this.showNextRiddle();
            this.shownNum++;
            this.testLog();
        };
        StartScene.prototype.onBackTap = function () {
            this.showScenePart(GamePart.START);
            this.initSceneData();
            this.initUI();
        };
        StartScene.prototype.endGame = function () {
            this.gameCountdown.stop();
            this.readyCountdown.stop();
            this.showScenePart(GamePart.RESULT);
            this.setResultUI();
        };
        StartScene.prototype.showScenePart = function (type) {
            if (type == GamePart.START) {
                this.startGrp.visible = true;
                this.gameGrp.visible = false;
                this.resultGrp.visible = false;
                this.titleImg.visible = true;
                this.backBtn.visible = false;
            }
            if (type == GamePart.READY) {
                this.startGrp.visible = false;
                this.gameGrp.visible = true;
                this.countdownGrp.visible = true;
                this.contentGrp.visible = false;
                this.resultGrp.visible = false;
                this.titleImg.visible = false;
                this.backBtn.visible = true;
            }
            if (type == GamePart.GAME) {
                this.startGrp.visible = false;
                this.gameGrp.visible = true;
                this.countdownGrp.visible = false;
                this.contentGrp.visible = true;
                this.resultGrp.visible = false;
                this.titleImg.visible = false;
                this.backBtn.visible = true;
            }
            if (type == GamePart.RESULT) {
                this.startGrp.visible = false;
                this.gameGrp.visible = false;
                this.resultGrp.visible = true;
                this.titleImg.visible = false;
                this.backBtn.visible = true;
            }
        };
        StartScene.prototype.setResultUI = function () {
            this.totalRiddle.text = this.totalNum + "";
            this.bingoRiddle.text = this.bingoNum + "";
            this.bingoPercent.text = Math.floor(this.bingoNum / this.totalNum * 100) + "%";
            var percent = 30 + (this.bingoNum - 8) * 5;
            percent = this.bingoNum > 8 ? percent : 30;
            percent = percent >= 99 ? 99 : percent;
            this.congratLabel.text = "恭喜你超越了" + percent + "%的用户";
        };
        StartScene.prototype.onShareTap = function () {
            platform.shareAppMessage();
        };
        StartScene.prototype.testLog = function () {
            console.log("--总解锁数--已查看数--答对数--");
            console.log(this.totalNum);
            console.log(this.shownNum);
            console.log(this.bingoNum);
        };
        return StartScene;
    }(dliy.BaseUI));
    game.StartScene = StartScene;
    __reflect(StartScene.prototype, "game.StartScene");
    var GamePart;
    (function (GamePart) {
        GamePart[GamePart["START"] = 0] = "START";
        GamePart[GamePart["READY"] = 1] = "READY";
        GamePart[GamePart["GAME"] = 2] = "GAME";
        GamePart[GamePart["RESULT"] = 3] = "RESULT";
    })(GamePart = game.GamePart || (game.GamePart = {}));
})(game || (game = {}));
var game;
(function (game) {
    var StoreChooseUI = (function (_super) {
        __extends(StoreChooseUI, _super);
        function StoreChooseUI() {
            var _this = _super.call(this) || this;
            _this.isCreated = false;
            _this.skinName = "resource/eui_skins/game/StoreChooseUISkin.exml";
            return _this;
        }
        Object.defineProperty(StoreChooseUI, "UIName", {
            get: function () {
                return "game.StoreChooseUI";
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(StoreChooseUI, "UIResGroup", {
            get: function () {
                return "GameStoreChooseUI";
            },
            enumerable: true,
            configurable: true
        });
        StoreChooseUI.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.coverArr = [this.cover0, this.cover1, this.cover2, this.cover3, this.cover4];
            this.infoArr = [this.info0, this.info1, this.info2, this.info3, this.info4];
            this.maskArr = [this.mask0, this.mask1, this.mask2, this.mask3, this.mask4];
            this.expandArr = [this.expand0, this.expand1, this.expand2, this.expand3, this.expand4];
            this.storeArr = new Array();
            this.testGrp.visible = false;
            this.testBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTest, this);
            for (var i = 0; i < 5; i++) {
                var store = new StoreCover();
                this.storeArr.push(store);
                store.cover = this.coverArr[i];
                store.info = this.infoArr[i];
                store.mask = this.maskArr[i];
                store.storeName = game.GameData.nameText[i];
                store.cover.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onChooseStoreTap, this);
                //test 扩展词库接口
                this.expandArr[i].addEventListener(egret.TouchEvent.TOUCH_TAP, this.onExpand, this);
            }
            this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBack, this);
            this.isCreated = true;
            this.updateStoreCover();
        };
        StoreChooseUI.prototype.onAddToStage = function () {
            if (this.isCreated) {
                this.updateStoreCover();
            }
        };
        StoreChooseUI.prototype.updateStoreCover = function () {
            console.log("------------add to stage");
            for (var i = 0; i < 5; i++) {
                var status_2 = game.GameData.instance.statusArr[i];
                var store = this.storeArr[i];
                store.isUnlock = status_2.unlockNum > 0 ? true : false;
                store.mask.visible = !store.isUnlock;
                var num = status_2.unlockNum;
                var perc = void 0;
                if (status_2.unlockNum == status_2.totalNum) {
                    perc = "(全)";
                }
                else if (status_2.unlockNum == 0) {
                    perc = "";
                }
                else {
                    perc = "(" + Math.floor(status_2.unlockNum / status_2.totalNum * 100) + "%)";
                }
                store.infoText = "词数" + num + perc;
                store.info.text = store.infoText;
            }
        };
        StoreChooseUI.prototype.onExpand = function (event) {
            var obj = event.currentTarget;
            if (obj instanceof eui.Button) {
                var idx = this.expandArr.indexOf(obj);
                game.GameData.instance.expandStore(game.GameData.nameText[idx]);
            }
            this.updateStoreCover();
            this.onTest();
        };
        StoreChooseUI.prototype.onChooseStoreTap = function (event) {
            var obj = event.currentTarget;
            if (obj instanceof eui.Image) {
                var idx = this.coverArr.indexOf(obj);
                game.GameData.instance.currentStore = game.GameData.nameText[idx];
            }
            this.close();
            dliy.UIMng.instance.showUI(game.StartScene.UIName);
            dliy.DLIYMsgCenter.instance.sendMsg(game.GameNotice.SET_GAME_STORE, null);
        };
        StoreChooseUI.prototype.onBack = function () {
            this.close();
            dliy.UIMng.instance.showUI(game.StartScene.UIName);
        };
        StoreChooseUI.prototype.onTest = function () {
            this.testGrp.visible = !this.testGrp.visible;
        };
        return StoreChooseUI;
    }(dliy.BaseUI));
    game.StoreChooseUI = StoreChooseUI;
    __reflect(StoreChooseUI.prototype, "game.StoreChooseUI");
    var StoreCover = (function () {
        function StoreCover() {
        }
        return StoreCover;
    }());
    game.StoreCover = StoreCover;
    __reflect(StoreCover.prototype, "game.StoreCover");
})(game || (game = {}));
var game;
(function (game) {
    var CountdownTimer = (function () {
        function CountdownTimer() {
            this.lastTime = -1;
        }
        CountdownTimer.prototype.setTimer = function (labelUI, func, obj) {
            this.timerLabel = labelUI;
            if (func) {
                this.endFunc = func;
                this.endObj = obj;
            }
        };
        CountdownTimer.prototype.startCountdown = function (time) {
            if (this.endTime > 0) {
                this.stop();
            }
            this.endTime = Math.floor(egret.getTimer() / 1000) + time;
            egret.startTick(this.updateTime, this);
        };
        CountdownTimer.prototype.stop = function () {
            this.endTime = 0;
            egret.stopTick(this.updateTime, this);
        };
        CountdownTimer.prototype.doEndFunc = function () {
            if (this.endFunc) {
                this.endFunc.call(this.endObj);
            }
        };
        CountdownTimer.prototype.updateTime = function (timestamp) {
            var time = this.endTime - Math.floor(timestamp / 1000);
            if (time < 0) {
                this.stop();
                this.doEndFunc();
            }
            else {
                this.lastTime = time;
                if (time)
                    this.timerLabel.text = time.toString();
            }
            return true;
        };
        return CountdownTimer;
    }());
    game.CountdownTimer = CountdownTimer;
    __reflect(CountdownTimer.prototype, "game.CountdownTimer");
})(game || (game = {}));

;window.Main = Main;