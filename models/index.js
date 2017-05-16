var mongoose = require('mongoose');
mongoose.Promise = global.Promise;  

mongoose.connect('mongodb://localhost/y');
var db = mongoose.connection;
db.once('open', function callback () {
  console.log('connect to mongoDB,OK!')
});	

db.on('error',console.error.bind(console,'连接错误:'));

var School_post = new mongoose.Schema({
    name:String,
    date:String,
    category:String,
    content:String,
    read:String,
    like:String
});

Date.prototype.format = function(fmt) { 
     var o = { 
        "M+" : this.getMonth()+1,                 //月份 
        "d+" : this.getDate(),                    //日 
        "h+" : this.getHours(),                   //小时 
        "m+" : this.getMinutes(),                 //分 
        "s+" : this.getSeconds(),                 //秒 
        "q+" : Math.floor((this.getMonth()+3)/3), //季度 
        "S"  : this.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
} 

exports.School_post = mongoose.model('school_post', School_post,'school_post');