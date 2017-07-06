function validateValues() {
    var num1 = document.forms["sampleAudition"]["startNum"].value;
    var num2 = document.forms["sampleAudition"]["endNum"].value;


    document.getElementById("currentStartNum").innerText = num1;
    return false;
}