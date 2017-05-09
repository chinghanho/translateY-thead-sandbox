class Table {

  constructor() {
    this.lastScrollY = 0
    this.ticking = false
    this.head = document.querySelector('.comparision thead')

    this.bindEvents()
  }

  bindEvents() {
    window.addEventListener('scroll', this.onScroll.bind(this), false)
  }

  onScroll() {
    this.lastScrollY = window.pageYOffset
    this.requestTick()
  }

  requestTick() {
    if (this.ticking) {
      return
    }
    this.ticking = true
    window.requestAnimationFrame(this.update.bind(this))
  }

  update() {
    this.head.style.transform = `translate3d(0, ${this.lastScrollY}px, 0)`
    this.ticking = false
  }

}

// expose global
var table = new Table()
window.table = table
