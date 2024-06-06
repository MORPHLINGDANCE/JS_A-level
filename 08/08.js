
    // Temperature
    {
        const temperatureFunction = (temperatureOfCelsius) => temperatureOfCelsius * 9 / 5 + 32;
        alert(temperatureFunction(25))
    }
    // RGB
    {
        const rgbFunction = (r,g,b) => {
            let newR = (r < 16) ? `0${r.toString(16)}` : r.toString(16);
            let newG = (g < 16) ? `0${g.toString(16)}` : g.toString(16);
            let newB = (b < 16) ? `0${b.toString(16)}` : b.toString(16);
            return '#' + newR + newG + newB;
        }
        alert(rgbFunction(225,225,225))
    }
    // Flats
    {
        const calcFalts = (floors,flats,numberApartment) => {
            const entrance = Math.ceil(numberApartment / (floors * flats));
            const floor = Math.ceil(numberApartment % (floors * flats)/flats);
            const flatsObj = {
                entrance,
                floor
            }
                console.log(flatsObj)
        }
        calcFalts(16,4,17)
    }
    // Credentials
    {
        const showName = () => {
            const fullName = ['Ведите имя', 'Введите фамилию', 'Введите отчество'].map(prompt);
            const firstLetterToUpper = fullName.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase());
            const showFullNameObj = {
                name: firstLetterToUpper[0],
                surname: firstLetterToUpper[1],
                patronymic: firstLetterToUpper[2],
                fullName: firstLetterToUpper.join(' ')
            }
            console.log(showFullNameObj)
        }
        showName()
    }
    // New line
    {
        const showResulr = (userValue) => {
        let newUserValue = userValue.split('\\n').join('\n');
        alert(newUserValue)
        }
        showResulr(prompt('Ведите строку, для переноса используйте \\n','Hello\\nworld'))
    }
    // Prompt OR
    {
        const getAgeOfUser = (ageOfUser) => {

            ageOfUser = +prompt('Введите ваш возраст')
            ageOfUser = ageOfUser || 15;

            return ageOfUser
        }
        getAgeOfUser();
    }
    // Login And Password
    {
        const getLoginAndPassword = (userLogin, userPassword) => {
            const rightLogin = 'admin';
            const rightPassword = 'qwerty';

            userLogin = prompt('Введите логин','admin');
            userPassword = prompt('Введите пароль','qwerty');

            if(userLogin !== rightLogin || userPassword !== rightPassword){
                alert('error')
            }else {
                alert(`Login: ${userLogin}\nPassword ${userPassword}`)
            }
        }
        getLoginAndPassword();
    }
    // For Table
    {
        const showTable = (arr) => {
            arr;
            let   str = "<table border=\"1\" style=\"border: 1px solid black\">"

            for (let i = 0; i < arr.length; i++){
                const userData = arr[i];
                if (i % 2 === 0){
                    str += '<tr style="background-color: darkgray">';
                } else {
                    str += '<tr style="background-color: cornflowerblue">';
                }
                for(dataArr of userData){
                    str += '<td>' + dataArr + '</td>'
                }
                str += '</tr>';
            }
            str+= "</table>"
            document.write(str)
        }
        showTable([[0, 0, 0, 0, 0],
            [0, 1, 2, 3, 4],
            [0, 2, 4, 6, 8],
            [0, 3, 6, 9, 12],
            [0, 4, 8, 12, 16]]
        );
    }
    // Filter Lexics
    {
        const ShowBadWord = (badWord) => {
            const userPrompt = prompt('Введите строку','привет лиходей как дела?').toLowerCase().split(' ');
            const filterBadWord = (userPrompt.filter(x => !badWord.includes(x))).join(' ');
            filterBadWord ? console.log(filterBadWord) : console.log(filterBadWord);
        }
        ShowBadWord(['гад', 'подлец', 'иуда', 'лиходей'])
    }
    // Currency Table
    {

    }
    // Form
    {

    }
    // Array of objects sort
    {

        var persons = [
            {name: "Иван", age: 17},
            {name: "Мария", age: 35},
            {name: "Алексей", age: 73},
            {name: "Яков", age: 12},
        ]

        sort(persons, "age"); //сортирует по возрасту по возрастанию
        sort(persons, "name", false); //сортирует по имени по убыванию

    }
    // Table
    {

    }


