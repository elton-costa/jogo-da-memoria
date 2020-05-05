(function () {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("Login");
    const $signupButton = flatButton.render("Signup", "-active");

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
})();