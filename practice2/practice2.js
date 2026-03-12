
const mainForm = document.getElementById("primaryForm");
console.log(mainForm);
function changeCSS(event){
    event.preventDefault();
    const paragraphRed = document.getElementById("paragraphRed").valueAsNumber;
    const paragraphBlue = document.getElementById("paragraphBlue").valueAsNumber;
    const paragraphGreen = document.getElementById("paragraphGreen").valueAsNumber;

    const borderRed = document.getElementById("borderRed").valueAsNumber;
    const borderBlue = document.getElementById("borderBlue").valueAsNumber;
    const borderGreen = document.getElementById("borderGreen").valueAsNumber;

    const width = document.getElementById("width").valueAsNumber;


    if(paragraphRed <= 255 && paragraphRed >= 0
        && paragraphBlue <= 255 && paragraphBlue >= 0
        && paragraphGreen <= 255 && paragraphGreen >= 0
    ){
        
        if(borderRed <= 255 && borderRed >= 0
            && borderBlue <= 255 && borderBlue >= 0
            && borderGreen <= 255 && borderGreen >= 0
        ){
            
            const paragraph = document.getElementById("paragraph");
            paragraph.style.color = `rgb(${paragraphRed}, ${paragraphBlue}, ${paragraphGreen})`;
            paragraph.style.borderWidth = "5px";
            paragraph.style.borderStyle = "solid";
            paragraph.style.borderColor = `rgb(${borderRed}, ${borderBlue}, ${borderGreen})`;
            if(width >= 0){
                paragraph.style.width = width;
            }
        }

    }
}

mainForm.addEventListener('submit', changeCSS);