let token = localStorage.getItem("access_token");
let userName;
let nameDisplay = document.getElementById("name");
let stage = 0;
let genres = [];
let iconHolder = document.getElementById("iconHolder");
let resDisplay;
let selectedGenres = [];
let selectedSongs = [];
let genreInput = document.getElementById("genreInput");
let navBack = document.getElementById("prev");
let navForward = document.getElementById("next");
let limit = 20;
let profileId = "";

redirect = () => {
  window.location.href = "/token";
};

getUserInfo = async () => {
  const endpoint = "https://api.spotify.com/v1/me";
  let headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  let req = await fetch(
    new Request(endpoint, { method: "GET", headers: headers })
  );
  if (!req.ok) {
    redirect();
  }
  let res = await req.json();

  userName = res.display_name;
  profileId = res.id;
  nameDisplay.innerHTML = userName;
};

setUpGenrePicker = () => {
  let parent = document.querySelector(".step");

  let holder = document.createElement("div");
  let textEl = document.createElement("p");
  textEl.id = "genreTextExplain";
  textEl.classList += "explainer";
  textEl.innerText = "To get started, select up to two genres.";
  holder.style.display = "flex";
  holder.style.flexWrap = "wrap";
  holder.style.width = "100%";
  holder.style.justifyContent = "center";
  holder.appendChild(textEl);
  parent.appendChild(holder);

  let searchEl = document.createElement("div");
  let inputEl = document.createElement("input");
  let inputHolder = document.createElement("div");
  let iconHolderEl = document.createElement("div");
  let resultsHolderEl = document.createElement("div");
  let genreResultsULEl = document.createElement("ul");
  searchEl.id = "search";
  inputEl.id = "genreInput";
  inputEl.placeholder = "Search for a genre...";
  inputHolder.appendChild(inputEl);
  iconHolderEl.id = "iconHolder";
  searchEl.appendChild(inputHolder);
  searchEl.appendChild(iconHolderEl);
  resultsHolderEl.id = "resultsHolder";
  genreResultsULEl.id = "genreResults";
  genreResultsULEl.classList += "results";
  resultsHolderEl.appendChild(genreResultsULEl);

  parent.appendChild(searchEl);
  parent.appendChild(resultsHolderEl);
  iconHolder = document.getElementById("iconHolder");
  resDisplay = document.getElementById("genreResults");
  inputEl.addEventListener("input", (e) => {
    handleSearch(e, genres);
  });

  getGenres();

  if (selectedGenres.length > 0) {
    updateIcons(selectedGenres);
  }
};

let prev, next;
getSongs = async (search) => {
  Array.from(resDisplay.children).forEach((el) => {
    el.remove();
  });
  let loadingEl = document.createElement("li");
  loadingEl.id = "loadingText";
  loadingEl.innerHTML = "Loading...";
  resDisplay.appendChild(loadingEl);

  console.log("LOADING???");
  let targetUrlStart = "https://api.spotify.com/v1/search?q=";
  let targetUrlEnd = "&type=track";
  let headers = {
    Authorization: "Bearer " + token,
  };

  let req = await fetch(
    new Request(targetUrlStart + search + targetUrlEnd, {
      method: "GET",
      headers: headers,
    })
  );
  if (!req.ok) {
    redirect();
  }
  let res = req.json();
  res.then((body) => {
    //take items prev and next
    next = body.tracks.next;
    prev = body.tracks.previous;
    console.log(body.tracks.items);
    displayResults(body.tracks.items, handleSongSelect, createSongTile);
  });
};

getRecTracks = async () => {
  //uses track IDS and genre nameslet loadingEl = document.createElement("li");\
  Array.from(resDisplay.children).forEach((el) => {
    el.remove();
  });
  let loadingEl = document.createElement("li");
  loadingEl.id = "loadingText";
  loadingEl.innerHTML = "Loading...";
  resDisplay.appendChild(loadingEl);
  let trackIds = "";
  let genres = "";
  selectedSongs.forEach((track) => {
    trackIds += track.id + "%2C";
  });
  selectedGenres.forEach((genre) => {
    genres += genre.name + "%2C";
  });
  genres = genres.substring(0, genres.length - 3);
  trackIds = trackIds.substring(0, trackIds.length - 3);

  console.log(genres + " " + trackIds);
  let endpoint = "https://api.spotify.com/v1/recommendations?";
  let headers = {
    Authorization: "Bearer " + token,
  };
  let Url =
    endpoint +
    "seed_genres=" +
    genres +
    "&seed_tracks=" +
    trackIds +
    "&limit=" +
    limit;

  let req = await fetch(
    new Request(Url, {
      method: "GET",
      headers: headers,
    })
  );
  if (!req.ok) {
    redirect();
  }
  let res = req.json();
  res.then((body) => {
    console.log(body);
    displayResults(body.tracks, () => {}, createSongTile);
    let optionsEl = document.getElementById("optionHolder");
    if (optionsEl.childElementCount < 3) {
      let addToLibraryBtn = document.createElement("button");
      addToLibraryBtn.id = "addToLibrary";
      addToLibraryBtn.classList += "clickable";
      addToLibraryBtn.innerText = "Add to Library";
      addToLibraryBtn.addEventListener("click", () => {
        if (!addToLibraryBtn.classList.contains("greyedOut")) {
          addToLibraryBtn.classList += "greyedOut";

          addToLibrary(body.tracks);
        }
      });
      optionsEl.appendChild(addToLibraryBtn);
    }
  });

  let btn = document.getElementById("getSongsButton");
  btn.classList = "clickable";
};

addToLibrary = async (tracks) => {
  let playlist = {
    name: `good playlist 4 ${userName}`,
    description: "Made with good playlists 4 good people",
    public: "false",
  };

  let endpoint = `https://api.spotify.com/v1/users/${profileId}/playlists `;
  let headers = {
    Authorization: "Bearer " + token,
  };

  Array.from(resDisplay.children).forEach((el) => {
    el.remove();
  });
  let loadingEl = document.createElement("li");
  loadingEl.id = "loadingText";
  loadingEl.innerHTML = "Adding to library...";
  resDisplay.appendChild(loadingEl);

  let req = await fetch(
    new Request(endpoint, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(playlist),
    })
  );
  if (!req.ok) {
    redirect();
  }
  let res = req.json();
  res.then(async (body) => {
    let playlist_uri = body.external_urls.spotify;
    let playlistId = body.id;
    let uris = [];
    tracks.forEach((track) => {
      uris.push(track.uri);
    });
    console.log(uris);
    let args = { uris: uris, position: 0 };
    let endpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
    let addReq = await fetch(
      new Request(endpoint, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(args),
      })
    );
    if (!addReq.ok) {
      redirect();
    }
    let addRes = addReq.json();
    addRes.then((data) => {
      console.log(data);
      let addToLibraryBtn = document.getElementById("addToLibrary");
      addToLibraryBtn.classList = "clickable";

      Array.from(resDisplay.children).forEach((el) => {
        el.remove();
      });
      loadingEl = document.createElement("li");
      loadingEl.id = "loadingText";
      loadingEl.innerHTML = `Added to library. <a id="playlistURL" href="${playlist_uri}" target="_blank">Enjoy :D</a>`;
      resDisplay.appendChild(loadingEl);
    });
  });
};

setUpSongPicker = (stepEl) => {
  let searchDiv = document.createElement("div");
  searchDiv.id = "search";
  let searchBarHolder = document.createElement("div");
  let searchBar = document.createElement("input");
  searchBar.id = "searchInput";
  searchBar.placeholder = "Search Spotify...";

  let iconHolderEl = document.createElement("div");
  iconHolderEl.id = "iconHolder";
  let resHolder = document.createElement("div");
  resHolder.id = "resultsHolder";
  let ulSongRes = document.createElement("ul");
  ulSongRes.id = "songResults";
  ulSongRes.classList += "results";

  searchBarHolder.appendChild(searchBar);

  resHolder.appendChild(ulSongRes);
  searchDiv.appendChild(searchBarHolder);
  searchDiv.appendChild(iconHolderEl);
  searchDiv.appendChild(resHolder);

  let holder = document.createElement("div");
  let textEl = document.createElement("p");
  textEl.id = "songTextExplain";
  textEl.classList += "explainer";
  textEl.innerText = "Now select up to three songs.";
  holder.style.display = "flex";
  holder.style.flexWrap = "wrap";
  holder.style.width = "100%";
  holder.style.justifyContent = "center";
  holder.appendChild(textEl);
  stepEl.appendChild(holder);

  stepEl.appendChild(searchDiv);
  iconHolder = iconHolderEl;

  resDisplay = document.getElementById("songResults");
  searchBar.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
      //could and should add btn for search enter as well (method it)
      getSongs(searchBar.value);
    }
  });

  if (selectedSongs.length > 0) {
    updateIcons(selectedSongs);
  }
};

handleGenreSelect = (item) => {
  let canselect = true;
  selectedGenres.forEach((g) => {
    console.log(g.id + "\t" + item.id);
    if (g.id === item.id) {
      canselect = false;
    }
  });
  if (canselect) {
    if (selectedGenres.length >= 2) {
      //move selected genre stuff to separate function passed into this one on call
      let tempHold = selectedGenres[1];
      selectedGenres = [tempHold, item];
      //console.log(selectedGenres);
    } else {
      selectedGenres.push(item);
      //console.log(selectedGenres);
    }

    updateIcons(selectedGenres);
  }
};

createGenreTile = (res) => {
  let el = document.createElement("li");
  el.classList += "resultTile ";
  el.classList += "genreTile";
  el.classList += "clickable";
  el.innerHTML = res.name;

  return el;
};

handleSongSelect = (item) => {
  let canSelect = true;
  selectedSongs.forEach((song) => {
    if (song.id == item.id) {
      canSelect = false;
    }
  });

  console.log(item);
  if (canSelect) {
    if (selectedSongs.length > 3) {
      let tempHold = selectedSongs[1];
      let temphold2 = selectedSongs[selectedSongs.length - 1];
      selectedSongs = [tempHold, temphold2, item];
    } else {
      selectedSongs.push(item);
    }
    updateIcons(selectedSongs);
  }
};

displayResults = (results, handleClick, createEl) => {
  if (!resDisplay) {
    console.log("NO RES");
    return;
  }
  Array.from(resDisplay.children).forEach((el) => {
    el.remove();
  });

  results.forEach((res) => {
    let tempEl = createEl(res);
    tempEl.addEventListener("click", () => {
      handleClick(res);
    });
    resDisplay.appendChild(tempEl);
  });
};

getGenres = async () => {
  fetch("/goodplaylists4goodpeople/data/genres.json")
    .then((response) => response.json())
    .then((json) => {
      genres = json.genres;
      //console.log(genres);
      displayResults(genres, handleGenreSelect, createGenreTile);
    });
};

updateIcons = (arr) => {
  removeIcons(Array.from(iconHolder.children));
  arr.forEach((el) => {
    addIcon(el, arr);
  });
};

removeIcons = (arr) => {
  arr.forEach((el) => {
    el.remove();
  });
};

addIcon = (item, parentArr) => {
  let tempEl = document.createElement("span");
  tempEl.classList += "icon";
  tempEl.innerHTML = item.name;
  tempEl.onclick = () => {
    parentArr.splice(tempEl, 1);
    tempEl.remove();
    //console.log(parentArr);
  };
  iconHolder.appendChild(tempEl);
};

handleSearch = (e, allValues) => {
  let text = e.currentTarget.value;
  let tempList = [];
  allValues.forEach((value) => {
    //console.log(value);
    if (
      value.name.toLowerCase().indexOf(text) == 0 ||
      (value.name.toLowerCase().indexOf(text) >= 0 &&
        value.name[value.name.toLowerCase().indexOf(text) - 1] == " ")
    ) {
      tempList.push(value);
    }
  });

  displayResults(tempList, handleGenreSelect, createGenreTile);
};

createSongTile = (item) => {
  let el = document.createElement("li");
  el.classList += "resultTile ";
  el.classList += "songTile";
  el.classList += "clickable";
  //console.log(item);
  el.innerHTML = item.name + " - " + item.artists[0].name;

  return el;
};

handleNav = (dir) => {
  if (dir == -1 && stage == 0) {
    return;
  } else if (dir == 1 && stage == 10) {
    return;
  } else {
    stage += dir;
  }
  //console.log("stage " + stage);
  Array.from(document.getElementsByClassName("step")).forEach((el) => {
    el.remove();
  });

  let displayel = document.getElementById("display");
  let tempEl = document.createElement("div");
  tempEl.classList += "step";
  displayel.insertBefore(tempEl, displayel.children[0]);
  //console.log(tempEl);
  initStage(tempEl);
};

setUpSelectNext = (stepEl) => {
  console.log(selectedGenres);
  console.log(selectedSongs);
  let tempDiv = document.createElement("div");
  tempDiv.id = "optionHolder";
  let b1 = document.createElement("button");
  b1.id = "getSongsButton";
  b1.innerText = "Get songs";
  b1.classList = "clickable";
  b1.addEventListener("click", () => {
    getRecTracks();
    b1.innerHTML = "&#8635;";
    b1.classList += "greyedOut";
  });
  let b2 = document.createElement("button");
  b2.id = "moreDetail";
  b2.innerText = "More options";

  let selectCount = document.createElement("select");
  selectCount.name = "numSongs";
  selectCount.id = "numSongs";
  let options = [15, 20, 25, 30, 35, 40, 45, 50];
  options.forEach((option) => {
    let tempEl = document.createElement("option");
    tempEl.name = option;
    tempEl.value = option;
    tempEl.innerHTML = option;
    selectCount.appendChild(tempEl);
  });

  selectCount.addEventListener("change", (e) => {
    limit = e.target.value;
  });

  tempDiv.appendChild(selectCount);
  tempDiv.appendChild(b1);
  //tempDiv.appendChild(b2);

  let resHolder = document.createElement("div");
  resHolder.id = "resultsHolder";
  let ulSongRes = document.createElement("ul");
  ulSongRes.innerHTML = "<li></li>";
  ulSongRes.id = "songResults";
  ulSongRes.classList += "results";
  resHolder.appendChild(ulSongRes);

  let holder = document.createElement("div");
  let textEl = document.createElement("p");
  textEl.id = "finalExplainer";
  textEl.classList += "explainer";
  textEl.innerText = "Choose how many songs you want and create your playlist!";
  holder.style.display = "flex";
  holder.style.flexWrap = "wrap";
  holder.style.width = "100%";
  holder.style.justifyContent = "center";
  holder.appendChild(textEl);
  stepEl.appendChild(holder);
  stepEl.appendChild(tempDiv);

  stepEl.append(resHolder);

  resDisplay = document.getElementById("songResults");
};

initStage = (stepEl) => {
  //console.log(stepEl);
  switch (stage) {
    case 0:
      navBack.classList += "greyedOut";
      navForward.classList = "clickable";
      setUpGenrePicker();
      stepEl.id = "genrePicker";

      break;
    case 1:
      navBack.classList = "clickable";
      navForward.classList = "clickable";
      stepEl.id = "songPicker";
      setUpSongPicker(stepEl);
      break;
    case 2:
      stepEl.id = "selectNext";
      setUpSelectNext(stepEl);
      navForward.classList += "greyedOut";
      navBack.classList = "clickable";
      //getRecTracks();
      break;
  }
};

hasMetMinimums = () => {
  switch (stage) {
    case 0:
      if (selectedGenres.length > 0) {
        return true;
      } else {
        alert("Please select at least one genre");
        return false;
      }
      break;
    case 1:
      if (selectedSongs.length > 1) {
        return true;
      } else {
        alert("Please select at least two songs");
        return false;
      }
      break;
  }
};

window.addEventListener("load", () => {
  getUserInfo();
  navForward.addEventListener("click", () => {
    if (hasMetMinimums()) {
      handleNav(1);
    }
  });
  navBack.addEventListener("click", () => {
    handleNav(-1);
  });

  initStage(document.querySelector(".step"));
});
