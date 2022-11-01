/* 객체 생성 3가지 방법 */
// 1. 리터럴 표기
var bom = {
    name: "봄이",
    type: "말티푸",
    weight: "3.0"
};
console.log("우리집 강아지 이름은 " + bom.name +"이고, 종은 " + bom.type + "입니다"); // 우리집 강아지 이름은 봄이이고, 종은 말티푸입니다

// 2. 생성자
var day = new Date();
console.log("올해는 " + day.getFullYear() + "년입니다"); // 올해는 2022년입니다

// 3. Object.creat() 메소드를 이용한 객체의 생성
var obj = Object.create(null, {
    x: {value: 100, enumerable: true},
    y: {value: 200, enumerable: true}
});
console.log(obj.x); // 100
console.log(obj.y); // 100
Object.getPrototypeOf(obj);




/*프로토타입*/
// 1. 프로토타입 생성
function Dog(color,name,age){
    this.color = color;
    this.name = name;
    this.age = age;
}
var myDog = new Dog("갈색","밤이",0.6);

// 2. 객체에 변수 추가
myDog.type = "말티푸";
myDog.breed = function(){
    return this.color + " " + this.type;
}
console.log("우리 집 강아지는 " + myDog.breed() + "입니다"); // 우리 집 강아지는 갈색 말티푸입니다

// 3. 객체의 프로토타입에 변수 추가
Dog.prototype.type = "말티푸";
Dog.prototype.breed = function(){
    return this.color + " " + this.type;
}
var f_Dog = new Dog("흰색","솜이",8);
var s_Dog = new Dog("갈색","밤이",0.6);
console.log("우리 집 첫째 강아지는 " + f_Dog.type + "이고, 우리 집 둘째 강아지는 " + s_Dog.type + "입니다.");
console.log("우리 집 첫째 강아지의 품종은 " + f_Dog.breed() + "입니다.");
console.log("우리 집 둘째 강아지의 품종은 " + s_Dog.breed() + "입니다.");

// 4. 프로퍼티 삭제
delete myDog.age;

/* 객체 루프 */
function Dog(color, name, age) {
    this.color = color;
    this.name = name;
    this.age = age;
}
 
var m_puppy = new Dog("갈색", "밤이", 0.6);
 
for (key in m_puppy) {
    console.log(m_puppy[key])
}

Object.defineProperty(m_puppy, 'color', {enumerable : false} );

console.log(Object.keys(m_puppy));

console.log(Object.getOwnPropertyNames(m_puppy));