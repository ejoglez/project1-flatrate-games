const aboutUs = document.getElementById("about-us")
//Hover 
const hoverText = document.getElementById("hoverText")
imageDisplay()
function imageDisplay(){
 let  imageTest = document.querySelectorAll(".image__overlay")
imageTest.forEach(imageNode => imageFunc(imageNode))
}

function imageFunc(images){
    images.addEventListener("mouseover",(event)=>{
        if(event.target.id === "EV"){
            hoverText.innerText = `Hi, I'm Eric Van and I worked mainly on the "Meet your developers" section. `
        }
        if(event.target.id === "EG"){
            hoverText.innerText = "Hi, I'm Eric Gonzalez and I worked alot on the CSS and HTML of the page, noteably the landing page, games page and also the reviews page where I made the javascript."
        }
        if(event.target.id === "ahmed"){
            hoverText.innerText = "Hi, I'm Ahemd and I worked on the games page!"
        }
        if(event.target.id === "nat"){
            hoverText.innerText = "Hi, I'm Nathaly and I worked on some of the Reviews HTML"
        }
    })
    images.addEventListener("mouseleave",()=>{
        hoverText.innerHTML = ""
    })
}

// cartBttn.addEventListener("click",()=>{
//     alert("Greetings\n Item is in the cart!")

const gameUrl="https://www.cheapshark.com/api/1.0/games?ids=13,36,43,59,75,77,80,123,38,53,99,15,21,25"


//get data from api
function getData(){
    fetch(gameUrl)
    .then(resp => resp.json())
    .then(data =>  interate(data))

}
getData();

// interate through nested objects and return array of data 
function interate(nestedObjData){
    const array = Object.values(nestedObjData)
    array.forEach(el => createCard(el));
}

const cardContainer = document.getElementById('card-container');
let theButnDiv= document.createElement("div")
//create a card 
function createCard(game){
    const div = document.createElement('div');
    div.className = 'card';
    const img = document.createElement('img');
    img.src = game.info.thumb;

    const h2 = document.createElement('h2')
    h2.innerText = game.info.title;

    const cartBttn = document.createElement('button')
    cartBttn.innerText = 'ADD TO CART'
    cartBttn.className = 'button-cart'

    const infoBttn = document.createElement('button')
    infoBttn.innerText = 'MORE INFO';
    infoBttn.className ='button-info';

    const bttnSection = document.createElement('div');
    bttnSection.className = 'button-section';

    bttnSection.append(cartBttn, infoBttn)

// this is the cheepest price, and iam appending it under the title
let outPrice= document.createElement("p")
outPrice.innerText=game.cheapestPriceEver.price

    div.append(img,h2,outPrice,bttnSection);

    cardContainer.append(div)

    cartBttn.addEventListener("click",()=>{
        alert("Greetings\n Item is in the cart!")
    
    })
    infoBttn.addEventListener("click",()=>{
// clears it after every click
        theButnDiv.innerHTML=""
        
        let gameDes=document.createElement('p')

        // give tile for the other deals
        gameDes="Other Deals Love"

        theButnDiv.append(gameDes)
// iterare over the deals
// crea list itme and append it
        let otherDealsArr=game.deals
        otherDealsArr.forEach(el=>{
            let gameList=document.createElement("li")
            gameList.innerText=el.price
            theButnDiv.append(gameList)
        })
        
        div.append(theButnDiv)
        
    

    })
}

//submit form
const reviewForm = document.getElementById('reviewForm')

//add event listener to form
reviewForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(e);
    postComment(e);
    reviewForm.reset();
})

const reviewPanel = document.getElementById('reviewPanel');
const commentInput = document.getElementById('game-name');


//add comment to section
function postComment(event){
    const div = document.createElement('div');
    div.className = 'reviewCard';

    const gameName = document.createElement('h3');
    gameName.innerText = event.target[1].value;

    const name = document.createElement('h4')
    name.innerText = event.target[0].value;

    const comment = document.createElement('p');
    comment.innerText = event.target[2].value;

    div.append(gameName, name, comment)

    reviewPanel.appendChild(div)
}

