const target = 'Is this all there is?';

// 'is' 문자열과 매치하는 패턴. 플래그가 생략되었으므로 대소문자를 구별한다. 
let reg = /is/;

console.log(reg.test(target)); // true

reg = /is/i;
console.log(reg.test(target)); // true

reg = /is/ig;
console.log(reg.test(target)); // true