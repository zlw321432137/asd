var mongoClient=require('mongodb').MongoClient
var url='mongodb://127.0.0.1:27017'
function ConnectDB(callback){
	mongoClient.connect(url,(err,db){	
		var dbName=db.db('adminuser')
			if(err){
				callback(err,null)
			}
			callback(err,db,dbName,callback)
		})
}
exports.add=function(collectionName,json,callback){
	ConnectDB(function(err,db,dbName){
		dbName.collection(collectionName).insert(json,function{
			if(err){
				callback(err,null)
			}
			callback(err,result)
			mongo.close()
		})
	})
}
exports.find=function(collectionName,json,callback){
	ConnectDB(function(err,mongo,dbName){
		dbName.collection(collectionName).find(json).toAray(function(err,data){
			if(err){
				callback(err,null)
			}
			callback(err,result)
			mongo.close()
		})
	})
}