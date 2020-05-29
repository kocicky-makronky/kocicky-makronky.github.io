// Globals
var GREEN = "#4CAF50";
var BLUE = "#F04397";
var SLEEP_TIME = 1000;

// Card order
var open_cards = [];
var open_ids = [];
var cards_flipped = 0;
var cards = [];
function init_cards() {
    for (var i = 1; i <= 8; i++) { cards.push(i); cards.push(i); }
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
}
init_cards();

// Board placement and event hooks
function newboard() {
    document.getElementById('pexeso_board').innerHTML = "";
    cards_flipped = 0;
    var board = '';

    for (var i = 0; i < cards.length; i++) {
        var d = document.createElement("div");

        d.setAttribute("class", "tile");
        
        var divcontainer = document.createElement("div");
        
        var value = cards[i];

        divcontainer.setAttribute("class", "col-3 divcontainer");
        divcontainer.style.float = "left";
        d.id = "card" + i;

        d.value = cards[i];
        
        d.addEventListener("click", function () { check(this); }, false);
        
        divcontainer.appendChild(d);
        
        document.getElementById('pexeso_board').appendChild(divcontainer);
        
        $(divcontainer).hide().slideDown("slow");
    }
}

// Game logic
function check(card) {
    var zatvorikarti;
    if ($(card).css("background-image") !== "none"
            || $(card).css("background-color") === "rgb(76, 175, 80)"
            || open_cards.length === 2) {
        return;
    }

    $(card).css({
        "background-image": "url(/media/" + card.value + ".jpeg)",
        "background-size": "100% 100%",
        "background-position": "center",
    });

    open_cards.push(card.value);
    open_ids.push(card.id);
    if (open_cards.length === 1) { return; }

    setTimeout(
        function () {
            var a = document.getElementById(open_ids[0]);
            var b = document.getElementById(open_ids[1]);
            if (open_cards[0] !== open_cards[1]) {
                        $(a).add(b).css("background-image", "none");
                        a.innerHTML = ""; b.innerHTML = "";
                        open_cards.length = 0;
                        open_ids.length = 0;
            } else {
                cards_flipped += 2;
                $(a).add(b).css("border", GREEN + " 1px solid");
                $(a).add(b).css("background-image", "none");
                a.innerHTML = ""; b.innerHTML = "";

                $(a).add(b).animate({
                    backgroundColor: GREEN,
                }, 300);

                open_cards.length = 0;
                open_ids.length = 0;

                if (cards_flipped === cards.length) {
                    $("#pexeso_board").empty();
                    var p = $("<p>");
                    p.html("VŠECHNO NEJLEPŠÍ K<br/>NAROZENINÁM!\u2764");

                    p.css({
                        "font-size": "3vw",
                        "color": BLUE,
                        "margin": "20px auto",
                        "text-align": "center",
                        "font-weight": "700"
                    });
                    
                    p.hide();
                    $("#pexeso_board").append(p);
                    p.slideDown("slow");
                }
            }
        },
        SLEEP_TIME
    );
}

newboard();
