document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const result = document.getElementById("formResult");

  if (!name || !email || !message) {
    result.textContent = "⚠️ Please fill in all fields.";
    result.style.color = "orange";
    return;
  }

  result.textContent = "✅ Message sent successfully!";
  result.style.color = "lightgreen";

  // Reset form
  this.reset();
});