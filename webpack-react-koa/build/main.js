
var webpack=require('webpack')
var config={}
if(process.env.NODE_ENV==='dev'){
    config=require('./dev')
}else{
    config=require('./product')
}

var compiler=webpack(config)


compiler.run(function(err,stats){
    process.stdout.write(stats.toString({
        colors:true
    }))

    console.log('\n')
})