function showElement(id) {
    let mainContent = document.getElementById("main");
    let element = document.getElementById(id);
    let footer  = document.getElementById("footer");
    if (mainContent.className === "main") {
        mainContent.className += " hide";
        element.className = "content-display";
        footer.className += " hide";
        target = document.getElementById("target")
        target.className += " pointer"
        document.addEventListener("click", function(event) {
            if (event.target.id == target.id) {
                closeElement(event);
            }
        });
    }

  }

  function closeElement(event) {
    let mainContent = document.getElementById("main");
    let footer  = document.getElementById("footer");
    let element = document.getElementsByClassName("content-display")[0];
    if (element) {
        element.className = "content";
        mainContent.className = "main";
        footer.className = "footer";
        document.removeEventListener("click", closeElement);
    }

  }

  function displayCurrentYear() {
    // Get the current year
    const currentYear = new Date().getFullYear();
  
    // Update the content of the element with given id
    document.getElementById("year").textContent = currentYear;
  }

  displayCurrentYear();

  function age() {
    const currentAge = new Date().getFullYear() - 2006;
    document.getElementById("age").textContent = currentAge;
  }

  age();

  var subtitle = document.getElementById("subtitle");
  var subtitles = subtitle.getElementsByTagName("h4");
  var currentSubtitle = 1; // start with the second subtitle
  rotateSubtitles();
  function rotateSubtitles() {
    // hide the current subtitle
    subtitles[currentSubtitle].style.display = "none";
    
    // increment the current subtitle index and wrap around
    currentSubtitle = (currentSubtitle + 1) % subtitles.length;
    
    // show the next subtitle
    subtitles[currentSubtitle].style.display = "inline";
  }
  
  // start the rotation
  setInterval(rotateSubtitles, 3000); // rotate every 3 seconds