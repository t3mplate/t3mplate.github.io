var loginForm = document.getElementById("login-form");
        var registerForm = document.getElementById("register-form");
        var indicator = document.getElementById("indicator");

        function register() {
            registerForm.style.transform = "translateX(0px)";
            loginForm.style.transform = "translateX(0px)";
            indicator.style.transform = "translateX(140px)";
        }

        function login() {
            registerForm.style.transform = "translateX(300px)";
            loginForm.style.transform = "translateX(300px)";
            indicator.style.transform = "translateX(0px)";
        }