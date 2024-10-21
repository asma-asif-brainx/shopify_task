

 const freeSampleProductId = window.sampleProductVariantId;

  const threshold = 10000; 
  let sampleAdded = false;

  // Function to update cart UI
  function updateCartUI(){
    fetch(`${routes.cart_url}?section_id=cart-drawer`)
    .then((response) => response.text())
    .then((responseText) => {

      const html = new DOMParser().parseFromString(responseText, 'text/html');
      const selectors = ['cart-drawer-items', '.cart-drawer__footer'];
      for (const selector of selectors) {
        const targetElement = document.querySelector(selector);
        const sourceElement = html.querySelector(selector);
        if (targetElement && sourceElement) {
          targetElement.replaceWith(sourceElement);
        }
      }
    })
  }

    // Function to check the cart total_price
  function checkCartTotal() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const cartTotal = cart.total_price;
        const sampleItemPresent = cart.items.find(item => item.id === parseInt(freeSampleProductId));
        if (cartTotal >= threshold && !sampleItemPresent) {
          console.log('cartTotal >= threshold', cartTotal >= threshold && !sampleAdded);
          addFreeSample(freeSampleProductId);
        } else if (cartTotal < threshold) {
          removeFreeSample(freeSampleProductId);
        }
      })
      .catch(error => {
        console.error('Error fetching cart:', error);
      });
  }

  // Function to add the free sample to the cart
  function addFreeSample(productId) {
    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: productId,
        quantity: 1
      })
    })
    .then(response => {
      if (response.ok) {
        sampleAdded = true; 
        console.log('Sample product added to cart');
       
        updateCartUI();
      } else {
        console.error('Failed to add sample product to cart');
      }
    })
    .catch(error => {
      console.error('Error adding product:', error);
    });
  }

  // Function to remove the free sample from the cart
 function removeFreeSample(productId) {
  fetch('/cart/change.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: productId,
      quantity: 0 
    })
  })
  .then(response => {
    if (response.ok) {
      sampleAdded = false; 
      console.log('Sample product removed from cart');
      updateCartUI();
    } else {
      console.error('Failed to remove sample product from cart');
    }
  })
  .catch(error => {
    console.error('Error removing product:', error);
  });
}