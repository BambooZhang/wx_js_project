//index.js
const app = getApp()



Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',

    indicatorDots: true, //设置是否显示面板指示点
    autoplay: true, //设置是否自动切换
    interval: 3000, //设置自动切换时间间隔,3s
    duration: 1000, //  设置滑动动画时长1s
    imgUrls: [
      'https://a4.vimage1.com/upload/flow/2017/10/20/117/15084947982974.jpg',
      'https://a2.vimage1.com/upload/flow/2017/11/07/73/15100619325212.jpg',
      'https://b.vimage1.com/upload/mst/2017/11/04/139/23b96f0e89abed2d9415e848fc3715ff_604x290_80.jpg'
    ]
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                userInfo: res.userInfo
              })
            }
          })
        }
      }
    })
  }

})
