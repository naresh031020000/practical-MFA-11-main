let uppercase_main = document.getElementById("uppercase");
let lowercase_main = document.getElementById("lowercase");
let number_main = document.getElementById("numbers");
let symbol_main = document.getElementById("symbols");

    let check = document.querySelector("input")


    let btn = document.querySelector(".btn")


    btn.addEventListener("click", e => {
      if (!uppercase_main.checked && !lowercase_main.checked && !number_main.checked && !symbol_main.checked) {
      }
      else {
   
        let pass = ""
        let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let lowercase = "abcdefghijklmnopqrstuvwxyz"
        let number = "0123456789"
        let symbol = "!@#$%^&*+="


        if (uppercase_main.checked) {
          pass += uppercase
        }
         if (lowercase_main.checked) {
          pass =  lowercase
        }
         if (number_main.checked) {
          pass += number
        }
         if(symbol_main.checked) {
          pass += symbol
        }
        let output = ""


        for (let i = 0; i < 10; i++) {
          let num = Math.floor(Math.random() * pass.length)
          output += pass[num]
        }
     
        check.value = output;
      }
    })




















