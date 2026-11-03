"use strict";

document.addEventListener("DOMContentLoaded", () => {

  // Protect links that open in new tabs
  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.rel = "noopener noreferrer";
  });

  // Basic form validation
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        form.reportValidity();
      }
    });
  });

  console.log("Asmus Mosque security checks loaded.");
});