const urlParams = new URLSearchParams(window.location.search);
let clientID = "c7a0a0fdb02f4c229de61d2d6431effa";
let code = urlParams.get("code");
const tokenEndpoint = "https://accounts.spotify.com/api/token";
let redirectStr =
  "https://tori-morales.github.io/goodplaylists4goodpeople/success";
const getToken = async (code) => {
  // stored in the previous step
  let codeVerifier = localStorage.getItem("code_verifier");
  console.log(code);
  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: clientID,
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirectStr,
      code_verifier: codeVerifier,
    }),
  };
};

window.addEventListener("load", () => {
  let params = window.location.hash.split("&");
  let token = params[0].split("=")[1];
  window.localStorage.setItem("access_token", token);
  if (token) {
    window.location.href = redirectStr;
  } else {
    window.location.href = "/auth.html";
  }
});
