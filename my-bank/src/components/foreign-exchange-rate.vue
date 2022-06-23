<template>
    <div class="foreign-exchange-rate">
        <header>
            <h4>為替レート</h4>
            <a href="#" class="link-nav">一覧へ</a>
        </header>
        <div class="panel-body">
            <table class="info-list no-vertical-line">
                <thead>
                    <tr>
                        <th>通貨</th>
                        <th class="rate">売却</th>
                        <th class="rate">購入</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(rate, index) of dispRateList" :key="index">
                        <td>
                            <div class="currency-wrapper">
                                <img :src="flagUrls(rate.currency)" class="flag">
                                <span v-text="rate.currencyName"></span>
                            </div>
                        </td>
                        <td class="rate">
                            <span class="num" v-text="rate.ttb"></span>
                            <span class="arrow">
                                <img :src="rate.urll" alt="">
                            </span>
                        </td>
                        <td class="rate">
                            <span class="num" v-text="rate.tts"></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { cloneDeep } from 'lodash';

export default {
    name: 'foreignExchangeRate',
    data () {
        return {
            rateList: [
                {
                    customerRateId: '10001',
                    currency: 'USD',
                    ttb: '110,120',
                    tts: '110,520',
                    isValidRate: '1',
                    currencyName: '米ドル',
                    displayFractionLength: '2',
                    orderFractionLength: '3',
                    currencyServiceStatus: '1',
                    validSeconds: '13',
                    urll: '/static/img/arrow-down.svg'
                }, {
                    customerRateId: '10001',
                    currency: 'USD',
                    ttb: '110,120',
                    tts: '110,520',
                    ttbRiseOrFall: '1',
                    ttmRiseOrFall: '2',
                    ttsRiseOrFall: '2',
                    isServiceTime: '1',
                    isValidRate: '1',
                    currencyName: '米ドル',
                    displayFractionLength: '2',
                    orderFractionLength: '3',
                    currencyServiceStatus: '1',
                    validSeconds: '13'
                }, {
                    customerRateId: '10001',
                    currency: 'USD',
                    ttb: '110,120',
                    tts: '110,520',
                    ttbRiseOrFall: '1',
                    ttmRiseOrFall: '2',
                    ttsRiseOrFall: '2',
                    isServiceTime: '1',
                    isValidRate: '1',
                    currencyName: '米ドル',
                    displayFractionLength: '2',
                    orderFractionLength: '3',
                    currencyServiceStatus: '1',
                    validSeconds: '13'
                }, {
                    customerRateId: '10001',
                    currency: 'USD',
                    ttb: '110,120',
                    tts: '110,520',
                    ttbRiseOrFall: '1',
                    ttmRiseOrFall: '2',
                    ttsRiseOrFall: '2',
                    isServiceTime: '1',
                    isValidRate: '1',
                    currencyName: '米ドル',
                    displayFractionLength: '2',
                    orderFractionLength: '3',
                    currencyServiceStatus: '1',
                    validSeconds: '13'
                }
            ]
        };
    },
    computed: {
        /**
         * 取得した外貨レート一覧のうち、4通貨のレートのみ表示させる。
         */
        dispRateList () {
            if (this.rateList) {
                const rateList = cloneDeep(this.rateList.slice(0, 4));
                return rateList;
            } else {
                return [];
            }
        }
    },
    methods: {
        flagUrls (currency) {
            const lowerCurrency = currency.toLowerCase();
            return '/static/img/' + lowerCurrency + '.png';
        }
    }
};
</script>

<style>
.foreign-exchange-rate {
    width: 40vw;
    float: right;
    background: #ffffff;
}
</style>