// arguments : 함수가 호출될 때 전달된 인수를 배열의 형태로 저장
// 배열과 비슷할 뿐, Array 객체 X (유사배열)
function add(){
    var sum = 0;
    for(var i = 0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(add(1,2,3));