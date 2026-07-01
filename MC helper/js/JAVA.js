function signup() {

    const username =
        document.getElementById("signupUsername").value;

    const email =
        document.getElementById("signupEmail").value;

    const password =
        document.getElementById("signupPassword").value;

    const role =
        document.getElementById("signupRole").value;

    if (!username || !email || !password || !role) {
        alert("Fill in all fields");
        return;
    }

    alert(
        "Account Created!\n\n" +
        "Username: " + username +
        "\nRole: " + role
    );

}
function login() {

    const username =
        document.getElementById("loginUsername").value;
    const password =
        document.getElementById("loginPassword").value;

    if (username === "admin" && password === "3262") {
        localStorage.setItem("loggedIn", "true");
        window.location.href ="../index.html";
    } else {
        alert("Wrong username or password");

    }
}
function dashboardpers() {
}
const buttons = document.querySelectorAll(".dropdown-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const content = button.nextElementSibling;

        content.classList.toggle("active");
    });
});
