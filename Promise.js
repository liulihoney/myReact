class MyPromise{
    constructor(props){
        props(this._reslove.bind(this),this._reject.bind(this));
    }
    _reslove(reslove){
        this._success(reslove);
    }
    _reject(resject){
        this._err(resject);
    }
    then(success,err){
        this._success = success;
        this._err = err;
    }
}



