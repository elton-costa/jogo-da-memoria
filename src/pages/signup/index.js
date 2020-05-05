(function () {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("Login");
    const $signupButton = flatButton.render("Signup", true);
    const $logoCollabcode = logoCollabcode.render();

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoCollabcode);
})();