function LinkedList() {
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
	let newNode = new Node(value, this.head, null);
	if (this.head) {
		this.head.prev = newNode;
	} else {
		this.tail = newNode;
	}
	this.head = newNode;

};

LinkedList.prototype.addToTail = function(value) {
	let newNode = new Node(value, null, this.tail);
	if (this.tail) {
		this.tail.next = newNode;
	} else {
		this.head = newNode
	}
	this.tail = newNode;
};

LinkedList.prototype.deleteHead = function(value) {
	if (!this.head) {
		return null;
	} 
	let headVal = this.head.value;
	this.head = this.head.next;
	if (this.head) {
		this.head.prev = null;
	} else {
		this.tail = null;
	}
	return headVal;
};

LinkedList.prototype.deleteTail = function(value) {
	if(!this.tail) {
		return null;
	} 
	let tailVal = this.tail.value;
	this.tail = this.tail.prev;
	if (this.tail) {
		this.tail.next = null;
	} else {
		this.head = null;
	}
	return tailVal;
};

LinkedList.prototype.search = function(value) {

	let curr = this.head;
	while (curr) {
		if(curr.value === value) {
			return curr.value;
		}
		curr = curr.next;
	}
	return null;
};

LinkedList.prototype.indexOf = function(value) {
	let result = [];
	let counter = 0;
	let curr = this.head;
	while (curr) {
		if(curr.value === value) {
			result.push(counter);
		}
		curr = curr.next;
		counter++;
	}
	return result;
};


let ll = new LinkedList();

ll.addToHead('Apollo');
ll.addToHead('Duke');
ll.addToHead('Amos');
ll.addToHead('Rufus');
ll.addToHead('Apollo');
ll.addToHead('Lucky');
ll.addToHead('Rufus');
ll.addToHead('Quincy');
ll.addToHead('Rex');
ll.addToTail('Shamus');
ll.addToTail('Teddy');
ll.addToTail('Zeus');

console.log(ll);

console.log('------- Delete Head ----------');
console.log(ll.deleteHead());

console.log('------- Delete Tail ----------');
console.log(ll.deleteTail());

console.log('------- Search ----------');
console.log(ll.search('Lucky'));

console.log('------- indexOf ----------');
console.log(ll.indexOf('Shamus'));
console.log(ll.indexOf('Rufus'));


// console.log(ll.tail.prev);
// console.log(ll.tail.value);
// console.log(ll.tail.prev.value);
// console.log(ll.tail.prev.prev.value);
// console.log(ll.tail.prev.prev.prev);
