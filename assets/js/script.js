'use strict';


// =========================================================
// ELEMENT TOGGLE FUNCTION
// =========================================================

const elementToggleFunc = function (elem) {
  if (elem) {
    elem.classList.toggle("active");
  }
};


// =========================================================
// SIDEBAR
// =========================================================

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}


// =========================================================
// TESTIMONIAL MODAL
// =========================================================

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");


const testimonialsModalFunc = function () {

  if (modalContainer) {
    modalContainer.classList.toggle("active");
  }

  if (overlay) {
    overlay.classList.toggle("active");
  }

};


// Add click event to testimonial items

if (testimonialsItem.length > 0) {

  testimonialsItem.forEach(function (item) {

    item.addEventListener("click", function () {

      const avatar = this.querySelector("[data-testimonials-avatar]");
      const title = this.querySelector("[data-testimonials-title]");
      const text = this.querySelector("[data-testimonials-text]");

      if (modalImg && avatar) {
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
      }

      if (modalTitle && title) {
        modalTitle.innerHTML = title.innerHTML;
      }

      if (modalText && text) {
        modalText.innerHTML = text.innerHTML;
      }

      testimonialsModalFunc();

    });

  });

}


// Modal close

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
}

if (overlay) {
  overlay.addEventListener("click", testimonialsModalFunc);
}


// =========================================================
// PORTFOLIO FILTER
// =========================================================

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");


const filterFunc = function (selectedValue) {

  filterItems.forEach(function (item) {

    if (
      selectedValue === "all" ||
      selectedValue === item.dataset.category
    ) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }

  });

};


// Custom select

if (select) {

  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });

}


// Select items

if (selectItems.length > 0) {

  selectItems.forEach(function (item) {

    item.addEventListener("click", function () {

      const selectedValue = this.innerText.trim().toLowerCase();

      if (selectValue) {
        selectValue.innerText = this.innerText;
      }

      if (select) {
        elementToggleFunc(select);
      }

      filterFunc(selectedValue);

    });

  });

}


// Desktop filter buttons

if (filterBtn.length > 0) {

  let lastClickedBtn = filterBtn[0];

  filterBtn.forEach(function (button) {

    button.addEventListener("click", function () {

      const selectedValue = this.innerText.trim().toLowerCase();

      if (selectValue) {
        selectValue.innerText = this.innerText;
      }

      filterFunc(selectedValue);

      if (lastClickedBtn) {
        lastClickedBtn.classList.remove("active");
      }

      this.classList.add("active");

      lastClickedBtn = this;

    });

  });

}


// =========================================================
// CONTACT FORM
// =========================================================

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");


if (form && formBtn && formInputs.length > 0) {

  formInputs.forEach(function (input) {

    input.addEventListener("input", function () {

      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }

    });

  });

}


// =========================================================
// PAGE NAVIGATION
// =========================================================

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");


navigationLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    const targetPage = this.textContent.trim().toLowerCase();

    // Remove active from ALL navigation links
    navigationLinks.forEach(function (navLink) {
      navLink.classList.remove("active");
    });

    // Add active to clicked navigation link
    this.classList.add("active");


    // Show selected page and hide others
    pages.forEach(function (page) {

      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }

    });


    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

});
