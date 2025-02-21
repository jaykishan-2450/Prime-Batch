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


// console.log(data)
//fn to add cards
const add = () => {
    const root = document.getElementById("main");
    data.forEach((elem, idx) => {
        const newCard = document.createElement('div');
        newCard.className = 'card';
        newCard.addEventListener('click', () => {
            console.log("card color changed!")
            newCard.style.backgroundColor = getRandomColor();

        }, 1)

        newCard.innerHTML = `
           <h4>${elem.name}</h4>
           <h6>${elem.email}</h6>
           <p class="text">${elem.city}</p>
           <button class="del" style="padding:2px; border-radius:4px;box-sizing:border-box">Delete</button>`;


        const btn = newCard.querySelector('.del');
        //for deleting the card
        btn.addEventListener('click', (e) => {
            console.log("deleted successfully")
            e.target.parentElement.remove();
            const index = data.findIndex(item => item.email === elem.email);
            if (index !== -1) {
                data.splice(index, 1); // Remove the element from the data array
            }
            //this rmeoves element from DOM only not from array/object
            console.log(data);

        }
        )



        root.appendChild(newCard);
    })

}
add();


//events

const handleBgChange = () => {
    console.log("Color changed!");
    const body = document.querySelector('body');
    body.style.backgroundColor = getRandomColor();


    // if (elem.style.backgroundColor == 'yellow')
    //     elem.style.backgroundColor = 'red';
    // else elem.style.backgroundColor = 'yellow';

}

const getRandomColor = () => {
    const randomRed = Math.floor(Math.random() * 255);
    const randomGreen = Math.floor(Math.random() * 255);
    const randomBlue = Math.floor(Math.random() * 255);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`
}


//event propagation concept

const textElement = document.querySelector('.text');
textElement.addEventListener('click', (event) => {
    console.log("para color changed", event);
    event.stopPropagation();
    textElement.style.backgroundColor = "red";
})

//NOTE: by default the event listener is added in "bubbling phase"(child --->parent)
//A third parameter as "true" can allow it in capturing phase

const handleSelect=(e)=>{
    console.log(e.target.value);
    const selectedCity=e.target.value;
    const newData=data.filter((ele)=>{
        if(ele.city==selectedCity)
            return true;
        return false;
    });
    newData.forEach((ele)=>{
        console.log(ele)
    })


}
