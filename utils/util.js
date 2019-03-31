// 全局方法
const _public = {
    /**
     * 日期格式化.
     * @param {Date} date 日期.
     * @param {String} fmt 时间格式.
     * @returns {String} fmt 格式化后的时间.
     */
    // formatDate(date, 'yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
    // formatDate(date, 'yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
    formatDate(date, fmt) {
        let o = {
            'M+': date.getMonth() + 1, // 月份
            'd+': date.getDate(), // 日
            'h+': date.getHours(), // 小时
            'm+': date.getMinutes(), // 分
            's+': date.getSeconds(), // 秒
            'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
            'S': date.getMilliseconds() // 毫秒
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (let k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }
        }
        return fmt;
    },
    /**
     * 年月日时分格式化加横杠、空格、冒号.
     * @param {String} date 日期.
     * @returns {String} result yyyy-MM-dd HH:mm.
     */
    formatDateByDash(date) {
        let result = '';
        let year = date.substr(0, 4);
        let month = date.substr(4, 2);
        let day = date.substr(6, 2);
        let hour = date.substr(8, 2);
        let minute = date.substr(10, 2);
        result = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        return result;
    },
    /**
     * 年月日时分格式化不加任何连接符.
     * @param {String} date 日期.
     * @returns {String} yyyyMMddHHmm.
     */
    formatDateByEmpty(date) {
        return date.replace(/\-|\s|:/g, '');
    },
    /**
     * 在原有的日期上增加或减少n天.
     * @param {Date} inDate 传入的日期.
     * @param {Number} dayNum 增加或减少的天数.
     * @returns {String} 增加或减少的天数.
     */
    changeDay(inDate, dayNum) {
        if (!dayNum && dayNum !== 0) {
            dayNum = 1;
        }
        let outDate = new Date(inDate);
        outDate.setDate(outDate.getDate() + parseInt(dayNum));
        return this.formatDate(outDate, 'yyyy-MM-dd');
    },
    /**
     * 每三位加一个逗号.
     * @param {Number} strNum 要格式化的数字
     * @returns {String} str 格式化后的数字.
     */
    formatValueBy3(strNum) {
        let matchStr = strNum.toString().match(/^-/ig);
        let str;
        let prefix;
        if (matchStr) {
            prefix = matchStr[0];
            str = strNum.toString().split('-')[1];
        } else {
            prefix = '';
            str = strNum.toString();
        }
        let newStr = '';
        let count = 0;
        if (str.indexOf('.') === -1) {
            for (let i = str.length - 1; i >= 0; i--) {
                if (count % 3 === 0 && count !== 0) {
                    newStr = str.charAt(i) + ',' + newStr;
                } else {
                    newStr = str.charAt(i) + newStr;
                }
                count++;
            }
            str = newStr;
        } else {
            for (let j = str.indexOf('.') - 1; j >= 0; j--) {
                if (count % 3 === 0 && count !== 0) {
                    newStr = str.charAt(j) + ',' + newStr;
                } else {
                    newStr = str.charAt(j) + newStr; // 逐个字符相接起来
                }
                count++;
            }
            str = newStr + (str + '00').substr((str + '00').indexOf('.'), 3);
        }
        return prefix + str;
    },
    /**
     * 获取一段时间内一定时间间隔的日期点.
     * @param {String} dateType 时间间隔的类型.
     * @param {Date} dtStart 开始时间.
     * @param {Date} dtEnd 结束时间.
     * @param {Boolean} isReal 是否显示实时.
     * @returns {Array}.
     */
    getDateList(dateType, dtStart, dtEnd, isReal) {
        let dateList = [];
        if (isReal) {
            // 实时
            dtStart = new Date(dtStart.getFullYear(), dtStart.getMonth(), dtStart.getDate(), dtStart.getHours());
            if (dtEnd > new Date()) {
                dtEnd = new Date();
            } else {
                dtEnd = new Date(dtEnd.getFullYear(), dtEnd.getMonth(), dtEnd.getDate(), dtEnd.getHours(), dtEnd.getMinutes());
            }
        } else {
            // 推迟8小时
            dtStart = new Date(dtStart.getFullYear(), dtStart.getMonth(), dtStart.getDate(), dtStart.getHours() - 8);
            if (dtEnd > new Date()) {
                dtEnd = new Date();
            } else {
                dtEnd = new Date(dtEnd.getFullYear(), dtEnd.getMonth(), dtEnd.getDate(), dtEnd.getHours() - 8);
            }
        }
        switch (dateType) {
            case 'quarter':
                while (dtStart < dtEnd) {
                    dateList.push(this.formatDate(dtStart, 'yyyy-MM-dd hh:mm'));
                    dtStart = new Date(dtStart.getFullYear(), dtStart.getMonth(), dtStart.getDate(), dtStart.getHours(), dtStart.getMinutes() + 15);
                }
                break;
            case 'hour':
                while (dtStart < dtEnd) {
                    dateList.push(this.formatDate(dtStart, 'yyyy-MM-dd hh时'));
                    dtStart = new Date(dtStart.getFullYear(), dtStart.getMonth(), dtStart.getDate(), dtStart.getHours() + 1);
                }
                break;
            case 'day':
                while (dtStart < dtEnd) {
                    dateList.push(this.formatDate(dtStart, 'yyyy-MM-dd'));
                    dtStart = new Date(dtStart.getFullYear(), dtStart.getMonth(), dtStart.getDate() + 1);
                }
                break;
            case 'month':
                while (dtStart < dtEnd) {
                    dateList.push(this.formatDate(dtStart, 'yyyy-MM'));
                    dtStart = new Date(dtStart.getFullYear(), dtStart.getMonth() + 1);
                }
                break;
            case 'year':
                while (dtStart < dtEnd) {
                    dateList.push(this.formatDate(dtStart, 'yyyy'));
                    dtStart = new Date(dtStart.getFullYear() + 1, 1);
                }
                break;
            default:
                while (dtStart < dtEnd) {
                    dateList.push(this.formatDate(dtStart, 'yyyy-MM-dd'));
                    dtStart = new Date(dtStart.getFullYear(), dtStart.getMonth(), dtStart.getDate() + 1);
                }
                break;
        }
        return dateList;
    }
};

// 复用方法(包含业务逻辑)
const _common = {
    // 获取url
    getUrl() {
        return window.location.href;
    },
    // 获取域名
    getHost() {
        return window.location.hostname;
    },
    // 获取url中的指定参数兼容hash和search
    getQueryString(name) {
        let str = location.search; // 参数部分
        let reg = new RegExp('\\?' + name + '=([^&]*)(&|$)'); // 正则
        if (location.hash && !str) {
            str = location.hash; // hash部分
        }
        if (reg.test(str)) {
            let result = reg.exec(str);
            if (result[1]) {
                return result[1];
            }
            return null;
        }
        return null;
    },
    // 文件大小转换（基础单位为B）
    convertFileSize(size) {
        let fileSize = parseFloat(size, 10);
        let convertSize = 0;
        let unit = '';
        let fileKb = 1024; //KB
        let fileMb = 1024 * 1024;  //MB
        let fileGb = 1024 * 1024 * 1024;   //GB
        let fileTb = 1024 * 1024 * 1024 * 1024;   //TB
        if (fileSize < fileKb) {
            convertSize = fileSize.toFixed(2);
            unit = 'B';
        } else if (fileSize >= fileKb && fileSize < fileMb) {
            convertSize = (fileSize / fileKb).toFixed(2);
            unit = 'KB';
        } else if (fileSize >= fileMb && fileSize < fileGb) {
            convertSize = (fileSize / fileMb).toFixed(2);
            unit = 'MB';
        } else if (fileSize >= fileGb && fileSize < fileTb) {
            convertSize = (fileSize / fileGb).toFixed(2);
            unit = 'GB';
        } else {
            convertSize = (fileSize / fileTb).toFixed(2);
            unit = 'TB';
        }
        return _public.formatValueBy3(convertSize) + unit;
    }
};

module.exports = {
    _public,
    _common
};