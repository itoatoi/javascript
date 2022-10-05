// const xhr = new XMLHttpRequest();

// // HTTP 요청 초기화
// xhr.open('GET', '/users');

// // HTTP 요청 헤더 설정
// // 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정: json
// xhr.setRequestHeader('content-type', 'application/json');

// // HTTP 요청 전송
// xhr.send();

const xhr = new XMLHttpRequest();

// HTTP 요청 초기화
xhr.open('POST', '/users');

// HTTP 요청 헤더 설정
// 클라이언트가 서버로 전송할 데이터의 MIME 타입 지정: json
xhr.setRequestHeader('content-type', 'application/json');

// HTTP 요청 전송
xhr.send(JSON.stringify({ id: 1, content: 'HTML', comleted: false }));

