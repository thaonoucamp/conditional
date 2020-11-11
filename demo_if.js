let a = +prompt("enter a");
let b = +prompt("enter b");
let result = (a + b > 4) ? 'below' : 'over';

if ((a + b) > 4) {
    result = 'below';
} else  {
    result = 'over';
}

document.write(result + " ");