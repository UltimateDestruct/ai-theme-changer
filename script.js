function changeTheme() {
    var themeSelect = document.getElementById("themeSelect");
    var selectedTheme = themeSelect.value;
  
    var formContainer = document.getElementById("formContainer");
    formContainer.className = selectedTheme;
  }
  