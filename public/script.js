window.onload = function(){
  window.addEventListener('scroll', pinnNames)
  $('#top').hide()
  var contents = document.getElementById('0')
  contents.className = 'content active-content'
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


function itemClick(e) {
  console.log(e)
  var allButtons = document.querySelectorAll('.nav button')
  for (var i = 0; i < allButtons.length; i++) {
    var btn = allButtons[i]
    btn.className = 'btn btn-item'
  }
  allButtons[e].className = 'btn btn-item-active'
  console.log(allButtons)
  var allContent = document.querySelectorAll('.content')
  for (var i = 0; i < allContent.length; i++) {
    var c = allContent[i]
    c.className = 'content'
  }
  var active = document.getElementById(e)
  active.className = 'content active-content'
  return false
}
