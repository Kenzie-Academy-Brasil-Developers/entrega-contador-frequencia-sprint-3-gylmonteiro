const title = document.getElementById("introducao");
console.log(title)

const button = document.getElementById("countButton");

button.addEventListener("click", function() {  
    //Capturando o texto dentro do textarea do HTML;
    let typedText = document.getElementById("inputText").value;
    //Transformando tudo em letras minúsculas
    typedText = typedText.toLowerCase();

    //substituindo os caracteres especiais
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    console.log(typedText)

    //Contando as palavras
    //let currentLetter = "";
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        const letterCounts = {};
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }

        for (let letter in letterCounts) { 
            const span = document.createElement("span"); 
            const textContent = `"${letter}": ${letterCounts[letter]}, `;
            span.innerText = textContent; 
            const letters = document.getElementById("lettersDiv");
            letters.appendChild(span); 
         }
        // faça algo com cada letra 
        words = typedText.split(/\s/);
     }
    
});

//commit for push in 18/07


