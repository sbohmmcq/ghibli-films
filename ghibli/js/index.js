let $bar = document.querySelector('.progress')
let $h1 = document.getElementById('movie-one')
let h1Top = $h1.offsetTop
let h1Height = $h1.clientHeight

window.addEventListener('scroll', event => {

    let windowH = window.innerHeight

    let documentH = document.documentElement.scrollHeight

    let amtScrolled = window.scrollY

    let ttlAvailable = documentH - windowH

    let percent = amtScrolled / ttlAvailable

    $bar.style.width = `${percent * 60}%`

    let h1Top = $h1.offsetTop
    let h1Height = $h1.clientHeight

    let $boxOne = document.querySelector('.block-one')
    
    if (amtScrolled = 950&&1000 ) {
        console.log('okok')
        $boxOne.style.width = `4em`;
        $boxOne.style.height = `4em`;

    } else if(amtScrolled > 1000 ) {
        $boxOne.style.width = `2em`;
        $boxOne.style.height = `2em`;
    }

})




const $show = document.querySelector('.show')

let setFirstSlide = () => {

    let $first = document.querySelector(`.slide:first-child`)
    $first.classList.add(`current`)
}

const setLastSlide = () => {

}
let unsetSlides = () => {
  let $curr = document.querySelector(`.current`)
}
const prevSlide = () => {

}

let nextSlide = () => {
  let $curr = document.querySelector(`.current`)
  $curr.classList.remove(`current`)
  let $next = $curr.nextElementSibling

  if ($next != null)  {
  $next.classList.add(`current`)

  } else {
    setFirstSlide()

  }

}


let windowLoaded = () => {

  setFirstSlide()
  document.querySelector(`#next`).addEventListener(`click`, nextSlide)

}

window.addEventListener(`load`, windowLoaded)