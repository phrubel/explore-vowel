//  import all vowels
const vowels = ["a", "i", "e", "o", "u"];

// get all id for create a function
const textArea = document.getElementById("text-area");
const result=document.getElementById("resul-field");
const vowelCount = document.getElementById("countVowel");
const clearBtn = document.getElementById("clearBtn");
let vowelCounter = 0;


// vowel counter function
// vowelCount.addEventListener("click", 
function vowelCounts () {
  console.log("click dise Mamai");
  let textInput = textArea.value;
  textInput.innerText=' ';
//   w is invisible word
  for (w of textInput) {
    for (v of vowels) {
      if (w.toLowerCase() == v) {
        vowelCounter++;
      }
    }
  }
//   use String Template for showing Result field.
  result.innerText = `Your Word/Paragraph has= ${vowelCounter} vowels;`;

  
};

//  clear btn event handler
  clearBtn.addEventListener("click", () => {
    console.log("Mami Click marse ");
    textArea.value = "";
    result.value="";
    vowelCounts()
})
