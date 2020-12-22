try {
    eval ("alert('Hello)");
}
catch (err) {
    document.getElementById('demo').innerHTML = err.name;
}

// SyntaxError

var x;
try {
    x = y + 1;
}
catch (err) {
    document.getElementById('demo1').innerHTML = err.name;
}

// ReferenceError

var num = 1;
try {
    num.toPrecision(110);
}
catch (err) {
    document.getElementById('demo2').innerHTML = err.name;
}

// RangeError

var num = 1;
try {
    num.toUpperCase();
}
catch (err) {
    document.getElementById('demo3').innerHTML = err.name;
}

// TypeError

try {
    decodeURI('%%%');
}
catch (err) {
    document.getElementById('demo4').innerHTML = err.name;
}

// URIError