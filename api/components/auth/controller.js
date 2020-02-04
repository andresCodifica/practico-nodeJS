const TABLA = 'auth'
const auth = require('../../../auth')

module.exports = function (injectedStore){
    
    let store = injectedStore;
    if(!store){
        store = require('../../../store/mysql');
    }
    async function login(username, password){
        const data = await store.query(TABLA,{username:username})
        if(data.password === password){
            
            return auth.sign(JSON.parse(JSON.stringify(data)));
        } else {
            console.log('no')
            throw new Error('informacion invalida')
            
        }
       
    }
    function upsert(data){
        const authData = {
            id: data.id,
        }
        if(data.username){
            authData.username = data.username;
        }
        if(data.password){
            authData.password = data.password;
        }
        return store.upsert(TABLA,authData)
    }
    return {
        upsert,
        login
    }

}