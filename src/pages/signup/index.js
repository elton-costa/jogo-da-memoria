(function () {
    const $root = document.querySelector("#root");

    const $loginButton = flatButton.render("Login");
    const $signupButton = flatButton.render("Signup", true);
    const $avatarWrapper = avatarWrapper.render();
    const $logoCollabcode = logoCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("Welcome!");

    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signupButton);
    $root.insertAdjacentHTML("beforeend", $logoCollabcode);
    $root.insertAdjacentHTML("beforeend", $titleCollabcode);
})();