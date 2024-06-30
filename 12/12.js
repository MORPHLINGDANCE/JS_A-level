
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

    const array = [1,2,3,4];
    function multBy( arr, n ){
        return arr.map( (i) => i * n );
        return ;
    }
    console.log(multBy(array, 10))

    const obj = {
        name: 'Aleha',
        age: 6
    }

    function(){

    }