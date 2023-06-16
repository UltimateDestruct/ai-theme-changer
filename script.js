function changeTheme() {
    var themeSelect = document.getElementById("themeSelect");
    var selectedTheme = themeSelect.value;
  
    var body = document.body;
    body.className = selectedTheme;
  }
  