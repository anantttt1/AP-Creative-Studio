// Business Enquiry Template
// IMPORTANT: Set this to the real inbox before launch.
// This static form opens the visitor's email application; it does not store submissions online.
const BUSINESS_EMAIL = "hello@example.com";

const menuButton = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Use the same editable contact address in the enquiry panel and footer.
const sideEmail = document.getElementById("sideEmail");
if (sideEmail) {
  sideEmail.href = "mailto:" + BUSINESS_EMAIL;
  sideEmail.textContent = BUSINESS_EMAIL + " ↗";
}
const emailLink = document.getElementById("emailLink");
if (emailLink) emailLink.href = "mailto:" + BUSINESS_EMAIL;

document.getElementById("currentYear").textContent = new Date().getFullYear();

// Each service card can preselect its matching enquiry option.
document.querySelectorAll("[data-service]").forEach(function (link) {
  link.addEventListener("click", function () {
    const serviceSelect = document.getElementById("service");
    if (serviceSelect) {
      const desiredService = link.getAttribute("data-service");
      Array.from(serviceSelect.options).forEach(function (option) {
        if (option.text === desiredService) serviceSelect.value = option.value;
      });
    }
  });
});

const form = document.getElementById("enquiryForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.reportValidity()) {
    feedback.textContent = "Please check the required fields and try again.";
    return;
  }

  if (!BUSINESS_EMAIL || BUSINESS_EMAIL === "hello@example.com") {
    feedback.textContent = "Demo email is not configured. Change BUSINESS_EMAIL in script.js to the business inbox first.";
    feedback.scrollIntoView({ behavior: "smooth", block: "nearest" });
    return;
  }

  const formData = new FormData(form);
  const name = String(formData.get("fullName") || "").trim();
  const email = String(formData.get("workEmail") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const service = String(formData.get("service") || "").trim();
  const budget = String(formData.get("budget") || "Not specified").trim();
  const timeline = String(formData.get("timeline") || "Not specified").trim();
  const message = String(formData.get("message") || "").trim();

  const subject = "Business enquiry — " + name + " — " + service;
  const body = [
    "NEW BUSINESS ENQUIRY",
    "",
    "Name: " + name,
    "Work email: " + email,
    "Company: " + (company || "Not provided"),
    "Service: " + service,
    "Indicative budget: " + budget,
    "Ideal timeline: " + timeline,
    "",
    "Project details:",
    message,
    "",
    "Sent from the business enquiry website."
  ].join("\n");

  const mailto = "mailto:" + BUSINESS_EMAIL +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  feedback.textContent = "Opening your email app with the enquiry details. Please review and send the email there.";
  window.location.href = mailto;
});

// Accessible FAQ behavior: only one answer stays open at a time on larger layouts and mobile.
const faqItems = Array.from(document.querySelectorAll(".faq-item"));
faqItems.forEach(function (item) {
  item.addEventListener("toggle", function () {
    if (item.open) {
      faqItems.forEach(function (otherItem) {
        if (otherItem !== item) otherItem.open = false;
      });
    }
  });
});