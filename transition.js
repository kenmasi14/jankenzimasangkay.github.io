window.addEventListener('load', function() {
    const fadeInElements = document.querySelectorAll('.faded-in');
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing the element after it's visible
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });
  
    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  });