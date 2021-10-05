class Slider {
    constructor(obj) {
        this.slider = document.querySelector(obj.el)
        this.sliderBox = this.slider.querySelector('.slider__box')
        this.sliderItem = this.sliderBox.children
        this.prev = this.slider.querySelector('.slider__prev')
        this.next = this.slider.querySelector('.slider__next')

        this.width = this.slider.clientWidth
        this.height = this.slider.clientHeight
        this.moveSlide = this.height
        this.activeSlide = 0
        this.sliderBox.style = `position:relative;
                                height:${this.height}px;
                                overflow:hidden;`
        for (let i = 0; i < this.sliderItem.length; i++) {
            const el = this.sliderItem[i];
            el.style = `position:absolute;
                        width:${this.width}px;
                        height: ${this.height}px;`
            if (i != this.activeSlide) {
                el.style.transform = `translateY(${this.moveSlide}px)`
            }
            if (i == this.sliderItem.length - 1) {
                el.style.transform = `translateY(-${this.moveSlide}px)`
            }
        }


        this.next.addEventListener('click', () => this.clickBtn(this.next))
        this.prev.addEventListener('click', () => this.clickBtn(this.prev))

    }
    clickBtn(btn) {
        const nextOrPrev = btn == this.next ? this.moveSlide * -1 : this.moveSlide
        for (let i = 0; i < this.sliderItem.length; i++) {
            const elem = this.sliderItem[i];
            elem.style.transition = '0ms'
            if (i != this.activeSlide) {
                elem.style.transform = `translateY(${nextOrPrev * -1}px)`
            }
        }
        this.sliderItem[this.activeSlide].style.transform = `translateY(${nextOrPrev}px)`
        this.sliderItem[this.activeSlide].style.transition = `1000ms`
        if (btn == this.next) {
            this.activeSlide++
            if (this.activeSlide >= this.sliderItem.length) {
                this.activeSlide = 0
            }
        } else if (btn == this.prev) {
            this.activeSlide--
            if (this.activeSlide < 0) {
                this.activeSlide = this.sliderItem.length - 1
            }
        }
        this.sliderItem[this.activeSlide].style.transform = `translateY(0px)`
        this.sliderItem[this.activeSlide].style.transition = `1000ms`
        
    }
}
const slider = new Slider({
    el: '#carousel'
})