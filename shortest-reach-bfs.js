class Node {
  constructor(id) {
    this.id = id;
    this.neighbors = [];
  }
}

class Graph {
  constructor() {
    this.nodes = {};
    this.EDGE_DISTANCE = 6;
  }

  addNode(id, node = new Node(id)) {
    this.nodes[id] = node;
  }

  getNode(label) {
    return this.nodes[label];
  }

  addEdge(first, second) {
    this.nodes[first].neighbors.push(second);
  }

  shortestEdge(firstId) {
    let distances = {};
    let queue = [];
    distances[firstId] = 0;
    queue.push(firstId);

    while (queue.length > 0) {
      let nextId = queue.shift();
      for (let neighborId of this.getNode(nextId).neighbors) {
        if (!(neighborId in distances)) {
          distances[neighborId] = distances[nextId] + this.EDGE_DISTANCE;
          queue.push(neighborId);
        }
        
      }
    }

    return distances;
  }
}

const g = new Graph();
for (let i = 0; i <= 8; i++) {
  g.addNode(i);
}

g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(3,0);
g.addEdge(3,4);
g.addEdge(3,6);
g.addEdge(7,8);

let r = g.shortestEdge(1);
console.log(r);