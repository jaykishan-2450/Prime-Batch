const getData=(e)=>{
    const profile=e.target.value;
    const pr=fetch(`https://api.github.com/users/${profile}`); 
// pr only has one single attribute the second attribute is always undefined
    console.log(pr);
    pr.then((a)=>{
        console.log("a",a);
        const p2=a.json();
        p2.then((data)=>{
            // console.log("data",data);
            showUI(data);
     });
    }).catch((b)=>{
        console.log("b",b);
    });
};

function showUI(data)
{
    //Responsible for creating visualization.
    console.log("data",data);
    const {avatar_url,login,html_url}=data;
    const card=document.getElementById("card");
    card.innerHTML=`
        <h4>${login.toUpperCase()}</h4>
        <img src='${avatar_url}' alt="Me">
        <a href='${html_url}'>View Profile</a>`;

    storeData(data);
}

// View Application tab for storage purposes.
function storeData(data)
{
    // localStorage.setItem("searches",data); //Key value pair
    //We can only store string in local storage.
    const oldData=localStorage.getItem("searches"); //returns a JSON String
    const arr=JSON.parse(oldData);   
    localStorage.setItem("searches",JSON.stringify(data));
    arr
}

function showHistory(){
    const oldData=localStorage.getItem("searches");//returns a JSON string
    const arr=JSON.parse(oldData || "[]");
    arr.forEach(data => {
        showUI(data);
    });
}
showHistory();