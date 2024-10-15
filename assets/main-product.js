document.addEventListener('DOMContentLoaded', function() {
  var accordionItems = document.querySelectorAll('.accordion-item');
  
  accordionItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var button = this.querySelector('.accordion-button');
      var isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);

      var content = document.getElementById(button.getAttribute('aria-controls'));

      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = '×'; 
      } else {
        content.style.display = 'none';
        button.textContent = '+'; 
      }
    });
  });
});
