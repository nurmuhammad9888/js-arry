var elForm = document.querySelector(".form-js");
var elInputFirst = document.querySelector(".input-first-js");
var elInputLast = document.querySelector(".input-last-js");
var elInputNumber = document.querySelector(".input-number-js");
var elList = document.querySelector(".form-list-js");

var arry = [];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var obj = {
        firstName:elInputFirst.value,
        lastName:elInputLast.value,
        phoneNumber:elInputNumber.value,
    };
    
    arry.push(obj);
    
    elForm.reset();
    elList.innerHTML = "";
    
    for(var i = 0; i < arry.length; i++){
        var item = document.createElement("li");
        item.classList.add("bg-warning");
        item.classList.add("border-3");
        item.classList.add("shadow-lg");
        item.classList.add("rounded-1");
        item.classList.add("mt-3");
        item.style.padding = "16px";
        
        var fristTitle = document.createElement("h3");
        fristTitle.textContent = arry[i].firstName;
        item.appendChild(fristTitle);
        
        var lastTitle = document.createElement("h3");
        lastTitle.textContent = arry[i].lastName;
        item.appendChild(lastTitle);
        
        var telNumber = document.createElement("p");
        telNumber.textContent = arry[i].phoneNumber;
        item.appendChild(telNumber);
        
        elList.appendChild(item);
    }
})
