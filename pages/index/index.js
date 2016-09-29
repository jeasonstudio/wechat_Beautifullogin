//index.js
var common = require('common.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    phonenumber: '',
    password: '',
    numShow: false,
    psdShow: false,
    userInfo: {}
  },
  onLoad: function () {
    // common.sayHello()

    console.log('onLoad')
    var that = this
  	//登录
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({userInfo: res.userInfo})
            that.update()
          }
        })
      },
      fail: function (res) {
        console.log(res)
      }
    });
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindNumInput: function(e) {
    this.setData({
      phonenumber: e.detail.value
    })
    console.log(this.data.phonenumber)
  },
  bindPsdInput: function(e) {
    this.setData({
      password: e.detail.value
    })
    console.log(this.data.password)
  },
  numChange: function(e) {
    if(this.data.phonenumber == '') {
      this.data.numShow = true;
      this.data.psdShow = false;
      console.log('手机号不能为空' + this.data.numShow);
    }
  },
  psdChange: function(e) {
    if(this.data.password == '') {
      this.data.numShow = false;
      this.data.psdShow = true;
      console.log('密码不能为空' + this.data.psdShow);
    }
  },
  loginSubmit: function(e) {
    console.log(this)
    if(this.data.phonenumber != '' && this.data.password != '') {
      this.data.numShow = false;
      this.data.psdShow = false;
      console.log("Success");
      wx.navigateTo({
        url: '../main/main'
      })
    }else if(this.data.phonenumber == '') {
      this.data.numShow = true;
      this.data.psdShow = false;
      console.log("phonenumber不能为空" + this.data.numShow)
    }else if(this.data.password == '') {
      this.data.numShow = false;
      this.data.psdShow = true;
      console.log("password不能为空" + this.data.psdShow)
    }
  },
  RandP: function() {
    console.log("暂不支持注册和密码找回")
  }
})
