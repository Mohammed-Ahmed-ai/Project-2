   let thebox = document.getElementsByClassName("names");
   let CurrentEl = document.getElementsByClassName("name");


       /**Change Color */
       function generateRandomColor() {
         let maxVal = 0xffffff; // 16777215
         let randomNumber = Math.random() * maxVal;
         randomNumber = Math.floor(randomNumber);
         randomNumber = randomNumber.toString(16);
         let randColor = randomNumber.padStart(6, 0);
         return `#${randColor.toUpperCase()}`;
       }


    document.querySelector("#genarate").onclick = function () {
     if (document.querySelector("#Name input").value.length == 0) {
       alert("Please Enter The Value!!!");
     } else {
       document.querySelector(".names").style.display = "block";

       document.querySelector(".names").innerHTML += `
      <div class="name">
          <span id="n1">
           The Name is: ${document.querySelector("#Name input").value}
          </span>

          <button class="delbtn">
              Delete
          </button>
      </div>
    `;
       var Current_name = document.querySelectorAll(".delbtn");

       for (let i = 0; i < Current_name.length; i++) {
         Current_name[i].onclick = function () {
           this.parentNode.remove();
         };
       }    
     }
     for (let e = 0; e < CurrentEl.length; e++) {
        CurrentEl[e].style.backgroundColor = generateRandomColor();
        CurrentEl[e].style.color = "#FFF";
      }
   };
  /*Clear All Button*/

 let Current = document.getElementsByClassName("name");

 function clearContent() {
     for (let i = Current.length - 1; i >= 0; i--) {
       Current[i].remove();
     }
 }