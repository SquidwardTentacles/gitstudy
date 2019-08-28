<template>
  <div class="login">
    <div class="login-top flexbox between">
      <div class="left-login"></div>
      <div class="right-title">
        <div class="inner-box"
             @mouseleave="outerBoxMouse">
          <div class="cursor-box flexbox between">
            <span>南方网通官网</span>
            <span class="right-img"
                  @mouseenter="rightHiddenCode"></span>
          </div>
          <div class="cursor-hiddenbox"
               v-if="hiddenCodeShow">
            <img src="@/assets/image/login/hidden-twocode.jpg"
                 alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="flexbox main-box">
      <div class="login-main-box">
        <div class="icon-box"></div>
        <div class="tip-box">
          <p>温馨提醒：使用
            <span>谷歌浏览器</span> 登录云推广后台有惊喜！<span>检测下载</span></p>
        </div>
        <div class="input-box">
          <el-form :model="ruleForm"
                   status-icon
                   :rules="rules"
                   ref="ruleForm"
                   class="demo-ruleForm">
            <el-form-item label=""
                          prop="username">
              <el-input type="text"
                        placeholder="请输入用户名"
                        v-model="ruleForm.username"
                        autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label=""
                          prop="password">
              <el-input type="password"
                        placeholder="请输入密码"
                        v-model="ruleForm.password"
                        autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    return {
      hiddenCodeShow: false,
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass, trigger: 'blur' }
        ],
      }
    }
  },
  mounted () {
    console.log(this.regObj.password, 'w');

  },
  methods: {
    // 右侧小二维码鼠标事件
    rightHiddenCode () {
      this.hiddenCodeShow = true
    },
    // 外侧大盒子鼠标事件
    outerBoxMouse () {
      this.hiddenCodeShow = false
    },
  },
}
</script>
<style lang="less">
.login {
  background: #f7fafc url("~@/assets/image/login/bodybg.png") center bottom
    no-repeat;
  height: 100%;
  .login-top {
    height: 55px;
    padding: 0 40px;
    box-sizing: border-box;
    .left-login {
      width: 165px;
      height: 48px;
      background: url("~@/assets/image/login/logo.png") center center/cover
        no-repeat;
    }
    .right-title {
      position: relative;
      min-width: 170px;
      height: 40px;
      .inner-box {
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
        width: 100%;
        .cursor-box {
          padding-left: 20px;
          height: 100%;
          height: 40px;
          border: solid 1px #ccc;
          border-radius: 5px;
          text-align: left;
          color: #1db7ff;
          cursor: pointer;
          .right-img {
            width: 50px;
            height: 100%;
            background: url("~@/assets/image/login/s-twocode.png") center center
              no-repeat;
          }
        }
        .cursor-hiddenbox {
          width: 140px;
          height: 140px;
          margin: 0 auto;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .main-box {
    flex-direction: column;
    width: 500px;
    height: calc(100vh - 60px);
    margin: 0 auto;
    .login-main-box {
      width: 360px;
      margin: 0 auto;
      .icon-box {
        width: 100%;
        height: 110px;
        background: url("./assets/image/login/loginxiala.png") center center
          no-repeat;
      }
      .tip-box {
        line-height: 30px;
        color: #6a6a6a;
        font-size: 12px;
        margin-bottom: 25px;
        p {
          span:nth-child(1) {
            color: red;
          }
          span:nth-child(2) {
            color: #003f96;
            margin-left: 3px;
          }
        }
      }
    }
  }
}
</style>