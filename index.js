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


// test.forEach(element => console.log(element));