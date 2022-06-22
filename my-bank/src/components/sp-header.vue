<template>
    <section class="header-top">
        <div class="container">
            <div class="smartphone-only sp-header-cover">
                <input id="nav-input" type="checkbox" v-model="navToggle" class="nav-unshown">
                <label class="nav-open" for="nav-input"><img src="/static/img/menu.svg"></label>
                <div class="logo">
                    <img src="/static/img/logo-sp.svg">
                </div>
                <label class="nav-unshown" id="nav-close" for="nav-input">
                    <img class="button-close" src="/static/img/close.svg">
                </label>
                <div id="nav-content">
                    <div class="sp-menu-top">
                        <div class="icon-group">
                            <a href="#" @click.prevent="gotoNoticeListPage()" class="agrees-list">
                                <img src="/static/img/chacked_sp.svg">
                            </a>
                            <div class="notices">
                                <img src="/static/img/notices-sp.svg">
                            </div>
                            <div class="contact">
                                <img src="/static/img/contact-sp.svg">
                            </div>
                        </div>
                        <div>
                            <div>
                                <span class="username-wrapper"><span class="username" v-text="customerName"></span>さま</span>
                            </div>
                        </div>
                    </div>
                    <ul class="list-unstyled">
                        <li class="menu-target no-sub">
                            <a href="#">ホーム</a>
                        </li>
                        <li class="menu-target">
                            <a href="#" @click.prevent="toggleSubMenu('transfer')" class="short-menu-title" :class="{ active : spMenuToggleList['transfer'] }">{{ "振込・支払" }}</a>
                            <transition name="sp-menu-slide">
                                <ul v-show="spMenuToggleList['transfer']" class="sub-menu-list list-unstyled">
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
                            </transition>
                        </li>
                        <li class="menu-target">
                            <a href="#" class="no-icon">証券コネクト振替</a>
                        </li>
                        <li class="menu-target">
                            <a href="#" @click.prevent="toggleSubMenu('deposit')" :class="{ active : spMenuToggleList['deposit'] }">残高・明細・振込状況</a>
                            <transition name="sp-menu-slide">
                                <ul v-show="spMenuToggleList['deposit']" class="sub-menu-list list-unstyled">
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
                            </transition>
                        </li>
                        <li class="menu-target">
                            <a href="#" @click.prevent="toggleSubMenu('debit-card')" :class="{ active : spMenuToggleList['debit-card'] }">デビットカード</a>
                            <transition name="sp-menu-slide">
                                <ul v-show="spMenuToggleList['debit-card']" class="sub-menu-list list-unstyled">
                                    <li>
                                        <a href="#">カード基本設定</a>
                                    </li>
                                    <li>
                                        <a href="#">デビット入出金明細</a>
                                    </li>
                                    <li>
                                        <a href="#">カード追加（追加口座開設）<br>・カード国際ブランド切替</a>
                                    </li>
                                </ul>
                            </transition>
                        </li>
                        <li class="menu-target">
                            <a href="#" @click.prevent="toggleSubMenu('term-deposit')" :class="{ active : spMenuToggleList['term-deposit'] }">円定期</a>
                            <transition name="sp-menu-slide">
                                <ul v-show="spMenuToggleList['term-deposit']" class="sub-menu-list list-unstyled">
                                    <li>
                                        <a href="#">
                                            <span>残高照会</span>
                                            <span class="sub-text">新規預入・変更・解約</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">入出金明細</a>
                                    </li>
                                </ul>
                            </transition>
                        </li>
                        <li class="menu-target">
                            <a href="#" @click.prevent="toggleSubMenu('fcy-deposit')" class="short-menu-title" :class="{ active : spMenuToggleList['fcy-deposit'] }">外貨</a>
                            <transition name="sp-menu-slide">
                                <ul v-show="spMenuToggleList['fcy-deposit']" class="sub-menu-list list-unstyled">
                                    <li>
                                        <a href="#">
                                            <span>残高照会</span>
                                            <span class="sub-text">新規購入・売却・新規積立</span>
                                        </a>
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
                                        <a href="#">
                                            <span>注文一覧</span>
                                            <span class="sub-text">積立中止・変更</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">マーケット情報</a>
                                    </li>
                                </ul>
                            </transition>
                        </li>
                        <li class="menu-target">
                            <a href="" @click.prevent="gotoPage('overseas-remittance')" class="no-icon">海外送金（提携）</a>
                        </li>
                        <li class="menu-target">
                            <a href="#" @click.prevent="toggleSubMenu('sp-accounts')" :class="{ active : spMenuToggleList['sp-accounts'] }">つかいわけ口座</a>
                            <transition name="sp-menu-slide">
                                <ul v-show="spMenuToggleList['sp-accounts']" class="sub-menu-list list-unstyled">
                                    <li>
                                        <a href="#">
                                            <span>口座一覧</span>
                                            <span class="sub-text">新規追加・削除</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">振替</a>
                                    </li>
                                    <li>
                                        <a href="#">定額自動振替</a>
                                    </li>
                                    <li>
                                        <a href="#">設定</a>
                                    </li>
                                </ul>
                            </transition>
                        </li>
                        <li class="menu-target">
                            <a href="#" @click.prevent="toggleSubMenu('point-campaign')" :class="{ active : spMenuToggleList['point-campaign'] }">ポイント・キャンペーン</a>
                            <transition name="sp-menu-slide">
                                <ul v-show="spMenuToggleList['point-campaign']" class="sub-menu-list list-unstyled">
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
                            </transition>
                        </li>
                    </ul>
                    <ul class="list-unstyled customer-info">
                        <li class="menu-target">
                            <a href="#">
                                <img :src="icon-human">
                                お客さま情報（申込・設定）
                            </a>
                        </li>
                        <li class="menu-target">
                            <a href="#">
                                <img :src="icon-card">
                                カード・ATM
                            </a>
                        </li>
                        <li class="menu-target">
                            <a href="#">
                                <img :src="icon-security">
                                セキュリティ
                            </a>
                        </li>
                        <li class="menu-target">
                            <a href="#">
                                <img :src="icon-info">
                                メール・通知
                            </a>
                        </li>
                        <li class="menu-target">
                            <a href="#">
                                <img class="icon-file">
                                ファイル出力
                            </a>
                        </li>
                        <li class="menu-target">
                            <a href="#">
                                <img :src="icon-document">
                                書面発行（残高証明書等）
                            </a>
                        </li>
                        <li class="menu-target">
                            <a href="#">
                                <img class="icon-history">
                                ログイン履歴
                            </a>
                        </li>
                        <li class="menu-target">
                            <a href="#">
                                <img class="icon-guide-sp">
                                ガイド一覧
                            </a>
                        </li>
                    </ul>
                    <button-logout class="button-logout-wrapper"></button-logout>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import buttonLogout from '@/components/button-logout';

export default {
    props: {
        customerName: {
            type: String
        }
    },
    components: {
        buttonLogout
    },
    data () {
        return {
            navToggle: false,
            spMenuToggleList: {
                'transfer': false,
                'deposit': false,
                'debit-card': false,
                'term-deposit': false,
                'fcy-deposit': false,
                'foreign-reserve-trade': false,
                'fx-menu-list': false,
                'virtual-accounts': false,
                'sp-accounts': false,
                'biz-overseas-remittance': false,
                'point-campaign': false,
                'financing': false
            }
        };
    },
    watch: {
        navToggle () {
            if (this.navToggle) {
                document.querySelector('html').classList.add('sp-menu-show');
                this.$el.parentElement.querySelector('#nav-content').scrollTop = 0;
            } else {
                document.querySelector('html').classList.remove('sp-menu-show');
            }
        }
    },
    methods: {
        toggleSubMenu (target) {
            this.spMenuToggleList[target] = !this.spMenuToggleList[target];
        }
    },
    beforeUnmount () {
        document.querySelector('html').classList.remove('sp-menu-show');
    }
};
</script>



<style>
#header {
    font-size: 12px;
}

#header a {
    text-decoration: none;
}

#header .agrees-list {
    margin-right: 8px;
}

#header .agrees-list img,
#header .guide img,
#header .notices img {
    height: 48px;
    width: 72px;
}

#header .contact img {
    width: 96px;
}

#header .username-wrapper {
    align-items: baseline;
    display: flex;
    padding: 18px 32px 16px 16px;
}

#header .username {
    font-family: 'Roboto-Regular', 'Subset-NotoSansJP-DemiLight', sans-serif;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 210px;
    margin-right: 4px;
}
#header .username + span {
    max-width: 24px;
    min-width: 24px;
}

#header .button-logout-wrapper {
    margin-bottom: 42px;
    margin-top: 24px;
    text-align: center;
}

#header .container .sp-header-cover {
    align-items: center;
    display: flex;
    height: 48px;
}

#header .container .logo {
    margin-left: auto;
    margin-right: auto;
    width: 200px;
}

#header .container #nav-drawer {
    position: relative;
}

#header .container .sp-header-cover {
    height: 100%;
}


#header .container .sp-menu-slide-enter-active,
#header .container .sp-menu-slide-leave-active {
    transition: all .25s ease;
}

#header .container .sp-menu-slide-enter,
#header .container .sp-menu-slide-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

#header .container .nav-unshown {
    display:none;
}

#header .container .nav-open {
    padding-left: 9px;
    position: absolute;
    top: 10px;
}

#nav-close {
    display: none;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #BF0000;
    transition: .25s ease-in-out;
    text-align: right;
}

#nav-input:checked ~ #nav-close {
    display: block;
    background: rgba(rgb(27, 27, 27), 0.5);
}

#nav-input:checked ~ #nav-content {
    transform: translateX(0%);
}

#header .container .button-close {
    padding: 16px;
}

#nav-content {
    background: #fff;
    overflow: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 90%;
    max-width: 272px;
    height: 100%;
    transition: .25s ease-in-out;
    transform: translateX(-105%);
    overflow-x: hidden;
}
#nav-content ul {
    margin: 0;
    width: 272px;
    max-width: 272px;
}


#nav-content ul .menu-target .sub-menu-list a.with-icon {
    flex-direction: row;
    justify-content: flex-start;
}

#nav-content ul.customer-info {
    border-top: 1px solid #666;
}

#nav-content ul .menu-target a {
    display: flex;
    align-items: center;
    padding-left: 16px;
}

i {
    color: #666;
    margin-right: 23px;
}

#nav-content ul .menu-target::before {
    content: none;
}

#nav-content .sp-menu-top {
    background-image: url('/static/img/drawer-bg.png');
    background-size: contain;
    text-align: right;
    height: 118px;
    width: 272px;
}

#nav-content .sp-menu-top.icon-group {
    padding-right: 8px;
    text-align: center;
}

#nav-content .sp-menu-top .username-wrapper {
    color: #fff;
    font-size: 1rem;
    justify-content: flex-end;
    margin-top: 14px;
    padding-right: 24px;
}

#nav-content .sp-menu-top .username {
    max-width: 196px;
}

#nav-content .menu-target,
#nav-content .sub-menu-target {
    font-size: 14px;
    margin: 0;
    position: relative;
}
#nav-content .sp-menu-top a {
    color: #666;
    display: block;
    padding: 21px;
    text-align: left;
    width: 230px;
}

#nav-content .sp-menu-top a:not(.no-sub) {
    padding-left: 0;
}

#nav-content .sp-menu-top a:first-child {
    padding-left: 0;
}

#nav-content .sp-menu-top a::before {
    content: '\e905';
    color: #BF0000;
    font-family: 'icomoon';
    font-size: 18px;
    letter-spacing: 0px;
    position: absolute;
    right: 16px;
}

#nav-content .sp-menu-top a.no-icon::before {
    content: none;
}

#nav-content .sp-menu-top a.active {
    background: rgb(151, 144, 144);
    color: #BF0000;
}

#nav-content .sp-menu-top a.active::before {
    color: #BF0000;
    content: '\e90a';
}

.sub-menu-list a {
    color: #BF0000;
    display: flex;
    flex-direction: column;
    padding: 16px 0 16px 40px;
}

.sub-menu-list .sub-text {
    color: rgb(255, 197, 197);
    font-size: 13px;
    margin-top: 3px;
}

.icon-fx-form {
    font-size: 1rem;
    margin-left: 3px;
    margin-right: 28px;
}

.sub-menu-target:not(.no-sub) > a.active {
    color: rgb(255, 197, 197);
}

.sub-menu-target:not(.no-sub) .sub-menu-list a {
    padding-left: 80px;
}

.short-menu-title {
    letter-spacing: 5px;
}

.header-top {
    background: #BF0000;
    color: #fff;
}

.header-top .logo {
    display: block;
    text-align: center;
}

.header-sub {
    background: #BF0000;
    font-size: 14px;
}

.header-sub .common {
    display: flex;
    margin: 0;
}

.header-sub .common ul {
    display: flex;
    margin: 0;
}

_:-ms-lang(x), #header .container{
    height: 48px;
}

.sp-header-cover {
    height: 48px;
}

.logo {
    height: 48px;
}


.username-wrapper {
    padding: 18px 48px 16px 4px;
}

.username-wrapper .username {
    margin-right: 0;
    min-width: 100%;
}

@media screen and (min-width:1060px) {
#header {
    font-size: 12px;
    min-width: 1200px;
}

#header a {
    text-decoration: none;
}

#header .header-top {
    background: #666;
    color: #BF0000;
}

#header .logo {
    display: block;
    text-align: center;
}

#header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#header .container::after {
    display: none;
}

#header .container .logo img {
    height: 48px;
    max-width: 256px;
    min-width: 256px;
}

#header .container .logo {
    text-align: left;
}

#header .container .auto-login {
    text-align: right;
}

#header .container .user {
    align-items: center;
    justify-content: flex-end;
    text-align: right;
}
#header .user a {
    align-items: center;
    display: flex;
}

#header .user .user-info {
    display: flex;
    margin-right: 24px;
}


#header .user .user-info .agrees-list {
    margin-right: 24px;
}

#header .user .user-info .notices {
    margin-right: 16px;
}

#header .user .user-info .contact {
    margin-right: 24px;
}

#header .container .datetime {
    color: #999999;
    padding: 17px 0 16px;
}

#header .container .logout {
    color: #BF0000;
}


#header .header-sub {
    background: #666;
    font-size: 14px;
}
#header .common {
    height: 48px;
}

#header .common ul {
    display: flex;
    margin: 0;
}

#header .menu-target {
    cursor: pointer;
    margin: 0;
    padding-right: 16px;
    position: relative;
    height: 48px;
    display: flex;
    align-items: center;
}

#header .menu-target a {
    color: #BF0000;
    -webkit-font-smoothing: antialiased;
    display: block;
    padding: 8px;
    text-align: center;
}

#header .menu-target:hover {
    text-shadow: 0.1px 0.3px 0 #BF0000;
    -webkit-font-smoothing: subpixel-antialiased;
}

#header .menu-target.with-icon {
    display: flex;
}
#header .menu-target i {
    margin-left: 2px;
}


#header .menu-target ul {
    visibility: hidden;
    opacity: 0;
    min-width: 236px;
}

#header .menu-target:hover ul {
    visibility: visible;
    opacity: 1;
}

#header .menu-target:first-child {
    padding-left: 0;
}

#header .menu-target .short-menu-title {
    letter-spacing: 5px;
}

#header .menu-target:hover .sub-menu-list::before {
    content: '';
    top: 0;
    height: 3px;
    left: 0;
    position: absolute;
    width: 100%;
}

#header .menu-target .sub-menu-list {
    background: #666;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    position: absolute;
    margin: 0;
    top: 48px;
    left: 0;
    line-height: 16px;
    white-space: nowrap;
    z-index: 999;
}

#header .menu-target .sub-menu-list li {
    margin: 0;
    -webkit-font-smoothing: antialiased;
}

#header .menu-target .sub-menu-list:hover {
    background: #666;
    color: #BF0000;
    text-shadow: 0.1px 0.3px 0 #999999;
    -webkit-font-smoothing: subpixel-antialiased;
}

#header .menu-target .sub-menu-list:hover .sub-menu-list {
    text-shadow: none;
}

#header .menu-target .sub-menu-list a {
    color: rgb(27, 27, 27);
    display: block;
    padding: 10px 16px;
}

#header .menu-target .sub-menu-list a:hover {
    color: #999999;
}

#header .menu-target .sub-menu-list a.with-icon {
    justify-content: flex-start;
    display: flex;
}
#header .menu-target .sub-menu-list a i {
    margin-left: 2px;
}

#header .menu-target .sub-menu-list:last-child a {
    padding-bottom: 16px;
}

#header .menu-target .sub-menu-target {
    position: relative;
}

#header .menu-target:hover .sub-menu-list li {
    visibility: visible;
    opacity: 1;
    height: 100%;
    line-height: 16px;
}

#header .menu-target .sub-menu-list {
    top: 0;
    left: 200px;
    min-width: 140px;
}

#header .menu-target .sub-menu-list li {
    overflow: hidden;
    opacity: 0;
    height: 0;
}

.header-sub .menu-target a {
    min-width: 100%;
}

_:-ms-lang(x), #header .user-info .menu-target a {
    margin-right: 16px;
}
}
</style>
