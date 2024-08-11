document.addEventListener('DOMContentLoaded', function () {
  let amenities = {};

  document.querySelectorAll('input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      const dataId = this.getAttribute('data-id');
      const dataName = this.getAttribute('data-name');

      if (this.checked) {
        amenities[dataId] = dataName;
      } else {
        delete amenities[dataId];
      }

      document.querySelector('.amenities h4').textContent = Object.values(amenities).join(', ');
    });
  });
});

