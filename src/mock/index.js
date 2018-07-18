import Mock from 'mockjs'
Mock.setup({
    timeout:'600-800'
});
Mock.mock('/register',(req,res)=>{
    return {msg:'注册成功',status:'ok'};
});
Mock.mock('/num',()=>{
    return Math.ceil(Math.random()*8+2);
});
let users = [
    {userid:1,username:'张三',moneybase:0},
    {userid:2,username:'李四',moneybase:0},
    {userid:3,username:'王五',moneybase:0}
]
Mock.mock('/getallusers',()=>{
    return users;
});
Mock.mock('/submitsingleuser',(req,res)=>{
    let {userid,username,moneybase} = JSON.parse(req.body);
    if(userid===''||username===''||moneybase===''){
        return {msg:'添加失败',code:0}
    }
    users.push({userid,username,moneybase});
    return {msg:'添加成功',code:1}
});
Mock.mock('/deluser',(req,res)=>{
    return {msg:'删除成功',code:1}
});
Mock.mock('/edituser',(req,res)=>{
    // let {userid,username} = req.body;
    // username.slice(0,1);
    // let index = users.findIndex(item=>item.userid===userid);
    return {msg:'更新成功',code:1}
});
Mock.mock('/singlemoney',()=>{
    let singleMoney = users.map(item=>{
        item.singleMoney = 200;
        return item;
    })
    return {msg:'获取成功',code:1,data:singleMoney};
});
Mock.mock('/checkpassword',(req,res)=>{
    let pwd = '123';
    let {userpwd} = JSON.parse(req.body);
    if(!userpwd){
        return {msg:'请输入密码',code:0}
    }
    if(userpwd === pwd){
        return {msg:'正确',code:1}
    }else{
        return {msg:'错误',code:0}
    }

});
let logs = [
    {
        userid:1,
        username:'张三',
        logs:[
            {time:'2018-1-12',dowhat:'买菜',logMoney:100}
        ]
    },
    {
        userid:2,
        username:'李四',
        logs:[
            {time:'2018-1-12',dowhat:'买菜',logMoney:100}
        ]
    },
    {
        userid:3,
        username:'王五',
        logs:[
            {time:'2018-1-12',dowhat:'买菜',logMoney:100}
        ]
    }
]
Mock.mock('/getsinglelogs',(req,res)=>{
    let {userid} = JSON.parse(req.body);
    let data = logs.find(item=>item.userid===userid);
    return {msg:'成功',code:1,data}
});
Mock.mock('/submit',(req,res)=>{
    return {msg:'提交成功',code:1,data:200}
})