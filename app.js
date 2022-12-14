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
			// jjXcx:'http://127.0.0.1:8080/xcx/user/api',
			// imageXcx:'http://127.0.0.1:8080/xcx/upload/uploadImage',
			// showImageXcx:'http://127.0.0.1:8080/',
				//测试服
			// jjXcx:'https://216394c1z0.yicp.fun/xcx/user/api',
			// imageXcx:'https://216394c1z0.yicp.fun/xcx/upload/uploadImage',
			// showImageXcx:'https://adminhuyuhang.com:443/',
				jjXcx:'/xcx/user/api',
			  imageXcx:'/xcx/upload/uploadImage',
				showImageXcx:'/',
				
				
			echartsMSG:{}
	}
	
})
