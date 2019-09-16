import {root} from '@/config'
module.exports = {
	http: function(url, method='GET', param='') {
		console.info("url+root",root+url);
		console.log("methods",method)
		return new Promise((resolve, reject) => {
			uni.request({
				url: root+url,
				method: method,
				data: param,
				header: {
					"content-type": "application/x-www-form-urlencoded"
				},
				success: res => {
					resolve(res);
				},
				fail: (res) => {
					uni.showToast({
						title: '网络错误'
					});
					reject(res)
				},
				complete: () => {}
			});
		})
	},
	ws: function(url,methods, param) {
		return new Promise((resolve, reject) => {
			uni.connectSocket({
				url: url,
				data() {
					return {
						param
					};
				},
				header: {
					'content-type': 'application/json'
				},
				protocols: ['protocol1'],
				method: methods,
				success(res) {
					resolve(res);
				},
				fail(res) {
					reject(res);
				}
			});
		})
	},
	test:function(){
		return  new Promise((resolve,reject)=>{
			resolve("测试通过");
		}) 
	}
}
