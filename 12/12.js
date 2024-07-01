
    // Предыдущие ДЗ

    // makeProfileTimer
    {
        function makeProfileTimer(param1){
            param1 = performance.now();
            function calcProfileTimer(){
                return (performance.now() - param1) * 1000;
            }
            return calcProfileTimer;
        }

        var timer = makeProfileTimer()
        alert('Замеряем время работы этого alert');  //некий код, время выполнения которого мы хотим измерить с высокой точностью
        alert(timer()); //alert должен вывести время в микросекундах от выполнения makeProfileTimer до момента вызова timer(),
                        // т. е. измерить время выполнения alert
    }
    // makeSaver
    {
        function makeSaver(x){

            let randomValue;

            return function (){
                if (randomValue === undefined){
                    randomValue = x();
                }
                return randomValue;
            }
        }

        var saver = makeSaver(Math.random) //создает функцию-хранилище результата переданной в качестве параметра функции (Math.random
        // в примере). На этом этапе Math.random НЕ вызывается
        var value1 = saver()              //saver вызывает переданную в makeSaver функцию, запоминает результат и возвращает его
        var value2 = saver()              //saver в дальнейшем просто хранит результат функции, и более НЕ вызывает переданную
                                          //в makeSaver функцию;
        value1 === value2                 // всегда true

        var saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)])
        var value3 = saver2()
        var value4 = saver2()

        value3 === value4 // тоже должно быть true

        let namePrompt = prompt.bind(window, 'Как тебя зовут?')
        let nameSaver = makeSaver(namePrompt)
        alert(`Привет! Prompt еще не было!`)
        alert(`Привет ${nameSaver()}. Только что запустился prompt, первый и последний раз`)
        alert(`Слушай, ${nameSaver()}, го пить пиво. Ведь prompt был только один раз`)
    }
    // myBind
    {
        function myBind(defaultPar, thisPar, mass) {
            return function(...params) {
                // Используем оригинальный массив mass
                const newParam = mass;
        
                for (let i = 0, j = 0; i < newParam.length; i++) {
                    if (newParam[i] === undefined) {
                        newParam[i] = params[j];
                        j++;
                    }
                }
        
                return defaultPar.apply(thisPar, newParam);
            }
        }
        let pow5 = myBind(Math.pow, Math, [, 5]) // перший параметр - функція для біндингу значень за замовчуванням, 
                                                        // другий - this для цієї функції, третій - масив, в якому undefined означає
                                                        // параметри, які мають передаватися під час виклику,
                                                        // інші значення є значеннями за замовчуванням:
        let cube = myBind(Math.pow, Math, [, 3]) // cube зводить число в куб

        pow5(2) // => 32, викликає Math.pow(2,5), співвіднесіть з [undefined, 5]
        pow5(4) // => 1024, викликає Math.pow(4,5), співвіднесіть з [undefined, 5]
        cube(3) // => 27


        let chessMin = myBind(Math.min, Math, [, 4, , 5,, 8,, 9])
        chessMin(-1,-5,3,15) // викликає Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5



        let zeroPrompt = myBind(prompt, window, [undefined, "0"]) // аналогічно, тільки тепер задається "0" як текст за замовчанням в prompt,
                                                                // а текст запрошення користувача задається під час виклику zeroPrompt
        let someNumber = zeroPrompt("Введіть число") // викликає prompt("Введіть число","0")

        const bindedJoiner = myBind((...params) => params.join(''), null, [, 'b', , , 'e', 'f'])//('a','c','d') === 'abcdef'
        bindedJoiner('a','c','d') === 'abcdef'
        bindedJoiner('1','2','3') === '1b23ef'        
    }
