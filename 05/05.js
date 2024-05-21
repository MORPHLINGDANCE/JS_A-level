
    // Number: odd
    {
        let userNumber = +prompt('Введите число','18');
        if(!isNaN(userNumber)){
            console.log('true')

            if (userNumber % 2 === 0){
                console.log('Число четное')
            }else{
                console.log('Число НЕ четное')
            }

        }else{
            console.log('false')
        }
    }

    // String: lexics
    {
        let userValue = prompt('Введите текст','Ну ты дурак');
        let someBadWord = userValue.indexOf('дурак');

        if (someBadWord === -1){
            console.log('Некорректных слов нет')
        }else {
            console.log(`Не надо так`);
        }
    }
    // Boolean
    {
        let questionsAndAnswer = [`Хорошая погода?`, `Вам больше 18?`].map(confirm);
        console.log(questionsAndAnswer)
    }
    // Boolean: if
    {
        let questionsAndAnswer = [`Вы мужчина?`, `Вам больше 18?`].map(confirm);

        questionsAndAnswer[0] ? alert('Вы мужчина') : alert('Вы женщина')
        questionsAndAnswer[1] ? alert('Вам больше 18') : alert('Вам 18 или меньше')

    }
    // Comparison: sizes
    {
        const sizeArrR = [40, 42, 44, 46, 48, 50, 52, 54]; // R
        const sizeArrGB = [38, 40, 42, 44, 46, 48, 50, 52]; // GB
        const userValue = +prompt('Введите размер верхней одежды', '54');
        if (userValue === sizeArrR[0]) {
            alert(`В Итальянской системе это будет ${sizeArrGB[0]} размер`)
        } else if (userValue === sizeArrR[1]) {
            alert(`В Итальянской системе это будет ${sizeArrGB[1]} размер`)
        } else if (userValue === sizeArrR[2]) {
            alert(`В Итальянской системе это будет ${sizeArrGB[2]} размер`)
        } else if (userValue === sizeArrR[3]) {
            alert(`В Итальянской системе это будет ${sizeArrGB[3]} размер`)
        } else if (userValue === sizeArrR[4]) {
            alert(`В Итальянской системе это будет ${sizeArrGB[4]} размер`)
        } else if (userValue === sizeArrR[5]) {
            alert(`В Итальянской системе это будет ${sizeArrGB[5]} размер`)
        } else if (userValue === sizeArrR[6]) {
            alert(`В Итальянской системе это будет ${sizeArrGB[6]} размер`)
        } else if (userValue === sizeArrR[7]) {
            alert(`В Итальянской системе это будет ${sizeArrGB[7]} размер`)
        } else if (userValue === sizeArrR[8]) {
            alert(`В Итальянской системе это будет ${sizeArrGB[8]} размер`)
        }
    }
    // Ternary
    {
        confirm('Вы мужчина или женщина') ? alert('Вы мужчина') : alert('Вы женщина')
    }
    // Prompt: or
    {
        let ageOfUser = prompt('Введите ваш возраст',21);
        if (ageOfUser === null || ageOfUser === '' || isNaN(ageOfUser)){ // !ageOfUser
            alert('Ошибка');
        }else {
            alert(`Ваш год рождения: ${2024 - ageOfUser}`);
        }
    }
    // Confirm: or this days
    {
        let robotQuestion = confirm('Шопинг?') || alert('Ты бяка')
    }
    // Confirm: if this days
    {
        let robotQuestion = confirm('Шопинг?');
        if(robotQuestion){
            alert('УРА')
        }else {alert('Ты бяка')}
    }
    // Default: or
    {
        let userSurname = prompt('Введите фамилию','Кудрик') || 'Иванов';
        let userName = prompt('Введите имя','Константин') || 'Иван';
        let userPatronymic = prompt('Введите отчество','Игоревич') || 'Иванович';
    }
    // Default: if
    {
        let userSurname = prompt('Введите фамилию','Кудрик');
        let userName = prompt('Введите имя','Константин');
        let userPatronymic = prompt('Введите отчество','Игоревич');
        if (!userSurname){
            userSurname = 'Иванов';
        }if(!userName){
            userName = 'Иван';
        }if(!userPatronymic){
            userPatronymic = 'Иванович';
        }
        alert(`${userSurname} ${userName} ${userPatronymic}`)
    }
    // Login and password
    {
        const rightLogin = 'admin';
        const rightPassword = 'qwerty';
        const userLogin = prompt('Введите логин','admin');
        const userPassword = prompt('Введите пароль','qwerty');
        if(userLogin !== rightLogin || userPassword !== rightPassword){
            alert('error')
        }else {alert(`Login: ${userLogin}\nPassword ${userPassword}`)}
    }
    // Currency exchange
    {
        let currency = prompt('Введите валюту usd или eur', 'USD').toLowerCase();
        let questionAboutCurrency = confirm('Купить или продать');
        let rate;

        currency === 'usd' ? rate = 40 : rate = 45;

        if(questionAboutCurrency){
            let userCurrencyValue = prompt('Введите суму на покупку','10');
            let resultSum = (rate * 1.5) * userCurrencyValue; // увеличиваем суму на покупку
            alert(`Ваша сума составляет ${resultSum}`);
        } else if (!questionAboutCurrency){
            let userCurrencyValue = prompt('Введите суму на обмен','10'); // суму на обмен оставляем такой же
            let resultSum = rate * userCurrencyValue;
            alert(`Ваша сума составляет ${resultSum}`)
        }
    }
    // Scissors
    {
        let userValue = prompt('Введите одно из этих значений: камень, ножницы, бумага','БУМАГА').toLowerCase().trim();
        let computerValue = Math.random();
        if(computerValue <= 0.3){
            computerValue = 'камень';
        }else if(computerValue > 0.3 && computerValue <= 0.6){
            computerValue = 'ножницы';
        }else if(computerValue > 0.6 && computerValue <= 1){
            computerValue = 'бумага';
        }
        if(computerValue === 'камень' && userValue === 'камень' || computerValue === 'ножницы' && userValue === 'ножницы' || computerValue === 'бумага' && userValue === 'бумага'){
            alert(`ничья\n${computerValue} = ${userValue}`)
        }else if(computerValue === 'камень' && userValue === 'ножницы' || computerValue === 'ножницы' && userValue === 'бумага' || computerValue === 'бумага' && userValue === 'камень'){
            alert(`Победила техника\n${computerValue} > ${userValue}`)
        }else{
            alert(`Вы победили\n${userValue} > ${computerValue}`)
        }
    }
    // dop

    // black
    let userValue = prompt('Введите одно из этих значений: камень, ножницы, бумага','БУМАГА').toLowerCase().trim();
    let computerValue = Math.random();
    computerValue = computerValue <= 0.3? 'камень' : computerValue <= 0.6? 'ножницы' : computerValue <= 1 ? 'бумага' : 'error', computerValue === userValue; ///;
// Math.random()* 3;
