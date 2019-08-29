<template>
  <div class="home">
    <div class="top-nav flexbox between">
      <div class="left-logo"></div>
      <div class="right-setting flexbox between">
        <div class="right-usersesson">
          <p>zzz474svip</p>
        </div>
        <div class="inner-right">
          <span class="question"></span>
          <span class="vip-logo"></span>
          <span class="ses-tip"></span>
          <span class="telephone-note"></span>
          <span class="setting"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',

}
</script>
<style lang="less">
.home {
  .top-nav {
    height: 60px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: #0173b2;
    .left-logo {
      height: 100%;
      background: url("~@/assets/image/logo5.0.png") center center/204px auto
        no-repeat;
      width: 205px;
      box-sizing: border-box;
    }
    .right-setting {
      color: #fff;
      font-size: 20px;
      flex: 1;
      padding: 0 20px;
      box-sizing: border-box;
      .inner-right {
        span {
          display: inline-block;
          width: 60px;
          height: 30px;
          padding: 0 15px;
          vertical-align: middle;
          background: url("~@/assets/image/icon.png") center center/30px auto
            no-repeat;
          cursor: pointer;
          &.question {
            background-position-y: -420px;
            &:hover {
              background-position-y: -460px;
            }
          }
          &.vip-logo {
            background-position-y: -35px;
            &:hover {
              background-position-y: -191px;
            }
          }
          &.ses-tip {
            background-position-y: -343px;
            &:hover {
              background-position-y: -380px;
            }
          }
          &.telephone-note {
            background-position-y: -75px;
            &:hover {
              background-position-y: -231px;
            }
          }
          &.setting {
            background-position-y: -114px;
            &:hover {
              background-position-y: -271px;
            }
          }
        }
      }
    }
  }
}
</style>