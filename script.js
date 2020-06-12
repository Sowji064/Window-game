$(document).ready(function () {
  let totalWindows = 9;
  let fragment = [];
  for (let i = 0; i < totalWindows; i++) {
    fragment.push('<div class="window" id="' + i + '"></div>');
  }
  fragment.join(",");
  $("#windowArea").html(fragment);

  //onclick disappear
  $(".window").click(function () {
    let array = $(".window");

    let index = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === $(this)[0]) {
        index = j;
        break;
      }
    }
    if (index === arr) {
      $(this).remove();
    }
  });

  //running function every sec
  setInterval(activateWindow, 1000);
});

var arr = 0;
//fnuction to change background colour
function activateWindow() {
  if ($(".window").length > 0) {
    $(".window").css("background-color", "grey");
    let randomNumber = Math.floor(Math.random() * $(".window").length);
    let randomWindow = $(".window")[randomNumber];
    $(randomWindow).css("background-color", "yellow");
    arr = randomNumber;
    //console.log(arr);
  } else {
    alert("you Win");
    location.reload();
  }
}