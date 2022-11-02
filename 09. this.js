//  this는 함수의 블록 스코프 내에서 선언 되야 작동 (let, const)
let puppy = {
    title: "갱얼쥐",
    name: ["솜", "봄", "밤"],
    title2: this.title,
    title3() { console.log(this.title) }
};
console.log(puppy.title2); // undefined
puppy.title3(); // 갱얼쥐




// this의 기본 : window
var gv = '전역변수';
console.log(this.gv); // 전역변수
function a() {
    console.log(this);
}
a(); // Window{}




// 함수 호출
// 외부함수(전역함수)
function foo() {
    console.log("foo's this: ", this);
    function bar() {
        console.log("bar's this: ", this);
    }
    bar(); // Window
}
foo(); // Window




// 내부함수(지역함수)
var value = 1;
var obj = {
    value: 100,
    foo: function () {
        console.log("foo's this: ", this); // object
        console.log("foo's this.value: ", this.value); // 100
        function bar() {
            console.log("bar's this: ", this); // window
            console.log("bar's this.value: ", this.value); // 1
        }
        bar(); // Window , 1
    }
};
obj.foo(); // object , 100




// 콜백함수
var value = 1;
var obj = {
    val: 100,
    foo: function(){
        setTimeout(function(){
            console.log("callback's this: ",this); // window
            console.log("callback's this.value: ",this.value); // 1
        }, 100);
    }
};
obj.foo(); // Window , 1