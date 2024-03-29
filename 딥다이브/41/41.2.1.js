// 1초 후 타이머가 만료되면 콜백 함수가 호출된다. 
setTimeout(() => console.log('Hi'), 1000);

// 1초 후 타이머가 만료되면 콜백 함수가 호출된다.
// 이때 콜백함수에 'lee'가 인수로 전달된다.
setTimeout(name => console.log( `Hi! ${name}.`), 1000, 'lee');

// 두번째 인수(delay)를 생략하면 기본값 0이 지정된다. 
setTimeout(() => console.log('Hello!'));


const timerId = setTimeout(() => console.log('Hi!!'), 10000);

// setTimeout함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소한다. 
// 타이머가 취소되면 setTimeout 함수의 콜백 함수가 실행되지 않는다.
clearTimeout(timerId);
