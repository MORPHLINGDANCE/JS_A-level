    // Literals
    {
        const cat = {
            breed : 'British',
            weight : 7,
            height : 30,
        }
        // Literals expand
        {
            const wool = prompt('Введите породу кошки','длинная');
            const age = +prompt('Введите возраст кошки','5')
            const cat = {
                breed : 'British',
                weight : 10,
                height : 7,
                age : age,
                wool,
            }
        }
        // Literals copy
        {
            const newObj = {
                name : 'Polina',
                surname : 'Andreicheva',
                age : 40
            }

            const userValue = prompt('Введите свойство','object');

            const wool = prompt('Введите породу кошки','длинная');
            const age = +prompt('Введите возраст кошки','5')
            const cat = {
                breed : 'British',
                weight : 10,
                height : 7,
                age : age,
                wool,
                [userValue] : newObj
            }
        }
        // Html tree
        {
            const body = {
                tagName : 'body',
                children : [
                    {
                        tagName : 'div',
                        children: [
                            {
                                tagName : 'span',
                                children : ['Enter a data please:']
                            },
                            {
                                tagName: 'br'
                            },
                            {
                                tagName: 'input',
                                attrs: {
                                    type: 'text',
                                    id: 'name'
                                }
                            },
                            {
                                tagName: 'input',
                                attrs: {
                                    type: 'text',
                                    id: 'surname'
                                }
                            }
                        ]
                    },
                    {
                        tagName : 'div',
                        children : [
                            {
                                tagName: 'button',
                                attrs: {
                                    id: 'ok',
                                    children: ['OK']
                                }
                            },
                            {
                                tagName: 'button',
                                attrs: {
                                    id: 'cancel',
                                    children: ['CANCEL']
                                },
                            }
                    ]
                    }
                ]
            }
        console.log(body.children[1].children[1].attrs['children']);
        console.log(body.children[0].children[3].attrs.id);
        }
        // Parent
        {
            const body = {
                tagName : 'body',
                children : [
                    {
                        tagName : 'div',
                        children: [
                            {
                                tagName : 'span',
                                value : 'Enter a data please:'
                            },
                            {
                                tagName: 'br'
                            },
                            {
                                tagName: 'input',
                                attrs: {
                                    type: 'text',
                                    id: 'name'
                                }
                            },
                            {
                                tagName: 'input',
                                attrs: {
                                    type: 'text',
                                    id: 'surname'
                                }
                            }
                        ]
                    },
                    {
                        tagName : 'div',
                        children : [
                            {
                                tagName: 'button',
                                attrs: {
                                    id: 'ok',
                                    children: ['OK']
                                }
                            },
                            {
                                tagName: 'button',
                                attrs: {
                                    id: 'cancel',
                                    children: ['CANCEL']
                                },
                            }
                        ]
                    }
                ]
            }
            body.children[0].parent = body;
            body.children[1].parent = body;
            body.children[0].children[0].parent = body.children[0];
            body.children[0].children[1].parent = body.children[0];
            body.children[0].children[2].parent = body.children[0];
            body.children[0].children[3].parent = body.children[0];
            body.children[1].children[0].parent = body.children[0];
            body.children[1].children[1].parent = body.children[0];
        }
        // Change OK
        {
            const userTagAttr = prompt('Ввдите атрибут для тэга button','ATTR');
            const body = {
                tagName : 'body',
                children : [
                    {
                        tagName : 'div',
                        children: [
                            {
                                tagName : 'span',
                                value : 'Enter a data please:'
                            },
                            {
                                tagName: 'br'
                            },
                            {
                                tagName: 'input',
                                attrs: {
                                    type: 'text',
                                    id: 'name'
                                }
                            },
                            {
                                tagName: 'input',
                                attrs: {
                                    type: 'text',
                                    id: 'surname'
                                }
                            }
                        ]
                    },
                    {
                        tagName : 'div',
                        children : [
                            {
                                tagName: 'button',
                                attrs: {
                                    id: userTagAttr,
                                    children: ['OK']
                                }
                            },
                            {
                                tagName: 'button',
                                attrs: {
                                    id: 'cancel',
                                    children: ['CANCEL']
                                },
                            }
                        ]
                    }
                ]
            }
            body.children[0].parent = body;
            body.children[1].parent = body;
            body.children[0].children[0].parent = body.children[0];
            body.children[0].children[1].parent = body.children[0];
            body.children[0].children[2].parent = body.children[0];
            body.children[0].children[3].parent = body.children[0];
            body.children[1].children[0].parent = body.children[0];
            body.children[1].children[1].parent = body.children[0];
            console.log(body.children[1].children[0].attrs.id)
        }
        // Destructure
        {
            const body = {
                tagName : 'body',
                children : [
                    {
                        tagName : 'div',
                        children: [
                            {
                                tagName : 'span',
                                children: ['Enter a data please:']
                            },
                            {
                                tagName: 'br'
                            },
                            {
                                tagName: 'input',
                                attrs: {
                                    type: 'text',
                                    id: 'name'
                                }
                            },
                            {
                                tagName: 'input',
                                attrs: {
                                    type: 'text',
                                    id: 'surname'
                                }
                            }
                        ]
                    },
                    {
                        tagName : 'div',
                        children : [
                            {
                                tagName: 'button',
                                attrs: {
                                    id: 'ok',
                                    children: ['OK']
                                }
                            },
                            {
                                tagName: 'button',
                                attrs: {
                                    id: 'cancel',
                                    children: ['CANCEL']
                                },
                            }
                        ]
                    }
                ]
            }
            const {children : [{children : [{children}]}]} = body;
            const {children :[{}, {children : [{}, {attrs : {id : idButton}}]}]} = body;
            const {children : [{children : [{}, {}, {}, {attrs : {id : idInput}}]}]} = body;
            console.log(children,idButton,idInput)
        }
        // Destruct array
        {
            let arr = [1,2,3,4,5, "a", "b", "c"];
            const [odd1, even1, odd2, even2, odd3, ...arr] = arr;
        }
        // Destruct string
        {
            let arr = [1, "abc"];
            const [number,str] = arr;
            const [s1,s2,s3] = str;
        }
        // Destruct 2
        {
            let obj = {name: 'Ivan',
                surname: 'Petrov',
                children: [{name: 'Maria'}, {name: 'Nikolay'}]}
            const {
                children : [
                    {name : name1},
                    {name : name2}
                ]
            } = obj;
        }
        // Destruct 3
        {
            let arr = [1,2,3,4,5,6,7,10];
            const {0:a,1:b,length} = arr;
        }
        // Copy delete
        {
            const wool = prompt('Введите породу кошки','длинная');
            const cat = {
                breed : 'British',
                weight : 10,
                height : 7,
                wool
            }
            const catWithoutWool = cat;
            delete catWithoutWool.wool;
            console.log(catWithoutWool);
        }
        // Currency real rate
        {
            const userValue = prompt('Введите валюту','usd').toUpperCase();
            const userValueConver = prompt('Введите валюту','eur').toUpperCase();
            const userValueSum = +prompt('Введите сумму','55');
            fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
                .then(data => {
                    const rateFirstCurrency = data.rates[userValue];
                    const rateSecondCurrency = data.rates[userValueConver];
                    rateFirstCurrency && rateSecondCurrency ? console.log(`${(rateFirstCurrency * rateSecondCurrency)/userValueSum}`) : console.log('ERROR')
                })
        }
        // Currency drop down
        {
            fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
                .then(data => {
                    let str = '<select>'
                    for (const rate in data.rates){
                        str += '<option>' + rate + '</option>';
                    }
                    document.write(str += '</select>')
                })
        }
        // Currency table
        {
            fetch('https://open.er-api.com/v6/latest/USD').then(res => res.json())
                .then(data => {

                })
        }
        // Form
        {
            const car = {
                "Name":"chevrolet chevelle malibu",
                "Cylinders":8,
                "Displacement":307,
                "Horsepower":130,
                "Weight_in_lbs":3504,
                "Origin":"USA",
                "in_production": false
            }

        }
        // Table
        {
            const persons = [
                {
                    name: 'Мария',
                    fatherName: 'Ивановна',
                    surname: 'Иванова',
                    sex: 'female'
                },
                {
                    name: 'Николай',
                    fatherName: 'Иванович',
                    surname: 'Иванов',
                    age: 15
                },
                {
                    name: 'Петр',
                    fatherName: 'Иванович',
                    surname: 'Иванов',
                    married: true
                },
            ]
            console.log(persons{name})
        }
    }