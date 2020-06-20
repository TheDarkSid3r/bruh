var THE_WORD = "bruh";

var sfx = new Howl({
    src: ["bruh.mp3"],
    autoplay: false,
    volume: 1
});
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function createBruh(){
    var x = getRndInteger(0, window.innerWidth-250);
    var y = getRndInteger(0, window.innerHeight-250);
    var rotation = getRndInteger(-30, 30);
    var rotation2 = getRndInteger(-20, 20);
    var bruh = $("<div/>").addClass("bruh").html(THE_WORD).css({left: x+"px", top: y+"px"});
    bruh[0].style.setProperty("--rotation", `${rotation}deg`);
    bruh[0].style.setProperty("--rotation-2", `${rotation2}deg`);
    $(".bruhs-wrapper").append(bruh);
    setTimeout(function(){
        bruh.remove();
    }, 4500);
}

$(function(){
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("word")) THE_WORD = urlParams.get("word").toString().toLowerCase().substring(0, 50);
    $(".center-title-text").html(`${THE_WORD} simulator`);
    $(".center-title-subtitle").html(`click anywhere to ${THE_WORD}`);
    var bruhCount = 0;
    $(window).click(function(){
        createBruh();
        sfx.play();
        if (bruhCount == 0) {
            $(".center-title").fadeOut(500);
            setTimeout(function(){
                $(".bruh-counter").fadeIn(500);
            }, 500);
        }
        bruhCount++;
        $(".bruh-counter").html(`${THE_WORD}s: ${bruhCount.toLocaleString()}`);
    });
});