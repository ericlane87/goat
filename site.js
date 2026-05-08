const topbar = document.querySelector(".topbar");
const menuToggle = document.querySelector(".menu-toggle");
const topbarLinks = document.querySelector(".topbar-links");

if (topbar && menuToggle && topbarLinks) {
  const closeMenu = () => {
    topbar.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  };

  const openMenu = () => {
    topbar.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Close menu");
  };

  menuToggle.addEventListener("click", () => {
    if (topbar.classList.contains("menu-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  topbarLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

const bookingModal = document.getElementById("booking-modal");
const openBookingButton = document.querySelector("[data-open-booking]");
const closeBookingButtons = document.querySelectorAll("[data-close-booking]");

if (bookingModal && openBookingButton) {
  const openModal = () => {
    bookingModal.hidden = false;
    document.body.classList.add("modal-open");
  };

  const closeModal = () => {
    bookingModal.hidden = true;
    document.body.classList.remove("modal-open");
  };

  openBookingButton.addEventListener("click", openModal);
  closeBookingButtons.forEach((button) => button.addEventListener("click", closeModal));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !bookingModal.hidden) {
      closeModal();
    }
  });
}
