class Node {
  constructor(id) {
    this.id = id;
    this.adjacents = [];
  }
}

class Graph {
  constructor() {
    this.nodeLookup = {};
  }

  getNode(id) {
    return this.nodeLookup[id];
  }

  addEdge(sourceId, destId) {
    const source = this.getNode(sourceId);
    const dest = this.getNode(destId);
    source.adjacents.push(dest);
  }

  addNode(id, node) {
    this.nodeLookup[id] = node;
  }

  hasPathDFS(sourceId, destId) {
    const source = this.getNode(sourceId);
    const dest = this.getNode(destId);
    const visited = new Set();
    return this.hasPathDFSHelper(source, dest, visited);
  }

  hasPathDFSHelper(source, dest, visited) {
    if (visited.has(source.id)) return false;
    visited.add(source.id);
    if (source.id == dest.id) {
      return true;
    }
    for (let child of source.adjacents) {
      if (this.hasPathDFSHelper(child, dest, visited)) {
        return true;
      }
    }
    return false;
  }

  hasPathBFS(sourceId, destId) {
    return this.hasPathBFSHelper(this.getNode(sourceId), this.getNode(destId));
  }

  hasPathBFSHelper(source, dest) {
    const tovisit = [];
    tovisit.push(source);
    const visited = new Set();
    while (tovisit.length > 0) {
      const node = tovisit.shift();
      if (node.id == dest.id) {
        return true;
      }
      if (visited.has(node.id)) {
        continue;
      }
      visited.add(node.id);
      for (let child of node.adjacents) {
        tovisit.push(child);
      }
    }
    return false;
  }

}

let g = new Graph();
g.addNode(1, new Node(1));
g.addNode(2, new Node(2));
g.addNode(3, new Node(3));
g.addNode(4, new Node(4));
g.addEdge(1, 2);
g.addEdge(2, 4);
g.addEdge(1, 3);
g.addEdge(2, 1);
console.log(g.hasPathBFS(4, 3)); // false
console.log(g.hasPathDFS(1, 4)); // true
console.log(g.hasPathDFS(2, 1)); // true
