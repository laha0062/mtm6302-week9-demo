console.log("JS file included")

const title = document.querySelector("h1")

title.addEventListener("click", function() {
    this.style.color = "green"
})

const heart = document.getElementById("like")

like.addEventListener("click", function(e) {
    e.target.classList.toggle("liked")
})

//multiple element eventlistener
const tasks = document.getElementById("todolist").children

for (const task of tasks){
    task.addEventListener("click", completetask)
}

function completetask(e){
    e.target.classList.toggle("done")
}
//for loop method doesnt work on content added after the browser renders the page (page doesnt re-render - js content) also only works on the declared element itself

//if the element with the event listener is added dynamically (js) use event delegation (closest) to add the event listener into that elements parent

//event delegation
const groceryList = document.getElementById("grocerieslist")
groceryList.addEventListener("click", addtocart)

function addtocart(e){
    /* const item = e.target
    if(item.classList.contains("item")){
        item.insertAdjacentHTML("beforeend", `<span>🛒</span>`)
    }else{
        //e.target.remove()
    } */

    const item = e.target.closest(".item")

    if(item){
        item.insertAdjacentHTML("beforeend", `<span>🛒</span>`)
    }
}


//form handling
const groceryForm = document.getElementById("groceryForm")

//important for capstone
groceryForm.addEventListener("submit", function(e){
    e.preventDefault()
    const elements = groceryForm.elements
    for (const element of elements){
        console.log(element.name + element.value)
        if(element.name == "groceryItem" && element.value !== ""){
            groceryList.insertAdjacentHTML("beforeend", `<li class="item">${element.value}</li>`)
            groceryForm.reset()
        }
    }
})