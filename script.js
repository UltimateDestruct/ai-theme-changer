function changeTheme() {
    var themeSelect = document.getElementById("themeSelect");
    var selectedTheme = themeSelect.value;
  
    var body = document.body;
    body.className = selectedTheme;
  
    var container = document.querySelector(".container");
    container.className = "container " + selectedTheme;
  }
  