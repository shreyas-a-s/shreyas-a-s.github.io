/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener('DOMContentLoaded', (event) => {
  // Navbar shrink function
  var navbarShrink = function() {
    const navbarCollapsible = document.body.querySelector('#mainNav')
    if (!navbarCollapsible) {
      return
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove('navbar-shrink')
    } else {
      navbarCollapsible.classList.add('navbar-shrink')
    }
  }

  // Shrink the navbar
  navbarShrink()

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink)

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav')
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNav',
      rootMargin: '0px 0px -40%',
    })
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler')
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link'),
  )

  // Function to check if the navbar is expanded
  function isNavbarExpanded() {
    return navbarToggler.getAttribute('aria-expanded') === 'true'
  }

  // Function to collapse the navbar
  function collapseNavbar() {
    if (isNavbarExpanded()) {
      navbarToggler.click()
    }
  }

  // Add click event listener to each responsive navigation item
  responsiveNavItems.forEach(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', collapseNavbar)
  })

  // Add click event listener to the document body
  document.body.addEventListener('click', function (event) {
    // Check if the click target is outside the navbar
    if (!event.target.closest('.navbar')) {
      collapseNavbar()
    }
  })
})
