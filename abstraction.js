/* eslint-disable */
// ABSTRACTION
// 1. Hidding details and give a way of using and accessing the hidden details
// 2. Abstract class
// 3. Abstract method
class Database{
    constructor(givenName,givenPassword){
        // encapsulation
        let username = givenName;
        let password = givenPassword;
        let accessCode = "fhhfdjcgCNFBS"
        // abstraction
        this.logIn = (gName,gPassword)=>{
            if(gName !== username,gPassword ===password ){
                return {
                    username:gName,
                    password:password,
                    accesscode:accessCode
                };
            }
            return "Access Denied"
        }
        this.reset = (gName,gPassword,newValues)=>{
            if(gName === username,gPassword ===password){
                    username = newValues.username;
                    password = newValues.password;
            }else{
                return "Access Denied"
            }            
        }
    }
}
let mongo = new Database("senjack","mypassword");
console.log(mongo.logIn("peshk","mypassword"));
mongo.reset("senjack","mypassword",{username:"kevin", password:"password"})
console.log(mongo.logIn("senjack","mypassword"));
console.log(mongo.logIn("kevin","password"));
// 2. Abstract class. It cant be instanciate
class Animal{
    constructor(){
        if(new.target.name === "Animal") throw "Abstract class can not be instantieted."
        if(!this.communicate)  throw "an Abstract method was not implemented"
    }
    // 3. Abstract method
}
class Dog extends Animal{
    communicate(){
        console.log("barking...........") 
    }
}
let dog = new Dog();
dog.communicate();