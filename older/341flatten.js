/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

function NestedInteger(integerOrList) {
    this.integerOrList = integerOrList;

    this.isInteger = function() {
        return Number.isInteger(this.integerOrList);
    }

    this.getInteger = function() {
        if (this.isInteger()) {
            return this.integerOrList;
        } else {
            return null;
        }
    }

    this.getList = function() {
        if (!this.isInteger()) {
            return this.integerOrList;
        } else {
            return null;
        }
    }
}

// let n = new NestedInteger(3);
// console.log(n.getInteger());

// return;

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {

    this.queue = [];

    let addAll = (list) => {
        for (let item of list) {
            if (item.isInteger()) {
                this.queue.push(item.getInteger());
            } else {
                addAll(item.getList());
            }
        }
    }

    addAll(nestedList);
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
    return this.queue.length !== 0;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
    return this.queue.shift();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/

// let nestedList = [
//     new NestedInteger(1),
//     new NestedInteger(
//         [
//             new NestedInteger(4),
//             [new NestedInteger(6)]
//         ]
//     )
// ]

let nestedList = [
    new NestedInteger(1),
    new NestedInteger(
        [
            new NestedInteger(4),
            new NestedInteger([
                new NestedInteger(6)
            ])
        ]
    )
]

let i = new NestedIterator(nestedList)

while (i.hasNext()) {
    console.log(i.next());
}