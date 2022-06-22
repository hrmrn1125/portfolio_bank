<template>
    <header id="header">
        <section class="header-top">
            <sp-bank-header class="smartphone-only" :customerName="name"></sp-bank-header>
            <div class="logo"><span class="desktop-only">HARAネット銀行</span></div>
            <div class="user desktop-only flex">
                <div href="" class="user-info">
                    <div class="header-mini-menu">
                        <span href="#" class="desktop-only mini-menu-wrap">
                            <img :src="beginner">
                            <a class="desktop-only mini-menu-index">使い方ガイド</a>
                        </span>
                        <span href="#" class="desktop-only mini-menu-wrap">
                            <img :src="lock">
                            <a class="desktop-only mini-menu-index">パスワード再設定</a>
                        </span>
                        <span href="#" class="desktop-only mini-menu-wrap">
                            <img :src="question">
                            <a class="desktop-only mini-menu-index">その他お問い合わせ</a>
                        </span>
                    </div>
                    <div>
                        <span class="username-wrapper"><span class="username" v-text="name"></span><span>さま</span></span>
                        <span class="datetime" v-text="dispCurrentDatetime"></span>
                    </div>
                </div>
                <btn-logout></btn-logout>
            </div>
        </section>
        <div class="header-sub desktop-only">
            <table class="main-nav">
                <tbody>
                    <tr class="main-menu">
                        <td @click="change('1')" :class="{'active': isActive === '1'}" href="#"><a>振込・支払</a></td>
                        <td @click="change('2')" :class="{'active': isActive === '2'}" href="#"><a>残高・明細<br>・振込状況</a></td>
                        <td @click="change('3')" :class="{'active': isActive === '3'}" href="#"><a>海外送金</a></td>
                        <td @click="change('4')" :class="{'active': isActive === '4'}" href="#"><a>円定期</a></td>
                        <td @click="change('5')" :class="{'active': isActive === '5'}" href="#"><a>外貨</a></td>
                        <td @click="change('6')" :class="{'active': isActive === '6'}" href="#"><a>FX取引</a></td>
                        <td @click="change('7')" :class="{'active': isActive === '7'}" href="#"><a>つかいわけ<br>口座</a></td>
                        <td @click="change('8')" :class="{'active': isActive === '8'}" href="#"><a>ポイント<br>・キャンペーン</a></td>
                        <td @click="change('9')" :class="{'active': isActive === '9'}" href="#"><a>お客さま情報<br>（申込・設定）</a></td>
                    </tr>
                </tbody>
            </table>
            <div class="sub-menu-list-wrap desktop-only">
                <ul class="sub-menu-list list-unstyled" v-if="isActive === '1'">
                    <li>
                        <a href="#">振込</a>
                    </li>
                    <li>
                        <a href="#">一括振込</a>
                    </li>
                    <li>
                        <a href="#">振込先登録</a>
                    </li>
                    <li>
                        <a href="#">口座振替</a>
                    </li>
                    <li>
                        <a href="#">定額自動振込</a>
                    </li>
                    <li>
                        <a href="#">ペイジー支払い</a>
                    </li>
                    <li>
                        <a href="#">組戻し</a>
                    </li>
                </ul>
                <ul class="sub-menu-list list-unstyled" v-if="isActive === '2'">
                    <li>
                        <a href="#">残高照会</a>
                    </li>
                    <li>
                        <a href="#">入出金明細</a>
                    </li>
                    <li>
                        <a href="#">振込状況照会</a>
                    </li>
                    <li>
                        <a href="#">ペイジー払込履歴照会</a>
                    </li>
                </ul>
                <ul class="sub-menu-list list-unstyled" v-if="isActive === '3'">
                    <li>
                        <a href="#">新規送金</a>
                    </li>
                    <li>
                        <a href="#">送金状況照会・書面発行</a>
                    </li>
                    <li>
                        <a href="#">申請・承認一覧</a>
                    </li>
                </ul>
                <ul class="sub-menu-list list-unstyled" v-if="isActive === '4'">
                    <li>
                        <a href="#">残高照会(新規預入・変更・解約)</a>
                    </li>
                    <li>
                        <a href="#">入出金明細</a>
                    </li>
                </ul>
                <ul class="sub-menu-list list-unstyled" v-if="isActive === '5'">
                    <li>
                        <a href="#">残高照会(新規購入・売却・新規積立)</a>
                    </li>
                    <li>
                        <a href="#">入出金明細</a>
                    </li>
                    <li>
                        <a href="#">実現損益</a>
                    </li>
                    <li>
                        <a href="#">新規外貨積立</a>
                    </li>
                    <li>
                        <a href="#">注文一覧(積立中止・変更)</a>
                    </li>
                    <li>
                        <a href="#">マーケット情報</a>
                    </li>
                </ul>
                <ul class="sub-menu-list list-unstyled" v-if="isActive === '6'">
                    <li>
                        <a href="#" class="with-icon">FX口座情報(新規決済・振替履歴)</a>
                    </li>
                    <li>
                        <a href="#">振替</a>
                    </li>
                    <li>
                        <a href="#">FX電子帳票</a>
                    </li>
                </ul>
                <ul class="sub-menu-list list-unstyled" v-if="isActive === '7'">
                    <li>
                        <a href="#">口座一覧(新規追加・削除)</a>
                    </li>
                    <li>
                        <a href="#" class="short-menu-title">振替</a>
                    </li>
                    <li>
                        <a href="#">定額自動振替</a>
                    </li>
                    <li>
                        <a href="#" class="short-menu-title">設定</a>
                    </li>
                </ul>
                <ul class="sub-menu-list list-unstyled" v-if="isActive === '8'">
                    <li>
                        <a href="#">ポイント・キャンペーン一覧</a>
                    </li>
                    <li>
                        <a href="#">ポイント設定</a>
                    </li>
                    <li>
                        <a href="#">ポイント履歴</a>
                    </li>
                </ul>
                <ul class="sub-menu-list list-unstyled" v-if="isActive === '9'">
                    <li>
                        <a href="#">カード・ATM</a>
                    </li>
                    <li>
                        <a href="#">セキュリティ</a>
                    </li>
                    <li>
                        <a href="#">メール・通知</a>
                    </li>
                    <li>
                        <a href="#">ファイル出力</a>
                    </li>
                    <li>
                        <a href="#">書面発行（残高証明書等）</a>
                    </li>
                    <li>
                        <a href="#">ログイン履歴</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { formatDate } from '@/assets/js/date-utils';
import spBankHeader from '@/components/sp-bank-header';
import btnLogout from '@/components/btn-logout';

export default {
    name: 'bankHeader',
    components: {
        spBankHeader,
        btnLogout
    },
    data () {
        return {
            currentDatetime: '20220808120000000',
            customerName: 'あおぞら太郎',
            isActive: '1',
            beginner: require('@/assets/img/beginner.svg'),
            lock: require('@/assets/img/lock.svg'),
            question: require('@/assets/img/question.svg')
        };
    },
    computed: {
        dispCurrentDatetime () {
            return formatDate(this.currentDatetime, 'yyyy/MM/dd hh:mm');
        },
        name () {
            return this.customerName;
        }
    },
    methods: {
        change: function(num){
            this.isActive = num
        }
    }
};
</script>

<style>
#header {
    background: #ffffff;
    padding: 0 8px;
}

.header-top {
    display: flex;
    position: relative;
    width: 100%;
}

.header-top .logo {
    font-size: 32px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
    font-weight: 900;
    color: #BF0000;
    top: 24px;
    left: 0;
    position: absolute;
}

div.header-mini-menu {
    display: flex;
}

.user.desktop-only {
    display: flex;
}

.user.flex {
    display: flex;
    height: 55px;
    position: absolute;
    right: 0;
    top: 20px;
}

.user-info {
    margin-right: 24px;
    text-align: left;
}

.header-mini-menu a {
    display: inline-block;
    text-decoration: none;
}

.mini-menu-wrap {
    margin-right: 16px;
    line-height: 27px;
    white-space: nowrap;
}

.mini-menu-wrap img {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    vertical-align: middle;
}

.mini-menu-index {
    display: inline-block;
    color: #2c3e50;
    font-size: 14px;
    vertical-align: middle;
}

.username-wrapper {
    margin-right: 20px;
}

.header-sub {
    width: 100%;
    background: #BF0000;
}

.main-nav {
    height: 60px;
    margin-top: 96px;
    width: 100%;
}

.main-menu {
    height: 60px;
    width: 100%;
}

.header-sub td a {
    cursor: pointer;
    vertical-align: middle;
    text-decoration: none;
}

.header-sub td {
    color: #ffffff;
    text-align: center;
    vertical-align: middle;
    width: 11%;
}

.header-sub td.active {
    background: #ffffff;
    color: #BF0000;
}
.header-sub td:first-child {
    border-left: none;
}

.sub-menu-list-wrap {
    height: 56px;
}

.sub-menu-list {
    display: flex;
    width: 100%;
    height: 56px;
    background: #ffffff;
    float: left;
}

.sub-menu-list li {
    border-left: 1px solid rgba(239,239,244,1);
    height: 20px;
    margin: auto 0;
    line-height: 20px;
    padding: 0 20px;
}


.sub-menu-list li a {
    color: #000;
    font-size: 1rem;
    text-decoration: none;
}

.sub-menu-list li:first-child {
    border-left: none;
}

@media screen and (min-width:871px) and (max-width:1060px) {
    div.header-mini-menu {
        display: flex;
    }

    .user.desktop-only {
        display: flex;
    }

    .sub-menu-list-wrap {
        height: 74px;
    }

    .sub-menu-list {
        height: 60px;
        padding: 14px 0 0;
    }

    .sub-menu-list li {
        height: 42px;
        margin: 0;
        line-height: 21px;
    }
}

@media screen and (min-width:768px) and (max-width:870px) {
    .user-info {
        margin-right: 16px;
    }

    div.header-mini-menu {
        display: flex;
    }

    .user.desktop-only {
        display: flex;
    }

    .mini-menu-wrap:last-child {
        margin-right: 0;
    }

    .sub-menu-list-wrap {
        height: 56px;
    }

    .sub-menu-list li {
        margin: 9px 0;
    }
}

@media screen and (max-width:767px) {
}
</style>