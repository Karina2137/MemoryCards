var cards = ['eren.png', 'mikasa.png', 'armin.png', 'levi.png', 'hange.png', 'erwin.png','eren.png', 'mikasa.png', 'armin.png', 'levi.png', 'hange.png', 'erwin.png','eren.png', 'mikasa.png', 'armin.png', 'levi.png', 'hange.png', 'erwin.png'];
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffle(cards);
var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');

var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');
var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

var c12 = document.getElementById('c12');
var c13 = document.getElementById('c13');
var c14 = document.getElementById('c14');
var c15 = document.getElementById('c15');
var c16 = document.getElementById('c16');
var c17 = document.getElementById('c17');

c0.addEventListener("click", function() { revealCard(0); });
c1.addEventListener("click", function() { revealCard(1); });
c2.addEventListener("click", function() { revealCard(2); });
c3.addEventListener("click", function() { revealCard(3); });
c4.addEventListener("click", function() { revealCard(4); });
c5.addEventListener("click", function() { revealCard(5); });

c6.addEventListener("click", function() { revealCard(6); });
c7.addEventListener("click", function() { revealCard(7); });
c8.addEventListener("click", function() { revealCard(8); });
c9.addEventListener("click", function() { revealCard(9); });
c10.addEventListener("click", function() { revealCard(10); });
c11.addEventListener("click", function() { revealCard(11); });

c12.addEventListener("click", function() { revealCard(12); });
c13.addEventListener("click", function() { revealCard(13); });
c14.addEventListener("click", function() { revealCard(14); });
c15.addEventListener("click", function() { revealCard(15); });
c16.addEventListener("click", function() { revealCard(16); });
c17.addEventListener("click", function() { revealCard(17); });

var oneVisible = false;
var twoVisible = false;
var turnCounter = 0;
var visible_nr1;
var visible_nr2;
var lock = false;
var pairsLeft = 6;

function revealCard(nr){
    //alert(nr);
    var opacityValue = $('#c'+nr).css('opacity');
    if (opacityValue != 0 && lock==false){
        lock = true;
        var picture = "url(img/" + cards[nr] + ")";
        $('#c'+nr).css('background-image', picture);
        $('#c'+nr).addClass('cardA');
        $('#c'+nr).removeClass('card');
    
        if (oneVisible==false){
            visible_nr1 = nr;
            oneVisible=true;
            lock = false;
        }else if (twoVisible==false){
            visible_nr2 = nr;
            twoVisible=true;
            lock = false;
        }else{
            var picture = "url(img/" + cards[nr] + ")";
            $('#c'+nr).css('background-image', picture);
            $('#c'+nr).addClass('cardA');
            $('#c'+nr).removeClass('card');
            if(cards[visible_nr1] == cards[visible_nr2] && cards[visible_nr2] == cards[nr] && visible_nr1 != visible_nr2 && visible_nr2 != nr && visible_nr1 != nr) {
                setTimeout(function() {hide3Cards(visible_nr1, visible_nr2, nr)}, 750);
                turnCounter++;
                $('.value').html(turnCounter);
                oneVisible=false;
                twoVisible=false;
            }else{
                setTimeout(function() {restore3Cards(visible_nr1, visible_nr2, nr)}, 1000);
                turnCounter++;
                $('.value').html(turnCounter);
                oneVisible=false;
                twoVisible=false;
            }
        }
    }
}
function hide3Cards(nr1, nr2, nr3){
    $('#c'+nr1).css('opacity','0');
    $('#c'+nr2).css('opacity','0');
    $('#c'+nr3).css('opacity','0');
    pairsLeft--;
    if (pairsLeft==0){
        $('.board').html('<h1>Congratulation!<br>You win!')
    }
    lock = false;
}
function restore3Cards(nr1,nr2, nr3){
    $('#c'+nr1).css('background-image', 'url(img/logo.jpg');
    $('#c'+nr1).addClass('card');
    $('#c'+nr1).removeClass('cardA');

    $('#c'+nr2).css('background-image', 'url(img/logo.jpg');
    $('#c'+nr2).addClass('card');
    $('#c'+nr2).removeClass('cardA');

    $('#c'+nr3).css('background-image', 'url(img/logo.jpg');
    $('#c'+nr3).addClass('card');
    $('#c'+nr3).removeClass('cardA');
    lock = false;
}