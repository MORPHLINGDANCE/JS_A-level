
    // comparison if
    {
        let age = + prompt ("Скільки вам років?", "21");
        if (age < 0){
            alert("невазможна");
        }
        else if (age < 18) {
            alert("школяр");
        }
        else if (age <= 30){
            alert("молодь");
        }
        else if (age <= 45){
            alert("зрілість");
        }
        else if (age <= 60){
            alert("захід сонця");
        }
        else if (age > 60) {
            alert("як пенсія?");
        }
        else{
            alert("чи кіборг, чи KERNESS");
        }
    }
    // switch: sizes
    {
        const sizeArrR = [40, 42, 44, 46, 48, 50, 52, 54]; // R
        const sizeArrGB = [38, 40, 42, 44, 46, 48, 50, 52]; // GB
        const userValue = +prompt('Введите размер верхней одежды', '54');
        switch (userValue){
            case sizeArrR[0]:
                alert(`В Итальянской системе это будет ${sizeArrGB[0]} размер`)
                break;
            case sizeArrR[1]:
                alert(`В Итальянской системе это будет ${sizeArrGB[1]} размер`)
                break;
            case sizeArrR[2]:
                alert(`В Итальянской системе это будет ${sizeArrGB[2]} размер`)
                break;
            case sizeArrR[3]:
                alert(`В Итальянской системе это будет ${sizeArrGB[3]} размер`)
                break;
            case sizeArrR[4]:
                alert(`В Итальянской системе это будет ${sizeArrGB[4]} размер`)
                break;
            case sizeArrR[5]:
                alert(`В Итальянской системе это будет ${sizeArrGB[5]} размер`)
                break;
            case sizeArrR[6]:
                alert(`В Итальянской системе это будет ${sizeArrGB[6]} размер`)
                break;
            case sizeArrR[7]:
                alert(`В Итальянской системе это будет ${sizeArrGB[7]} размер`)
                break;
            case sizeArrR[8]:
                alert(`В Итальянской системе это будет ${sizeArrGB[8]} размер`)
                break;
        }
    }
    // switch: if
    {
        let color = prompt("Введіть колір","");
        if (color === 'red'){
            document.write("<div style='background-color: red;'>червоний</div>");
            document.write("<div style='background-color: black; color: white;'>чорний</div>");
        }
        else if(color === 'black'){
            document.write("<div style='background-color: black; color: white;'>чорний</div>");
        }
        else if (color === 'blue'){
            document.write("<div style='background-color: blue;'>синій</div>");
            document.write("<div style='background-color: green;'>зелений</div>");
        }
        else if(color === 'green'){
            document.write("<div style='background-color: green;'>зелений</div>");
        }
        else{
            document.write("<div style='background-color: gray;'>Я не зрозумів</div>");
        }
    }
    // noswitch
    {
        const noSwitch = (key, cases, defaultKey='default') => {

                if (key in cases){
                    return cases[key]()
                }
                else {
                    return cases[defaultKey]()
                }
            }

        const drink = prompt("Що ви любите пити")
        noSwitch(drink, {
            воду: () => {console.log('Найздоровіший вибір!');
                return 'Вы выбрали водичку'},
            чай(){
                console.log('Смачна та корисна штука. Не перестарайтеся з цукром')
                return 'Вы выбрали чай'
            },
            "пиво": () => {console.log('Добре влітку, та в міру');
                return 'Вы выбрали пиво'},
            віскі: function(){
                console.log('Та ви, батечку, естет! Не забудьте лід і сигару')
                return 'Вы выбрали віскі'
            },
            default(){
                console.log('шото я не зрозумів');
                return 'Неизвестный выбор'
            }
        })
    }
    // closure cacl
    {
        const container = document.createElement('div')
        document.body.append(container);

        fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
            .then(data => {

                for (const rate in data.rates){
                    const elementButton = document.createElement("button");
                    elementButton.innerText = rate;
                    container.append(elementButton);

                    elementButton.onclick = () => {

                        const userValueSum = +prompt('Введите сумму','55');
                        const userValue = rate;
                        const rateFirstCurrency = data.rates[userValue];

                        const converted = userValueSum / rateFirstCurrency;
                        alert(`${userValueSum} ${userValue} это ${converted} в USD`)
                    }
                }
            })
    }
    // closure calc 2
    {
    // <select id='from'></select>
    // <select id='to'></select>
    // <div id='rate'></div>
    // <input type='number' id='amount' placeholder='Сумма в валюте входной' />
    // <div id='result'>Сумма в валюте которую хотим поменять</div>

    const selectFrom = document.getElementById('from');
    const selectTo = document.getElementById('to');
    const divRate = document.getElementById('rate');
    const inputAmount = document.getElementById('amount');
    const divResult = document.getElementById('result');

    fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(data => {
            const rates = data.rates;

            for (const currency in rates) {
                if (rates.hasOwnProperty(currency)) {
                    const option = document.createElement('option');
                    option.value = currency;
                    option.innerText = currency;
                    selectFrom.appendChild(option);
                }
            }

            for (const currency in rates) {
                if (rates.hasOwnProperty(currency)) {
                    const option = document.createElement('option');
                    option.value = currency;
                    option.innerText = currency;
                    selectTo.appendChild(option);
                }
            }

            function updateExchangeRateAndResult() {
                const fromCurrency = selectFrom.value;
                const toCurrency = selectTo.value;
                const rate = rates[toCurrency] / rates[fromCurrency];
                divRate.textContent = `Кроскурс: 1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;

                const amount = parseFloat(inputAmount.value);
                if (!isNaN(amount)) {
                    const result = amount * rate;
                    divResult.textContent = `${amount.toFixed(2)} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
                } else {
                    divResult.textContent = 'Введите сумму';
                }
            }

            selectFrom.addEventListener('change', updateExchangeRateAndResult);
            selectTo.addEventListener('change', updateExchangeRateAndResult);
            inputAmount.addEventListener('input', updateExchangeRateAndResult);

            updateExchangeRateAndResult();
        })
    }
