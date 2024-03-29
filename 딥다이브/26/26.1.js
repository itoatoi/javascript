// var foo = function () {
//     return 1;
// };

// // 일반적인 함수로서 호출
// foo(); // 1

// // 생성자함수로서 호출
// new foo();  // foo {}
 

// // 메서드로서 호출
// var obj = {
//     foo: foo
// };

// obj.foo(); // 1


// 프로퍼티 f에 바인딩된 함수는 callable이며 constructor이다. 
var obj = {
    x: 10,
    f: function () {
        return this.x;
    }
};

// 프로퍼티 f에 바인딩된 함수를 메서드로서 호출
console.log(obj.f()); // 10

// 프로퍼티 f에 바인된 함수를 일반함수로서 호출
var bar = obj.f;
console.log(bar()); // undefined

// 프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출
console.log(new obj.f()); // f {}

//콜백 함수를 사용하는 고차함수 map. 콜백 함수도 constructor이며 프로토타입을 생성한다.
[1, 2, 3].map(function(item) {
    return item * 2;
}); // [2, 4, 6]