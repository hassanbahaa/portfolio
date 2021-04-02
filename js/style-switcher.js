const styleToggler = document.querySelector(".style-toggler");
      styleToggler.addEventListener("click", () => {
          document.querySelector(".style-switcher").classList.toggle("open");
      }) 


      // hide style switcher on scroll

      window.addEventListener("scroll", () => {
          if(document.querySelector(".style-switcher").classList.contains("open")){
            document.querySelector(".style-switcher").classList.remove("open");
          }
      })


      /* Theme color */
      const alternateStyles = document.querySelectorAll(".alternate-style");
      
      function setActiveStyle(color){
        alternateStyles.forEach((style) => {
            if(color === style.getAttribute("title")){
                style.removeAttribute("disabled");
            }
            else{
                style.setAttribute("disabled","true");
            }
        })  
      }

      /*      Dark Mode      */
      const dayNight = document.querySelector(".day-night");
      dayNight.addEventListener("click", () => {
        dayNight.querySelector("svg").classList.toggle("fa-sun");
        dayNight.querySelector("svg").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
      })
      window.addEventListener("load",() => {
          if(document.body.classList.contains("dark")){
            dayNight.querySelector("i").classList.add("fa-sun");
          }else{
            dayNight.querySelector("i").classList.add("fa-moon");
          }
      })
















      