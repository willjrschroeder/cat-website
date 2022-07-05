let cat1 = {
    name: "Paul",
    breed: "Siamese",
    age: "3",
    img: "cat-pics/paul.jpeg"
}

let cat2 = {
    name: "Benji",
    breed: "Tabby",
    age: "4",
    img: "cat-pics/benji.jpg"
}

let cat3 = {
    name: "Frank",
    breed: "Bengal",
    age: "8",
    img: "cat-pics/frank.jpeg"
}

let cat4 = {
    name: "Tamara",
    breed: "American Short Hair",
    age: "20",
    img: "cat-pics/tamara.jpeg"
}

let cat5 = {
    name: "Skinny Pete",
    breed: "Tabby",
    age: "4",
    img: "cat-pics/skinny-pete.jpeg"
}

let cat6 = {
    name: "Lucy",
    breed: "Siberian",
    age: "1",
    img: "cat-pics/lucy.jpeg"
}

let catArray;
let availableCats = [cat1, cat2, cat3, cat4, cat5, cat6];
let ownedCats = [cat2, cat6];

function adopt_cat(cat) { //deletes a cat from the available cats array and places it into the owned cats array
    ownedCats.push(cat);
    let removalIndex = availableCats.findIndex(function(element){element === cat});
    availableCats.splice(removalIndex, 1);
}

function display_cats(catList) { //displays cats in the HTML skeleton hardcoded into the cats pages
    if(catList === 'adoptable') {
        catArray = availableCats;
    }
    else if(catList === 'owned') {
        catArray = ownedCats;
    }

    for(let i = 1; i <= catArray.length; i++) {
        let pageImage = document.getElementById(`cat${i}-img`);
        let pageName = document.getElementById(`cat${i}-name`);
        let pageBreed = document.getElementById(`cat${i}-breed`);
        let pageAge = document.getElementById(`cat${i}-age`);
        let pageButton = document.getElementById(`cat${i}-button`)
        pageImage.src = catArray[i - 1].img;
        pageName.innerHTML = `Name: ${catArray[i - 1].name}`;
        pageBreed.innerHTML = `Breed: ${catArray[i - 1].breed}`;
        pageAge.innerHTML = `Age: ${catArray[i - 1].age}`;
        pageButton.className = "d-block"
    }
}
