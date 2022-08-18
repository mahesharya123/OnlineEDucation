


window.onload = function() {
    var temp = document.getElementsByTagName('a');
    for (var i = 0; i < temp.length; i++) {

        var tempp = temp[i];
        if (tempp.classList.contains("dropdown-item")) { tempp.onclick = handler; }
    }
}











function handler(e) {
    e.preventDefault();

    videotarget = this.getAttribute("href");
    filename = videotarget.substr(0, videotarget.lastIndexOf(".")) || videotarget;

    video = document.querySelector("#main_container video");

    source = document.querySelectorAll("#main_container video source");

    source[0].src = filename + ".mp4";

    video.load();
    video.play();
}
