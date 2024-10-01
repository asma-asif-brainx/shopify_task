document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper(".swiper-container", {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 30 }
        }
      });

    const tabs = document.querySelectorAll('.collection-tabs');
    const productLists = document.querySelectorAll('.collection-products-list');

    // Function to show the selected tab's product list based on collection handle
    function showTab(collectionHandle) {
        // Hide all product lists
        productLists.forEach(function(list) {
            list.classList.remove('visible');
            list.classList.add('hidden');
        });

        // Show the selected product list
        const selectedList = Array.from(productLists).find(list => list.getAttribute('data-collection-handle') === collectionHandle);
        if (selectedList) {
            selectedList.classList.remove('hidden');
            selectedList.classList.add('visible');
        }

        // Remove active class from all tabs
        tabs.forEach(function(tab) {
            tab.classList.remove('active');
        });

        // Add active class to the clicked tab
        const activeTab = Array.from(tabs).find(tab => tab.getAttribute('data-collection-handle') === collectionHandle);
        if (activeTab) {
            activeTab.classList.add('active');
        }
    }

    // Attach click event to each tab
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            const collectionHandle = this.getAttribute('data-collection-handle');
            showTab(collectionHandle);
        });
    });

    // Optionally, trigger the click on the first tab to show its content by default
    if (tabs.length > 0) {
        tabs[0].click();
    }
});
