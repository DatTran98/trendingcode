$(document).ready(function () {
    $("#keepGoing").hide();
    $("#foo").hide();

    $("#itemClick").click(function () {
        //hide the class container if it is show and show it if it is hidden
        if ($(".container").is(":visible")) {
            //Hide container with transition 1s

            $(".container").hide();
            $("#keepGoing").show();
        }
        else {
            $(".container").show();
            $("#keepGoing").hide();
        }

        //hide the #foo if the #keepGoing is shown
        if ($("#keepGoing").is(":visible")) {
            $("#foo").hide();
        }

    });

    $("#keepGoing").click(function () {
        //hide the class container if it is show and show it if it is hidden
        $("#foo").toggle();
        $("#itemClick").hide();
        $(".center-heart").toggle();
        $(this).hide()
        moveHeart();
        const f = document.getElementById('foo');
        document.addEventListener('click', (ev) => {
            f.style.transform = `translateY(${ev.clientY - 25}px)`;
            f.style.transform += `translateX(${ev.clientX - 50}px)`;
            //Get bouding client rect of the #center-heart
            isInside(ev.clientX, ev.clientY, "center-heart-1");
            isInside(ev.clientX, ev.clientY, "center-heart-2");
            isInside(ev.clientX, ev.clientY, "center-heart-3");
            isInside(ev.clientX, ev.clientY, "center-heart-4");


        }, false);
    });

});


//function check if the click is inside the #center-heart
function isInside(evenntX, evenntY, id) {
    var heart = document.getElementById(id);
    var rect = heart.getBoundingClientRect();
    // Get the coordinates of the #center-heart-1

    var x = rect.left;
    var y = rect.top;
    var right = rect.right;
    var bottom = rect.bottom;
    // Check if the coordinates of the click are inside the #center-heart-1
    if (evenntX > x && evenntX < right && evenntY > y && evenntY < bottom) {
        $(".center-heart").css("background-color", "transparent");
        heart.style.background = "#FF5CA4";
        // Wait 1s and show the #foo
        setTimeout(function () {
            // Check if id is #center-heart-4
            if (id == "center-heart-4") {
                window.location.assign("foryou.html");
            } else {
                // remove shadow from #center-heart-1
                var idJquery = "#" + id;

                $(idJquery).css("box-shadow", "none");
            }
        }, 2000);
    }

}

function moveHeart() {
    // get the client coordinates of the #canvas element
    // get the center of the window
    // var x = window.innerWidth / 2;
    // var y = window.innerHeight / 2;
    // calculate the quarter of the window
    // var left = x / 2;
    // var top = y / 2;
    // var right = x + left;
    // var bottom = y + top;

    var canvas = document.getElementById("pinkboard");
    var canvasRect = canvas.getBoundingClientRect();

    //get X and Y coordinates of canvasRect
    var x = canvasRect.left;
    var y = canvasRect.top;
    //get the right and bottom coordinates of canvasRect
    var right = canvasRect.right;
    var bottom = canvasRect.bottom;
    // Set the #centor-heart to the left and top of the canvas with translateX and translateY
    $("#center-heart").css("left", x);
    $("#center-heart").css("top", y);

    // Set the #center-heart-1 to the right and bottom of the canvas with translateX and translateY
    $("#center-heart-1").css("left", right);
    $("#center-heart-1").css("top", bottom);

    // Set the #center-heart-2 to the right and top of the canvas with translateX and translateY    
    $("#center-heart-2").css("left", right);
    $("#center-heart-2").css("top", y);
    // Set the #center-heart-3 to the left and bottom of the canvas with translateX and translateY
    $("#center-heart-3").css("left", x);
    $("#center-heart-3").css("top", bottom);

    // Set the #center-heart-4 to the center of the canvas with translateX and translateY
    $("#center-heart-4").css("left", x);
    $("#center-heart-4").css("top", y);

    //Transition the #center-heart to the center of the canvas
    $("#center-heart-1").css("transition", "all 1s ease-in-out");
    $("#center-heart-2").css("transition", "all 1s ease-in-out");
    $("#center-heart-3").css("transition", "all 1s ease-in-out");
    $("#center-heart-4").css("transition", "all 1s ease-in-out");


}