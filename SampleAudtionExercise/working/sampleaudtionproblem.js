function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["sampleAudition"].elements.length; 
        loopCounter++) {
        if (document.forms["sampleAudition"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["sampleAudition"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}

function resetForm() {
    clearErrors();
    document.forms["sampleAudition"]["startNum"].value = "";
    document.forms["sampleAudition"]["endNum"].value = "";
    document.forms["sampleAudition"]["step"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["sampleAudition"]["num1"].focus();
}

function validateValues() {
    var num1 = document.forms["sampleAudition"]["startNum"].value;
    var num1Int = parseInt(document.forms["sampleAudition"]["startNum"].value);
    var num2 = document.forms["sampleAudition"]["endNum"].value;
    var num2Int = parseInt(document.forms["sampleAudition"]["endNum"].value);
    var num3 = document.forms["sampleAudition"]["step"].value;
    var num3Int = parseInt(document.forms["sampleAudition"]["step"].value);
    var evenNums = [];

    if (num1 == "" || isNaN(num1) || num1 < 0) {
        alert("Starting Number must be filled in with a number.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
    if (num2 == "" || isNaN(num2) || num2 < 0) {
        alert("Ending Number must be filled in with a number.");
        document.forms["numberFun"]["num2"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num2"].focus();
        return false;
    } 
    if (num3 == "" || isNaN(num3) || num3 < 0) {
        alert("Step must be filled in with a number.");
        document.forms["numberFun"]["num3"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num3"].focus();
        return false;
    }
    if (num2Int <= num1Int) {
        alert("The Ending Number must be larger than the Starting Number");
        return false;
    }


    document.getElementById("currentStartNum").textContent = num1;
    document.getElementById("currentEndNum").textContent = num2;
    document.getElementById("currentStep").textContent = num3;
    
    while (num1Int < num2Int) {
            if (num1Int%2 == 0) {
            evenNums.push(num1Int);
        }
        num1Int += num3Int;
        for (var i = 0; i < evenNums.length; i++) {
        document.getElementById("results").innerHTML = evenNums;
        }
    }

return false;
}