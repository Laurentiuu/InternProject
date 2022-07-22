class CustomList {
  constructor(list) {
    this.list = list;
  }

  insertFirst(data) {
    this.list = [data, ...this.list];
    console.log(this.list);
  }

  insertLast(data) {
    this.list = [...this.list, data];
    console.log(this.list);
  }

  getFirst() {
    console.log(this.list[0]);
    return this.list[0];
  }

  getLast() {
    console.log(this.list[this.list.length - 1]);
    return this.list[this.list.length - 1];
  }

  print() {
    console.log(this.list);
  }
}

let obj1 = new CustomList([1, 2, 3]);
obj1.insertFirst(22);
obj1.insertLast(33);
obj1.getFirst();
obj1.getLast();
