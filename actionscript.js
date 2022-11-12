$(document).ready(function() {
    $("#keepGoing").hide();
    $("#foo").hide();

    $("#itemClick").click(function() {
        //hide the class container if it is show and show it if it is hidden
        if ($(".container").is(":visible")) {
            $(".container").hide();
            $("#keepGoing").show();
        }
        else{
            $(".container").show();
            $("#keepGoing").hide();
        }

        //hide the #foo if the #keepGoing is shown
        if ($("#keepGoing").is(":visible")) {
            $("#foo").hide();
        }
      
    });

    $("#keepGoing").click(function() {
        //hide the class container if it is show and show it if it is hidden
        $("#foo").toggle();
        $(this).hide()
      
    });

});

const f = document.getElementById('foo');
document.addEventListener('click', (ev) => {
  f.style.transform = `translateY(${ev.clientY - 25}px)`;
  f.style.transform += `translateX(${ev.clientX - 25}px)`;
}, false);