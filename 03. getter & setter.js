/*
// 객체의 프로퍼티
1. 데이터 프로퍼티 : var let const 등
2. 접근자 프로퍼티 : get set
*/

let obj = {
    get propN(){
        // getter
        // obj.propN을 실행할 때 실행되는 코드
    },
    set propN(value){
        // setter
        // obj.propN = value를 실행할 때 실행되는 코드
    }
}

// getter
let user = {
    f_name: "나",
    l_name: "소영",
    
    get fullName(){
        return `${this.f_name}${this.l_name}`;
    },
    fullName2(){
        return `${this.f_name}${this.l_name}`;
    }
};

console.log(user.fullName);
console.log(user.fullName2());

// setter
let user2 = {
    f_name: "나",
    l_name: "소영",
    
    get fullName(){
        return `${this.f_name} ${this.l_name}`;
    },

    set fullName(value){
        [this.f_name, this.l_name] = value.split(" ");
    }
};

user2.fullName = "나 봄"

console.log(user2.fullName);
console.log(user2.f_name);
console.log(user2.l_name);