import {http,test} from '@/utils/http.js'
module.exports={
	// getData:async function(){
	// return 	await test()
	// }
getData:async function(param){
	return await http("/api/index","GET",param).then(res=>{
				return res;
			})
		}
}