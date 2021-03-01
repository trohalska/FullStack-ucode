'use strict'

class Movie {
    constructor(options) {
        this.title = options.title;
        this.poster = options.poster;
        this.date = options.date;
        this.info = options.info;
        this.actors = options.actors;
        this.favorites = options.favorites;
    }
    addToFavorite() {
        favorites.add(this);
        this.favorites = `<i class="fas fa-heart red-heart"></i>`;
    }
    removeFromFavorites() {
        favorites.delete(this);
        this.favorites = `<i class="far fa-heart"></i>`;
    }
}

let cinderella = new Movie({
    title: "Cinderella",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/c2/Cinderella_2015_official_poster.jpg",
    date: "Feb 13, 2015",
    info: "Ella and her parents live happily in a large house with a few servants, until her mother falls ill. Ella promises to follow her mother's dying wish: to have courage and be kind. Years later, Ella's father marries recently-widowed Lady Tremaine, who has two unpleasant daughters, Drisella and Anastasia. Ella's father leaves on business, and Lady Tremaine reveals her cruel and jealous nature, forcing Ella to give up her bedroom to the stepsisters and move into the attic. When Ella's father unexpectedly dies, Lady Tremaine dismisses the household staff to save money, and forces all of their chores upon Ella. Seeing Ella's face covered in cinders after sleeping by the fireplace, her step-family mockingly dubs her \"Cinderella\".",
    actors: ["Cate Blanchett", "Lily James", "Richard Madden", "Stellan Skarsgård"],
    favorites: `<i class=\"far fa-heart\">`
})
let readyPlayerOne = new Movie({
    title: "Ready Player One",
    poster: "https://upload.wikimedia.org/wikipedia/en/7/74/Ready_Player_One_%28film%29.png",
    date: "Mar 11, 2018",
    info: "In 2045, people seek to escape from reality through the virtual reality entertainment universe called the OASIS (Ontologically Anthropocentric Sensory Immersive Simulation), created by James Halliday and Ogden Morrow of Gregarious Games. After Halliday's death, a pre-recorded message left by his avatar Anorak announces a game, granting ownership of the OASIS to the first to find the golden Easter egg within it, which gets locked behind a gate requiring three keys which players can obtain by accomplishing three challenges. The contest has lured several \"Gunters\", or egg hunters, and the interest of Nolan Sorrento, the CEO of Innovative Online Industries (101) who seeks to control the OASIS himself by inserting intrusive online advertising. IOI uses an army of indentured servants, and employees called \"Sixers\" to find the egg.",
    actors: ["Tye Sheridan", "Olivia Cooke", "Ben Mendelsohn", "T.J. Miller"],
    favorites: `<i class=\"far fa-heart\">`
})
let howToTrainYorDragon = new Movie({
    title: "How to Train Your Dragon",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/99/How_to_Train_Your_Dragon_Poster.jpg",
    date: "Mar 26, 2010",
    info: "The Viking village of Berk, located on a remote island, is attacked frequently by Dragons, which take livestock, damage property and endanger lives. Hiccup, the awkward fifteen-year-old son of the village chieftain, Stoick the Vast, is deemed too scrawny and weak to fight the dragons, so he instead creates mechanical devices under his apprenticeship with Gobber, the village blacksmith, though Hiccup's inventions often backfire. During one attack, Hiccup uses a bolas launcher to shoot down a Night Fury, a dangerous and rare dragon of which little is known, but no one believes him, so he searches for the fallen dragon on his own. He finds the dragon in the forest, tangled in his net, but cannot bring himself to kill him, and instead sets him free.",
    actors: ["Jay Baruchel", "Gerard Butler", "Craig Ferguson", "America Ferrera"],
    favorites: `<i class=\"far fa-heart\">`
})
let darkKnight = new Movie({
    title: "The Dark Knight",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/Dark_Knight.jpg",
    date: "Jul 14, 2008",
    info: "The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman. In the film, Bruce Wayne / Batman (Bale), Police Lieutenant James Gordon (Oldman) and District Attorney Harvey Dent (Eckhart) form an alliance to dismantle organized crime in Gotham City, but are menaced by an anarchistic mastermind known as the Joker (Ledger), who seeks to undermine Batman's influence and throw the city into anarchy.",
    actors: ["Christian Bale", "Michael Caine", "Heath Ledger", "Gary Oldman"],
    favorites: `<i class=\"far fa-heart\">`
})

export let favorites = new Set();
export let movies = new Set();

movies.add(cinderella)
movies.add(readyPlayerOne)
movies.add(howToTrainYorDragon)
movies.add(darkKnight)

let renderFilmInfo = (set) => {
    let activeFilm = document.querySelector(".li-active"),
        div = document.querySelector('.film-info'),
        actors = document.createElement("div"),
        prevPoster = document.querySelector(".poster"),
        favButton

    div.innerHTML = ""
    if (prevPoster) {
        prevPoster.remove()
    }
    actors.setAttribute('class', 'actors')

    for (let movie of set)
        if (activeFilm.innerHTML === movie.title) {
            div.innerHTML = `<div class="film-name"><p>${movie.title}</p><div id="addToFav">${movie.favorites}</div></div>`
            div.innerHTML += `<div class="date"><p>${movie.date}</p></div>`
            for (let i of movie.actors) {
                actors.insertAdjacentHTML("beforeend", `<p>${i}</p>`)
            }
            div.append(actors)
            div.insertAdjacentHTML("beforeend", `</div><div class="description"><p>${movie.info}</p></div></div>`)
            div.insertAdjacentHTML('afterend', `<div class="poster"><img src="${movie.poster}" alt="${movie.title}"></div>`)

            favButton = document.querySelector('#addToFav')
            favButton.onclick = () => {
                if (favorites.has(movie)) {
                    movie.removeFromFavorites(movie)
                    favButton.innerHTML = movie.favorites
                    renderFilmList(set)
                } else {
                    movie.addToFavorite(movie, favButton);
                    favButton.innerHTML = movie.favorites
                }
            }
            break;
        }
}

let renderFilmList = (set) => {
    let ul = document.querySelector("ul"),
        firstLi = true;
    ul.innerHTML = "";
    for (let movie of set) {
        let li = document.createElement("li")
        if (firstLi) {
            li.setAttribute('class', 'li-active')
        }
        firstLi = false
        li.innerHTML = movie.title
        ul.append(li)
    }
    ul.onclick = (event) => {
        let li = event.target;
        document.querySelector(".li-active").classList.remove("li-active")
        li.classList.add("li-active")
        renderFilmInfo(set)
    }
    renderFilmInfo(set);
}

let renderCollection = (target) => {
    document.querySelector(".category-active").classList.remove('category-active')
    target.classList.add("category-active")
    if (target.innerHTML === "All")
        renderFilmList(movies)
    else
        renderFilmList(favorites)
}

let intMain = () => {
    let btnsCollect = document.querySelector("nav");
    btnsCollect.onclick = (event) => renderCollection(event.target)
    renderFilmList(movies)
}

intMain();
