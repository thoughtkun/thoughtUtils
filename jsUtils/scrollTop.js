    window.onload = function () {
      var myBtn = document.getElementById("btn");
      var Time1 = null;
      var isTop = true;
      myBtn.onclick = function () {
        Time1 = setInterval(function () {
          var osTop = document.body.scrollTop || document.documentElement.scrollTop;
          var speed = Math.ceil(osTop / 2);
          document.body.scrollTop = document.documentElement.scrollTop = osTop - speed;
          if (osTop <= 0) {
            clearInterval(Time1);
          }
          isTop = true;
        }, 100)
      }
      window.onscroll = function () {
        var osTop = document.body.scrollTop || document.documentElement.scrollTop;
        if (osTop > 0) {
          myBtn.style.display = "block";
        } else {
          myBtn.style.display = "none";
        }
        if (!isTop) {
          clearInterval(Time1);
        }
        isTop = false;
      }
    }