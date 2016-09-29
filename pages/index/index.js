//index.js
var common = require('common.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    phonenumber: '',
    password: '',
    numShow: 'none',
    psdShow: 'none',
    modelInnerHtml: '123',
    loadingHidden: true,
    modalHidden: true
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
  // 账号修改
  bindNumInput: function(e) {
    this.setData({
      numShow: 'none',
      phonenumber: e.detail.value
    })
    console.log(this.data.phonenumber)
  },
  // 密码修改
  bindPsdInput: function(e) {
    this.setData({
      psdShow: 'none',
      password: e.detail.value
    })
    console.log(this.data.password)
  },
  // 账号失去焦点
  numChange: function() {
    if(this.data.phonenumber == '') {
      this.setData({
        numShow: '',
        psdShow: 'none'
      })

      console.log('手机号不能为空' + this.data.numShow);
    }
  },
  // 密码失去焦点
  psdChange: function() {
    if(this.data.password == '') {
      this.setData({
        numShow: 'none',
        psdShow: ''
      })

      console.log('密码不能为空' + this.data.psdShow);
    }
  },
  // 弹窗消失
  modalChange: function() {
    this.setData({
      modalHidden: true
    })
  },
  // 点击提交按钮
  loginSubmit: function(e) {
    console.log(this)
    if(this.data.phonenumber != '' && this.data.password != '') {
      this.setData({
        numShow: 'none',
        psdShow: 'none',
        loadingHidden: false
      })

      console.log("Success");

      var that = this
      setTimeout(function () {
        that.setData({
          loadingHidden: true
        })
        wx.navigateTo({
          url: '../zhihu/zhihu'
        })
      }, 1000)
      
    }else if(this.data.phonenumber == '' && this.data.password != '') {
      this.setData({
        numShow: '',
        psdShow: 'none',
        modelInnerHtml: '账号不能为空',
        modalHidden:  false
      })

      console.log("phonenumber不能为空" + this.data.numShow)
    }else if(this.data.password == '' && this.data.phonenumber != '') {
      this.setData({
        numShow: 'none',
        psdShow: '',
        modelInnerHtml: '密码不能为空',
        modalHidden:  false
      })

      console.log("password不能为空" + this.data.psdShow)
    }else {
      this.setData({
        numShow: '',
        psdShow: '',
        modelInnerHtml: '账号密码不能为空',
        modalHidden:  false
      })

      console.log("phonenumber不能为空" + this.data.numShow + "password不能为空" + this.data.psdShow)
    }
  },
  // 点击找回密码
  RandP: function() {
    this.setData({
        modelInnerHtml: '暂不支持注册和密码找回',
        modalHidden:  false
      })
    console.log("暂不支持注册和密码找回")
  }
})
