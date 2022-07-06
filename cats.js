function initialize() { // initializes cat objects and persists them if this has not yet been done, else calls load_page to use persisted data to load the page
    if(sessionStorage.getItem("initialized") === null) {
        cat1 = {
            name: "Paul",
            breed: "Siamese",
            age: "3",
            img: "cat-pics/paul.jpeg"
        }
        
        cat2 = {
            name: "Benji",
            breed: "Tabby",
            age: "4",
            img: "cat-pics/benji.jpg"
        }
        
        cat3 = {
            name: "Frank",
            breed: "Bengal",
            age: "8",
            img: "cat-pics/frank.jpeg"
        }
        
        cat4 = {
            name: "Tamara",
            breed: "American Short Hair",
            age: "20",
            img: "cat-pics/tamara.jpeg"
        }
        
        cat5 = {
            name: "Skinny Pete",
            breed: "Tabby",
            age: "4",
            img: "cat-pics/skinny-pete.jpeg"
        }
        
        cat6 = {
            name: "Lucy",
            breed: "Siberian",
            age: "1",
            img: "cat-pics/lucy.jpeg"
        }

        availableCats = [cat1, cat2, cat3, cat4, cat5, cat6];
        ownedCats = [];

        sessionStorage.setItem("availableCats", JSON.stringify(availableCats));
        sessionStorage.setItem("ownedCats", JSON.stringify(ownedCats));
        sessionStorage.setItem("initialized", true);
    }
    else {
        load_page();
    }
}

function load_page() { // sets available cats and owned cats to the persisted data
    availableCats = JSON.parse(sessionStorage.getItem("availableCats"));
    ownedCats = JSON.parse(sessionStorage.getItem("ownedCats"));
}

function adopt_cat(catNameElement, buttonElement) { // deletes a cat from the available cats array and places it into the owned cats array
    let catName = catNameElement.innerHTML.slice(6); // isolates catName from 'Name: catName'
    let cat; // cat will point to the cat object the HTML page references
    availableCats.forEach(catObject => { // gets the cat object the page is referring to
        if(catName === catObject.name){
            cat = catObject;
        }
    });
    
    ownedCats.push(cat);
    let removalIndex = availableCats.findIndex(object => {return object.name === cat.name}); // finds the index of the cat to remove from the available cats array
    availableCats.splice(removalIndex, 1); // removes the cat object that has been adopted from the available cats array

    sessionStorage.setItem("availableCats", JSON.stringify(availableCats)); // updates these changes into the persisted data
    sessionStorage.setItem("ownedCats", JSON.stringify(ownedCats));

    buttonElement.setAttribute("onclick", ''); // Edits the adopt buttonElement to display 'Adopted!' and makes it do nothing on click
    buttonElement.innerHTML = "Adopted!";
}

function display_cats(catList) { // displays cats in the HTML skeleton hardcoded into the available-cats and your-cats pages
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

let catArray, availableCats, ownedCats, cat1, cat2, cat3, cat4, cat5, cat6;
initialize();

// I should change sessionStorage to sessionStorage when I am done testing
// // variables currently delete once the tab is closed - since I open pages in a new tab, 
// // there is no persistence across pages

// // I can either use sessionStorage or navigation within the same tab to fix this
// // sessionStorage seems like a better solution