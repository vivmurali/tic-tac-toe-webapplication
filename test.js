var test = document.querySelectorAll("td")
var resetbutton = document.querySelector("#reset")
console.log(resetbutton)
resetbutton.addEventListener("click",function () {
    for (let i = 0; i < test.length; i++) {
        test[i].textContent = ""
        
    }
    console.log("hello")
    
})
for (i = 0; i < test.length; i++) {
    test[i].addEventListener("click",function () {
        if (this.textContent === "") {
            this.textContent = "X"
            
        } else if (this.textContent === "X"){
            this.textContent = "O"
            
        }
        else{
            this.textContent = ""
        }
        
    })
    
}