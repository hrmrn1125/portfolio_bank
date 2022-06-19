<template>
    <div class="reccomend-campaign-banner">
        <div class="header-label">おすすめサービス・キャンペーン</div>
        <div class="body">
            <div href="#" v-for="campaign in campaignList" :key="campaign">
                <a href="#">
                    <img :key="campaign" :src="campaign" class="banner">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'reccomendCampaignBanner',
    data () {
        return {
            campaignBannerList: [
                require('@/assets/img/banner.png'),
                require('@/assets/img/banner.png'),
                require('@/assets/img/banner.png')
            ]
        };
    },
    computed: {
        campaignList () {
            return this.campaignBannerList;
        }
    }
};
</script>