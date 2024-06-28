let URL = "https://v2.jokeapi.dev/joke/Any?amount=10";

let jokeBtn = document.querySelector("button"); 
let questionDiv = document.querySelector(".question");
let deliveryDiv = document.querySelector(".delivery")


let giveRandom = () => {
    let random = Math.random() * 10;
    random = Math.floor(random);
    return random;
}

async function getJoke(){
    let promise = await fetch(URL);
    let data = await promise.json();
    let jokes = data.jokes[giveRandom()];
    let question = jokes.setup;
    let delivery = jokes.delivery;
    questionDiv.innerHTML = `<p>${question}</p>`;
    deliveryDiv.innerHTML = `<p>Answer: </p><p>${delivery}</p>`;
    console.log(data);
    }

jokeBtn.addEventListener("click", () => {

     getJoke();

})
