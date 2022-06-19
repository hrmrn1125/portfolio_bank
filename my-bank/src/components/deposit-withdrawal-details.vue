<template>
    <div class="data-list-summary">
        <div class="data-list">
            <table class="info-list no-horizontal-line">
                <tbody>
                    <tr v-for="(statement, index) of dispStatementList" :key="index">
                        <td v-text="statement.dispValueDate" class="text-muted"></td>
                        <td v-text="statement.dispRemark" class="text-muted"></td>
                        <td class="amount"><span v-text="statement.dispAmount"></span><span class="unit">円</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="full-data-list-link smartphone-only">
            <a href="#" class="link-nav">一覧へ</a>
        </div>
    </div>
</template>

<script>
import { cloneDeep } from 'lodash';
import { toYYYYMMDD } from '@/assets/js/date-utils';
import { formatNumberString } from '@/assets/js/string-utils';

export default {
    name: 'depositWithdrawalDetails',
    data () {
        return {
            statementList: [
                {
                    amount: '12345',
                    remark: '振込 カ）アオゾラギンコウ アオゾラ タロウ',
                    valueDate: '20170705'
                },
                {
                    amount: '12345',
                    remark: '振込 カ）アオゾラギンコウ アオゾラ タロウ',
                    valueDate: '20170705'
                },
                {
                    amount: '12345',
                    remark: '振込 カ）アオゾラギンコウ アオゾラ タロウ',
                    valueDate: '20170705'
                },
                {
                    amount: '12345',
                    remark: '振込 カ）アオゾラギンコウ アオゾラ タロウ',
                    valueDate: '20170705'
                },
                {
                    amount: '12345',
                    remark: '振込 カ）アオゾラギンコウ アオゾラ タロウ',
                    valueDate: '20170705'
                }
            ]
        };
    },
    computed: {
        dispStatementList () {
            const statementList = cloneDeep(this.statementList.slice(0, 5));
            statementList.forEach(s => {
                s.dispValueDate = toYYYYMMDD(s.valueDate);
                s.dispRemark = s.remark;
                s.dispAmount = formatNumberString(s.amount);
            });
            return statementList;
        }
    }
};
</script>

<style>
.data-list-summary {
    width: 55vw;
    float: left;
    background: #ffffff;
}
</style>
