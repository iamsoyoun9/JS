/* 1. while 문 */
var i = 1;
while (i < 10) {
    console.log(i);
    i++;
}

/* 2. do / while 문 */
var i = 1;
j = 1;
while (i > 3) {
    console.log("i: " + (i++));
}

do {
    console.log("j: " + (j++));
} while (j > 3);

/* 3. for 문 */
var arr = [3,4,5];
for(var i = 0; i <arr.length;i++){
    console.log(arr[i]+" ");
}

/* 4. for / in 문 */
for(var value in arr){
    console.log(arr[value]+" ")
}

/* 5. for / of 문 */
for(var value of arr){
    console.log(value + " ")
}
