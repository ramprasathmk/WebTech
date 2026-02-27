let main = document.querySelectorAll("main")[0];

let myFetch = fetch("https://fakestoreapi.com/products");

// If we are using then we get response
myFetch.then(
    (res) => {
        console.log(res);
        let data = res.json();
        console.log(data);

        data.then((e) => { 
            console.log(e);
        });
    }
).catch( (err) => {
    console.err(err);
});

async function anyNameFunc () {
    // This is a Promise.
    // let res = fetch("https://fakestoreapi.com/products");
    
    // Response Object -> body, status code
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    // console.log(data);

    data.forEach( e => {
        console.log(e);
        let myH3 = document.createElement("h3");
        myH3.innerHTML = e.title;
        // main.append(myH3);

        let myImg = document.createElement("img");
        myImg.src = e.image;
        // main.append(myImg);
        
        let myPrice = document.createElement("h3");
        myPrice.innerHTML = `Price: $${e.price}/-`;
        // main.append(myPrice);

        let myRating = document.createElement("h2");
        myRating.innerHTML = `Rating: ${e.rating.rate}*`;
        main.append(myH3, myImg, myPrice, myRating);
    });
}

anyNameFunc();
