function submitVote() {

    var optSelected = "";
    if (document.getElementById('pollOpt1').checked) {
        optSelected = document.getElementById('pollOpt1').value;
    } else if (document.getElementById('pollOpt2').checked) {
        optSelected = document.getElementById('pollOpt2').value;
    } else if (document.getElementById('pollOpt3').checked) {
        optSelected = document.getElementById('pollOpt3').value;
    }
    if (optSelected != "") {
        setCookie("pollBall", optSelected, 365);
        setPollGUI();
        document.getElementById("divThank").style.display = "block";
    }
    

}

function setPollGUI() {
    var strPoll = getCookie("pollBall");
    if (strPoll != "") {
        if (strPoll == "1") {
            document.getElementById('pollOpt1').checked = true;
        } else if (strPoll == "2") {
            document.getElementById('pollOpt2').checked = true;
        } else if (strPoll == "3") {
            document.getElementById('pollOpt3').checked = true;
        }
        document.getElementById("btnPoll").style.display = "none";
        document.getElementById("divThank").style.display = "none";
        document.getElementById('pollOpt1').setAttribute("disabled", "disabled");
        document.getElementById('pollOpt2').setAttribute("disabled", "disabled");
        document.getElementById('pollOpt3').setAttribute("disabled", "disabled");
    } else {
        document.getElementById("btnPoll").style.display = "block";
        document.getElementById('pollOpt1').removeAttribute("disabled");
        document.getElementById('pollOpt2').removeAttribute("disabled");
        document.getElementById('pollOpt3').removeAttribute("disabled");
    }
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}