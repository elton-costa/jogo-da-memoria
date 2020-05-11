const formSignup = (function () {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .form-signup {
                display: block;
                color: #3a4042;
                font-size: 16px;
            }
        `;

        $head.insertAdjacentElement("beforeend", $style);
    };

    module.render = content => {
        module._style();
    
    return `<form action="" method="POST"></form>`;
    };

    return {
        render: module.render
    };

})();