var advisors = [{
    id: 0,
    name: "Super Conseiller",
    clients: [{
        id: 0,
        firstname: "Jean",
        lastname: "Fui",
        email: "jean.f@gmail.com",
        account: {
            id: 0,
            balance: 597.45,
            number: "00000995"
        }
    }, {
        id: 1,
        firstname: "Alphonse",
        lastname: "Toudroi",
        email: "al.toudroi@gmail.com",
        account: {
            id: 5,
            balance: 1000,
            number: "00000845"
        }
    }, {
        id: 4,
        firstname: "Jimmy",
        lastname: "Slippin'",
        email: "bettercallsaul@gmail.com",
        account: {
            id: 8,
            balance: -255.33,
            number: "00000906"
        }
    }]
}];

console.log("Mes conseillers et leurs clients : ", advisors);

// Code du jeu.

/*
 * Fonction déclenchée par l'attribut onclick du bouton "START".
 */
function startGame() {
    console.log("Clic sur start");
    // Step 1 : Rendre le div qui comporte les gobelets visible.

    // La fonction getElementById(param) permet de récupérer un élément (balise) HTML qui a un attribut id avec la même valeur que le paramètre donné. C'est un objet JavaScript du DOM qui est renvoyé.
    var gameDiv = document.getElementById("game");
    // La propriété style d'un objet du DOM permet de modifier/surcharger toutes les règles CSS de l'élément.
    gameDiv.style.display = "flex";

    // Step 2 : Cacher le bouton START.
    var startBtn = document.getElementById("startButton");
    startBtn.style.display = "none";

    // Step 3 : Cacher le trésor derrière un gobelet
    // Générer un nombre aléatoire qui est soit 0, 1, ou 2.
    var randomIndex = Math.round(Math.random() * 2);
    setTreasure(randomIndex);
}

/*
 * Fonction délenchée sur un clic d'image de gobelet. La fonction doit faire bouger
 * le gobelet sélectionné, le soulever pour voir si le trésor est dessous.
 */
function selectCup(evt) {
    var selectedImage = evt.target || evt.currentTarget;
    var selectedIndex = selectedImage.id.split("-")[1];
    console.log("Le joueur a choisi : ", selectedIndex);

    selectedImage.classList.add("selected");
}

function setTreasure(index) {
    // Il faut retrouver le gobelet derrière lequel cacher le trésor.
    var cupId = "cup-" + index;
    var winnerCup = document.getElementById(cupId);
    // On construit l'image du trésor.
    var img = document.createElement("img");
    img.src = "images/treasure.png";
    img.width = "48";
    img.id = "treasure";
    // On ajoute le trésor juste avant le gobelet pour qu'il soit caché derrière.
    winnerCup.insertAdjacentElement("beforebegin", img);
}