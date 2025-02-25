const getData = (e) => {
    const profile = e.target.value;
    const pr = fetch(`https://api.github.com/users/${profile}`);
    console.log(pr);
    pr.then((a) => {
        const pr2 = a.json();
        pr2.then((data) => {
            // console.log("data", data);
            showUI(data);
        });
    }).catch((b) => {
        console.log("b", b);
    });
};

// getData();

function showUI(data) {
    // responsible for creating a visualization
    console.log("data:", data);
    const { avatar_url, login, html_url } = data;
    const root = document.getElementById("cards");
    const newCard = document.createElement("div");
    newCard.id = "card";
    newCard.innerHTML = `
        <h4>${login.toUpperCase()}</h4>
        <img src='${avatar_url}' alt='avatar'>
        <a href=${html_url}>View Profile</a>
    `;
    root.appendChild(newCard);

    storeData(data);
}

function storeData(data) {
    const oldData = localStorage.getItem("searches"); // returns a JSON string
    const arr = JSON.parse(oldData || "[]");
    arr.push(data);
    localStorage.setItem("searches", JSON.stringify(arr)); //key, value
}

function showHistory() {
    const oldData = localStorage.getItem("searches"); // returns a JSON string
    const arr = JSON.parse(oldData || "[]");
    // if(oldData === undefined) arr = JSON.stringify('[]');
    arr.forEach((data) => {
        showUI(data);
    });
}

showHistory();