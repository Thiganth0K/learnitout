document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById('loader');
  const mainContent = document.getElementById('mainContent');
  const gridItems = document.querySelectorAll('.grid-item');
  const header = document.getElementById('header');
  let headerVisible = false; // To track header visibility
  let specialSectionVisible = false;

   // Initially hide the special section
   specialSection.style.opacity = 0;
   specialSection.style.pointerEvents = "none"; // Prevent interaction

  // Simulate loading time
  setTimeout(() => {
      loader.style.opacity = 0;
      loader.style.pointerEvents = "none"; // Prevent interaction with the loader
      mainContent.style.opacity = 1; // Show main content

      // Scroll event listener to reveal features and header
      window.addEventListener('scroll', revealFeatures);
  }, 3000); // Adjust the timeout duration as needed

  
  // Function to reveal features and header
  function revealFeatures() {
    // Reveal grid items on scroll
    gridItems.forEach((item) => {
        const position = item.getBoundingClientRect().top;
        if (position < window.innerHeight - 50) {
            item.classList.add('visible'); // Add visible class to fade in
        }
    });

    // Show header when scrolling down
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50 && !headerVisible) {
        header.classList.add('header-visible'); // Show header
        headerVisible = true; // Update visibility status
    }

    // Show the "What Makes Us Special?" section on scroll
    if (scrollPosition > 200 && !specialSectionVisible) {
        specialSection.style.opacity = 1;
        specialSection.style.pointerEvents = "auto"; // Allow interaction
        specialSectionVisible = true; // Update visibility status
    }
}
});
