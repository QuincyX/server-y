var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// 连接数据库
mongoose.connect('mongodb://localhost/y');
var db = mongoose.connection;
db.once('open', function callback() {
    console.log('connect to mongoDB,OK!')
});

db.on('error', console.error.bind(console, '连接错误:'));


// 挂载日期格式化属性
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

// 定义【学校动态】模型
var School_post = new mongoose.Schema({
    auther: String,
    date: String,
    category: String,
    content: String,
    comment:Array,
    read: String,
    like: String
});
// 输出【学校动态】模型
exports.School_post = mongoose.model('school_post', School_post, 'school_post');



// 定义【班级动态】模型
var Class_post = new mongoose.Schema({
    auther: String,
    date: String,
    category: String,
    content: String,
    comment:Array,
    read: String,
    like: String
});
// 输出【班级动态】模型
exports.Class_post = mongoose.model('class_post', Class_post, 'class_post');



// 定义【个人动态】模型
var Personal_post = new mongoose.Schema({
    auther: String,
    date: String,
    category: String,
    content: String,
    comment:Array,
    read: String,
    like: String
});
// 输出【个人动态】模型
exports.Personal_post = mongoose.model('personal_post', Personal_post, 'personal_post');



// 定义【教师账号】模型
var Teacher = new mongoose.Schema({
    account: String,
    password: String,
    avantar: String,
    tel: String
});
// 输出【教师账号】模型
exports.Teacher = mongoose.model('teacher', Teacher, '_Teacher');



// 定义【学生账号】模型
var Student = new mongoose.Schema({
    account: String,
    password: String,
    avantar: String,
    tel: String
});
// 输出【学生账号】模型
exports.Student = mongoose.model('student', Student, '_Student');



// 定义【家长账号】模型
var Parent = new mongoose.Schema({
    account: String,
    password: String,
    avantar: String,
    tel: String
});
// 输出【家长账号】模型
exports.Parent = mongoose.model('parent', Parent, '_Parent');



// 定义【学校账号】模型
var School = new mongoose.Schema({
    account: String,
    password: String,
    avantar: String
});
// 输出【学校账号】模型
exports.School = mongoose.model('school', School, '_School');



// 定义【班级账号】模型
var Klass = new mongoose.Schema({
    account: String,
    password: String,
    avantar: String
});
// 输出【班级账号】模型
exports.Klass = mongoose.model('klass', Klass, '_Klass');



// 定义【系统账号】模型
var User = new mongoose.Schema({
    account: String,
    password: String,
    avantar: String,
    tel: String
});
// 输出【系统账号】模型
exports.User = mongoose.model('user', User, '_User');