(function () {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("Login");
    const $signupButton = flatButton.render("Signup", true);
    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("Welcome!");
    const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
    const $labelCollabcode = labelCollabcode.render("E-mail");

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoWrapper);
    $root.insertAdjacentHTML("beforeend", $labelCollabcode);
    
})();