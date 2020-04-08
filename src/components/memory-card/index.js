const createMemoryCard = (src, nameClass) => `
    <article class="memory-card ${nameClass}">
        <img
            src="${src}"
            alt="${nameClass == "-front" ? "Ícone de um livro de C++" : "Gueio mascote da collabcode"}"
            class="icon"
            onClick="handleClick()"
        />
    </article>
`;

// const createMemoryCardFront = () => `
//     <article class="memory-card -front">
//         <img
//             src='img/icon-c.png'
//             alt='Gueio mascote da CollabCode'
//             class='icon'
//             onClick='handleClick()'
//         />
//     </article>
// `;

const handleClick = () => console.log("ae");
