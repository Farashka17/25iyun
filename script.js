const textEl=document.querySelector("p")
const btns=document.querySelectorAll("button");

const[italicBtn, boldBtn, colorBtn, backgroundBtn, resetBtn, customBtn] = btns;

class App {
    
    constructor(){
       
        this.keys=[]
        italicBtn.addEventListener("click",this.toggleItalic)
        boldBtn.addEventListener("click",this.toggleBold)
        colorBtn.addEventListener("click",this.changeColor)
        backgroundBtn.addEventListener("click",this.changeBgColor)
        customBtn.addEventListener("click",this.addCustomStyle.bind(this))
        resetBtn.addEventListener("click",this.resetStyles.bind(this))
    }

    toggleItalic(){
        textEl.classList.toggle("italic")
    }

    toggleBold(){
        textEl.classList.toggle("bold")
    }

    changeColor(){
            this.color=prompt("Please enter a valid color")
            textEl.style.color=this.color
    }

    changeBgColor(){
        this.backgroundColor=prompt("Please enter a valid color")
        textEl.style.backgroundColor=this.backgroundColor
    }

    addCustomStyle(){
        this.key=prompt("Please add a property you want to change")
        this.value=prompt(`Please enter a value you want to set to ${this.key}`)

        textEl.style[this.key]=this.value
       this.keys.push(this.key)

    }

    resetStyles(){
       textEl.classList.remove("italic,bold")
       textEl.style.color="black"
       textEl.style.background="none"
       textEl.style[this.key]=null
       this.keys.forEach(key => {
       textEl.style[key]=null
        
       });
    }

}
const app= new App();