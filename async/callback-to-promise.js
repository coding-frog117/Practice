'use strict'

const { any } = require("async");

//콜백지옥
class UserStorage{
    loginUser(id,password){
        return new Promise((resolve, reject)=>{
        
        setTimeout(()=>{
            
            if(
                (id==='ellie'&&password==='dream')||
                (id==='coder'&&password==='academy')
            ){
                resolve(id);
            } else{
                reject(new Error('not found'));
            }
        },2000);
    });
    }
    getRoles(user){
        return new Promise((resolve,reject)=>{
        setTimeout((resolve,reject)=>{
            if (user==='ellie'){
                resolve({name:'ellie',role:'admin'});
            }else{
                reject(new Error('no access'));
            }
            
        },1000);
    });
}
}

const userStorage=new UserStorage();
const id=prompt("enter your id");
const password=prompt("enter your password");
userStorage
.loginUser(id,password)
.then(userStorage.getRoles)
.then(user=>alert(`hello ${userWithRole.name}, you have a ${userWithRole.role} role`))
.catch(console.log); 
