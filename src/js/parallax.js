const sections = document.querySelectorAll('section')


const addMovement = function() {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)

  sections.forEach((section, index) => {
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight / 2)

    const distanceToSection = midViewport - midSection

    const image = section.querySelector('img')
    const contentTag = section.querySelector('div')

    let rotation = distanceToSection / 100
    let contentDist = -1 * distanceToSection / 2

    if(index % 2 == 0) {
      rotation = rotation * -1
    }

    image.style.transform = `rotate(${rotation}deg)`
    
    contentTag.style.top = `${contentDist}px`
    contentTag.style.transform = `rotate(${-1 * rotation}deg)`
  })
}

addMovement()

document.addEventListener('scroll', function() {
  addMovement()
})

window.addEventListener('resize', function() {
  addMovement()
})