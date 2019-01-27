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
    ],
    // navItems
    navItems: [
      {
        typeId: 0,
        name: '品牌馆',
        url: 'bill',
        imageurl: 'http://res.yunzhzhu.com/FnXGzsLd-4Aq5sjAqtZ4ZgpOnvry',
      },
      {
        typeId: 1,
        name: '类目',
        url: 'bill',
        imageurl: 'http://res.yunzhzhu.com/FnXGzsLd-4Aq5sjAqtZ4ZgpOnvry',
      },
      {
        typeId: 2,
        name: '特惠专场',
        url: 'bill',
        imageurl: 'http://res.yunzhzhu.com/FnXGzsLd-4Aq5sjAqtZ4ZgpOnvry'
      },
      {
        typeId: 3,
        name: '推荐好友',
        url: 'bill',
        imageurl: 'http://res.yunzhzhu.com/FnXGzsLd-4Aq5sjAqtZ4ZgpOnvry'
      },
      {
        typeId: 3,
        name: '推荐好友',
        url: 'bill',
        imageurl: 'http://res.yunzhzhu.com/FnXGzsLd-4Aq5sjAqtZ4ZgpOnvry'
      },
      {
        typeId: 3,
        name: '推荐好友',
        url: 'bill',
        imageurl: 'http://res.yunzhzhu.com/FnXGzsLd-4Aq5sjAqtZ4ZgpOnvry'
      },
      {
        typeId: 3,
        name: '推荐好友',
        url: 'bill',
        imageurl: 'http://res.yunzhzhu.com/FnXGzsLd-4Aq5sjAqtZ4ZgpOnvry'
      },
      {
        typeId: 3,
        name: '推荐好友',
        url: 'bill',
        imageurl: 'http://res.yunzhzhu.com/FnXGzsLd-4Aq5sjAqtZ4ZgpOnvry'
      }
    ],

    // 福利专场
    goodsWelfareItems: [
      {
        goodId: 0,
        name: '泊尔崖蜜蜜光面膜（5片盒装）',
        url: 'bill',
        imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/142/fb2960bf8e074d029c24315279289c19-5_218x274_70.jpg',
        newprice: "86",
        oldprice: "88",
      },
      {
        goodId: 1,
        name: '透无瑕矿物养护两用粉饼#03',
        url: 'bill',
        imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/21/27/4b24e2a629644877866d3da755f6a36e-5_218x274_70.jpg',
        newprice: "147.00",
        oldprice: "150.00",
      },
      {
        goodId: 2,
        name: '川水水光面膜（5片盒装）',
        url: 'bill',
        imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/86/7891361fdab348a1bc91aeca31fc77b1-5_218x274_70.jpg',
        newprice: "86.00",
        oldprice: "88.00",
      },
      {
        goodId: 3,
        name: '蜜三色渐变咬唇膏3.2g 03蜜橙动心恋',
        url: 'bill',
        imageurl: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
        newprice: "97.00",
        oldprice: "99.00",
      },
      {
        goodId: 4,
        name: '时焕颜亮采套装',
        url: 'bill',
        imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/93/69a6bc1c11eb4be184b7dffb43b8565b-5_218x274_70.jpg',
        newprice: "398.00",
        oldprice: "459.00",
      }, {
        goodId: 5,
        name: '雪域眼霜套装',
        url: 'bill',
        imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/23/127/53409c86f74647af915bc379427b97c2-5_218x274_70.jpg',
        newprice: "238.00",
        oldprice: "358.00",
      }
      , {
        goodId: 6,
        name: '凝时鲜颜冰肌水套装',
        url: 'bill',
        imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/11/13/95/fb6c3d0c1f304b449dadb1f0100c1205-5_218x274_70.jpg',
        newprice: "248.00",
        oldprice: "348.00",
      }
      , {
        goodId: 7,
        name: '雪润皙白精选三件套',
        url: 'bill',
        imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/30/184/a5000156098940b5a05a0e696535ac20-5_218x274_70.jpg',
        newprice: "348.00",
        oldprice: "396.00",
      }
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
  },

  onItemClick: function(e) {
    var url = this.route
    // console.log(url)
    //跳转到商品详情
   var  goodsId = e.currentTarget.dataset.goodid

    wx.navigateTo({
      url: '../detail/index?goodsId=' + goodsId
    })






  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },

})
