function generateCode () {
    //create variables to store generated codes and the type of characters we want to sho as codes
    var code = '';
    var str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //Generate character multiple times using a loop
    for (i = 1; i <= 8; i++){
        var char = Math.random() * str.length;
        code += str.charAt(char);
    }
    return code;
}
document.getElementById("codes").innerHTML = generateCode();
function disableButton(){
    document.getElementById("submit").disabled = true;
}
disableButton();