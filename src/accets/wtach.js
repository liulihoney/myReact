
class Watch{
    constructor(){
        this.events = {}
    }
    on(type,watcher){
        // 给events添加一个  type属性 其值是个数组 数组中是watcher
        if(this.events[type] instanceof Array){
            this.events[type].push(watcher);
        }else{
            this.events[type] = [watcher];
        }
    }
    emit(type,reset){
        this.events[type].forEach(item=>{
            item(reset);
        })
    }
}

export default Watch;
