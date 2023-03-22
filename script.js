const body = document.querySelectorAll("body"),
      sidebar = body.querySelectorAll(".sidebar"),
      toggle = body.querySelectorAll(".toggle"),
      searchBtn = body.querySelectorAll(".search-box"),
      modeSwtich = body.querySelectorAll(".toggle-switch"),
      modeText = body.querySelectorAll(".mode-text");

      modeSwtich.addEventListener("click", () => {
        body.classList.toggle("dark");
      });