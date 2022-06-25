<template>
    <div class="panel account-overview full-width">
        <div class="account-overview-details">
            <p class="bank-details full-width text-muted">
                <span class="branch-name">支店名: <span v-text="dispBranchName"></span>（{{dispBranchCode}}）</span>
                <span class="branch-number">口座番号: <span v-text="dispAccountNumber"></span></span>
            </p>
            <div class="smartphone-only">
                <div>現在のカスタマーステージ：<span class="rank-name" v-text="dispRankName"></span></div>
                <a href="#" class="link-nav text-right">カスタマーステージについて</a>
            </div>
            <div class="rank-privileges">
                <span class="label label-notice">ATM無料あと <span v-text="dispAtmFeeFreeCount"></span>回</span>
                <span class="label label-notice">振込無料あと <span v-text="dispTransferFeeFreeCount"></span>回</span>
            </div>
            <div class="deposit-account">
                <a href="#" class="link-nav">円普通預金（代表口座）</a>
                <span class="amount">
                    <span class="base"><span class="money">5,000</span><small class="unit">円</small></span>
                    <a href="#" class="desktop-only button button-ghost">振込</a>
                </span>
            </div>
            <div class="uncollected-amount full-width text-minus">
                <span>未収金：</span><span>300</span>
                <small class="unit">円</small>
            </div>
            <div class="limit-amount">
                <a href="#" class="link-nav">
                    <span>振込限度額（<span class="num">1</span>日）</span>
                </a>
                <div class="text-right">
                    <span>1,000</span><small class="unit">円&emsp;/&emsp;</small>
                    <span>100</span><small class="unit">万円</small>
                </div>
            </div>
            <div class="smartphone-only sp-transfer-btn-wrapper">
                <a href="#" class="button button-ghost full-size">振込</a>
            </div>
            <div>
                <div class="securities-account-balance">
                    <a href="#" class="link-nav">証券コネクト口座</a>
                    <span class="amount">
                        <span class="base"><span class="money">10,000</span><small class="unit">円</small></span>
                        <a href="#" class="button button-ghost">振替</a>
                    </span>
                </div>
                <div class="to-sec-link">
                    <a href="#" class="link-nav">HARAクリック証券 Webサイトへ</a>
                </div>
            </div>
            <div class="other-accounts-balance">
                <p>
                    <a href="#" class="link-nav">円定期預金（総額）</a>
                    <span class="amount">
                        <span class="base"><span>1,001</span><small class="unit">円</small></span>
                    </span>
                </p>
                <p>
                    <a href="#" class="link-nav">外貨普通預金（総評価額）</a>
                    <span class="amount">
                        <span class="base"><span>1.000</span><small class="unit">円</small></span>
                    </span>
                </p>
            </div>
        </div>
        <div class="inner-block panel-body chart-area">
            <div class="desktop-only customer-stage text-right">
                <div>現在のカスタマーステージ：<span class="rank-name" v-text="dispRankName"></span></div>
                <a href="#" class="link-nav text-right">カスタマーステージについて</a>
            </div>
            <chart-area :chart-data="chartData"></chart-area>
        </div>
    </div>
</template>

<script>
import chartArea from '@/components/chart-area';
import { formatNumberString } from '@/assets/js/string-utils';

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
            return this.chartData.fcyOrdinaryDepositTotalJpyBalance;
        },
        dispOrdinaryDepositTotalBalance () {
            return this.chartData.ordinaryDepositTotalBalance;
        },
        dispRankName () {
            return this.rankName;
        },
        dispSweepTotalBalance () {
            return this.chartData.sweepTotalBalance, 0, EMPTY;
        },
        dispTermDepositTotalBalance () {
            return this.chartData.termDepositTotalBalance;
        },
        dispTransferDailyLimit () {
            return this.transferDailyLimit;
        },
        dispTransferFeeFreeCount () {
            if (this.transferFeeFreeCount !== null) {
                return this.transferFeeFreeCount;
            }
            return EMPTY;
        },
        dispUncollectedAmount () {
            return this.uncollectedAmount;
        },
        transferDailyLimitUnit () {
            return this.transferDailyLimit;
        }
    }
};
</script>

<style>
.account-overview {
    display: flex;
    background: #ffffff;
    margin: 16px auto 0;
    padding: 20px 0 0;
    width: 96vw;
    position: relative;
}

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

.account-overview-details {
    font-size: 16px;
    width: 55%;
    margin-right: 20px;
}

.account-overview-details a {
    color: rgb(36, 39, 43);
}

.bank-details {
    color: #686868;
    flex-wrap: wrap;
    display: block;
    line-height: 20px;
    margin: 0 0 12px 20px;
    text-align: left;
}

.branch-name {
    margin-right: 8px;
}

.rank-privileges {
    color: rgb(36, 39, 43);
    font-size: 14px;
    margin-left: 20px;
    text-align: left;
}

.label-notice {
    background-color: rgb(175, 162, 120);
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    font-size: 12px;
    line-height: 7px;
    min-width: 10px;
    margin-right: 8px;
    padding: 4px 16px;
    vertical-align: baseline;
}

.deposit-account {
    color: rgb(36, 39, 43);
    display: flex;
    justify-content: space-between;
    margin: 36px 0 0 20px;
    min-height: 32px;
    position: relative;
}

.amount {
    color: rgb(36, 39, 43);
    display: flex;
    justify-content: flex-end;
    margin-left: 8px;
}

.amount .money {
    font-size: 26px;
}

.amount .base {
    align-items: flex-end;
    display: inline-block;
}

.unit {
    color: rgb(36, 39, 43);
    display: inline-block;
    font-size: 12px;
    margin-left: 3px;
}

.button-ghost {
    background-attachment: scroll;
    border: solid 1px rgb(229, 115, 115);
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    font-size: 12px;
    height: 32px;
    letter-spacing: 1px;
    line-height: 30px;
    margin-left: 8px;
    min-height: 32px;
    min-width: 40px;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    width: 46px;
}

.account-overview-details a.button-ghost {
    color: rgb(229, 115, 115);
}

.uncollected-amount .unit {
    color: rgb(229, 115, 115);
}

.text-minus {
    align-items: center;
    color: rgb(229, 115, 115);
    display: flex;
    flex-basis: 100%;
    height: 22px;
    justify-content: flex-end;
    margin-right: 54px;
}

.limit-amount {
    display: flex;
    justify-content: space-between;
    margin: 36px 0 0 20px;
}

.limit-amount .text-right .num {
    font-size: 26px;
    margin: 0 4px;
}

.securities-account-balance {
    display: flex;
    justify-content: space-between;
    margin: 36px 0 0 20px;
    min-height: 32px;
    position: relative;
}

.to-sec-link {
    text-align: left;
    margin-left: 20px;
}

.to-sec-link .link-nav {
    color: rgb(229, 115, 115);
}

.to-sec-link:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-top: 1px solid rgb(229, 115, 115);
    border-right: 1px solid rgb(229, 115, 115);
    transform: rotate(45deg);
    margin: 7px 0 0 4px;
}

.other-accounts-balance {
    margin-bottom: 20px;
}

.other-accounts-balance p {
    display: flex;
    justify-content: space-between;
    margin: 36px 0 0 20px;
    min-height: 32px;
    position: relative;
}

.chart-area {
    width: 45%;
    margin-right: 20px;
    margin-bottom: 20px;
}

.customer-stage {
    text-align: right;
}

.customer-stage .link-nav {
    color: rgb(229, 115, 115);
    margin-right: 20px;
}

.customer-stage .link-nav:after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-top: 1px solid rgb(229, 115, 115);
    border-right: 1px solid rgb(229, 115, 115);
    transform: rotate(45deg);
    margin: 7px 0 0 4px;
}

@media screen and (min-width:1400px) {
.account-overview {
    width: 1400px;
}
}
</style>