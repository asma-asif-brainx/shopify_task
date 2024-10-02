document.addEventListener('DOMContentLoaded', function() {
  var accordionButtons = document.querySelectorAll('.accordion-button');
  
  accordionButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);

      var content = document.getElementById(this.getAttribute('aria-controls'));

      if (content.style.display === 'none') {
        content.style.display = 'block';
        this.textContent = '×';  
      } else {
        content.style.display = 'none';
        this.textContent = '+';  
      }
    });
  });
});
