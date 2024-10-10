  document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.querySelector('.quick-add__submit');

    addToCartButton.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Add to Cart button clicked, but form submission prevented');
    });
});
