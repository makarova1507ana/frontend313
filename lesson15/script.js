//  let p = document.querySelector('p');
//  p.addEventListener('click', () => {
//      p.style.display = 'none';
//  });

$("div.num").css('background', 'red');
$("div#num2").css('color', 'white');
$('p').mouseenter(function() {
    $(this).text("мышка внутри");
});

$('p').mouseleave(function() { $('p').text("мышка пропала") });

$("p").click(() => {
    $("p").hide(1000);
    $("p:last").hide(() => { alert('элементы скрыты') });
});


$(document).keypress(function(event) {
    alert(event.key);
});