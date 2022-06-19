/* inputデータの型がnumberのものをnumber-utilsに入れる */
import * as stringUtils from './string-utils';
import BigNumber from 'bignumber.js';

const pattern = /^[-]?([1-9]\d*|0)(\.\d+)?$/;

export function toCommaString () {
    return '0';
}

/**
 * 数値をフォーマット
 * [e.g.]
 * num = 'tel:1234567', format = '{s}円' => 1,234,567円
 * num = 1234.567, format省略 => 1,234.567
 *
 * @param value {number | string} フォーマットする数値 or 数値文字列
 * @param format {string} フォーマット形式
 * @return {string} フォーマットした数値文字列(フォーマット出来ない場合は空文字列)
 * @param defaultVal valueが数値でなかった場合に返却する値
 */
export function formatNumber (value, format, defaultVal = '') {
    if (!isNumeric(value)) {
        return format ? format.replace('{s}', defaultVal) : defaultVal;
    } else if (value === Number.MAX_VALUE) {
        throw Error('number MAX_VALUE error');
    } else {
        return format ? format.replace('{s}', value.toLocaleString()) : value.toLocaleString();
    }
}

/**
 * 検証値が数値かどうか確認
 * @param {*} value 検証値
 * @return {boolean} 数値の場合 true それ以外の場合 false
 */
export function isNumeric (value) {
    return pattern.test(value);
}

export function formatNumberString (value, precision, defaultVal = 0, rounding = BigNumber.ROUND_DOWN) {
    return stringUtils.formatNumberString(value, precision, defaultVal, rounding);
}

/**
 * 検証値が整数かどうか確認
 * @param value 検証値
 */
export function isInteger (value) {
    return stringUtils.getPrecision(value) === 0;
}

/**
 * 検証値の少数点以下の桁数が正しいかどうか確認
 * @param value 検証値
 * @param fractionLength 検証値の通貨の小数点以下桁数
 */
export function ltEqualFractionLength (value, fractionLength) {
    return stringUtils.getPrecision(value) <= fractionLength;
}
