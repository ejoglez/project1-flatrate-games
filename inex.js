
document.addEventListener("DOMContentLoaded", ()=>{
    const gameUrl="https://www.cheapshark.com/api/1.0/games?ids=9,36,43,59,75,74,80,128"
    fetch(gameUrl)
    .then(resp => resp.json() )
    .then(data=>  {
        let arrGame= Object.values(data)
        console.log(arrGame)
        arrGame.forEach(el=> renderImg(el))
     }
        )
        let gallary=document.getElementById("game gallary"); // this is the section where the store is at
    function renderImg(game){


        let btnCart=document.createElement('button')
        btnCart.innerText="cart"
        let btnDetail= document.createElement("button")
        btnDetail.innerText="detail"

        gallary.appendChild(btnCart)
        gallary.appendChild(btnDetail)

        btnCart.addEventListener("click",()=>{
            alert("Howdy\nItem is in the cart")
        })
        btnDetail.addEventListener("click", ()=>{
            
            //thediv was another tag to grab  to house all the information when clicked
            
            let theDiv=document.getElementById("details")
            theDiv.innerText=""

            let nameTile=document.createElement("p")
            theDiv.innerText=game.info.title
            gallary.appendChild(nameTile)

            let thePrice=document.createElement("p")
            thePrice.innerText=game.cheapestPriceEver.price
            theDiv.appendChild(thePrice)


        })
    }
})