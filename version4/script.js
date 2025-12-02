import { v4 } from "https://cdn.jsdelivr.net/npm/uuid@9.0.1/dist/esm-browser/index.js";
console.log(v4());

let contentID = document.querySelector(".content-span2");
contentID.innerText = `${v4()}`;

let copyBtn = document.querySelector('.content-span3');
copyBtn.addEventListener('click', () => {
    const textValue = document.querySelector('.content-span2').textContent;
    navigator.clipboard.writeText(textValue);
    console.log("Hello")
})

let btn2 = document.querySelector('.content2-btn');
btn2.addEventListener('click', () => {
    contentID.innerText = `${v4()}`;

})

let refreshBtn = document.querySelector('.refreshBtn');

refreshBtn.addEventListener('click', () => {
    location.reload();
});

let bulkUUID = document.querySelector('.bulkUUID');
let generateBtn = document.querySelector('.content2-btn2');


generateBtn.addEventListener('click', () => {
    let inputValue = document.querySelector('.content2-input1').value;
    let userInput = Number(inputValue);

    for (let i = 1; i <= userInput; i++) {

        let bulkDiv = document.createElement('p');
        bulkDiv.innerHTML = `${v4()}`;
        bulkUUID.append('->', bulkDiv);
    }
});


/*-------------------------DOWNLOAD FUNCTION-----------------------*/

// DOWNLOAD BUTTON EVENT
const downloadBtn = document.querySelector('.downloadBtn');

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Anchor link jump rokne ke liye

    // Bulk UUID list ke saare <p> elements uthae hai yaha 
    const uuidList = document.querySelectorAll('.bulkUUID p');

    if (uuidList.length === 0) {
        alert("Please generate UUIDs first!");
        return;
    }

    let fileText = "";
    uuidList.forEach((item, index) => {
        fileText += `${index + 1}. ${item.textContent}\n`;
    });

    // File create 
    const file = new Blob([fileText], { type: "text/plain" });

    // Temporary URL
    const url = URL.createObjectURL(file);

    // Download trigger
    const link = document.createElement('a');
    link.href = url;
    link.download = "uuid-list.txt";
    link.click();

    // Cleanup
    URL.revokeObjectURL(url);
});


