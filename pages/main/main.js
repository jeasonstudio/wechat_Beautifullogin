//获取应用实例
var app = getApp()
Page({
  data: {
    weather: '',
    thisDate: '',
    wind: '',
    tem: '',
    userInfo: {}
  },
  onLoad: function () {
    var mainData = this;

    // 获取天气信息
    var getWeather = function(LAT,LON) {
      console.log("inWeather");
      wx.request({
        url: 'http://api.map.baidu.com/telematics/v3/weather',
        data: {
          location: LON + ',' + LAT,
          ak: 'm7ScI8IsrnYwIcpD4nXQxoO15IGpFLU1',
          output: 'json',
          coord_type: 'wgs84'
        },
        success: function(res) {

          if(res.statusCode == 200) {
            console.log(res)
            var respon = res.data.results[0]['weather_data'][0];
            console.log(respon);

            wx.setNavigationBarTitle({
              title: res.data.results[0].currentCity
            })

            mainData.setData({
              thisDate: respon.date,
              weather: respon.weather,
              wind: respon.wind,
              tem: respon.temperature
            })
          }else {
            console.log("Some Error")
          }
        }
      })
    }
    // 获取地理位置信息
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        var latitude = res.latitude
        var longitude = res.longitude
        console.log(res);
        getWeather(latitude,longitude);
      }
    });
  }
})


// AK m7ScI8IsrnYwIcpD4nXQxoO15IGpFLU1
