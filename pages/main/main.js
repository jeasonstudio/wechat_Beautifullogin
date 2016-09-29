var app = getApp()
Page({
  data: {
    motto: 'Hello WeApp'
  },
  psdChange: function(e) {
    // 避免出现错误
  },
  onButtonTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
  }
})
