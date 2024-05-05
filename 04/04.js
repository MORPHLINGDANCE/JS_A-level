
    // String: greeting
    {
        let userName = prompt('Введите ваше имя','Константин');
        alert(`Приятно познакомится, ${userName}`);
    }
    // String: gopni4ek
    {
        let userValue = prompt('Введите предложение','Hello, май нейм, Константин');
        let newUserValue = userValue.split(',').join(' блин,');
        console.log(newUserValue)
    }
    // String: capitalize
    {
        let str = "cANBerRa"
        let result = str[0].toUpperCase() + str.slice(1).toLowerCase()
        console.log(result) //Canberra
    }
    // String: word count
    {
        let str = 'Мы сидели на ДжиЭсе Прибавляли тихо в весе"';
        let lengthStr = str.split(' ').length;
        console.log(lengthStr)
    }
    // String: credentials
    {
        const userName = ["Введите фамилию?", "Введите имя?", "Введите Отчество?"].map(prompt);
        let fullName = userName.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase()).join(' ')
        alert(fullName)
    }
    // String: beer
    {
        let str = "Было жарко. Василий пил пиво вприкуску с креветками"
        let result = str.split('пиво').join('чай');
        console.log(result)
    }
    // String: no tag
    {
        let str = "какой-то текст в котором есть один тэг <br /> и всякое другое"
        let result = str.slice(0, str.indexOf('<')) + str.slice(str.indexOf('>') + 1);
        console.log(result) //какой-то текст в котором есть один тэг  и всякое другое
    }
    // String: big tag
    {
        let str = "какой-то текст в котором есть один тэг <br /> и всякое другое"
        let result = str.slice(str.indexOf('<'),str.indexOf('>') +1).toUpperCase();
        console.log(result) //какой-то текст в котором есть один тэг <BR /> и всякое другое
    }
    // String: new line
    {
        let userValue = prompt('Ведите строку','Hello\\nworld');
        let newUserValue = userValue.split('\\n').join('\n');
        alert(newUserValue)
    }
    // String: youtube
    {

    }