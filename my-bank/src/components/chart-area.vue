<template>
    <div class="account-summary">
        <div class="graph">
            <div class="chart-wrapper"><canvas ref="chart" :id="id"></canvas></div>
        </div>
        <div class="summary">
            <p class="text-left text-description">総残高(評価額)</p>
            <p>
                <span class="total amount">
                    <span v-text="dispTotalBalance"></span>
                    <span class="unit">円</span>
                </span>
            </p>
            <p class="before-ratio">
                <span class="text-description">前日比</span>
                <span class="amount">
                    <span v-text="dispDayBeforeRatio"></span>
                    <span class="unit">円</span>
                </span>
            </p>
            <p class="text-sub">
                <small>最終更新日時: <span v-text="dispLastUpdateDatetime"></span></small>
            </p>
        </div>
    </div>
</template>

<script>
import { debounce } from 'lodash';
import BigNumber from 'bignumber.js';
import ChartJS from 'chart.js';
import { formatDate } from '@/assets/js/date-utils';
import { formatNumberString } from '@/assets/js/string-utils';
import { isNumeric } from '@/assets/js/number-utils';
import { isSP } from '@/assets/js/device-utils';

export default {
    name: 'chartArea',
    props: {
        chartData: {
            type: Object
        }
    },
    data () {
        return {
            isSP: isSP(),
            chart: null,
            queryDatetime: '20220707120000000'
        };
    },
    created () {
        window.addEventListener('resize', this.updateIsSP, false);
    },
    beforeUnmount () {
        window.removeEventListener('resize', this.updateIsSP, false);
    },
    computed: {
        totalBalance () {
            return this.chartData.totalBalance;
        },
        lastDayTotalBalance () {
            return this.chartData.lastDayTotalBalance;
        },
        ordinaryDepositTotalBalance () {
            return this.chartData.ordinaryDepositTotalBalance;
        },
        sweepTotalBalance () {
            return this.chartData.sweepTotalBalance;
        },
        termDepositTotalBalance () {
            return this.chartData.termDepositTotalBalance;
        },
        fcyOrdinaryDepositTotalJpyBalance () {
            return this.chartData.fcyOrdinaryDepositTotalJpyBalance;
        },
        balanceRatios () {
            return [
                this.chartData.ordinaryDepositTotalBalance,
                this.chartData.sweepTotalBalance,
                this.chartData.termDepositTotalBalance,
                this.chartData.fcyOrdinaryDepositTotalJpyBalance
            ].filter(balance => {
                return balance > 0;
            }).map(balance => {
                return this.calcBalanceRatio(balance, this.chartData.totalBalance);
            });
        },
        labels () {
            return [
                { label: '円普通預金', balance: this.chartData.ordinaryDepositTotalBalance },
                { label: '証券コネクト口座', balance: this.chartData.sweepTotalBalance },
                { label: '円定期預金', balance: this.chartData.termDepositTotalBalance },
                { label: '外貨普通預金', balance: this.chartData.fcyOrdinaryDepositTotalJpyBalance }
            ].filter(data => {
                return data.balance > 0;
            }).map(data => {
                return {
                label: data.label,
                balance: formatNumberString(data.balance)
                };
            });
        },
        /**
         * 前日比を算出する。
         */
        dayBeforeRatio () {
            return this.chartData.totalBalance - this.chartData.lastDayTotalBalance;
        },
        dispTotalBalance () {
            return formatNumberString(this.chartData.totalBalance);
        },
        /**
         * 口座開設初日とEOD処理時間帯は、前日比を算出できない。
         * 前日比を算出できない場合は、「 - (ハイフン)」を表示する。
         */
        dispDayBeforeRatio () {
            const num = formatNumberString(this.dayBeforeRatio);
            return '+' + num;
        },
            dispLastUpdateDatetime () {
            return formatDate(this.queryDatetime, 'yyyy/MM/dd hh:mm');
        }
    },
    watch: {
        isSP () {
            this.drawChart();
        }
    },
    methods: {
        calcBalanceRatio (balance, totalBalance) {
        const calculable = isNumeric(balance) && isNumeric(totalBalance) && Number(totalBalance) !== 0;
        if (calculable) {
            return new BigNumber(balance)
            .times(100)
            .div(totalBalance)
            .toFixed(1, BigNumber.ROUND_HALF_UP);
        } else {
            return null;
        }
        },
        drawChart () {
            const ctx = this.$refs.chart.getContext('2d');
            const id = 'http://this.id';
            this.chart = new ChartJS(ctx, {
                type: 'doughnut',
                options: {
                    responsive: true,
                    cutoutPercentage: 85,
                    events: ['mousemove', 'mouseout', 'click'],
                    legend: {
                        display: false,
                        position: 'bottom'
                    },
                    animation: {
                        animateScale: true,
                        animateRotate: true
                    },
                    tooltips: {
                        enabled: !this.isSP,  // SP表示の時はツールチップを表示しない
                        displayColors: false,
                        callbacks: {
                            label: function (item, data) {
                                let val = data.datasets[item.datasetIndex].data[item.index];
                                let _data = data.labels[item.index];
                                return [_data.label, `${_data.balance}円`, `${val}%`];
                            }
                        },
                        xPadding: 10,
                        yPadding: 6,
                        backgroundColor: 'rgba(74, 82, 90, 1)',
                        cornerRadius: 3,
                        bodyFontSize: 14,
                        custom: function (tooltipModel) {
                            // ツールチップ要素
                            let tooltipEl = document.getElementById('chartjs-tooltip');
                            if (!isSP()) {
                                // PC表示の時にSP用ツールチップがDOMに構築されている場合は破棄する
                                if (tooltipEl) {
                                    tooltipEl.parentNode.removeChild(tooltipEl);
                                }
                                return;
                            }
                            // 最初のレンダリング時に要素を作成する
                            if (!tooltipEl) {
                                tooltipEl = document.createElement('div');
                                'http://tooltipEl.id' == 'chartjs-tooltip';
                                tooltipEl.innerHTML = '<div></div>';
                                document.body.appendChild(tooltipEl);
                            }
                            // ツールチップがない場合は非表示にする
                            if (tooltipModel.opacity === 0) {
                                tooltipEl.style.opacity = 0;
                                return;
                            }
                            // キャレット(ツールチップが指し示すもの)の位置を設定する
                            tooltipEl.classList.remove('above', 'below', 'no-transform');
                            if (tooltipModel.yAlign) {
                                tooltipEl.classList.add(tooltipModel.yAlign);
                            } else {
                                tooltipEl.classList.add('no-transform');
                            }
                            function getBody (bodyItem) {
                                return bodyItem.lines;
                            }
                            // テキストを設定する
                            if (tooltipModel.body) {
                                const bodyLines = tooltipModel.body.map(getBody);
                                let innerHtml = '';
                                bodyLines.forEach(function (body) {
                                    const [label, balance, val] = body;
                                    innerHtml += '<div>' + label +
                                        '</div><div>' + balance +
                                        '</div><div>' + val + '</div>';
                                });
                                const tooltipRoot = tooltipEl.querySelector('div');
                                tooltipRoot.innerHTML = innerHtml;
                            }
                            // チャート要素
                            const chartEl = document.getElementById(id);
                            const chartPosition = chartEl.getBoundingClientRect();
                            const chartMiddlePoint = chartPosition.height / 2; // チャート要素のY軸中央点
                            const chartCenterPoint = chartPosition.width / 2;  // チャート要素のX軸中央点
                            const tooltipPosition = tooltipEl.getBoundingClientRect();
                            const tooltipMiddlePoint = tooltipPosition.height / 2; // ツールチップ要素のY軸中央点
                            const tooltipCenterPoint = tooltipPosition.width / 2;  // ツールチップ要素のX軸中央点
                            // 表示、配置、およびフォントスタイルの設定
                            tooltipEl.style.opacity = 1;
                            const y = window.pageYOffset + chartPosition.top + chartMiddlePoint - tooltipMiddlePoint;
                            const x = window.pageXOffset + chartPosition.left + chartCenterPoint - tooltipCenterPoint;
                            tooltipEl.style.top = (y > 0 ? y : 0) + 'px';
                            tooltipEl.style.left = (x > 0 ? x : 0) + 'px';
                        }
                    }
                },
                data: {
                    labels: this.labels, //[{ label: '普通預金', balance: '3,000円' }, { label: '証券コネクト口座残高', balance: '50,000円' }, { label: '定期預金', balance: '12,000円' }, { label: '外貨総残高', balance: '100円' }],
                    datasets: [{
                        label: '#',
                        data: this.balanceRatios,
                        backgroundColor: [
                            '#F8BBD0',
                            '#FF4081',
                            '#C51162',
                            '#880E4F'
                        ],
                        borderWidth: 0
                    }]
                }
            });
        },
        updateIsSP: debounce(function () {
            this.isSP = isSP();
        }, 300)
    },
    mounted () {
        this.drawChart();
    }
};
</script>

<style>
.account-summary {
  display: flex;
  position: relative;
  text-align: right;

  .graph {
    flex: 1 1 120px;
    max-width: 120px;
    width: 120px;

    .chart-wrapper {
      position: relative;
      z-index: 10;
    }
  }

  .total.amount span:not(.unit) {
    font-size: 1.3rem;
  }

  .before-ratio {
    display: flex;
    flex-direction: column;

    span:first-child {
      text-align: left;
    }
  }

  .summary {
    justify-content: flex-end;
    flex: 1 1 auto;

    p:last-child {
      margin-bottom: 0;
    }
  }
}

#chartjs-tooltip {
  position: absolute;
  color: #fff;
  background-color: $tooltip-bg;
  z-index: 10;
  border-radius: 3px;
  padding: 6px 10px;
  font-size: 80%;
  min-width: 96px;
  text-align: center;
}

@include breakpoint($screen-tablet) {
  .account-summary {
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 366px;

    .graph {
      align-items: center;
      display: flex;
      flex: 1 1 100%;
      height: 300px;
      justify-content: center;
      max-width: none;
      width: 80%;

      .chart-wrapper {
        display: flex;
        height: 100%;
        width: 290px;
      }
    }

    .summary {
      display: flex;
      flex-direction: column;
      max-width: 180px;
      position: absolute;
      text-align: left;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 50%;

      p {
        margin: 8px 0;

        &:nth-child(2) {
          text-align: right;
        }

        &:nth-child(3) {
          align-items: center;
          display: flex;

          .amount {
            flex: 1 1 auto;
          }
        }
      }

      .before-ratio {
        flex-direction: row;
      }

      .amount span:not(.unit) {
        font-size: 1.2rem;
      }

      .amount.total span:not(.unit) {
        font-size: 1.6rem;
      }
    }
  }
}

</style>
