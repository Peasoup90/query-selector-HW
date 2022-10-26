let favouriteFood = ["Ramen", "Pizza", "Greek salad", "Samosas", "Steak"];
let list1 = document.getElementById("dynamicContent");

favouriteFood.forEach((item) => {
let li = document.createElement("li");
li.innerText = item;
list1.appendChild(li);
});


