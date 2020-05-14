(function () {
    const $root = document.querySelector("#root");
    
    const $loginButton = flatButton.render("Login", true);
    const $signupButton = flatButton.render("Signup", false);

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
})();