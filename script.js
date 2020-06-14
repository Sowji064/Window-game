window.onload = () => {
  let totalWindows = 9;

  for (let i = 0; i < totalWindows; i++) {
    var newDiv = document.createElement("div");
    newDiv.id = i;
    newDiv.className = "window";
    newDiv.addEventListener(
      "click",
      function () {
        disappear(i);
      },
      false
    );
    document.getElementById("windowArea").append(newDiv);
  }
  //running function every sec
  setInterval(activateWindow, 1000);
};
//onclick disappear
function disappear(index) {
  //remove element
  if (index === arr) {
    document.getElementById(index).remove();
  }
  //creating all elements by deducting the removed elemnet
  let totalWindows = document.getElementsByClassName("window").length;
  document.getElementById("windowArea").innerHTML = "";
  for (let i = 0; i < totalWindows; i++) {
    var newDiv = document.createElement("div");
    newDiv.id = i;
    newDiv.className = "window";
    newDiv.addEventListener(
      "click",
      function () {
        disappear(i);
      },
      false
    );
    document.getElementById("windowArea").append(newDiv);
  }
}

//gloable array
var arr = 0;
//fnuction to change background colour
function activateWindow() {
  let totalWindows = document.getElementsByClassName("window");
  if (totalWindows.length > 0) {
    for (var i = 0; i < totalWindows.length; i++) {
      totalWindows[i].style.backgroundColor = "grey";
    }
    let randomNumber = Math.floor(Math.random() * totalWindows.length);
    let randomWindow = totalWindows[randomNumber];
    randomWindow.style.backgroundColor = "yellow";
    arr = randomNumber;
    //console.log(arr);
  } else {
    alert("you Win");
    location.reload();
  }
}
