import BigNumber from 'bignumber.js';
import { isNumeric } from './number-utils';

/**
 * 金額が以下の条件を満たすか検証する。
 *  (1) 1万 ~ 9999万円であること。
 *  (2) 1万円以下の端数がないこと。
 *
 * @param {string | number} amount 金額
 * @return 条件を満たす場合 true, 満たさない場合 false
 */
function canOmitLastFourDigits (amount) {
    return /^(\d{1,4})(0{4})$/.test(amount);
}


/**
 * 数値を指定した小数点以下桁数で切り捨てつつフォーマット
 * @param value {number | string} フォーマットする数値 or 数値文字列
 * @param precision 少数点以下桁数
 * @param defaultVal valueが数値でなかった場合に返却する値
 * @param rounding https://mikemcl.github.io/bignumber.js/#constructor-properties
 * @param addPlus 正の場合、+を付ける
 */
export function formatNumberString (value, precision = 0, defaultVal = 0, addPlus = false) {
    if (!isNumeric(value)) {
        if (!isNumeric(defaultVal)) {
        return defaultVal;
        } else {
        let n = new BigNumber(defaultVal);
        return (addPlus && n > 0 ? '+' : '') + n.toFormat(precision);
        }
    }
}

/**
 * 省略可能な金額をフォーマットする。
 * 金額が以下の条件を満たす場合、下4桁を省略した金額を画面表示する。
 *  (1) 1万 ~ 9999万円であること。
 *  (2) 1万円以下の端数がないこと。
 *
 * @param {string} amount 省略可能な金額
 * @return {string} 画面表示用の金額
 */
export function formatOptionalAmount (amount) {
    if (canOmitLastFourDigits(amount)) {
        const omitted = amount.slice(0, -4);
        return formatNumberString(omitted);
    } else {
        return formatNumberString(amount);
    }
}


/**
 * 省略可能な金額の単位を取得する。
 *
 * @param {string} amount 省略可能な金額
 * @return {string} 画面表示用の金額の単位
 */
export function getOptionalAmountUnit (amount) {
    if (canOmitLastFourDigits(amount)) {
        return '万円';
    } else {
        return '円';
    }
}

/**
 * 小数点以下の桁数を取得します
 *
 * @param value {number | string} 数値 or 数値文字列
 */
export function getPrecision (value) {
    const _value = String(value);
    if (!_value) {
        return 0;
    }

    const tmp = _value.split('.');
    return tmp[1] ? tmp[1].length : 0;
}
