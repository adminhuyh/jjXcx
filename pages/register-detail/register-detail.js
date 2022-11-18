// pages/register-detail/register-detail.js
var jjXcx = getApp().globalData.jjXcx;
var showImageXcx = getApp().globalData.showImageXcx;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '用户详情页',
    loading: false,
		userInfo: {},
		showImageXcx:showImageXcx
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;
    // 拼接请求url
		const url = jjXcx+"/getUser?userId="+ options.id;
		//const url = jjXcx+"/getUser?userId="+3;
    // 请求数据
    wx.request({
      url: url,
      data: {},
      header: {
        'content-type': 'json' // 默认值
      },
      success:function(res) {
				// 赋值
        _this.setData({
          userInfo: res.data.content,
          loading: false // 隐藏等待框
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 修改导航栏标题
    wx.setNavigationBarTitle({
      title: this.data.title + ''
    })
  }
})