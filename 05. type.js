/* 기본 타입 */
// 1. number
// 2. string
// 3. boolean
// 4. symbol : ECMAScript6부터 제공
// 5. undefined
// 6. object

/* 형변환 */
// 1. 숫자 → 문자열
var num = 915;
String(num);
num.toString();

// 2. 불리언 → 문자열
String(true);
false.toString();

// 3. 날짜 타입 → 문자열, 숫자
String(Date());
Date().toString();

var date = new Date();
date.getFullYear();
date.getTime();

// 4. 문자열 → 숫자
var n1 = "10";
parseInt(n1); // 정수
parseFloat(n1); // 소수

// 5. 불리언 → 숫자
Number(true); // 1
Number(false); // 0

// 6. 값 → 불리언
!!a
