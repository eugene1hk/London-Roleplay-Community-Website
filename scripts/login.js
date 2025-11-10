// login.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const msg = document.getElementById("loginMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const callsign = document.getElementById("callsign").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!window.credentials) {
      msg.textContent = "System error: credentials not loaded.";
      msg.style.color = "yellow";
      return;
    }

    const { usernames, callsigns, passwords } = window.credentials;

    let loggedIn = false;

    for (let i = 0; i < usernames.length; i++) {
      if (
        username === usernames[i] &&
        callsign === callsigns[i] &&
        password === passwords[i]
      ) {
        loggedIn = true;
        localStorage.setItem("loggedUser", username);
        break;
      }
    }

    if (loggedIn) {
      window.location.href = "success.html";
    } else {
      msg.textContent = "Invalid credentials, please try again.";
      msg.style.color = "red";
    }
  });
});

