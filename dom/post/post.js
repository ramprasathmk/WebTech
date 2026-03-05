"Vazhlaa En Vazhlvai Thediyae";

let lGetButton = document.querySelectorAll("button")[0];
let lPostButton = document.querySelectorAll("button")[1];
let lMySection = document.querySelectorAll("section")[0];

let GPostObject = {
    name: "water falls",
    email: "waterfalls.email.com",
    password: "123456",
    avatar: "./dom/asserts/img6.png",
    role: "customer",
};

// Get Button Event Listener
lGetButton.addEventListener("click", async () => {
    //
    lMySection.innerHTML = "";
    let lGetResp = await fetch("https://api.escuelajs.co/api/v1/users");
    let lGetRespData = await lGetResp.json();
    lGetRespData.forEach(e => {
        console.log(e);
        let lMySectionName = document.createElement("h1");
        lMySectionName.innerHTML = `${e.name}`;
        let lMySectionAvatar = document.createElement("img");
        lMySectionAvatar.src = `${e.avatar}`;
        lMySection.append(lMySectionName, lMySectionAvatar);
    });
});

// Post Button Event Listener
lPostButton.addEventListener("click", async () => {
    //
    let lPostResp = await fetch("https://api.escuelajs.co/api/v1/users", {
        //
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify(GPostObject),
    });

    console.log(lPostButton);
});

