const bg = document.querySelector(".bg");
const text = document.querySelector(".loading-text");
let counter = 0;
function incrementCounter() {
    
    if (counter < 100) {
        counter++; // Increment the counter value by 1
        text.innerText = counter + `%`;

         }
       
       else {
        clearInterval(counter); // Stop the interval once the counter reaches 100
        text.idList.add ("blur");
        bg.idList.add("blur");
       
      }   
  }

 counter = setInterval(incrementCounter, 30);
 
    
  
