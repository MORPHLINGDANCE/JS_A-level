
    // while confirm
    {
        let i = 0;
        let text;
        while (text = confirm('Продолжим цикл?')){
                console.log('цикл все еще работает')
                i++
        }
    }
    // array fill
    {
        let arr = [];
        let text;
        while (text = prompt('Введите значение','10')){
            arr.push(text);
        }
        console.log(arr)
    }
    // array fill nopush
    {
        let arr = [];
        let i = 0;
        let text;
        while (text = prompt('Введите значение','10')){
            arr[i] = text;
            i++
        }
        console.log(arr)
    }
    // infinite probability
    {
        let i = 0
        for (;;){
            let randomValue;
            if (randomValue = Math.random() > 0.9){
                break;
            }
            i++
        }
        alert(`Количество итераций: ${i}`)
    }
    // empty loop
    {
        let text;
        while (!(text = prompt('Нажмите ОК или ОТМЕНА'))){
            if (text === ''){
                break;
            }
            console.log('Цикл продолжается хотя вы нажами ОТМЕНА')
        }
        console.log('Цикл закончен, хотя вы нажали ОК')
    }
    // progression sum
    {
        let N = +prompt('Введите значение N:','7');
        let sum = 0;

        for (let i = 1; i <= N; i += 3) {
            sum += i;
            console.log(i);
        }
        console.log(`Сумма арифметической прогрессии от 1 до ' ${N} ' с шагом 3 равна:  ${sum}`);
    }
    // chess one line
    {
        let i = ' #';
        let str = "";
        for (j = 0; j < 5; j++){
            str += i;
        }
        console.log(str)
    }
    // numbers
    {
        for (let i = 0; i < 10; i++){
            let str = '';
            for (let j = 0; j < 10; j++){
                str += j;
            }
                console.log(`${str}\n`)
        }
    }
    // chess
    {
        let str = '';
        for (let i = 0; i < 10; i++){

            for (j = 0; j < 10; j++){

                if ((i + j) % 2 === 0){
                    str += '.'
                }else {
                    str += '#'
                }
            }
            str += '\n'
        }
        console.log(str)
    }
    // cubes
    {
        const arr = [];
        for (let i = 0; i < 5; i++){
            arr.push(i * i * i)
        }
        console.log(arr)
    }
    // multiply table
    {
        const arr = [];
        for (let i = 0; i < 10; i++){
            arr[i] = [];
            for (let j = 0; j < 10; j++){
                arr[i][j] = i * j
            }
        }
            console.log(arr)
    }
    // read array of objects
    {
        function readArrayOfObjects () {
            const arr = [];
            for (i = 0; i >= 0; i++){

                const obj = {};

                for (j = 0; j >= 0; j++){
                    const userKey = prompt('Введите ключ',`ключ ${j}`);
                    const userValue = prompt('Введите значение', `значение ${j}`);

                    if (!userKey){
                        break;
                    }
                     obj[userKey] = userValue;
                }
                arr.push(obj);

                const questionToUser = confirm('Продолжим добавление обектов в массив?')

                if (!questionToUser){
                    break;
                }
            }
            console.log(arr)
        }
        readArrayOfObjects()
    }
    // ромбик
    {
        let str = '';
        for (let i = 0; i < 11; i++) {
            for (let j = 0; j < 11; j++) {

                if (Math.abs(5 - i) + Math.abs(5 - j) <= 5) {
                    str += '#';
                } else {
                    str += '.';
                }

            }
            str += '\n';
        }
        console.log(str);
    }
    // DOM: multiply table
    {
        const table = document.createElement('table');

        for (let i = 0; i <= 9; i++){
            const tr = document.createElement('tr');
            for (let j = 0; j <= 9; j++){
                const td = document.createElement('td');

                if (i === 0 || j === 0) {
                    td.innerText = i === 0 ? j : i;
                } else {
                    td.innerText = i * j;
                }
                table.append(td)
            }
            table.append(tr)
        }document.body.appendChild(table);
    }
    // DOM: highlight cell
    {
        const table = document.createElement('table');

        for (let i = 0; i <= 9; i++){
            const tr = document.createElement('tr');
            for (let j = 0; j <= 9; j++){
                const td = document.createElement('td');

                if (i === 0 || j === 0) {
                    td.innerText = i === 0 ? j : i;
                } else {
                    td.innerText = i * j;
                }
                td.addEventListener('mouseover', function() {
                    td.style.backgroundColor = 'yellow';
                });

                td.addEventListener('mouseout', function() {
                    td.style.backgroundColor = '';
                });

                tr.appendChild(td);
            }
            table.appendChild(tr);

        }document.body.appendChild(table);
    }
    // DOM: Highlight cross
    {



    }






