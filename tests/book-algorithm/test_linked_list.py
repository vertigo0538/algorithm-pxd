class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, first_node):
      self.first_node = first_node


    def read(self, index):
        current_node = self.first_node
        current_index = 0

        while current_index < index:
            current_node = current_node.next
            current_index += 1 

            if current_index is None:
              return None 

        return current_node.data

    def index_of(self, value):
      current_node = self.first_node
      current_index = 0

      while current_node is not None:
        if current_node.data == value:
          return current_index
        current_node = current_node.next
        current_index += 1

      return None


node1 = Node('once')
node2 = Node('upon')
node1.next = node2
list = LinkedList(node1)
node3 = Node('a')
node4 = Node('time')
node2.next = node3
node3.next = node4

def test_read():
  expected = 'upon' 
  actual = list.read(1)
  assert expected == actual


def test_index_of():
  excepted = 3
  actual = list.index_of('time')
  assert excepted == actual