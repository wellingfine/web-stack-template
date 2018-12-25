const path=require('path')

/**
 * @param {string} dir 相对项目根目录
 */
function resolve(dir){
	return path.join(__dirname,'../',dir)
}

module.exports={
	resolve,
}