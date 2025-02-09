document.addEventListener("DOMContentLoaded", (event) => {
    // Form validation
    const form = document.getElementById("contactForm")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      if (validateForm()) {
        alert("Thank you for your message. Our team will get back to you soon!")
        form.reset()
      }
    })
  
    function validateForm() {
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value
  
      if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.")
        return false
      }
  
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.")
        return false
      }
  
      return true
    }
  
    function isValidEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return re.test(email)
    }
  
    // Animate elements on scroll
    const animateOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 0.5s ease-out forwards"
          observer.unobserve(entry.target)
        }
      })
    }
  
    const observer = new IntersectionObserver(animateOnScroll, {
      root: null,
      threshold: 0.1,
    })
  
    document.querySelectorAll(".service-item, .testimonial-item, .product-item").forEach((item) => {
      item.style.opacity = "0"
      observer.observe(item)
    })
  
    // Parallax effect for hero section
    const hero = document.querySelector(".hero")
    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset
      hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`
    })
  
    // Header color change on scroll
    const header = document.querySelector("header")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Product carousel
    const productCarousel = document.querySelector(".product-carousel")
    let isDown = false
    let startX
    let scrollLeft
  
    productCarousel.addEventListener("mousedown", (e) => {
      isDown = true
      startX = e.pageX - productCarousel.offsetLeft
      scrollLeft = productCarousel.scrollLeft
    })
  
    productCarousel.addEventListener("mouseleave", () => {
      isDown = false
    })
  
    productCarousel.addEventListener("mouseup", () => {
      isDown = false
    })
  
    productCarousel.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - productCarousel.offsetLeft
      const walk = (x - startX) * 3
      productCarousel.scrollLeft = scrollLeft - walk
    })
  })