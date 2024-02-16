document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Form submitted!'); // You can replace this with your own form submission logic.
  });

  $(document).on("click", '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });