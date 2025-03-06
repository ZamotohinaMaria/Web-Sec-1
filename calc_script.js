
function calculator() 
{
    let num1 = parseFloat(document.getElementById("num1").value);
    let num1_box = document.getElementById("num1");
    let num2 = parseFloat(document.getElementById("num2").value);
    let num2_box = document.getElementById("num2");
    let operation = document.getElementById("operation").value;
    let resultsBox = document.getElementById("results");



    if (isNaN(num1) || isNaN(num2)) {
        if (isNaN(num1))
        {
    
            num1_box.classList.add("wrong-item");
            num1_box.placeholder = "Введите хоть что-то"
        }
        if (isNaN(num2))
        {
            num2_box.classList.add("wrong-item");
            num2_box.placeholder = "Введите хоть что-то"
        }
        setTimeout(() => {
            alert("Ошибка! С пустотой нельзя работать. Введите хоть что-то.");
            num1_box.classList.replace("wrong-item", "input");
            num1_box.placeholder = "Введите число"
            num2_box.classList.replace("wrong-item", "input");
            num2_box.placeholder = "Введите число"
        }, 10);

        return;
    }

    let result;
    switch (operation) {
        case "+": 
            result = num1 + num2; 
            break;
        case "-": 
            result = num1 - num2; 
            break;
        case "*": 
            result = num1 * num2; 
            break;
        case "/": 
            if (num2 === 0)
            {
                num2_box.classList.add("wrong-item");
                num2_box.placeholder = "Введите хоть что-то"
                setTimeout(() => {
                    alert("Ошибка: Вы же не хотите все уничтожить!? Не делите на ноль! На ноль делить НЕЛЬЗЯ!!!");
                    num2_box.classList.replace("wrong-item", "input");
                    num2_box.placeholder = "Введите число"
                }, 10);

                return; 
            }
            result = (num1 / num2).toFixed(4);
        break;
    }

    let previousResults = resultsBox.getElementsByClassName("result-item");
    for (let i = 0; i < previousResults.length; i++) {
        previousResults[i].classList.add("old-result");
    }

    let newResult = document.createElement("div");
    newResult.classList.add("result-item");
    newResult.innerHTML = `<b>${num1} ${operation} ${num2} = ${result}</b>`;

    resultsBox.append(newResult); 

    if (resultsBox.children.length > 10) {
        resultsBox.removeChild(resultsBox.firstChild);
    }
}
