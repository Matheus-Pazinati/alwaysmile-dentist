export function setScrollReveal() {
  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true,
  })
  
  scrollReveal.reveal(
    `#main .description, #main .clinic,
     #about .about-image, #about .about-us,
     #services .services-description, #services .services-examples,
     #testimony header, #testimony .testimony-items,
     #contact .contact-text, #contact .contact-information,
     footer .copyright, footer .socials`
     , { interval: 100 }
    )
}