const linkCollabcode = (function() {
    const module = {};

    module._style = () => {
        const $head = document.querySelector("head");
        const $style = document.createElement("style");

        $style.textContent = `
            .link-collabcode {
                display: block;
                color: #3a4042;
                font-size: 14px;
                text-decoration: none;
                opacity: 0.7;
                margin-top: 40px;
                margin-bottom: 60px;
                text-align: right;
            }
            
        `;

        $head.insertAdjacentElement("beforeend", $style);

    };

    module.render = ({href, content}) => {
        module._style();

        return `
            <a class="link-collabcode" href="${href}">${content}</a>
        `;

    };

    return {
        render: module.render
    };

})();