function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}
function push(element) {
  this.dataStore[this.top++] = element;
}

function peek() {
  return this.dataStore[this.top-1];
}

function pop() {
  return this.dataStore.shift();
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}

function hasHigherPrecedence(operand) {
  if((operand == "*") || (operand == "/")) {
    return true;
  } else if ((operand == "-") || (operand == "+")){
    return false;
  } else {
    return true;
  }
}

function converter(expression) {
  var s = new Stack;
  var string = "";

  for (var i = 0; i < expression.length; i++) {
    if (!(expression[i].match(/["*:<>?\\/|+\-\[\]]/))) {
      string += expression[i]
    } else { //if (expression[i].match(/["*:<>?\\/|+\-\[\]]/)){
      if (s.length() != 0) {
       if (hasHigherPrecedence(s.peek())) {
       string += s.peek();
       //s.pop();

      } else {
        string += s.peek();
        s.pop();
        s.push(expression[i]);

      } 
     }
     s.push(expression[i]);
      console.log(s.peek());

    } //else {
       //console.log('Hi');
    //}

  }

  if(s.dataStore.length != 0) {
    console.log(s);
    string += s.peek();
    s.pop();
  }
  console.log(s);

  return string;

}

//converter('1*2-3'); // this one works
//converter('1*3*2-7*3') // works
//converter('1*3-2*7'); // works
converter('1*3*2+7-2') // works
