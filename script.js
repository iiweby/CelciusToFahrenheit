function convert() {

    var celsius = parseFloat(document.getElementById("celsius").value);

  
    if (!isNaN(celsius)) {
        
        var fahrenheit = (celsius * 9/5) + 32;

       
        document.getElementById("result").innerHTML = celsius + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit.";
    } else {
      
        document.getElementById("result").innerHTML = "Please enter a valid number for Celsius.";
        }
}

