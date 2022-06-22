<template>
    <div class="account-overview full-width">
        <div class="overview-wrap">
            <div class="panel-body account-overview-details inner-block">
                <p class="bank-details text-muted">
                    <span class="branch-name">支店名: <span v-text="dispBranchName"></span>（{{dispBranchCode}}）</span>
                    <span class="branch-number">口座番号: <span v-text="dispAccountNumber"></span></span>
                </p>
                <div class="smartphone-only">
                    <div>現在のカスタマーステージ：<span class="rank-name" v-text="dispRankName"></span></div>
                    <a href="#" class="link-nav text-right">カスタマーステージについて</a>
                </div>
                <span class="rank-privileges">
                    <span class="label label-notice">ATM無料あと <span v-text="dispAtmFeeFreeCount"></span>回</span>
                    <span class="label label-notice">振込無料あと <span v-text="dispTransferFeeFreeCount"></span>回</span>
                </span>
                <div class="deposit-account">
                    <a href="#" class="link-nav">円普通預金（代表口座）</a>
                    <span class="amount">
                        <span v-text="dispOrdinaryDepositTotalBalance"></span><small class="unit">円</small>
                    </span>
                    <a href="#" class="desktop-only button button-ghost" @click.prevent=";">振込</a>
                </div>
                <div class="uncollected-amount full-width text-minus">
                    <span>未収金：</span><span v-text="dispUncollectedAmount"></span>
                    <small class="unit">円</small>
                </div>
                <div class="limit-amount">
                    <a href="#" class="link-nav">
                        <span>振込限度額（<span class="num">1</span>日）</span>
                    </a>
                    <div class="text-small text-right">
                        <span class="num" v-text="dispAvailableTransferAmount"></span><span>円 /</span>
                        <span class="num" v-text="dispTransferDailyLimit"></span><span v-text="transferDailyLimitUnit"></span>
                    </div>
                </div>
                <div class="smartphone-only sp-transfer-btn-wrapper">
                    <a href="#" class="button button-ghost full-size" @click.prevent=";">振込</a>
                </div>
                <template>
                    <div class="securities-account-balance">
                        <a href="#" class="link-nav">証券コネクト口座</a>
                        <span class="amount">
                            <span v-text="dispSweepTotalBalance"></span><small class="unit">円</small>
                        </span>
                        <a href="#" class="button button-ghost">振替</a>
                    </div>
                    <div class="to-sec-link">
                        <a href="/login/sec-redirect" target="_blank" class="link-nav">GMOクリック証券 Webサイトへ</a>
                    </div>
                </template>
                <div class="other-accounts-balance">
                    <p>
                        <a href="#" class="link-nav">円定期預金（総額）</a>
                        <span class="amount">
                            <span v-text="dispTermDepositTotalBalance"></span><small class="unit">円</small>
                        </span>
                    </p>
                    <p>
                        <a href="#" class="link-nav">外貨普通預金（総評価額）</a>
                        <span class="amount">
                            <span v-text="dispFcyOrdinaryDepositTotalJpyBalance"></span><small class="unit">円</small>
                        </span>
                    </p>
                </div>
            </div>
            <div class="inner-block panel-body chart-area">
                <div class="desktop-only customer-stage text-right">
                    <div>現在のカスタマーステージ：<span class="rank-name" v-text="dispRankName"></span></div>
                    <a href="#" class="link-nav text-right">カスタマーステージについて</a>
                </div>
                <chart-area :chartData = "chartData"></chart-area>
            </div>
        </div>
    </div>
</template>

<script>
import { formatNumberString, formatOptionalAmount, getOptionalAmountUnit } from '@/assets/js/string-utils';
import chartArea from '@/components/chart-area';

const EMPTY = '-';

export default {
    name: 'accountOverview',
    data () {
        return {
            accountNumber: '7777777',
            atmFeeFreeCount: '5',
            availableTransferAmount: '100000',
            branchCode: '007',
            branchName: 'はら支店',
            chartArea: null,
            queryDatetime: '',
            rankName: 'マスターステージ',
            transferDailyLimit: 'tel:100000000',
            transferFeeFreeCount: '5',
            uncollectedAmount: '300',
            chartData: {
                totalBalance: '11000',
                lastDayTotalBalance: '10001',
                ordinaryDepositTotalBalance: '5000',
                sweepTotalBalance: '3000',
                termDepositTotalBalance: '1001',
                fcyOrdinaryDepositTotalJpyBalance: '1000'
            }
        };
    },
    components: {
        chartArea
    },
    computed: {
        dispAccountNumber () {
            return this.accountNumber;
        },
        dispAtmFeeFreeCount () {
            if (this.atmFeeFreeCount !== null) {
                return this.atmFeeFreeCount;
            }
            return EMPTY;
        },
        dispAvailableTransferAmount () {
            return formatNumberString(this.availableTransferAmount);
        },
        dispBranchCode () {
            return this.branchCode;
        },
        dispBranchName () {
            return this.branchName;
        },
        dispFcyOrdinaryDepositTotalJpyBalance () {
            return formatNumberString(this.chartData.fcyOrdinaryDepositTotalJpyBalance);
        },
        dispOrdinaryDepositTotalBalance () {
            return formatNumberString(this.chartData.ordinaryDepositTotalBalance);
        },
        dispRankName () {
            return this.rankName;
        },
        dispSweepTotalBalance () {
            return formatNumberString(this.chartData.sweepTotalBalance, 0, EMPTY);
        },
        dispTermDepositTotalBalance () {
            return formatNumberString(this.chartData.termDepositTotalBalance);
        },
        dispTransferDailyLimit () {
            return formatOptionalAmount(this.transferDailyLimit);
        },
        dispTransferFeeFreeCount () {
            if (this.transferFeeFreeCount !== null) {
                return this.transferFeeFreeCount;
            }
            return EMPTY;
        },
        dispUncollectedAmount () {
            return formatNumberString(this.uncollectedAmount);
        },
        transferDailyLimitUnit () {
            return getOptionalAmountUnit(this.transferDailyLimit);
        }
    }
};
</script>

<style>
.account-overview::before {
    content: '';
    background: #BF0000;
    height: 3px;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 10;
}

.account-overview  {
    position: relative;
    margin: 24px auto 0;
    width: 96vw;
    background: #ffffff;
}

.overview-wrap {
    margin: 20px;
}

.account-overview-details {
    display: block;
    flex-wrap: wrap;
    font-size: 14px;
    width: 55%;
}

.account-overview-details a {
    color: rgb(36, 39, 43);
}

.bank-details {
    color: #686868;
    display: flex;
    flex-wrap: wrap;
    line-height: 20px;
    margin-bottom: 16px;
}


.rank-privileges {
    color: rgb(36, 39, 43);
    display: block;
    font-size: 14px;
    height: 24px;
    text-align: left;
}

.label-notice {
    background-color: rgb(175, 162, 120);
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    display: inline-block;
    flex-basis: auto;
    font-size: 12px;
    height: 24px;
    justify-content: center;
    line-height: 7px;
    min-width: 10px;
    margin-right: 16px;
    padding: 8px 16px;
    text-align: center;
    vertical-align: baseline;
    white-space: nowrap;
    width: 150px;
}

.deposit-account {
    align-items: center;
    color: rgb(36, 39, 43);
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 24px;
    min-height: 32px;
    position: relative;
    width: 520px;
}


.limk-nav {
    bottom: 4px;
    color: rgb(0, 184, 212);
    cursor: pointer;
    display: block;
    font-size: 14px;
    height: 22px;
    left: 0;
    line-height: 22px;
    padding-right: 15px;
    position: absolute;
    width: 154px;
}

.limk-nav::after {
    content: "";
    display: block;
    font-size: 16px;
    height: 22px;
    position: absolute;
    right: 0px;
    top: 1px;
    width: 16px;
}


.amount {
    align-items: baseline;
    color: rgb(36, 39, 43);
    display: flex;
    height: 36px;
    justify-content: flex-end;
    margin-left: 8px;
    text-align: right;
}

.unit {
    color: rgb(36, 39, 43);
    display: flex;
    font-size: 12px;
    margin-left: 3px;
    text-align: right;
}


.button-ghost {
    appearance: none;
    background-attachment: scroll;
    border: solid 1px rgb(0, 184, 212);
    box-shadow: none;
    box-sizing: border-box;
    color: rgb(0, 184, 212);
    cursor: pointer;
    display: block;
    font-size: 12px;
    height: 32px;
    justify-content: center;
    letter-spacing: 1px;
    line-height: 30px;
    margin-left: 8px;
    min-height: 32px;
    min-width: 40px;
    padding-bottom: 0 8px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    width: 46px;
}


.text-minus {
    align-items: center;
    color: rgb(229, 115, 115);
    display: flex;
    flex-basis: 100%;
    height: 22px;
    justify-content: flex-end;
    margin-right: 54px;
    margin-top: 8px;
    width: 466px;
}

@media screen and (min-width:1400px) {
.account-overview {
    width: 1400px;
}
}
</style>