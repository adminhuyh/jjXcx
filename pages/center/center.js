var jjXcx = getApp().globalData.jjXcx;
var showImageXcx = getApp().globalData.showImageXcx;
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
			queryParams: {
	  			pageNum: 1,
					pageSize: 5,
			},
			hasMoreData: true,
			contentlistTem: [], // 滑动之前的数组
			list: [], // 滑动累加之后的数组
			showImageXcx:showImageXcx
	},
	getList(queryParams) {
			var that = this;
　　　　 // util里封装好了请求的方法，api是请求地址
				wx.request({
					url: jjXcx+"/getUserList", 
					method: 'post',
					data: {
						pageNum: queryParams.pageNum,
						pageSize: queryParams.pageSize,
					},
					header: {
						'content-type': 'application/json'
					},
					success: function (res) {
						var contentlistTem = []
						if (res.data.status == 1) {
								if (that.data.queryParams.pageNum == 1) {
										contentlistTem = []
								} else {
										contentlistTem = that.data.contentlistTem
								}
								var list = res.data.content.list; // 服务器回包信息
								if (list.length < that.data.queryParams.pageSize) {
										that.setData({
												list: contentlistTem.concat(list),
												hasMoreData: false,
												contentlistTem: (that.data.queryParams.pageNum == 1) ? list : contentlistTem.concat(list)
										})
								} else {
										that.setData({
												list: contentlistTem.concat(list),
												hasMoreData: true,
												['queryParams.pageNum']: that.data.queryParams.pageNum + 1,
												contentlistTem: (that.data.queryParams.pageNum == 1) ? list : contentlistTem.concat(list)
										})
								}
						} else {
								wx.showToast({
										title: '出现异常'
								})
						}
					},
					fail:function(){
						//服务异常
					}
				})
      
			
	},
	jumpToDetail: function(e) { 
		console.log(e);
		let id=e.currentTarget.dataset.id;
		wx.navigateTo({
				url: "../register-detail/register-detail?id="+id,
		})
  },


	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
			var that = this;
			that.getList(this.data.queryParams);
			
	},

	/**images
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {
      this.setData({
				queryParams: {
					pageNum: 1,
					pageSize: 5,
			  },
				hasMoreData: true,
				contentlistTem: [], // 滑动之前的数组
				list: []
			});
			this.getList(this.data.queryParams);
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
			if (this.data.hasMoreData) {
					this.getList(this.data.queryParams);
			} else {
					wx.showToast({
							title: '已经到底了...',
							icon: 'none'
					})
			}
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})
