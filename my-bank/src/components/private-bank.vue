<template>
    <div class="content">
        <div class="prev-login"><span class="prev-login-text">前回ログイン：<span v-text="dispLastLoginDatetime"></span></span></div>
        <div class="warning-message">
            <span class="text-warning"><img :src="warning" class="warning-icon">一部お取引に制限がかかっております。</span>
        </div>
        <div class="warning-message">
            <span class="text-warning link-nav">組戻し（資金返却）への同意のご依頼があります&emsp;<a href="#" class="warning-answer">回答選択へ</a></span>
        </div>
        <information-area :information-area-data="informationAreaData"></information-area>
        <account-overview :top-info="topInfo"></account-overview>
        <deposit-list :top-info="topInfo"></deposit-list>
        <foreign-exchange-rate :top-info="topInfo"></foreign-exchange-rate>
        <reccomend-campaign-banner></reccomend-campaign-banner>
    </div>
</template>

<script>
import accountOverview from '@/components/account-overview';
import depositList from '@/components/deposit-list';
import foreignExchangeRate from '@/components/foreign-exchange-rate';
import { formatDate } from '@/assets/js/date-utils';
import informationArea from '@/components/information-area';
import reccomendCampaignBanner from '@/components/reccomend-campaign-banner';

export default {
    name: 'privateBank',
    data () {
        return {
            lastLoginDatetime: '20220707120000000',
            warning: require('@/assets/img/warning.svg')
        };
    },
    components: {
        accountOverview,
        depositList,
        foreignExchangeRate,
        informationArea,
        reccomendCampaignBanner
    },
    props: {
        informationAreaData: {
            type: Object
        }
    },
    computed: {
        dispLastLoginDatetime () {
            return formatDate(this.lastLoginDatetime, 'yyyy/MM/dd hh:mm');
        }
    }
};
</script>

<style>
.content {
    width: 100%;
    margin: 0;
}

.prev-login {
    margin-right: 8px;
    text-align: right;
}

.prev-login-text {
    display: inline-block;
    margin-top: 8px;
    font-size: 14px;
}

.warning-message {
    margin-top: 8px;
}

.text-warning {
    color: #BF0000;
    vertical-align: middle;
}

.text-warning a {
    color: #BF0000;
}

.warning-answer::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 10px;
    height: 10px;
    border-top: 1px solid #BF0000;
    border-right: 1px solid #BF0000;
    transform: rotate(45deg);
    margin: 7px 0 0 4px;
}

.warning-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    vertical-align: middle;
}
</style>