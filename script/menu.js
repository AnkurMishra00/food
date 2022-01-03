let container = document.getElementById("food");
let food = []
function getData(){
//www.themealdb.com/api/json/v1/1/categories.php
//
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(function (res){
        return res.json();
    })
    .then(function (res){
        let { meals } = res;
        console.log(meals)
        appendFood(meals)

    })
}

getData()


function appendFood(f){
    f.forEach(function (el){

        let div = document.createElement("div")

        let c = document.createElement("c")
        c.innerHTML = "M.R.P. &nbsp; &nbsp; &nbsp;";


        let button = document.createElement("button")
        button.innerHTML = "Add To Cart";

        let img = document.createElement("img")
        img.src = el.strMealThumb;
        let title = document.createElement('p');
        title.innerText = el.strMeal;
        title.setAttribute('class', 'title')
        //Math.random() * (max - min) + min;
        let price =  Math.floor(Math.random() * (400)+100);
        
        div.append(img,title,c,price, button);
        container.appendChild(div);
        
    })
}