const TABLA = 'post';
module.exports = function (injectedStore){
    let store = injectedStore;
    if(!store){
        store = require('../../../store/mysql');
    }
    function list(){
       return  store.list(TABLA)
    }
    function upsert(data){
        let post = {
            id: data.id,
            text: data.text,
            user: data.user
        }
        return store.insert(TABLA,post)
    }
    return {
        list,
        upsert
    }
}


