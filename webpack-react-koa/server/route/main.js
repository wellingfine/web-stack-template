
module.exports=function(app,router){

    router.get('/',(ctx,next)=>{
        ctx.redirect('/index.html')
    })
    router.get('/test',(ctx,next)=>{
        ctx.body='route works'
    })

}