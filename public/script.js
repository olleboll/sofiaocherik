window.onload = function(){
  window.addEventListener('scroll', pinnNames)
  $('#top').hide()
}

function pinnNames(){
  var toptext = document.getElementById('toptext')
  var top = document.getElementById('top')
  var top_height = top.offsetHeight
  if (window.scrollY > 320) {
    $('#top').fadeIn({duration: 300})
  } else {
    $('#top').fadeOut({duration: 300})
  }
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}
