function ft() {
    $(document).ready(function() {
        $("#s1").fadeOut(1000, function() {
            $("#s2").fadeIn(2000);
        });
    });
}

function st() {
    $(document).ready(function() {
        $("#s2").fadeOut(1000, function() {
            $("#s3").fadeIn(1000)
        });
    });
}

function num() {
    var mynum = Math.floor(Math.random() * 25);
    var finalnum = mynum * 2;
    document.getElementById("num").innerHTML = finalnum;
}

function tt() {
    $(document).ready(function() {
        $("#s3").fadeOut(1000, function() {
            $("#s4").fadeIn(2000);
        });
    });
}

function fot() {
    $(document).ready(function() {
        $("#s4").fadeOut(1000, function() {
            $("#s5").fadeIn(2000);
        });
    });
}

function ans() {
    var ab = document.getElementById("num").innerHTML;
    var answer = ab / 2;
    document.getElementById("ans").innerHTML = answer;
}

function fit() {
    $(document).ready(function() {
        $("#s5").fadeOut(1000, function() {
            $("#s6").fadeIn(2000);
        });
    });
}

function a() {
    alert("that's all");
}