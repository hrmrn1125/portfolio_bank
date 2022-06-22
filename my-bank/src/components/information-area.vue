<template>
    <div class="information-area">
        <table class="information-tbl">
            <tbody>
                <tr>
                    <th class="information-left">
                        <div class="desktop-only info-wrap">
                            <div class="info-heading-wrap">
                                <a class="info-heading" @click.prevent=";">ご確認事項</a>
                                <span class="info-circle">3</span>
                            </div>
                        </div>
                    </th>
                    <th class="information-right">
                        <div class="desktop-only info-wrap">
                            <div class="info-heading-wrap">
                                <a class="info-heading" @click.prevent=";">お知らせ</a>
                            </div>
                            <span class="info-circle">3</span>
                        </div>
                    </th>
                </tr>
                <tr>
                    <div class="information-area-smart-top">
                        <div class="smartphone-only buttons-smart">
                            <ul>
                                <li>
                                    <a-badge>
                                    <button type="button" class="button-information" @click.prevent=";">重要なお知らせ</button>
                                    </a-badge>
                                </li>
                                <li>
                                    <a-badge>
                                    <button type="button" class="button-information" @click.prevent=";">ご確認事項</button>
                                    </a-badge>
                                </li>
                            </ul>
                        </div>
                    </div>
                </tr>
                <tr>
                    <td class="information-left desktop-only">
                        <span class="information-txt">
                            <div class="info-block" v-for="messageData of informationAreaData.messageList" :key="messageData">
                                <a v-text="messageData"></a>
                            </div>
                        </span>
                    </td>
                    <td class="information-right desktop-only">
                        <span class="information-txt">
                            <div class="info-block" v-for="campaignData of informationAreaData.campaignList" :key="campaignData">
                                <a v-text="campaignData"></a>
                            </div>
                        </span>
                    </td>
                </tr>
                <tr>
                    <div class="smartphone-only">
                        <table class="information-list-table-upper">
                            <thead>
                                <tr>
                                    <td>
                                    <span class="new-icon-link mark required">NEW</span>
                                    <a href="#" class="link-nav information-list-table-head-link" @click.prevent=";">サービス等のご案内</a>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="messageData of informationAreaData.messageList" :key="messageData">
                                    <td>
                                        <span class="new-circle-icon"></span>
                                        <span class="title" v-text="messageData"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table class="information-list-table-lower">
                            <thead>
                                <tr>
                                    <td>
                                    <span class="new-icon-link mark required">NEW</span>
                                    <a href="#" class="link-nav information-list-table-head-link" @click.prevent=";">キャンペーン</a>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="campaignData of informationAreaData.campaignList" :key="campaignData">
                                    <td class="td-ie-only-sp">
                                        <span class="new-circle-icon"></span>
                                        <span class="title" v-text="campaignData"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'informationArea',
    props: {
        informationAreaData: {
            type: Object
        }
    }
};
</script>

<style>
.information-area::before {
    content: '';
    background: #BF0000;
    height: 3px;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 10;
}

.information-area {
    width: 96vw;
    border: solid 1px #dAdAd9;
    background-color: #fff;
    box-shadow: 0px 2px 2px #e1e1e1;
    box-sizing: border-box;
    margin: 24px auto 0;
    position: relative;
}

.information-tbl {
    box-sizing: border-box;
    margin: 20px auto;
}

.information-left {
    height: 32px;
    font-weight: normal;
    text-align: left;
}

.information-left .info-wrap {
    height: 32px;
    position: relative;
    border-bottom: 1px #ECECEC solid;
    margin-right: 10px;
}

.information-right {
    border-left: 1px #ECECEC solid;
    height: 32px;
    font-weight: normal;
    text-align: left;
}

.information-right .info-wrap {
    height: 32px;
    position: relative;
    border-bottom: 1px #ECECEC solid;
    margin-left: 10px;
}

.info-heading {
    bottom: -1px;
    color: #686868;
    font-size: 16px;
    border-bottom: 2px #BF0000 solid;
    padding: 0 2px 4px;
    position: absolute;
    right: 21px;
    white-space: nowrap;
}

.info-circle {
    position: absolute;
    right: 0;
    bottom: 15px;
    display: inline-block;
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%;
    background-color: #4A4A4A;
    color: #fff;
    text-align: center;
    padding: 0;
    margin: 0;
}

td.information-left {
    width: 50%;
    display: table-cell;
    padding-top: 14px;
    position: relative;
    vertical-align: top;
}

td.information-left span + .information-txt {
    display: inline-block;
    padding-left: 75px;
    margin-top: 5px;
}

td.information-right {
    width: 50%;
    display: table-cell;
    padding-top: 14px;
    padding-left: 10px;
    border-left: 1px #ECECEC solid;
    vertical-align: top;
}

.info-block {
    font-size: 14px;
    max-width: 45vw;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

@media screen and (min-width:1400px) {
.information-area {
    width: 1400px;
}
}
</style>