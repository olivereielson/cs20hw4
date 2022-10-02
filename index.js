//hotdog is ($4.25
// fries are ($2.60 each)
// drinks are ($1.50 each)


console.log("start");
x = [];

p1 = parseInt(prompt("How many Hot Dogs do you want?"));

if (isNaN(p1)) {
    alert("Please enter number");
}

p2 = parseInt(prompt("How many fries do you want?"));

if (isNaN(p2)) {
    alert("Please enter number");
}
p3 = parseInt(prompt("How many sodas do you want?"));

if (isNaN(p3)) {
    alert("Please enter number");
}

x.push(p1);
x.push(p2);
x.push(p3);

var drink_cost = 1.5 * x.at(2);
var dog_cost = 4.25 * x.at(0);
var fries_cost = 2.6 * x.at(1);

var sub_total_cost = drink_cost + dog_cost + fries_cost;
var discount_cost=0;
if(sub_total_cost>20){
    discount_cost  = sub_total_cost * 0.1;
}
var tax_cost = sub_total_cost * 0.0625;
var total_cost=sub_total_cost-discount_cost+tax_cost;

document.getElementById("hotdog").innerText="HotDogs x"+x.at(0);
document.getElementById("hotdog_cost").innerText="$"+dog_cost.toFixed(2);


document.getElementById("fries").innerText="Fries x"+x.at(1);
document.getElementById("fries_cost").innerText="$"+fries_cost.toFixed(2);

document.getElementById("drinks").innerText="Drinks x"+x.at(2);
document.getElementById("drinks_cost").innerText="$"+drink_cost.toFixed(2);




document.getElementById("subtotal").innerText="$"+sub_total_cost.toFixed(2);

document.getElementById("discount").innerText="$"+discount_cost.toFixed(2);
document.getElementById("tax").innerText="$"+tax_cost.toFixed(2);
document.getElementById("total").innerText="$"+total_cost.toFixed(2);


