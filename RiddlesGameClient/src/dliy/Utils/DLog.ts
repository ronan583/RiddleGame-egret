class DLog {

    constructor() {

    }

    static getNowDate(): string {
        const date = new Date();
        let month: string | number = date.getMonth() + 1;
        let strDate: string | number = date.getDate();

        if (month <= 9) {
            month = "0" + month;
        }

        if (strDate <= 9) {
            strDate = "0" + strDate;
        }

        return date.getFullYear() + "-" + month + "-" + strDate + " "
            + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    }

    private static logMsg(msg: string) {
        if (DEBUG) {
            console.log(msg);
        }
    }

    public static log(tObj: any, ...msg: any[]) {
        let type = egret.getQualifiedClassName(tObj);
        let outputMsg = "[" + type + "] " + DLog.getNowDate() + " " + msg.join(',');
        DLog.logMsg(outputMsg);
    }

    public static logM(moduleName: string, tObj: any, ...msg: string[]) {
        let type = egret.getQualifiedClassName(tObj);
        let outputMsg = "[" + moduleName + "|" + type + "] " + DLog.getNowDate() + " " + msg.join(',');
        DLog.logMsg(outputMsg);
    }

    public static errorM(moduleName: string, tObj: any, e, ...msg: any[]) {
        let type = egret.getQualifiedClassName(tObj);
        let outputMsg = "[" + moduleName + "|" + type + "] " + DLog.getNowDate() + " " + e + msg.join(',');
        DLog.logMsg(outputMsg);

    }

    public static error(tObj: any, e, ...msg: any[]) {
        let type = egret.getQualifiedClassName(tObj);
        let outputMsg = "[" + type + "] " + DLog.getNowDate() + " " + e + msg.join(',');
        DLog.logMsg(outputMsg);
    }

}