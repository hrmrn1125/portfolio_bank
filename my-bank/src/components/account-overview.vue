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
                <div class="rank-privileges">
                    <span class="label label-notice">ATM無料あと <span v-text="dispAtmFeeFreeCount"></span>回</span>
                    <span class="label label-notice">振込無料あと <span v-text="dispTransferFeeFreeCount"></span>回</span>
                </div>
                <div class="deposit-account">
                    <a href="#" class="link-nav">円普通預金（代表口座）</a>
                    <span class="amount">
                        <span class="base"><span v-text="dispOrdinaryDepositTotalBalance"></span><small class="unit">円</small></span>
                        <a href="#" class="desktop-only button button-ghost">振込</a>
                    </span>
                </div>
                <div class="uncollected-amount full-width text-minus">
                    <span>未収金：</span><span v-text="dispUncollectedAmount"></span>
                    <small class="unit">円</small>
                </div>
                <div class="limit-amount">
                    <a href="#" class="link-nav">
                        <span>振込限度額（<span class="num">1</span>日）</span>
                    </a>
                    <div class="amount text-right">
                        <span class="amount"><span class="num" v-text="dispAvailableTransferAmount"></span><small class="unit">円</small><span>&emsp;/</span></span>
                        <span class="amount"><span class="num" v-text="dispTransferDailyLimit"></span><small class="unit">円</small></span>
                    </div>
                </div>
                <div class="smartphone-only sp-transfer-btn-wrapper">
                    <a href="#" class="button button-ghost full-size" @click.prevent=";">振込</a>
                </div>
                <div>
                    <div class="securities-account-balance">
                        <a href="#" class="link-nav">証券コネクト口座</a>
                        <span class="amount">
                            <span v-text="dispSweepTotalBalance"></span><small class="unit">円</small>
                        </span>
                        <a href="#" class="button button-ghost">振替</a>
                    </div>
                    <div class="to-sec-link">
                        <a href="#" class="link-nav">HARAクリック証券 Webサイトへ</a>
                    </div>
                </div>
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
import chartArea from '@/components/chart-area';

const EMPTY = '-';

export default {
    name: 'accountOverview',
    data () {
        return {
            accountNumber: '7777777',
            atmFeeFreeCount: '5',
            availableTransferAmount: '100,000',
            branchCode: '007',
            branchName: 'はら支店',
            chartArea: null,
            queryDatetime: '',
            rankName: 'マスターステージ',
            transferDailyLimit: '100,000,000',
            transferFeeFreeCount: '5',
            uncollectedAmount: '300',
            chartData: {
                totalBalance: '11,000',
                lastDayTotalBalance: '10,001',
                ordinaryDepositTotalBalance: '5,000',
                sweepTotalBalance: '3,000',
                termDepositTotalBalance: '1,001',
                fcyOrdinaryDepositTotalJpyBalance: '1,000'
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
            return this.availableTransferAmount;
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
            return this.chartData.sweepTotalBalance;
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
    display: flex;
    padding: 20px;
}

.account-overview-details {
    font-size: 14px;
    width: 55%;
    text-align: left;
}

.account-overview-details a {
    color: rgb(36, 39, 43);
}

.bank-details {
    color: #686868;
    flex-wrap: wrap;
    display: block;
    line-height: 20px;
    margin-top: 0;
    margin-bottom: 12px;
}

.branch-name {
    margin-right: 8px;
}

.rank-privileges {
    color: rgb(36, 39, 43);
    font-size: 14px;
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
    text-align: center;
    vertical-align: baseline;
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
}


.link-nav {
    bottom: 4px;
    color: rgb(229, 115, 115);
    cursor: pointer;
    display: block;
    font-size: 14px;
    height: 22px;
    left: 0;
    line-height: 22px;
    padding-right: 15px;
}

.link-nav::after {
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
    color: rgb(36, 39, 43);
    display: flex;
    justify-content: flex-end;
    margin-left: 8px;
    text-align: right;
}

.amount .base {
    align-items: flex-end;
    display: flex;
}

.unit {
    color: rgb(36, 39, 43);
    display: flex;
    font-size: 12px;
    margin-left: 3px;
    text-align: right;
}

.account-overview-details a.button-ghost {
    color: rgb(229, 115, 115);
}

.button-ghost {
    appearance: none;
    background-attachment: scroll;
    border: solid 1px rgb(229, 115, 115);
    box-shadow: none;
    box-sizing: border-box;
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
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    width: 46px;
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

.limit-amount .text-right {
    text-align: right;
}

@media screen and (min-width:1400px) {
.account-overview {
    width: 1400px;
}
}
</style>