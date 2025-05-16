// Button click
document.getElementById("clickMe").addEventListener("click", () => {
  alert("Button was clicked!");
});

// Hover effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseenter", () => hoverBox.style.background = "coral");
hoverBox.addEventListener("mouseleave", () => hoverBox.style.background = "lightblue");

// Double-click secret
document.getElementById("secret").addEventListener("dblclick", () => {
  alert("🎉 Surprise! You found the secret.");
});

// Change button text/color
const magicBtn = document.getElementById("magicBtn");
magicBtn.addEventListener("click", () => {
  magicBtn.textContent = "Changed!";
  magicBtn.style.backgroundColor = "#8e44ad";
});

// Image gallery
const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];
let currentImage = 0;

document.getElementById("nextImg").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("galleryImg").src = images[currentImage];
});

// Tabs
function showTab(tabId) {
  document.querySelectorAll('.content').forEach(el => el.style.display = "none");
  document.getElementById(tabId).style.display = "block";
}

// Keypress detection
document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

// Form validation
document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    feedback.textContent = "❌ Invalid email!";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "❌ Password must be at least 8 characters.";
    return;
  }

  feedback.textContent = "✅ Form submitted successfully!";
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", function() {
  const feedback = document.getElementById("formFeedback");
  feedback.textContent = this.value.length < 8 ? "⚠️ Password too short" : "✅ Looks good!";
});
