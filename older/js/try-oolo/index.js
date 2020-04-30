let Widget = {
  init: function(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.elem = null;
  },
  insert: function(where) {
    this.elem.style.width = this.width;
    this.elem.style.height = this.height;
    this.elem.style.color = this.color;
    where.appendChild(this.elem);
  }
};

let H1 = Object.create(Widget);
H1.setup = function(width, height, color, text) {
  this.init(width, height, color);
  this.text = text;
  this.elem = document.createElement("h1");
  this.elem.textContent = text;
};
H1.build = function() {
  this.insert(document.body);
};

let test1 = Object.create(H1);
test1.setup(100, 100, "red", "hello h1");
test1.build();

let test2 = Object.create(H1);
test2.setup(100, 100, "blue", "hello h1 again");
test2.build();
