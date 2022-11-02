/* log */
var a = 1;
var b = 'hello';
var c = true;
console.log(a);
console.log(a,b,c);
console.log('%d는 숫자 %s는 문자열',a,b);
console.log('${a}는 숫자 ${b}는 문자열');

// 출력 꾸미기
console.log("youtube. %c안녕하소영","color: #112D4E; font-style: italic; background-color: #3F72AF; padding:2px;")
// + 추가
console.log('기본');
console.info('정보');
console.warn('경고');
console.error('에러');

/* dir */
// 객체를 로깅할 때 = dir / 나머지 = log
// DOM 객체의 메서드가 뭐가 있는지 보고싶은데 태그만 보일 때

/* count */
// 몇 번 호출되었나를 로깅하고 싶을 때 사용
console.count('카운터 1')

/* time, timeEnd */
// 코드 수행 시간을 확일할 때
console.time('타이머');
for (var i = 0; i < 1000000; i++)z = 5;
console.timeEnd('타이머');

/* table */
// 배열로 된 데이터를 테이블로 예쁘게 정리해서 콘솔에 보여주는 메서드
let puppy1 = [
    ['솜','수컷'],
    ['봄','암컷'],
    ['밤','수컷']
]
console.table(puppy1);
let puppy2 = {이름 : "솜", 성별: "수컷"};
console.table(puppy2);
