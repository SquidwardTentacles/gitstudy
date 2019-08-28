import Vue from 'vue';

let regObj = {
  username: /^[a-zA-Z0-9_-]{6,16}$/,
  // password: /^{6}$/
};
Vue.prototype.regObj = regObj;
