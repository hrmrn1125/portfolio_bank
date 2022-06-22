<template>
    <div class="deposit-withdrawal-details no-decoration">
        <div class="panel-body panel-body-flex">
            <div class="tabs-wrapper">
                <ul class="tabs short">
                    <li :class="{ active : selectedTab === 'deposit-withdrawal-details' } ">
                        <a href="#" @click.prevent="changeTab('deposit-withdrawal-details')">入出金明細</a>
                    </li>
                    <li :class="{ active : selectedTab === 'transfer-reserve-details' } ">
                        <a href="#" @click.prevent="changeTab('transfer-reserve-details')">引落し・振込予定</a>
                    </li>
                </ul>
                <a href="#" class="desktop-only link-nav">一覧へ</a>
            </div>
            <component :is="selectedTab"></component>
        </div>
    </div>
</template>

<script>

import depositWithdrawalDetails from '@/components/deposit-withdrawal-details';
import transferReserveDetails from '@/components/transfer-reserve-details';

export default {
    name: 'depositList',
    components: {
        depositWithdrawalDetails,
        transferReserveDetails
    },
    data () {
        return {
            selectedTab: 'deposit-withdrawal-details'
        };
    },
    methods: {
        changeTab (tab) {
            this.selectedTab = tab;
        }
    }
};
</script>

<style>

</style>
