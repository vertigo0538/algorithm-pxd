// 기본 노드
class Node {

  constructor(data) {
    this.data = data;
    this.nextNode = null
  }
}

// 프로그램에게 연결 리스트가 어디서부터 시작하는지 쉽게 알려주는 LikedList 클래스
class LinkedList {

  constructor(firstNode) {
    this._firstNode = firstNode;
  }

  read(index) {
    // 리스트의 첫 번째 노드에서 시작한다.
    let currentNode = this._firstNode;
    let currentIndex = 0

    while (currentIndex < index) {
      // 찾고 있는 인덱스에 도착할 때까지 각 노드의 링크를 계속 따라간다.
      currentNode = currentNode.nextNode;
      currentIndex += 1;


      // 리스트 끝에 도달하면 찾고 있는 값이 없다는 뜻이므로 null을 반환한다.
      if (!currentNode) {
        return null
      }
    }
    return currentNode.data
  }

  indexof(value) {
    // 리스트의 첫 번째 노드에서 시작한다.
    let currentNode = this._firstNode;
    let currentIndex = 0;

    // 현재 노드의 값이 찾고 있는 값이 아니라면 계속해서 다음 노드로 넘어간다.
    while (currentNode.data !== value) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;

      // 리스트 끝에 도달하면 찾고 있는 값이 없다는 뜻이므로 -1을 반환한다.
      if (!currentNode) {
        return -1
      }
    }
    return currentIndex
  }

  insertAtIndex(index, value) {
    let currentNode = this._firstNode;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    const newNode = new Node(value);
    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  }

  deleteAtIndex(index) {
    let currentNode = this._firstNode;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex += 1;
    }

    currentNode.nextNode = currentNode.nextNode.nextNode;
  }
}

describe('linked list', () => {
  const node1 = new Node("once")
  const node2 = new Node("upon")
  node1.nextNode = node2;
  const node3 = new Node('a')
  node2.nextNode = node3;
  const node4 = new Node('time')
  node3.nextNode = node4;
  const list = new LinkedList(node1);

  it('read', () => {
    expect(list.read(1)).toBe('upon')
  })

  it('search', () => {
    expect(list.indexof('time')).toBe(3)
  })

  it('insert', () => {
    list.insertAtIndex(2, 'yellow')
    expect(list.read(3)).toBe('yellow')
  })

  it('delete', () => {
    list.deleteAtIndex(2)
    expect(list.read(3)).toBe('time')
  })
});