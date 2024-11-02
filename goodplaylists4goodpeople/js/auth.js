let display = document.getElementById("display");
let clientID = "c7a0a0fdb02f4c229de61d2d6431effa";
let redirect = "https://tori-morales.github.io/goodplaylists4goodpeople";
let possibleChars = [];

const generateRandomString = (length) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const codeVerifier = generateRandomString(64);

const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest("SHA-256", data);
};

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

let codeChallenge;

let func = async () => {
  let hashed = await sha256(codeVerifier);
  console.log(hashed);
  codeChallenge = base64encode(hashed);
  // hashed.then((e) => {
  //   codeChallenge = base64encode(hashed);
  // });
};

let redirectStr =
  "https://tori-morales.github.io/goodplaylists4goodpeople/token";
let getUrl = "https://accounts.spotify.com/login/";
const authURL = new URL("https://accounts.spotify.com/authorize");

window.localStorage.setItem("code_verifier", codeVerifier);

console.log("IN SCRIPT");
requestAuth = async () => {
  console.log("IN FUNC");
  let stateStr = generateRandomString(16);
  var scopeStr = "playlist-modify-public user-read-private";

  let headers = {
    response_type: "token",
    client_id: clientID,
    scope: scopeStr,
    redirect_uri: redirectStr,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    // state: stateStr,
    // Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
  };
  try {
    // const response = await fetch(
    //   new Request(getUrl, { method: "GET", headers: headers })
    // );

    authURL.search = new URLSearchParams(headers).toString();
    window.location.href = authURL.toString();
  } catch (e) {
    console.log(e);
  }
};

getToken = async () => {
  let hashed = await sha256(codeVerifier);
  codeChallenge = base64encode(hashed);

  //let res = codeChallenge;
  requestAuth();
};
let t = document.getElementById("me");
console.log(t);
getToken();

// document.addEventListener("load", async () => {
//   let hashed = await sha256(codeVerifier);
//   codeChallenge = base64encode(hashed);

//   //let res = codeChallenge;
//   requestAuth();
// });
// t.addEventListener("click", async () => {
//   let hashed = await sha256(codeVerifier);
//   codeChallenge = base64encode(hashed);

//   //let res = codeChallenge;
//   requestAuth();
// });
