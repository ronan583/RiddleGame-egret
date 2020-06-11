module dliy {
    /**
     * 龙骨动画包装类
     */
    class DragonAnim extends eui.Component implements eui.UIComponent {
        public constructor() {
            super();
        }

        protected partAdded(partName: string, instance: any): void {
            super.partAdded(partName, instance);
        }

        protected childrenCreated(): void {
            super.childrenCreated();
            this.commonDB = new CommonDB(this.anim + "_ske_dbbin", this.anim + "_tex_json", this.anim + "_tex_png", this.defaultPlayAnim, this.isloop, this.playOnStage, this.isTouch);
            this.addChild(this.commonDB);
            this.initCommonDb();
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkTrueArea, this);
        }

        private initCommonDb() {
            if (this.aligntype == "bottom") {
                this.commonDB.y = this.height;
            } else if (this.aligntype == "middle") {
                this.commonDB.y = this.height / 2 + this.offsetY;
            }
            if (this.aligntype != 'origin') {
                this.commonDB.x = this.width / 2 + this.offsetX;
            } else {
                this.commonDB.x = this.width;
                this.commonDB.y = this.height;
            }
            if (this.aligntype == 'zero') {
                this.commonDB.x = 0;
                this.commonDB.y = 0;
            }
            if (this.isTouchByGroup) {
                this.commonDB.touchEnabled = false;
                this.commonDB.touchChildren = false;
                this.touchChildren = false;
            }
            this.commonDB.scaleX = this.commonDB.scaleY = this.animScale;
        }

        public changeAnim(anim: string) {
            if (this.commonDB && this.commonDB.parent) {
                this.commonDB.parent.removeChild(this.commonDB)
            }
            this.anim = anim;
            this.commonDB = new CommonDB(this.anim + "_ske_dbbin", this.anim + "_tex_json", this.anim + "_tex_png", this.defaultPlayAnim, this.isloop, this.playOnStage, this.isTouch);
            this.addChild(this.commonDB);
            this.initCommonDb();
        }

        /**
         * 切换动画 并把之前的放入缓存，等待下次切换。
         * @param anim 
         */
        public changeAnimWithCache(anim: string) {
            if (this.commonDB && this.commonDB.parent) {
                this.commonDB.parent.removeChild(this.commonDB);
                this.cacheDBMap[this.anim] = this.commonDB;
            }
            this.anim = anim;
            if (this.cacheDBMap[anim]) {
                this.commonDB = this.cacheDBMap[anim];
            } else {
                this.commonDB = new CommonDB(this.anim + "_ske_dbbin", this.anim + "_tex_json", this.anim + "_tex_png", this.defaultPlayAnim, this.isloop, this.playOnStage, this.isTouch);
            }
            this.addChild(this.commonDB);
            this.initCommonDb();
        }

        private checkTrueArea(e: egret.TouchEvent) {
            if (this.commonDB.animDisplay && this.commonDB.animDisplay.stage) {
                if (!this.commonDB.animDisplay.hitTestPoint(e.stageX, e.stageY, true)) {
                    e.stopImmediatePropagation();
                }
            }
        }

        public anim: string = "";
        public aligntype: string = "";
        public isloop: boolean = true;
        public playOnStage: boolean = true;
        public isTouch: boolean = true;
        public defaultPlayAnim: string = "animation";
        private commonDB: CommonDB;
        private listenerArr: Array<any> = [];
        private cacheDBMap: { [key: string]: CommonDB } = {};

        public isTouchByGroup: boolean = false;
        private _waitToPlay: boolean = false;
        public offsetX: number = 0;
        public offsetY: number = 0;
        public animScale: number = 1;

        public playerOnce(listener: Function = null, target: any = null, anim: string = null) {
            if (this.commonDB) {
                this.setLoop(false);
                if (listener) {
                    this.listenerArr.push({ listener: listener, target: target });
                    if (!this.commonDB.armature.hasEventListener(dragonBones.AnimationEvent.COMPLETE)) {
                        this.commonDB.armature.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAnimComplete, this);
                    }
                }
                if (anim != null) {
                    this.commonDB.playerAnimOnce(anim);
                } else {
                    this.commonDB.playOnce();
                }
            }
        }

        public playerTimes(listener: Function = null, target: any = null, count: number = 1, anim: string = null) {
            if (this.commonDB) {
                if (listener) {
                    this.listenerArr.push({ listener: listener, target: target });
                    if (!this.commonDB.armature.hasEventListener(dragonBones.AnimationEvent.COMPLETE)) {
                        this.commonDB.armature.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAnimComplete, this);
                    }
                }
                if (anim != null) {
                    this.commonDB.playerAnimOnce(anim, count);
                } else {
                    this.commonDB.playOnce(count);
                }
            }
        }

        private onAnimComplete() {
            for (let d of this.listenerArr) {
                d.listener.call(d.target);
            }
            this.listenerArr = [];
            this.commonDB.armature.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAnimComplete, this);
        }

        public playerAnimOnce(anim: string, count: number = 1) {
            if (this.commonDB) this.commonDB.playerAnimOnce(anim);
        }

        public playAnim(anim: string) {
            if (this.commonDB) this.commonDB.playAnim(anim);
        }

        public play() {
            if (this.commonDB) {
                this.commonDB.play();
            }
        }

        public showFrame(anim: string, frame: number) {
            if (this.commonDB) this.commonDB.showFrame(anim, frame);
        }

        public playFromFrame(frame: number) {
            if (this.commonDB) this.commonDB.playFromFrame(frame);
        }

        public playFromProgress(progress: number) {
            if (this.commonDB) this.commonDB.playFromProgress(progress);
        }

        public showProgress(progress: number, anim: string = "") {
            if (this.commonDB) this.commonDB.showProgress(progress, anim);
        }

        public getDB(): CommonDB {
            return this.commonDB;
        }

        private frameBinds: Array<Function> = [];
        public bindFrameHandler(func: Function, funcObj: any, frame: string) {
            function onFrame(e: dragonBones.FrameEvent) {
                if (e.frameLabel == frame) {
                    func.call(funcObj);
                }
            }
            this.commonDB.armature.addEventListener(dragonBones.EgretEvent.FRAME_EVENT, onFrame, this);
            this.frameBinds.push(onFrame);
        }

        public stop() {
            if (this.commonDB) {
                this.commonDB.stop();
                this.clearAllListener();
            }
        }

        public setLoop(v: boolean) {
            this.isloop = v;
            if (this.commonDB) this.commonDB.isloop = v;
        }

        public clearAllListener() {
            this.listenerArr = [];
            this.commonDB.armature.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.onAnimComplete, this);
            for (let f of this.frameBinds) {
                this.commonDB.armature.removeEventListener(dragonBones.EgretEvent.FRAME_EVENT, f, this);
            }
        }

    }
}