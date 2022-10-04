

//I overwrote the function becuase I am too lazy to go back and change all the code that I wrote
// #loophole
Number.prototype.toFixed = function (num) {
    var x = Number(this);
    //if num is nan break
    if (isNaN(x)) {
        return "NaN";
    }
    //round the number using math
    let y = Math.round((x * 100) / 100);
    //if has 2 trailing 0 then fix it
    if (y % 1 == 0) {
        return y + ".00";
    }
    //if one trailing 0 then fix it
    if ((y * 10) % 1 == 0) {
        return y+"0";
    }
    //is nothing is wrong do nothing
    return y;

};

x = [];

// ask the user for the data and check that it is a number
p1 = parseInt(prompt("How many Hot Dogs do you want?"));

if (isNaN(p1)) {
    alert("Please enter number");
    p1 = 0;

}

p2 = parseInt(prompt("How many fries do you want?"));

if (isNaN(p2)) {
    alert("Please enter number");
    p2 = 0;

}
p3 = parseInt(prompt("How many drinks do you want?"));

if (isNaN(p3)) {
    alert("Please enter number");
    p3 = 0;
}
//add to array
x.push(p1);
x.push(p2);
x.push(p3);

//do some math
var drink_cost = 1.5 * x.at(2);
var dog_cost = 4.25 * x.at(0);
var fries_cost = 2.6 * x.at(1);

var sub_total_cost = drink_cost + dog_cost + fries_cost;
var discount_cost = 0;
if (sub_total_cost > 20) {
    discount_cost = sub_total_cost * 0.1;
}
var tax_cost = sub_total_cost * 0.0625;
var total_cost = sub_total_cost - discount_cost + tax_cost;

//set values on the screen
document.getElementById("hotdog").innerText = "HotDogs x" + x.at(0);
document.getElementById("hotdog_cost").innerText = "$" + dog_cost.toFixed(2);


document.getElementById("fries").innerText = "Fries x" + x.at(1);
document.getElementById("fries_cost").innerText = "$" + fries_cost.toFixed(2);

document.getElementById("drinks").innerText = "Drinks x" + x.at(2);
document.getElementById("drinks_cost").innerText = "$" + drink_cost.toFixed(2);


document.getElementById("subtotal").innerText = "$" + sub_total_cost.toFixed(2);

document.getElementById("discount").innerText = "$" + discount_cost.toFixed(2);
document.getElementById("tax").innerText = "$" + tax_cost.toFixed(2);
document.getElementById("total").innerText = "$" + total_cost.toFixed(2);


