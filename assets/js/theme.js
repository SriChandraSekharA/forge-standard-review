(function() {
  var key = "theme";
  var apply = function(t) {
    if (t === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  };
  var stored = null;
  try {
    stored = localStorage.getItem(key);
  } catch (e) {}
  if (stored === "dark" || stored === "light") {
    apply(stored);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    apply("dark");
  } else {
    apply("light");
  }
  window.toggleTheme = function() {
    var cur = document.documentElement.getAttribute("data-theme");
    var next = cur === "dark" ? "light" : "dark";
    apply(next);
    try {
      localStorage.setItem(key, next);
    } catch (e) {}
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      btn.textContent = next === "dark" ? "Light" : "Dark";
      btn.setAttribute("aria-label", next === "dark" ? "Switch to light" : "Switch to dark");
    }
  };
  document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("theme-toggle");
    if (btn) {
      var cur = document.documentElement.getAttribute("data-theme");
      btn.textContent = cur === "dark" ? "Light" : "Dark";
      btn.addEventListener("click", window.toggleTheme);
    } else {
      // fallback inject if header exists but button missing (when custom-head not rendering body)
      var header = document.querySelector(".site-header .wrapper") || document.querySelector(".site-header");
      if (header && !document.getElementById("theme-toggle")) {
        var b = document.createElement("button");
        b.id = "theme-toggle";
        b.type = "button";
        b.textContent = document.documentElement.getAttribute("data-theme") === "dark" ? "Light" : "Dark";
        b.style.marginLeft = "12px";
        b.addEventListener("click", window.toggleTheme);
        header.appendChild(b);
      }
    }
  });
})();
