// pages/abc/abc.js
const app = getApp();

Page({
    data: {
				imgs: [],
				saveImags: []
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
					 icon:'success'
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
			
})
