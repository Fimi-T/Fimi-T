/*<script type='text/javascript'>*/
    document.getElementById('myVideo').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        
        var vidPart = document.getElementById("hero");
        vidPart.remove();

        var contPart = document.getElementById("content");
        contPart.removeAttribute("hidden");
    }

    function playAudio() {
    var audio = document.getElementById("music");
    var video = document.getElementById("myVideo");
    var btn = document.getElementById("startPart");
    video.play();
    audio.play();
    btn.remove();
  }

  function firstGift(){
    var openGiftBtn = document.getElementById("content");
    openGiftBtn.setAttribute("hidden", true);
    var partyStart = document.getElementById("party");
    partyStart.removeAttribute("hidden");
    var audio = document.getElementById("partyMusic");
    audio.play();
  }

  function exitParty(){
    var party = document.getElementById("party");
    party.setAttribute("hidden", true);
    var cont = document.getElementById("content");
    cont.removeAttribute("hidden");
    var audio = document.getElementById("partyMusic");
    audio.pause();
  }

  function secondGift() {
    let openGiftBtn = document.getElementById("content");
    let imageContainer = document.createElement("div");
    imageContainer.className = "image-container2";

    let image = document.createElement("img");
    image.src = "img/secondgift.png";
    let closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.className = "close-btn";
    closeButton.onclick =
        function () {
            document.body.removeChild(imageContainer);
            openGiftBtn.removeAttribute("hidden");
        };

    imageContainer.appendChild(closeButton);
    imageContainer.appendChild(image);
    document.body.appendChild(imageContainer);

    
    openGiftBtn.setAttribute("hidden", true);
  }

  function thirdGift(){
    let openGiftBtn = document.getElementById("content");
    let game = document.getElementById("game-content");

    openGiftBtn.setAttribute("hidden", true);
    game.removeAttribute("hidden");
  }

    
/*</script>*/