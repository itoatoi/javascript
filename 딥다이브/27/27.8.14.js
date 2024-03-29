console.log([1, [2, 3, 4, 5]].flat()); //[ 1, 2, 3, 4, 5 ]

// 기본값은 1이다. 
console.log([1, [2, [3, 4, 5]]].flat(1)); // [ 1, 2, [ 3, 4, 5 ] ]

// 중첩 배열을 평탄화하기 위한 깊이 값을 2로 지정하여 2단계 깊이까지 평탄화한다. 
console.log(
[1, 
    [2, 
        [3, 
            [4, [
                5
            ]
        ]
    ]
]
].flat(2)); // [ 1, 2, 3, [ 4, [ 5 ] ] ]
console.log([1, [2, [3, [4, [5]]]]].flat(3)); // [ 1, 2, [ 3, 4, 5 ] ]

// 중첩 배열을 평탄화하기 위한 깊이 값을 Infinity로 지정하여 중첩배열 모두를 평탄화한다.
console.log([1, [2, [3, [4, [5]]]]].flat(Infinity)); // [ 1, 2, 3, 4, 5 ]

