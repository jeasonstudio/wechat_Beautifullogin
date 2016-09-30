//获取应用实例
var app = getApp()
Page({
  data: {
    zhihuData: {},
    zhihuArr: [],
    newestDate: '',
    errImg: '../../images/nogo.jpg'
  },
  // 图片404触发事件
  ifImgErr: function(e) {
    var oldArr = this.data.zhihuArr;
    var i = Number(e.currentTarget.id);

    for(var j = 0 ; j < oldArr.length ; j++ ) {
      if( i == j ) {
        oldArr[i].images[0] = '../../images/nogo.jpg';
      }
    }

    this.setData({
      zhihuArr: oldArr
    })
  },
  // 下拉刷新
  refreshLoad: function() {
     console.log("触发下拉刷新")
  },
  // 上拉继续加载
  continueLoad: function() {
    var that = this
    var checkDate = this.data.newestDate
    var oldArr = this.data.zhihuArr
    console.log("触发上拉继续加载")
    wx.request({
      url: 'http://news.at.zhihu.com/api/4/news/before/' + checkDate,
      data: {},
      success: function(res) {
        if(res.errMsg == "request:ok") {
          console.log(res)
          var newArr = oldArr.concat(res.data.stories);
          console.log(newArr)
          that.setData({
            zhihuArr: newArr
          })
        }else {
          // 错误提示
        }
      }
    })
  },
  // 点击跳转页面详情
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
  // 页面加载
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
            zhihuArr: res.data.stories,
            newestDate: res.data.date
          })
        }else {
          // 错误提示
        }
      }
    })
  }
})