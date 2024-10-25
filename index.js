const shareButton = document.getElementById("share-button");
const socialLinks = document.getElementById("social-links");
const circle = document.querySelector("#share-icon circle");
const path = document.querySelector("#share-icon path");

shareButton.addEventListener("click", () => {
  socialLinks.classList.toggle("visible");
  shareButton.style.backgroundColor = "var(--mainTextColor)";
  circle.setAttribute("fill", "var(--mainTextColor)");
  path.setAttribute("fill", "var(--whiteColor)");
});

document.addEventListener("click", (event) => {
  if (
    !shareButton.contains(event.target) &&
    !socialLinks.contains(event.target)
  ) {
    socialLinks.classList.remove("visible");
    shareButton.style.backgroundColor = "var(--accentLightColor)";
    circle.setAttribute("fill", "var(--accentLightColor)");
    path.setAttribute("fill", "var(--mainTextColor)");
  }
});