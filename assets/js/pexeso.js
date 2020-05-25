/* jshint browser: true */
/*jshint devel:true */
/* jshint loopfunc:true */
/*global $ */

var cards = [];
for (var i = 1; i <= 8; i++) { cards.push(i); cards.push(i); }
var open_cards = [];
var open_ids = [];
var cards_flipped = 0;

function shuffleArray(cards) {
    for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
}

function newboard() {
    shuffled_cards = shuffleArray(cards);
    document.getElementById('pexeso_board').innerHTML = "";
    cards_flipped = 0;
    var board = '';

    for (var i = 0; i < shuffled_cards.length; i++) {
        var d = document.createElement("div");

        d.setAttribute("class", "tile");
        
        var divcontainer = document.createElement("div");
        
        var value = shuffled_cards[i];

        divcontainer.setAttribute("class", "col-3 divcontainer");
        divcontainer.style.float = "left";
        d.id = "card" + i;

        d.value = shuffled_cards[i];
        
        d.addEventListener("click", function () {
            check(this);
        }, false);
        
        divcontainer.appendChild(d);
        
        document.getElementById('pexeso_board').appendChild(divcontainer);
        
        $(divcontainer).hide().slideDown("slow");
    }
}

function check(card) {
    var zatvorikarti;
    if (card.innerHTML === "" && open_cards.length < 2) {
        card.innerHTML = card.value;
        $(card).animate({
            backgroundColor: "white",
        }, 500);

        if (open_cards.length === 0) {
            open_cards.push(card.value);
            open_ids.push(card.id);
        } else if (open_cards.length == 1) {
            open_cards.push(card.value);
            open_ids.push(card.id);
            if (open_cards[0] == open_cards[1]) {
                cards_flipped += 2;
                var a = document.getElementById(open_ids[0]);
                var b = document.getElementById(open_ids[1]);
                $(a).add(b).css("border", "#4CAF50 1px solid");

                $(a).add(b).animate({
                    backgroundColor: "#4CAF50",
                    color: "white"
                }, 300);

                open_cards.length = 0;
                open_ids.length = 0;

                if (cards_flipped === shuffled_cards.length) {
                    $("#pexeso_board").empty();
                    var p = $("<p>");
                    p.text("Šťastné narozeniny!");

                    p.css({
                        "font-size": "250%",
                        "color": "#f04397",
                        "margin": "200px auto",
                        "text-align": "center",
                        "font-weight": "700"
                    });
                    
                    p.hide();
                    $("#pexeso_board").append(p);
                    p.slideDown("slow");
                }
            } else
                zatvorikarti = function () {
                    
                var a = document.getElementById(open_ids[0]);
                var b = document.getElementById(open_ids[1]);

                a.innerHTML = "";
                $(a).animate({
                    backgroundColor: "#DC143C"
                }, 500);

                b.innerHTML = "";
                $(b).animate({
                    backgroundColor: "#DC143C"
                }, 500);
                open_cards.length = 0;
                open_ids.length = 0;
            };
            setTimeout(zatvorikarti, 700);
        }
    }
}

newboard();
