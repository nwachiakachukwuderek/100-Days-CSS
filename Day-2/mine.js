const menu = document.querySelector('.menu');
const bars = menu.querySelectorAll('div')
console.log(bars)

menu.addEventListener("click", (e) => {
  bars.forEach((bar) => {
    bar.classList.toggle("animation")
  })
  console.log('ff')
})