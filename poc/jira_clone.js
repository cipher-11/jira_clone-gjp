var crossBtn = document.querySelectorAll(".cross");
var dialogBoxBtn = document.querySelector(".dialog-box");
var containerBtn = document.querySelector(".container");
var addTicketBtn = document.querySelector(".btn");
var main1Btn = document.querySelector(".main1");
var main2Btn = document.querySelector(".main2");
var mainBtn = document.getElementsByClassName("main");
var colorBtn = document.querySelector(".light");

function
hideDialogBox() {
    if (dialogBoxBtn.style.display === "none") {
        dialogBoxBtn.style.display = "flex"
    } else {
        dialogBoxBtn.style.display = "none";
    }

}

crossBtn[0].addEventListener("click", hideDialogBox);
crossBtn[1].addEventListener("click", hideDialogBox);



function createTicket() {
    var boxCreator = document.createElement("div");
    boxCreator.setAttribute("class", "box");
    boxCreator.innerHTML = ` 
        <div class="header">
        Note
        <div class="toggle">
            <div class="minus"></div>
            <div class="mini"></div>
            <div class="shut"></div>
        </div>
        </div>
        <div class="main">
        <textarea class="txtarea" spellcheck="none;">${main2Btn.value}</textarea>
        </div>
    `;
    containerBtn.appendChild(boxCreator);
    dialogBoxBtn.style.display = "none";
    // mainBtn.value = main2Btn.value;
    main1Btn.value = "";
    main2Btn.value = "";

}
addTicketBtn.addEventListener("click", createTicket);