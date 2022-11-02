/* Math : 수학 상수와 함수를 위한 프로퍼티와 메소드를 제공하는 빌트인 객체 */
// Math.abs(number) ▸ 절댓값 반환
    Math.abs(-1); // 1
    Math.abs('-1'); // 1
    Math.abs(''); // 0
    Math.abs([]); // 0
    Math.abs(null); // 0
    Math.abs(undefined); // NaN

// Math.round(number) ▸ 소수점 이하를 반올림한 정수를 반환
    Math.round(1.4); // 1
    Math.round(-1.6); // -2
    Math.round(); // NaN

// Math.ceil(number) ▸ 소수점 이하를 올림한 정수를 반환
    Math.ceil(1.4); // 2
    Math.ceil(-1.6); // -1
    Math.ceil(); // NaN

// Math.floor(number) ▸ 소수점 이하를 내림한 정수를 반환
    Math.floor(1.9); // 1
    Math.floor(-1.6); // -2
    Math.floor(); // NaN

// Math.sqrt(number) : 제곱근을 반환
    Math.sqrt(9); // 3
    Math.sqrt(-9); // NaN
    Math.sqrt(2); // 1.414213562373095
    Math.sqrt(); // NaN

// Math.random() : 임의의 부동 소수점을 반환
    Math.random(); // 0 ~ 1 미만의 부동 소수점 (0.8208720231391746)
    // 0 ~ 9
    Math.floor(Math.random() * 10);
    // 1 ~ 10
    Math.floor((Math.random() * 10) + 1);
    // 1 ~ 50
    Math.floor((Math.random() * 50) + 1);
    // 45 ~ 50
    console.log(Math.floor((Math.random() * (50 - 45)) + 45));

// Math.pow(number,number) : 첫번째 인수를 밑, 두번째 인수를 지수로 하여 거듭제곱을 반환
    Math.pow(2, 8);  // 256
    Math.pow(2, -1); // 0.5
    // ES7(ECMAScript 2016) Exponentiation operator(거듭 제곱 연산자)
    2 ** 8; // 256

// Math.max(…number) : 가장 큰 수 반환
    Math.max(1, 2, 3); // 3
    Math.max(...arr); // 3
    // ES6 문법
    [...rest] = [1, 2, 4]; // rest = [1,2,4]
    Math.max(...rest); //4

// Math.min(…number) : 가장 작은 수 반환
    Math.min(1, 2, 3); // 1
    const arr = [1, 2, 3];
    const min = Math.min.apply(null, arr); // 1
    // ES6 문법
    Math.min(...arr); // 1