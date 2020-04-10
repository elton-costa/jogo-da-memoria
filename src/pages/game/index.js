const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $memoryCardC = createMemoryCard({
    nameClass: "-front",
    src: "img/icon-c.png",
    alt: "Ícone de um livro da linguagem C++"
});

const $memoryCardJS = createMemoryCard({
    nameClass: "-front", 
    src: "img/icon-js.png", 
    alt: "Ícone de um livro da linguagem C++"
});

const $memoryCardJava = createMemoryCard({
    nameClass: "-front", 
    src: "img/icon-java.png", 
    alt: "Ícone de um livro da linguagem Java"
});

const $memoryCardWoman = createMemoryCard({
    nameClass: "-front", 
    src: "img/icon-woman.png", 
    alt: "Ícone de uma mulher codando"
});

/*const $memoryCardJS = createMemoryCard("-front", "img/icon-js.png", "Ícone de um livro da linguagem JavaScript");

const $memoryCardJava = createMemoryCard("-front", "img/icon-java.png", "Ícone de um livro da linguagem Java");

const $memoryCardWoman = createMemoryCard("-front", "img/icon-woman.png", "Ícone de uma mulher codando");*/

/*$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);*/

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);

$root.insertAdjacentElement("beforeend", $cardsWrapper);

