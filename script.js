document.addEventListener("DOMContentLoaded", function () {
  // Close dropdowns if clicking outside
  window.onclick = function (event) {
    if (!event.target.matches(".menu-bar__item")) {
      const dropdowns = document.querySelectorAll(".menu-item__dropdown");
      dropdowns.forEach((dropdown) => {
        dropdown.style.display = "none";
      });
    }
  };

  // Open dropdown on hover
  const menuItems = document.querySelectorAll(".menu-bar__item");
  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const dropdown = this.querySelector(".menu-item__dropdown");
      dropdown.style.display = "block";
    });
    item.addEventListener("mouseleave", function () {
      const dropdown = this.querySelector(".menu-item__dropdown");
      dropdown.style.display = "none";
    });
  });

  // Show the file manager
  const folderLinks = document.querySelectorAll(".folder");
  folderLinks.forEach((folder) => {
    folder.addEventListener("click", function (event) {
      event.preventDefault();
      document.getElementById("folderWindow").style.display = "flex";
    });
  });

  // Button actions
  const closeButton = document.getElementById("button-fermer");
  closeButton.addEventListener("click", function () {
    document.getElementById("folderWindow").style.display = "none";
  });

  const minimizeButton = document.getElementById("button-minimiser");
  minimizeButton.addEventListener("click", function () {
    document.getElementById("folderWindow").style.display = "none";
  });

  const maximizeButton = document.getElementById("button-maximiser");
  maximizeButton.addEventListener("click", function () {
    document.getElementById("folderWindow").style.display = "flex";
    document.getElementById("folderWindow").style.width = "100vw";
    document.getElementById("folderWindow").style.height = "100vh";
    document.getElementById("folderWindow").style.top = "";
    document.getElementById("folderWindow").style.left = "";
    document.getElementById("folderWindow").style.position = "";
  });

  // Variable pour suivre la position de la souris
  let isDragging = false;
  let offsetX, offsetY;

  // Événement pour démarrer le déplacement de la fenêtre
  document
    .querySelector(".gestionnaire-fichiers__entete")
    .addEventListener("mousedown", function (event) {
      isDragging = true;
      offsetX = event.clientX - folderWindow.getBoundingClientRect().left;
      offsetY = event.clientY - folderWindow.getBoundingClientRect().top;
    });

  // Événement pour déplacer la fenêtre
  document.addEventListener("mousemove", function (event) {
    if (isDragging) {
      folderWindow.style.left = `${event.clientX - offsetX}px`;
      folderWindow.style.top = `${event.clientY - offsetY}px`;
    }
  });

  // Événement pour arrêter le déplacement de la fenêtre
  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  const footer = document.getElementById("footer");

  // Fonction pour afficher le footer
  function showFooter() {
    footer.style.display = "block";
  }

  // Fonction pour masquer le footer
  function hideFooter() {
    footer.style.display = "none";
  }

  // Gérer le mouvement de la souris
  document.addEventListener("mousemove", function (event) {
    if (event.clientY > window.innerHeight - 100) {
      showFooter();
    } else if (!footer.matches(":hover")) {
      hideFooter();
    }
  });

  // Garder le footer affiché si la souris est dessus
  footer.addEventListener("mouseenter", showFooter);
  footer.addEventListener("mouseleave", hideFooter);

  // Déplacer la fenêtre
  const folderWindow = document.getElementById("folderWindow");
  let isDragging2 = false;
  let offsetX2, offsetY2;

  document
    .querySelector(".gestionnaire-fichiers__entete")
    .addEventListener("mousedown", function (event) {
      isDragging2 = true;
      offsetX2 = event.clientX - folderWindow.getBoundingClientRect().left;
      offsetY2 = event.clientY - folderWindow.getBoundingClientRect().top;
    });

  document.addEventListener("mousemove", function (event) {
    if (isDragging2) {
      folderWindow.style.left = `${event.clientX - offsetX2}px`;
      folderWindow.style.top = `${event.clientY - offsetY2}px`;
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging2 = false;
  });
});
