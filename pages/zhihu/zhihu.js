//获取应用实例
var app = getApp()
Page({
  data: {
    pageTitle: '知乎日报',
    zhihuData: {},
    zhihuArr: [],
    errImg: '../../images/tt.png'
  },
  ifImgErr: function(e) {
    var i = e.currentTarget.id;
    console.log(i)
  },
  turnToDetailPage: function(e) {
    var newId = e.currentTarget.dataset.id

    console.log(newId)
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/' + newId,
      data: {},
      success: function(res) {
        if(res.errMsg == "request:ok") {
          console.log(res)
        }else {
          // 错误提示
        }
      }
    })
  },
  onLoad: function () {
    var that = this
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/news/latest',
      data: {},
      success: function(res) {
        console.log(res)
        if(res.errMsg == "request:ok") {
          that.setData({
            zhihuData: res.data,
            zhihuArr: res.data.stories
          })
        }else {
          // 错误提示
        }
      }
    })

    wx.setNavigationBarTitle({
      title: this.data.pageTitle
    })
  }
})