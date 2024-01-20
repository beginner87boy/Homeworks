window.onload = () => {
    let button = document.querySelector("#btn");
 
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
 
function calculateBMI() {
 
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .querySelector("#height").value);
 
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
 
    let result = document.querySelector("#result");
 
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Hündürlüyü daxil edin!";
 
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Çəkini daxil edin!";
 
    
    else {
 
        
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(1);
 
        if (bmi < 19.6) result.innerHTML =
            `Çəki azdır: <span>${bmi}</span>`;
 
        else if (bmi >= 19.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
 
        else result.innerHTML =
            `Çəki artıqdır: <span>${bmi}</span>`;
    }
}