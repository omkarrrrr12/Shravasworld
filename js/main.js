// emailjs.init("YOUR_PUBLIC_KEY");

// document.querySelectorAll('.request-quote-btn').forEach(button => {
//   button.addEventListener('click', () => {
//     document.getElementById('product_name').value = button.getAttribute('data-product');
//   });
// });

// document.getElementById('quote-form')?.addEventListener('submit', function (e) {
//   e.preventDefault();
//   emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
//     .then(() => {
//       alert("Request sent successfully!");
//       this.reset();
//       const modal = bootstrap.Modal.getInstance(document.getElementById('quoteModal'));
//       modal.hide();
//     }, (err) => {
//       alert("Failed to send. Please try again.");
//       console.error(err);
//     });
// });

// document.getElementById('contact-form')?.addEventListener('submit', function (e) {
//   e.preventDefault();
//   emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
//     .then(() => {
//       alert("Message sent successfully!");
//       this.reset();
//     }, (err) => {
//       alert("Failed to send. Please try again.");
//       console.error(err);
//     });
// });
