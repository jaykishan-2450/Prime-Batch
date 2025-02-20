const data = [
    {
        name: "Jay",
        city: "Lucknow",
        email: "jay@gmail.com"
    },
    {
        name: "Keshav",
        city: "Mumbai",
        email: "keshav@gmail.com"
    },
    {
        name: "Dev",
        city: "Delhi",
        email: "dev@gmail.com"
    },
    {
        name: "Devtayani",
        city: "Chennai",
        email: "devtayani@gmail.com"
    }
]

const root = document.getElementById("main");

data.forEach((elem) => {
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.addEventListener('click',()=>{
        console.log("card color changed!")
        newCard.style.backgroundColor=getRandomColor();

    },1)

    newCard.innerHTML = `
    <h4>${elem.name}</h4>
    <h6>${elem.email}</h6>
    <p class="text">${elem.city}</p>
    `;
    root.appendChild(newCard);


})

//events

const handleBgChange = () => {
    console.log("Color changed!");
    const body = document.querySelector('body');
    body.style.backgroundColor=getRandomColor();


        // if (elem.style.backgroundColor == 'yellow')
        //     elem.style.backgroundColor = 'red';
        // else elem.style.backgroundColor = 'yellow';

}

const getRandomColor=()=>{
    const randomRed=Math.floor(Math.random()*255);
    const randomGreen=Math.floor(Math.random()*255);
    const randomBlue=Math.floor(Math.random()*255);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`
}

const textElement=document.querySelector('.text');
textElement.addEventListener('click',(event)=>{
    console.log("para color changed",event);
    event.stopPropagation();
    textElement.style.backgroundColor="red";
})

//NOTE: by default the event listener is added in "bubbling phase"(child --->parent)
//A third parameter as "true" can allow it in capturing phase


