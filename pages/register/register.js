// pages/register/register.js

var jjXcx = getApp().globalData.jjXcx;

function Person(userName, sex, wxNumber,phoneNumber,jobName,income, nativeAddress,workAddress, birthDay, height, weight,constellation,aboutYou,aboutOther,lifeImageList) { //定义构造函数，用于创建对象
	this.userName = userName; //将函数参数赋值给对象属性
	this.sex = sex;
	this.wxNumber = wxNumber;
	this.phoneNumber = phoneNumber;
	this.jobName = jobName;
	this.income = income;
	this.nativeAddress = nativeAddress;
	this.workAddress = workAddress;
  this.birthDay = birthDay;
  this.height = height;
	this.weight = weight;
	this.constellation = constellation;
	this.aboutYou = aboutYou;
	this.aboutOther = aboutOther;
	this.lifeImageList = lifeImageList;
}

Page({

	/**
	 * 页面的初始数据
	 */
	data: { //初始数据
    flag: true, //个人信息显示标记，开始不显示
		gender: ["男", "女"],
		heightRange:["150cm以下","150cm","151cm","152cm","153cm","154cm","155cm","156cm","157cm","158cm","159cm",
		"160cm","161cm","162cm","163cm","164cm","165cm","166cm","167cm","168cm","169cm",
		"170cm","171cm","172cm","173cm","174cm","175cm","176cm","177cm","178cm","179cm",
		"180cm","181cm","182cm","183cm","184cm","185cm","186cm","187cm","188cm","189cm",
		"190cm","191cm","192cm","193cm","194cm","195cm","196cm","197cm","198cm","199cm","200cm","200cm以上"
		],
		weightRange:[
			"40kg以下","40kg","41kg","42kg","43kg","44kg","45kg","46kg","47kg","48kg","49kg","50kg","51kg","52kg","53kg","54kg","55kg","56kg","57kg","58kg","59kg","60kg","61kg","62kg",
			"63kg","64kg","65kg","66kg","67kg","68kg","69kg","70kg","71kg","72kg","73kg","74kg","75kg","76kg","77kg","78kg","79kg","80kg","81kg","82kg","83kg",
			"84kg","85kg","86kg","87kg","88kg","89kg","90kg","91kg","92kg","93kg","94kg","95kg","96kg","97kg","98kg","99kg","100kg","101kg","102kg","103kg","104kg","105kg","106kg","107kg","108kg",
			"109kg","110kg","111kg","112kg","113kg","114kg","115kg","116kg","117kg","118kg","119kg","120kg","120kg以上"
		],
		constellationRange:[
			"白羊座","双子座","狮子座","天秤座","射手座","水瓶座",
			"金牛座","巨蟹座","处女座","天蝎座","摩羯座","双鱼座"],
		imgs: [],
		saveImags: [],
  },

  nameInput: function(e) { //姓名input组件输入事件函数
    this.userName = e.detail.value //获取input组件value值
	},
	wxNumberInput: function(e) { //姓名input组件输入事件函数
    this.wxNumber = e.detail.value //获取input组件value值
	},
	phoneNumberInput: function(e) { //姓名input组件输入事件函数
    this.phoneNumber = e.detail.value //获取input组件value值
	},
	jobNameInput: function(e) { //姓名input组件输入事件函数
    this.jobName = e.detail.value //获取input组件value值
	},
	incomeInput: function(e) { //姓名input组件输入事件函数
    this.income = e.detail.value //获取input组件value值
	},
	aboutYouInput: function(e) { //姓名input组件输入事件函数
    this.aboutYou = e.detail.value //获取input组件value值
	},
	aboutOtherInput: function(e) { //姓名input组件输入事件函数
    this.aboutOther = e.detail.value //获取input组件value值
	},
	
	
	
	pickerSex: function(e) { //性别picker组件事件函数
		this.sex = this.data.gender[e.detail.value] //获取性别
    this.setData({
      sex: this.sex //选择完成后在视图层picker组件后面显示性别
    })
	},
	pickerHeight: function(e) { //性别picker组件事件函数
    this.height = this.data.heightRange[e.detail.value] //获取性别
    this.setData({
      height: this.height //选择完成后在视图层picker组件后面显示性别
    })
  },
  pickerWeight: function(e) { //性别picker组件事件函数
    this.weight = this.data.weightRange[e.detail.value] //获取性别
    this.setData({
      weight: this.weight //选择完成后在视图层picker组件后面显示性别
    })
	},
	picker: function(e) { //性别picker组件事件函数
    this.weight = this.data.weightRange[e.detail.value] //获取性别
    this.setData({
      weight: this.weight //选择完成后在视图层picker组件后面显示性别
    })
  },
  pickerRegion: function(e) { //地区picker组件事件函数
    this.nativeAddress = e.detail.value; //获取籍贯
    this.setData({
      nativeAddress: this.nativeAddress //选择完成后在视图层picker组件后面显示籍贯
    })
	},
	pickerWorkRegion: function(e) { //地区picker组件事件函数
    this.workAddress = e.detail.value; //获取籍贯
    this.setData({
      workAddress: this.workAddress //选择完成后在视图层picker组件后面显示籍贯
    })
  },
  pickerDate: function(e) { //日期picker组件事件函数
    this.birthDay = e.detail.value //获取生日
    this.setData({
      birthDay: this.birthDay //选择完成后在视图层picker组件后面显示生日
    })
	},
	pickerConstellation: function(e) { //性别picker组件事件函数
    this.constellation = this.data.constellationRange[e.detail.value] //获取星坐
    this.setData({
      constellation: this.constellation //选择完成后在视图层picker组件后面显示星坐
    })
  },

	formSubmit: function (e) {
		var intSex ;
		if(this.sex == '男'){
			intSex = 1;
		}else if(this.sex == '女'){
			intSex = 2;
		}else {
			intSex = 0;
		}
		var that = this;
    wx.request({
			url: jjXcx+"/addUser", 
			method: 'post',
      data: {
					"userName":this.userName,
					"sex":intSex,
					"wxNumber":this.wxNumber,
					"phoneNumber":this.phoneNumber,
					"jobName":this.jobName,
					"income":this.income,
					"nativeAddress":this.nativeAddress,
					"workAddress":this.workAddress,
					"birthDay":this.birthDay,
					"height":this.height,
					"weight":this.weight,
					"constellation":this.constellation,
					"aboutYou":this.aboutYou,
					"aboutOther":this.aboutOther,
					"lifeImageList":this.data.saveImags,
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res);
        if(res.data.status == 1){
          //注册成功
					//console.log("注册成功");
					wx.showToast({
						title: '注册成功',
						mask:true,    
						icon:'success'
					});
					that.on
					wx.switchTab({
            url: '/pages/register/register',
          })
        }else{
          //注册失败
					//console.log("注册失败");
					wx.showToast({
						title: '注册失败',
						mask:true,    
						icon:'error'
					})
        }
      },
      fail:function(){
         //服务异常
      }
    })
	},
	
	// 上传图片
	chooseImg: function (e) {
		var that = this;
		var imgs = this.data.imgs;
		if (imgs.length >= 3) {
		//  this.setData({
		//   lenMore: 1
		//  });
		//  setTimeout(function () {
		//   that.setData({
		//    lenMore: 0
		//   });
		//  }, 2500);
		 wx.showToast({
			 title: '最多上传三个图片',
			 mask:true,    
			 icon:'error'
		 })
		 return false;
		}
		wx.chooseImage({
		 // count: 1, // 默认9
		 sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		 sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		 success: function (res) {
			// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
			var tempFilePaths = res.tempFilePaths;
			var imgs = that.data.imgs;
			// console.log(tempFilePaths + '----');
			for (var i = 0; i < tempFilePaths.length; i++) {
			 if (imgs.length >= 9) {
				that.setData({
				 imgs: imgs
				});
				return false;
			 } else {
				imgs.push(tempFilePaths[i]);
			 }
			}
			// console.log(imgs);
			that.setData({
			 imgs: imgs
			});
				wx.uploadFile({
						url: getApp().globalData.imageXcx, //接受图片的接口地址
						filePath: tempFilePaths[0],
						name: 'image',
						formData: {
								'user': 'test'
						},
						success (res){
							 var data = JSON.parse(res.data);
							 var status = data.status;
								if(status == 1){
									that.data.saveImags.push(data.content);
								}
								else {
									console.log("上传失败");
								}	
						},
						fail(res){
							console.log(res);
						}
				})
		 }
		});
	 },
	 // 删除图片
	 deleteImg: function (e) {
		var imgs = this.data.imgs;
		var saveImags = this.data.saveImags;
		var index = e.currentTarget.dataset.index;
		imgs.splice(index, 1);
		saveImags.splice(index,1);
		this.setData({
		 imgs: imgs,
		 saveImags:saveImags
		});
	 },
	 // 预览图片
	 previewImg: function (e) {
		 //获取当前图片的下标
		var index = e.currentTarget.dataset.index;
		 //所有图片
		var imgs = this.data.imgs;
		wx.previewImage({
		 //当前显示图片
		 current: imgs[index],
		 //所有图片
		 urls: imgs
		})
	 },

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})