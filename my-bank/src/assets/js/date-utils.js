/** 正規表現：yyyyMMdd形式の日付 */
const YYYY_MM_DD = /^(\d{4})(\d{2})(\d{2})$/;

/** 正規表現：yyyyMMddhhmm形式の日付 */
const YYYY_MM_DD_HH_MM = /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})$/;

/** 正規表現：yyyyMMddhhmmss形式の日付 */
const YYYY_MM_DD_HH_MM_SS = /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/;

/** 正規表現：yyyyMMddhhmmssSSS形式の日付 */
const YYYY_MM_DD_HH_MM_SS_SSS = /^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{3})$/;

/**
 * 1桁の数値文字列は、0埋めして2桁の数値文字列にする。
 * 2桁の数値文字列は、そのままの値を返す。
 *
 * @param {number | string} value 0埋めする数値文字列
 * @return {string} 0埋めした数値文字列
 */
export function fillZero (value) {
    return ('0' + value).slice(-2);
}

/**
 * 日時を分割して返す。
 *
 * @param {Date} date 日時
 * @return {Array} 分割した日時 [年, 月, 日, 時, 分, 秒, 曜日]
 */
function parseDateParts (date) {
    return [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
    ];
}

/**
 * Dateインスタンスに変換する
 * [対応形式]
 *  yyyyMMdd
 *  yyyyMMddhhmmss
 *  yyyyMMddhhmmssSSS
 *
 * @param {string | number} value 日付文字列 or 数値
 * @return {Date | string} Dateインスタンス (変換できない場合は null)
 */
export function parseDate (value) {
    if (YYYY_MM_DD.test(value)) {
        value += 'tel:000000000';
    } else if (YYYY_MM_DD_HH_MM.test(value)) {
        value += '00000';
    } else if (YYYY_MM_DD_HH_MM_SS.test(value)) {
        value += '000';
    }

    const matched = String(value).match(YYYY_MM_DD_HH_MM_SS_SSS);
    if (matched) {
        const [, year, month, date, hours, minutes, seconds] = matched;
        return new Date(year, month, date, hours, minutes, seconds);
    } else {
        return null;
    }
}

/**
 * 任意の日付形式にフォーマットする。
 *
 * @param {string | number} value フォーマットする文字列
 * @param {string} format フォーマット形式
 * @param {string} empty フォーマットできなかった場合に return する値
 * @return {string} フォーマットした日付文字列 (フォーマット出来なかった場合は空文字列)
 * @example
 *  formatDate('20161201') => 2016/12/01
 *  formatDate('tel:20161201121212', 'yyyy/MM/dd (day)') => 2016/12/01 (木)
 *  formatDate('tel:20161215082225', 'yy/MM/dd hh:mm')  => 16/12/15 08:22
 */
export function formatDate (value, format = 'yyyy/MM/dd', empty = '') {
    if (!value || !format) {
        return empty;
    }

    const dateVal = (value.constructor === Date) ? value : parseDate(value);
    if (!dateVal) {
        return empty;
    }

    const [year, month, date, hours, minutes, seconds, day] = parseDateParts(dateVal);
    return format
        .replace('yyyy', year)
        .replace('yy', fillZero(year % 100))
        .replace('MM', fillZero(month))
        .replace('dd', fillZero(date))
        .replace('hh', fillZero(hours))
        .replace('mm', fillZero(minutes))
        .replace('ss', fillZero(seconds))
        .replace('day', day);
}

/**
 * yyyyMMddhhmmssSSSを受け取り年月日の文字列を返す
 * @param {*} yyyyMMddhhmmssSSS
 * @param {*} delimYear 年と月の間に入るdelimiter
 * @param {*} delimMonth 月と日の間に入るdelimiter
 * @param {*} empty
 */
export function toYYYYMMDD (yyyyMMddhhmmssSSS, delimYear = '/', delimMonth = '/', empty = '') {
    if (yyyyMMddhhmmssSSS.length < 8) {
        return empty;
    }
    return `${yyyyMMddhhmmssSSS.substr(0, 4)}${delimYear}${yyyyMMddhhmmssSSS.substr(4, 2)}${delimMonth}${yyyyMMddhhmmssSSS.substr(6, 2)}`;
}

/**
 * 文字列がYYYYMMDD形式の日付文字列であるかどうかチェックする
 *
 * @param {string} value チェックする文字列
 * @return {boolean} 日付文字列である場合 true, 日付文字列でない場合false
 */
export function isYYYYMMDD (value) {
    const matched = String(value).match(YYYY_MM_DD);
    if (!matched) {
        return false;
    }

    const year = Number(matched[1]);
    const month = Number(matched[2]);
    const day = Number(matched[3]);
    const date = new Date(year, month, day);

    return (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day);
}
