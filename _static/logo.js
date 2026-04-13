document.addEventListener("DOMContentLoaded", () => {
  const brand = document.querySelector(".navbar-brand");
  if (!brand || brand.querySelector(".site-logo")) {
    return;
  }

  const logo = document.createElement("img");
  logo.className = "site-logo";
  logo.src = new URL("assets/HEXscrapePy_logo.png", document.baseURI).toString();
  logo.alt = "HEXscrapePy";

  brand.prepend(logo);
});
