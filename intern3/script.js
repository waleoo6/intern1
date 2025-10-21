// Multi-page app controller and form validation

;(() => {
  // ===== TIME UPDATE FUNCTIONALITY =====
  const timeEl = document.getElementById("user-time")
  if (timeEl) {
    function formatLocal(ms) {
      const d = new Date(ms)
      const datePart = d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
      const timePart = d.toLocaleTimeString(undefined, { hour12: false })
      const msPart = String(d.getMilliseconds()).padStart(3, "0")
      const tzOffset = -d.getTimezoneOffset()
      const sign = tzOffset >= 0 ? "+" : "-"
      const absMinutes = Math.abs(tzOffset)
      const tzHours = String(Math.floor(absMinutes / 60)).padStart(2, "0")
      const tzMinutes = String(absMinutes % 60).padStart(2, "0")
      const tz = `GMT${sign}${tzHours}:${tzMinutes}`
      return `${datePart} ${timePart}.${msPart} ${tz}`
    }

    function updateTime() {
      timeEl.textContent = formatLocal(Date.now())
    }

    updateTime()
    let timerId = setInterval(updateTime, 250)

    function handleVisibility() {
      if (document.hidden) {
        if (timerId) {
          clearInterval(timerId)
          timerId = null
        }
      } else {
        if (!timerId) {
          updateTime()
          timerId = setInterval(updateTime, 250)
        }
      }
    }

    document.addEventListener("visibilitychange", handleVisibility, { passive: true })
    window.addEventListener("beforeunload", () => {
      if (timerId) clearInterval(timerId)
    })
  }

  // ===== PAGE NAVIGATION =====
  const navLinks = document.querySelectorAll(".nav-link")
  const pages = document.querySelectorAll(".page")

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const pageName = link.getAttribute("data-page")

      // Update active nav link
      navLinks.forEach((l) => l.classList.remove("active"))
      link.classList.add("active")

      // Update active page
      pages.forEach((p) => p.classList.remove("active"))
      document.getElementById(`${pageName}-page`).classList.add("active")
    })
  })

  // ===== FORM VALIDATION =====
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    const nameInput = document.getElementById("contact-name")
    const emailInput = document.getElementById("contact-email")
    const subjectInput = document.getElementById("contact-subject")
    const messageInput = document.getElementById("contact-message")
    const successMessage = document.getElementById("success-message")

    // Clear error on input
    ;[nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      input.addEventListener("input", () => {
        input.classList.remove("error")
        const errorEl = document.getElementById(`error-${input.name}`)
        if (errorEl) {
          errorEl.classList.remove("show")
          errorEl.textContent = ""
        }
      })
    })

    // Validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }

    // Validate form
    function validateForm() {
      let isValid = true

      // Validate name
      if (!nameInput.value.trim()) {
        showError(nameInput, "Full name is required")
        isValid = false
      }

      // Validate email
      if (!emailInput.value.trim()) {
        showError(emailInput, "Email is required")
        isValid = false
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, "Please enter a valid email address")
        isValid = false
      }

      // Validate subject
      if (!subjectInput.value.trim()) {
        showError(subjectInput, "Subject is required")
        isValid = false
      }

      // Validate message
      if (!messageInput.value.trim()) {
        showError(messageInput, "Message is required")
        isValid = false
      } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, "Message must be at least 10 characters")
        isValid = false
      }

      return isValid
    }

    function showError(input, message) {
      input.classList.add("error")
      const errorEl = document.getElementById(`error-${input.name}`)
      if (errorEl) {
        errorEl.textContent = message
        errorEl.classList.add("show")
      }
    }

    // Handle form submission
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Clear previous success message
      successMessage.classList.remove("show")
      successMessage.textContent = ""

      if (validateForm()) {
        // Show success message
        successMessage.textContent = "Thank you! Your message has been sent successfully."
        successMessage.classList.add("show")

        // Reset form
        contactForm.reset()

        // Clear success message after 5 seconds
        setTimeout(() => {
          successMessage.classList.remove("show")
        }, 5000)
      }
    })
  }
})()
