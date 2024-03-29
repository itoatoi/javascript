/* 최소힙 (MinHeap) */

// Heap(): 배열에 요소를 저장하기 위한 생성자.
function Heap() {
    this.items = []; //힙배열
}

// swap(): 배열 내 두 요소 위치를 변경
Heap.prototype.swap = function (index1, index2) {
    let tmp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = tmp;
};

// parentIndex(): 부모 노드의 위치 반환
Heap.prototype.parentIndex = function (index) {
    return Math.floor((index - 1) / 2);
};

// leftChildIndex(): 왼쪽 자식 노드의 위치 반환
Heap.prototype.leftChildIndex = function (index) {
    return index * 2 + 1;
};

// rightChildIndex(): 오른쪽 자식 노드의 위치 반환
Heap.prototype.rightChildIndex = function (index) {
    return index * 2 + 2;
};

// parent(): 부모 노드의 요소 값 반환
Heap.prototype.parent = function (index) {
    return this.items[this.parentIndex(index)];
};

// leftChild(): 왼쪽 자식 노드의 요소 값 반환
Heap.prototype.leftChild = function (index) {
    return this.items[this.leftChildIndex(index)];
};

// rightChild(): 오른쪽 자식 노드의 요소 값 반환
Heap.prototype.rightChild = function (index) {
    return this.itema[this.rightChildIndex(index)];
};

// peek(): 현재 정렬된 최소/최대 요소 값 반환
Heap.prototype.peek = function() {
    return this.items[0];
};

// size(): 현재 배열 내 크기 반환
Heap.prototype.size = function () {
    return this.items.length;
};

// insert(): 신규 노드 추가
Heap.prototype.insert = function (elem) {
    this.items[this.size()] = elem;
    this.bubbleUp();
};

// bubbleUp(): 추가된 노드 위치 정렬 아래에서 위로
Heap.prototype.bubbleUp = function () {
    let index = this.size() - 1; //items의 길이 끝부분
    while (this.parent(index) && this.parent(index) > this.items[index]) {
        // 부모가 있고 && 부모(끝부분의)가 이 배열끝부분의 요소보다 클때까지 돌기
        this.swap(this.parentIndex(index), index); // 계속 스왑해주기 (올려치기작업)
        index = this.parentIndex(index); // 바뀐 인덱스는 = 올려치기된 부모인덱스로 업데이트 
    }
};

// extract(): root 노드 반환 및 삭제
Heap.prototype.extract = function () {
    let item = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();

    return item; //버블다운에 의한 바뀐 루트 노드를 반환시켜준다.
};

// bubbleDown(): 대체된 root노드 위치 정렬
Heap.prototype.bubbleDown = function() {
    let index = 0;
    while (this.leftChild(index) && 
            (this.leftChild(index) < this.items[index] || this.rightChild(index) < this.items[index])) {
        
        let childIndex = this.leftChildIndex(index);
        if (this.rightChild(index) && this.rightChild(index) < this.items[childIndex]) {
            childIndex = this.rightChildIndex(index);
        }

        this.swap((childIndex, index));
        index = childIndex;
    }
};

let minHeap = new Heap();

minHeap.insert(90); //bubbleup이 처음엔 호출되지만 돌지 않음
minHeap.insert(15); //bubbleup이 호출되고 시작
minHeap.insert(10); 
minHeap.insert(7); 
minHeap.insert(12); 
minHeap.insert(2); 
minHeap.insert(8); 
minHeap.insert(3); 

console.log(minHeap);

minHeap.insert(1); 
console.log(minHeap);
