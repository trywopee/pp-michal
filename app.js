function runApp() {
  if (userIsLogedIn()) {
    document.getElementById("sign_in").style.display = "none";
    document.getElementById("logout").style.display = "block";
  }
}

let exdays = 30; // cookie expiration in days

function login(user, password) {
  setCookie("user", user, exdays);
  setCookie("password", password, exdays);
}

function logout() {
  document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.location.reload();
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function userIsLogedIn() {
  const user = getCookie("user");

  return user != "";

  // if (user != "") {
  //   return true;
  // } else {
  // user = prompt("Please enter your name:", "");
  // if (user != "" && user != null) {
  //   setCookie("username", user, 30);
  // }
  // }
  // return false;
}
