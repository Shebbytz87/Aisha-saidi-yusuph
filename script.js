// Print or save the CV as a PDF using the browser's print dialog.
document.getElementById("printBtn").addEventListener("click", () => window.print());

// Smooth in-page navigation with a clear keyboard focus state.
document.querySelectorAll('.main-nav a, .brand').forEach((link) => {
  link.addEventListener('focus', () => link.style.outline = '2px solid #c9a86a');
  link.addEventListener('blur', () => link.style.outline = '');
});
