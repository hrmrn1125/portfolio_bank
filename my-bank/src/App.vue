<template>
    <div id="app">
        <bank-header></bank-header>
        <private-bank :information-area-data="informationAreaData"></private-bank>
        <bank-footer></bank-footer>
    </div>
</template>

<script>
import bankHeader from '@/components/bank-header';
import privateBank from '@/components/private-bank';

export default {
    name: 'app',
    components: {
        bankHeader,
        privateBank
    },
    data () {
        return {
            informationAreaData: {
                messageList: [
                    '•ご確認事項1：文字省略確認のため長い文字列にしています。内容をご確認ください。',
                    '•アンケートご協力のお願い',
                    '•重要な確認事項があります。内容をご確認ください。'
                ],
                campaignList: [
                    '•実はこんなところで使える！Visaデビット付キャッシュカード',
                    '•2021年4月以降に開設のお客様へのキャンペーンのご案内：文字省略確認のため長い文字列にしています。',
                    '•○×モバイル新規お申し込みで2,000ポイントプレゼント！'
                ]
            }
        };
    }
};
</script>

<style>
#app {
    background: #efeff4;
    color: #2c3e50;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

body {
    margin: 0;
    padding: 0;
}

ul {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

.desktop-only {
    display: block;
}

.smartphone-only {
    display: none;
}

@media screen and (min-width:768px) and (max-width:1060px) {
    .desktop-only {
        display: block;
    }

    .smartphone-only {
        display: none;
    }
}

@media screen and (max-width:767px) {
    .desktop-only {
        display: none;
    }

    .smartphone-only {
        display: block;
    }
}
</style>