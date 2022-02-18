const aboutUs = document.getElementById("about-us")

function button(){
    const resetBtn = document.createElement("button")
    resetBtn.id = "resetBtn"
    resetBtn.innerHTML = "go back"
    resetBtn.addEventListener("click", () => {
        window.location.reload();

    })
aboutUs.append(resetBtn)
}

document.querySelectorAll("img").forEach(item => {
    item.addEventListener(`click`, (e) => {
        if (e.target.id === "ev-picture"){
            document.querySelector("ul").innerText = ""
            const ericPic = document.createElement("img")
                ericPic.src = "AboutUsPics/21125505_1532294940154732_1754325753808962236_o.jpg"
                ericPic.id = "focus" 
            const ericText = document.createElement("p")
                ericText.innerText = `Hi, my name is Eric nice to meet you!. On this project I worked on the "About" part of this project aswell as the "games" section of the webpage.`

             button()

            
            aboutUs.append(ericPic,ericText)
        }
        if (e.target.id === "eg-picture"){
            const egSrc = e.target.src
            const egPic = document.createElement("img")
            const egText = document.createElement("p")
            document.querySelector("ul").innerText = ""
            
            egText.innerText = "Hi my name is slim shady"
            egPic.id = "focus"
            egPic.src = egSrc
            button()
            aboutUs.append(egPic,egText)
            
        }
            
        if (e.target.id === "ahmed-picture"){
            document.querySelector("ul").innerText = ""
            const ahmedPic = document.createElement("img")
                ahmedPic.src = "AboutUsPics/T02MD9XTF-U02T65UV1LJ-8db8dd41e386-512.jpg"
                ahmedPic.id = "focus"
            const ahmedFocus = document.createElement("p")
                ahmedFocus.innerText = `Hi, my name is slim shady`
                button()
            aboutUs.append(ahmedPic,ahmedFocus)
        }
        if (e.target.id === "nathaly-picture"){
            document.querySelector("ul").innerText = ""
            const nathalyPic = document.createElement("img")
                nathalyPic.src = "AboutUsPics/T02MD9XTF-U02G9ELQQ8P-1505ae46e619-512.jpg"
                nathalyPic.id = "focus"
            const natFocus = document.createElement("p")
                natFocus.innerText = `Hi, my name is slim shady`
                button()
            aboutUs.append(nathalyPic,natFocus)
            
        }
    })
})

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

        theButnDiv.innerHTML=""
        
        let gameDes=document.createElement('p')

        
        gameDes="Other Deals Love"

        theButnDiv.append(gameDes)

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

