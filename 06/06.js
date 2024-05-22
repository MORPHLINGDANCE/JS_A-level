    // Confirms
    {
        const arr = ['Вы мужчина?','Хорошая погода?','Плохое настроение?'].map(confirm)
    }
    // Prompts
    {
        const arr = [];
        arr[0] = prompt('Вы мужчина?','да');
        arr[1] = prompt('Хорошая погода?','не очень');
        arr[2] = prompt('Плохое настроение?','немножко');
    }
    // Item access
    {
        const arr = [15, 'Шалом', false, ['32']]
        const question = +prompt('Введите индекс массива','3');
        console.log(arr[question])
    }
    // Item change
    {
        const arr = [15, 'Шалом', false, ['32']];
        const question = +prompt('Введите индекс массива');
        const question1 = prompt('Введите значение заданого индекса');
        arr[question] = question1;
        console.log(arr);
    }
    // Multiply table
    {
        const arr = [[0, 0, 0, 0, 0],
                    [0, 1, 2, 3, 4],
                    [0, 2, 4, 6, 8],
                    [0, 3, 6, 9, 12],
                    [0, 4, 8, 12, 16]
                    ];
    }

    }
    // Multiply table slice
    {
        const arr = [[0, 0, 0, 0, 0],
                    [0, 1, 2, 3, 4],
                    [0, 2, 4, 6, 8],
                    [0, 3, 6, 9, 12],
                    [0, 4, 8, 12, 16]
                    ];

        const arr2 = [
                arr[1].slice(1),
                arr[2].slice(1),
                arr[3].slice(1),
                arr[4].slice(1)
                    ]
        console.log(arr2)
    }
    // IndexOf Word
    {
        const userValue = prompt('Введите строку из нескольких слов','Привет, Шалом, как дела?').toLowerCase().split(', ') // разбивает строку на несколько строк по заданому разделителю и возвращает массив;
        const userValueCheck = prompt('Введите слово на проверку','шалом').toLowerCase()
        const badWord = userValue.indexOf('шалом');
        console.log(`Искомое слово находится на ${badWord}`) // ['привет', 'шалом', 'как дела?']
    }
    // Reverse
    {
        const arr = [];
        const userValueToArr = ['','','','',''].map(prompt);
        userValueToArr.forEach(value => arr.push(value));

        const arr2 = [];
        arr2.push(arr.pop())
        arr2.push(arr.pop())
        arr2.push(arr.pop())
        arr2.push(arr.pop())
        arr2.push(arr.pop())

        console.log(arr2);
    }
    // Reverse 2
    {
        const arr = [];
        const userValueToArr = ['','','','',''].map(prompt);
        userValueToArr.forEach(value => arr.push(value));

        const arr2 = [];
        arr2.push(arr.pop())
        arr2.push(arr.pop())
        arr2.push(arr.pop())
        arr2.push(arr.pop())
        arr2.push(arr.pop())

        const arr3 = [];
        arr3.unshift(arr2.shift())
        arr3.unshift(arr2.shift())
        arr3.unshift(arr2.shift())
        arr3.unshift(arr2.shift())
        arr3.unshift(arr2.shift())

        console.log(arr3)
    }
    // Copy
    {
        const arr = [[0, 0, 0, 0, 0],
            [0, 1, 2, 3, 4],
            [0, 2, 4, 6, 8],
            [0, 3, 6, 9, 12],
            [0, 4, 8, 12, 16]
        ];
        const arr2 = [...arr]
        console.log(arr2)
    }
    // Deep Copy
    {
        const arr = [[0, 0, 0, 0, 0],
            [0, 1, 2, 3, 4],
            [0, 2, 4, 6, 8],
            [0, 3, 6, 9, 12],
            [0, 4, 8, 12, 16]
        ];
        // const arr2 = Object.assign(arr)
        const arr2 = [[...arr[0]],[...arr[1]],[...arr[2]],[...arr[3]],[...arr[4]]]
        console.log(arr2)
    }
    // Array Equals
    {
        const arr1 = [31232,3123,'5',false];
        const arr2 = arr1;
        console.log(arr1 === arr2)
    }
    // Flat
    {
        const arr = [[0, 0, 0, 0, 0],
            [0, 1, 2, 3, 4],
            [0, 2, 4, 6, 8],
            [0, 3, 6, 9, 12],
            [0, 4, 8, 12, 16]
        ];
        const arr2 = [...arr[0],.arr[1],...arr[2],...arr[3],...arr[4]];
    }
    // Destruct
    {
        const userValue = prompt('Введите преложение','Привет как дела?').split('');
        const [firstUserValue,secondUserValue,thirdUserValue] = [...userValue[0],...userValue[6],...userValue[10]]
        console.log([firstUserValue,secondUserValue,thirdUserValue])
    }
    // Destruct default
    {
        const userValue = prompt('Введите предложение', 'Привет как дела?').split('');
        const [firstUserValue = '!', secondUserValue = '!', thirdUserValue = '!'] = [...userValue.slice(3, 4), ...userValue.slice(5, 6), ...userValue.slice(6, 7)];
        console.log([firstUserValue, secondUserValue, thirdUserValue]);
    }
    // Multiply table rest
    {
        const arr = [[0, 0, 0, 0, 0],
            [0, 1, 2, 3, 4],
            [0, 2, 4, 6, 8],
            [0, 3, 6, 9, 12],
            [0, 4, 8, 12, 16]
        ];
        const arr2 = [
            [],
            [,...firstValue],
            [,...secondValue],
            [,...thirdValue],
            [,...fourthValue]
        ] = arr
        const resultArray = [...firstValue, ...secondValue, ...thirdValue, ...fourthValue];

        console.log(resultArray);
    }
    // For Alert
    {
        const arr = ["John", "Paul", "George", "Ringo"];
        for (const names of arr){
            alert(names);
        }
    }
    // For Select Option
    {
        const currencies = ["USD", "EUR", "GBP", "UAH"]
        let   str = "<select>"
        for (let currency of currencies){
            str += '<option>'+currency+'</option>';
        }
        str+= "</select>"

        document.write(str) //document.write отобразит ваш HTML на странице
    }
    // For Table Horizontal
    {
        const names = ["John", "Paul", "George", "Ringo"]
        let   str = '<table border="1" style="border: 1px solid black">';

        for (const name of names){
            str += '<tr style="display: inline-block">'+'<td>'+ name +'</td>'+'</tr>';
        }
        str+= "</table>"

        document.write(str) //document.write отобразит ваш HTML на странице
    }
    // For Table Vertical
    {
        const names = ["John", "Paul", "George", "Ringo"]
        let   str = '<table border="1" style="border: 1px solid black">';

        for (const name of names){
            str += '<tr>'+'<td>'+ name +'</td>'+'</tr>';
        }
        str+= "</table>"

        document.write(str) //document.write отобразит ваш HTML на странице
    }
    // For Table Letters
    {
        const currencies = ["USD", "EUR", "GBP", "UAH"]
        let   str = "<table style='border-spacing:0; border-collapse:collapse;'>"

        for(i = 0; i <3; i++){
            str +='<th style="background-color: grey;">'+'</th>'
        }
            for (let currency of currencies){ //цикл создает строки
                str += "<tr>";
                console.log(currency)
                    for (let letter of currency){ //цикл создает ЯЧЕЙКИ в ОДНОЙ СТРОКЕ
                        //одна итерация цикла создает ОДНУ ЯЧЕЙКУ
                        str += '<td border=\"1\" style=\"border: 1px solid black\">' + letter + '</td>' ;
                    }
                    str += '</tr>';
            }
            str+= "</table>"
            document.write(str) //document.write отобразит ваш HTML на странице
    }
    // For Multiply Table
    {
        const arr = [[0, 0, 0, 0, 0],
                     [0, 1, 2, 3, 4],
                     [0, 2, 4, 6, 8],
                     [0, 3, 6, 9, 12],
                     [0, 4, 8, 12, 16]
        ];

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
        document.write(str) //document.write отобразит ваш HTML на странице
    }
    // Map Capitalize
    {
        const userValue = prompt('Введите строку','привет, шалом, как дела?').toLowerCase().split(' ');
        const capitalizeTomassive = (userValue.map(x => x[0].toUpperCase() + x.slice(1))).join(' ');
        console.log(capitalizeTomassive)
    }
    // Filter Lexics
    {
        const userPrompt = prompt('Введите строку','привет лиходей как дела?').toLowerCase().split(' ');
        const badWord = ['гад', 'подлец', 'иуда', 'лиходей'];
        const filterBadWord = (userPrompt.filter(x => badWord.includes(x))).join(' ');
        if (filterBadWord){
            console.log(true);
        } else
        console.log(false);
    }
    // Beep Lexics
    {
        const userPrompt = prompt('Введите строку','привет лиходей как дела?').toLowerCase().split(' ');
        const badWord = ['гад', 'подлец', 'иуда', 'лиходей'];
        const mapUserPrompt = userPrompt.map(x => badWord.includes(x)).join(' ');
        const result = mapUserPrompt.includes(true);
        result ? 'BEEP' : 'НЕ BEEP'
    }
    // Reduce HTML
    {
        const currencies = ["USD", "EUR", "GBP", "UAH"]
        let str          = "<select>"
        str             += currencies.reduce( (a,b) => a + `<option>${b}</option>`,'')
        str             += "</select>"
        document.write(str)
    }
    // For Brackets Hell Check
    {
        const line = prompt('Введите ваши скобки','[ [ ] () {{{[]()}}}]')
        const bracketsStack = []
        let   i             = 0
        for (let character of line){

            if (ПРОБЛЕМА){
                break; //оператор break прерывает цикл преждевременно
            }
            i++
        }
    }

