var express=require('rxpress')
var app=express()
var db=require('./db')  //引入mognodb数据库
var router=express.Router()   //使用路由中间件
var bodyPaser=require('body-parser')   //处理post请求
app.use(bodyParser.json())    //处理post中json的请求
app.use(bodyParser.urlencoded({extends:false}))//处理post中字符串的请求,
app.use(router)//使用路由
router.get('/login',(req,res)=>{     //注册接口
	// 接受前端传输过来的值  query
	var regUser={
		username:req.body.username,
		password:req.body.password,
		createAt:new Data(),
		updateAt:new date(),
		phone:req.body.phone,
		email:req.body.email,
		tokenId:1
	}
	db.add('userData',regUser,(err,result)=>{
		if(err){
			throw err
		}
		res.send({'success':'ok'})
	})
})
//登录接口
router.get('/login',(req,res)=>{
	/*
		1.接受前端传输过来的值   query
		2.根据前端的值与数据库里面的用户数据进行对比（find）
			2.1 判断是否存在用户
			2.2再与数据里面的数据进行对比
			2.3一致时返回成功
		3.前端进行登录成功的跳转
	*/
   //接受前端传输的值
   var userData={
	   username:req.query.username,
	   password:req.query.password
   }
   //进行数据库的检索
   //先把数据库里面所有的数据取出
   db.find('userData',{},(err,data)=>{
	   db.find('userData',userData,(err,result)=>{
		   if(data[0].username!=req.query.username||data[0].password!=req.query.password){
			   res.send({'error':'用户名或密码错误'})
		   }else{
			   res.send({'success':'登录成功'})
		   }
	   })
   })
})
app.listen(3000)