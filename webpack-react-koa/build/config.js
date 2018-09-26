/**
 * common build config
 */
module.exports={
	/**
	 * In ssr mode ,node_modules will exclude all by default ,
	 * if you use some lib from node_modules in browser side ,
	 * need to add it here.
	 * 
	 * Same with webpack-node-externals@whitelist
	 */
	ssrAssetPath:[
		/^bulma/,

	],
}