<template>
    <footer id="footer">
        <div class="container">
            <div v-for="footerItem in footerItemList" class="link-block-corp" :key="footerItem">
                <div href="#">
                    <p v-text="footerItem"></p>
                </div>
            </div>
            <div class="copyright">GMOあおぞらネット銀行株式会社 <br class="smartphone-only">登録金融機関 関東財務局長（登金）第665号<br class="smartphone-only"> 一般社団法人 金融先物取引業協会加入</div>
            <div class="copyright">Copyright © GMO Aozora Net Bank, Ltd. All Rights Reserved.</div>
        </div>
        <div class="button-top">
            <div class="container">
                <!-- tabキー対策 フォーカス可能な最終要素にfocusFirstChildを設定 必ず一番最終になるように -->
                <a href="#" @click.prevent="onClickTop" @focus="focusFirstChild">
                    <span class="btn-arrow"></span>
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'bankFooter',
    data () {
        return {
            footerItem: [
                '金利',
                '手数料',
                'よくあるご質問',
                '会社情報',
                '各種方針',
                '苦情・紛争解決機関',
                '規定・約款一覧',
                '金融犯罪の注意喚起',
                'セキュリティ対策',
                'ガイド一覧'
            ]
        };
    },
    methods: {
        onClickTop () {
            window.scrollTo(0, 0);
        }
    },
    computed: {
        footerItemList () {
            return this.footerItem;
        }
    }
};
</script>

<style lang="scss" scoped>
    @import "../assets/sass/libs/breakpoint-sass/stylesheets/breakpoint";
    .button-top {
        bottom: 60px;
        height: 1px;
        position: fixed;
        width: 100%;
        z-index: 10;

        .container {
            position: relative;
            width: inherit;
            height: 1px;
        }

        a {
            background: linear-gradient(45deg, rgba(36, 57, 73, 1) 0%, rgba(81, 127, 164, 1) 100%);
            backface-visibility: hidden; /* bug fix for chrome browser */
            border-radius: 50%;
            display: inline-block;
            line-height: 44px;
            width: 44px;
            height: 44px;
            opacity: .7;
            position: absolute;
            right: 16px;
            transition: all 0.3s;
            text-align: center;
            text-decoration: none;
        }

        .btn-arrow {
            left: 0;
            position: absolute;
            text-align: center;
            top: 0px;
            width: 100%;

            &::before {
                color: #fff;
                content: "\e90a";
                font-family: icomoon;
                font-size: 2.5rem;
            }
        }

        .text {
            display: inline-block;
            margin-top: 3px;
        }
    }

@include breakpoint(screen 769px) {
        .button-top {
            a:hover {
                opacity: 1;
            }
        }
    }
</style>

<style>
#footer {
  background: $footer-bg;
  font-size: 0.8rem;
  color: $footer-color;

  > .container {
    font-size: 0.9rem;
    padding: 16px;

    > div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      line-height: 45px;

      & + div {
        margin-top: 16px;
      }
    }

    a {
      display: inline-block;
      color: #fff;
      min-width: 136px;
    }

    .copyright {
      color: $footer-copyright-color;
      font-size: .7rem;
      line-height: 22px;
      margin-top: 8px;
    }
  }
}

@include breakpoint($screen-tablet) {
  #footer {
    min-width: 1200px;

    > .container {
      font-size: 0.9rem;
      padding: 24px 0 16px 0;
      padding-left: 32px;
      width: 1080px;

      > div {
        line-height: 23px;
        max-width: 1024px;
      }

      div + div {
        margin-top: 16px;
      }

      a {
        font-size: 0.9rem;
        min-width: auto;
        min-width: inherit;
      }

      .copyright {
        line-height: 8px;
        margin-top: 16px;
      }
    }
  }
}

</style>