/* 우선순위 큐 (Priority Queue) */

// Element() : 데이터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority){
    this.data = data;
    this.priority = priority;
}

// PrioirtyQueue() : Element 관리를 위한 생성자 함수
function PriorityQueue() {
    this.array = [];
}

// getBuffer() : 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function () {
    return this.array.map((element) => element.data);
    // element를 받고 받았을때 element의 data를 가져온다는 뜻.
}

// isEmpty() : 객체 내 데이터 존재 여부 파악
PriorityQueue.prototype.isEmpty = function () {
    return this.array.length == 0;
}


// enqueue() : 데이터 추가
PriorityQueue.prototype.enqueue = function (data, priority){
    let element = new Element(data, priority);
    let added = false;  //flag 역할
    for (let i = 0; i < this.array.length; i++){
        if (element.priority < this.array[i].priority){
            this.array.splice(i, 0, element);//(i번째에서 , 두번째온필드를 삭제 0을주게되면 삭제하지않고, element의 요소를 추가해준다.)
            added = true;
            break;
        }
    }
    if (!added){
        this.array.push(element);
    }
    return this.array.length;
}


// dequeue() : 데이터 삭제
PriorityQueue.prototype.dequeue = function () {
    return this.array.shift();
}


// front() : 가장 첫 데이터 반환
PriorityQueue.prototype.front = function () {
    return this.array.length == 0 ? undefined : this.array[0].data;
}

// size() : 큐 내 데이터 개수 확인
PriorityQueue.prototype.size = function () {
    return this.array.length;
}

// clear() : 큐 초기화
PriorityQueue.prototype.clear = function () {
    this.array = [];
}




/* code */
let pq = new PriorityQueue();

pq.enqueue("Alice", 1);
pq.enqueue("Bob", 2);


pq.enqueue("tom", 1);
console.log(pq);

//console.log(pq.dequeue());

console.log(pq.front());
console.log(pq.size());
console.log(pq.getBuffer()); //배열형태로 나옴