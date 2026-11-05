// Kavya Suresh Make-up Artistry — website interactions
const $ = (selector) => document.querySelector(selector);
const whatsapp = SITE_CONFIG.whatsappNumber;

function renderServices() {
  $("#serviceGrid").innerHTML = SITE_CONFIG.services.map(item => `
    <article class="service-card">
      <span class="service-number">${item.number}</span>
      <h3>${item.name}</h3>
      <p>${item.note}</p>
    </article>`).join("");
}

function renderOffers() {
  $("#offerGrid").innerHTML = SITE_CONFIG.offers.map((offer, index) => {
    const price = offer.price === null || offer.price === undefined ? "Enquire for price" : `${SITE_CONFIG.currency}${Number(offer.price).toLocaleString("en-IN")}`;
    const oldPrice = offer.oldPrice ? `<span class="offer-old">${SITE_CONFIG.currency}${Number(offer.oldPrice).toLocaleString("en-IN")}</span>` : "";
    const includes = offer.includes.map(line => `<li>${line}</li>`).join("");
    return `<article class="offer-card ${offer.featured ? "featured" : ""}">
      <span class="offer-tag">${offer.tag}</span>
      <p class="offer-kicker">PACKAGE 0${index + 1}</p>
      <h3>${offer.name}</h3>
      <p class="offer-desc">${offer.description}</p>
      <div class="offer-price">${price}</div>${oldPrice}
      <ul class="offer-includes">${includes}</ul>
      <a class="offer-book" target="_blank" rel="noopener" href="${makeOfferLink(offer.name)}">ENQUIRE ABOUT THIS PACKAGE ↗</a>
    </article>`;
  }).join("");
}

function makeOfferLink(packageName) {
  const message = `Hi Kavya, I am interested in the ${packageName} package. Please share the details and availability.`;
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

function renderGallery(filter = "all") {
  const items = SITE_CONFIG.gallery.filter(item => filter === "all" || item.category === filter);
  $("#galleryGrid").innerHTML = items.map(item => `
    <article class="gallery-item">
      <img loading="lazy" src="${item.image}" alt="${item.title}">
      <span class="gallery-label">${item.title}</span>
    </article>`).join("");
}

function startCountdown() {
  const note = $("#countdownNote");
  const end = SITE_CONFIG.expiresAt ? new Date(SITE_CONFIG.expiresAt).getTime() : NaN;
  if (!Number.isFinite(end)) {
    $("#countdown").innerHTML = "<span>Ask us about current offers</span>";
    note.textContent = "Contact us for availability";
    return;
  }
  const update = () => {
    const distance = end - Date.now();
    if (distance <= 0) {
      $("#countdown").innerHTML = "<span>Offer period ended</span>";
      note.textContent = "Contact us for the latest packages";
      return;
    }
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);
    $("#days").textContent = String(days).padStart(2, "0");
    $("#hours").textContent = String(hours).padStart(2, "0");
    $("#minutes").textContent = String(minutes).padStart(2, "0");
    $("#seconds").textContent = String(seconds).padStart(2, "0");
  };
  update();
  setInterval(update, 1000);
}

function setupNavigation() {
  const toggle = $("#menuToggle");
  const nav = $("#mainNav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.textContent = isOpen ? "×" : "☰";
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "☰";
  }));
}

function setupGalleryFilters() {
  $("#galleryFilters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderGallery(button.dataset.filter);
  });
}

function setupBookingForm() {
  const dateInput = $("#eventDate");
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
  dateInput.min = localToday;

  $("#bookingForm").addEventListener("submit", event => {
    event.preventDefault();
    const name = $("#customerName").value.trim();
    const phone = $("#customerPhone").value.trim();
    const date = $("#eventDate").value;
    const type = $("#eventType").value;
    const message = $("#customerMessage").value.trim();
    if (!name || !phone || !date || !type) return;

    const text = [
      "Hello Kavya! I'd like to enquire about a makeup booking.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Event date: ${date}`,
      `Service: ${type}`,
      message ? `Additional details: ${message}` : "",
      "",
      "Please share availability and package details. Thank you!"
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("visible"));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderOffers();
  renderGallery();
  startCountdown();
  setupNavigation();
  setupGalleryFilters();
  setupBookingForm();
  setupReveal();
  $("#year").textContent = new Date().getFullYear();
});
