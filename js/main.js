const button = document.querySelector("button");
const header = document.querySelector("header");
const videos = document.querySelector("#videos");

const sleep = (ms = 500) => new Promise((res) => setTimeout(res, ms));

button.onclick = async () => {
  if (videos.className.includes("hidden")) {
    videos.className = "hidden hide";

    await sleep();
    button.className = "hide";
    // videos.className = "hide";
    header.className = "hide";

    await sleep();
    videos.className = "";
    button.className = "";
    button.innerText = "Home";
    header.className = "hidden hide";
  } else {
    header.className = "hidden hide";

    await sleep();
    button.className = "hide";
    // header.className = "hide";
    videos.className = "hide";

    await sleep();
    button.innerText = "Videos";
    header.className = "";
    videos.className = "hidden hide";
    button.className = "";
  }
};
