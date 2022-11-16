// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
		userInfo: null,
		  //正式服
			//jjXcx:'http://localhost:80/xcx/demon/template',
			//测试服
			jjXcx:'http://127.0.0.1:8080/xcx/user/api',
			imageXcx:'http://127.0.0.1:8080/xcx/upload/uploadImage',
			showImageXcx:'http://127.0.0.1:8080/',
			echartsMSG:{}
	}
	
})
