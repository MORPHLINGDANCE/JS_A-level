
    // Arrow to Functions
    {
        // 1
        function Mytemperature(temperatureOfCelsius){
            return temperatureOfCelsius * 9 / 5 + 32;
        }
        alert(Mytemperature(25))
        // 2
        function rgbFunction(r,g,b){
            let newR = (r < 16) ? `0${r.toString(16)}` : r.toString(16);
            let newG = (g < 16) ? `0${g.toString(16)}` : g.toString(16);
            let newB = (b < 16) ? `0${b.toString(16)}` : b.toString(16);
            return '#' + newR + newG + newB;
        }
        alert(rgbFunction(225,225,225))
        // 3
        function calcFalts(floors,flats,numberApartment){
            const entrance = Math.ceil(numberApartment / (floors * flats));
            const floor = Math.ceil(numberApartment % (floors * flats)/flats);
            const flatsObj = {
                entrance,
                floor
            }
            console.log(flatsObj)
        }
        calcFalts(16,4,17)
        // 4
        function showName(){
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
        // 5
        function showResulr (userValue){
            let newUserValue = userValue.split('\\n').join('\n');
            alert(newUserValue)
        }
        showResulr(prompt('Ведите строку, для переноса используйте \\n','Hello\\nworld'))
    }
    // createPerson
    {
        function createPerson(name,surname){
            return {
                name,
                surname,
                getFullName: function (){
                    if (this.fatherName){
                        return `${this.name} ${this.fatherName} ${this.surname}`
                    }
                    return `${this.name} ${this.surname}`
                }
            }
        }
        const a = createPerson("Вася", "Пупкин")
        const b = createPerson("Анна", "Иванова")
        const c = createPerson("Елизавета", "Петрова")

        console.log(a.getFullName()) //Вася Пупкин
        a.fatherName = 'Иванович'    //Вася Иванович Пупкин

        console.log(b.getFullName()) //Анна Иванова
    }
    // createPersonClosure
    {
        function createPersonClosure(name,surname){
        let fatherName,age;
            return {
                getName: function getName (){
                    return name
                },
                getSurname: function getSurname (){
                    return surname
                },
                getFatherName: function getFatherName (){
                    return fatherName
                },
                getAge: function getAge (){
                    return age
                },
                getFullName: function getFullName (){
                    return `${name} ${fatherName} ${surname}`
                },

                setName: function setName (newName){
                    if (newName[0] === newName[0].toUpperCase()){
                        name = newName;
                    }
                    return name
                },
                setSurname: function setSurname(newSurname){
                        if (setSurname[0] === setSurname[0].toUpperCase()){
                            surname = setSurname;
                        }
                        return surname

                },
                setFatherName: function setFatherName(newFatherName){
                            if (newFatherName[0] === newFatherName[0].toUpperCase()){
                                fatherName = newFatherName;
                            }
                            return fatherName
                },
                setAge: function setAge(newAge){
                    if (newAge >=0 && newAge <= 100){
                        age = newAge;
                    }
                    return age
                },
                setFullName: function setFullName(newFullName){
                    const split = newFullName.split(' ');
                    if (split.length === 3){
                    surname = split[0];
                    name = split[1];
                    fatherName = split[2];
                    }
                    return `${surname} ${name} ${fatherName}`.trim()
                }
            }
        }

        const a = createPersonClosure("Вася", "Пупкин")
        const b = createPersonClosure("Анна", "Иванова")
        console.log(a.getName())
        a.setAge(15)
        a.setAge(150) //не работает

        b.setFullName("Петрова Анна Николаевна")
        console.log(b.getFatherName()) //Николаевна
    }

    // createPersonClosureDestruct
    {
        function createPerson(name,surname){
            return {
                name,
                surname,
                getFullName: function (){
                    if (this.fatherName){
                        return `${this.name} ${this.fatherName} ${this.surname}`
                    }
                    return `${this.name} ${this.surname}`
                }
            }
        }
        function createPersonClosureDestruct({name = 'Вася',surname = 'Анонов', fatherName = 'Анонович', age = 45} = {}){

            return {
                getName: function getName (){
                    return name
                },
                getSurname: function getSurname (){
                    return surname
                },
                getFatherName: function getFatherName (){
                    return fatherName
                },
                getAge: function getAge (){
                    return age
                },
                getFullName: function getFullName (){
                    return `${name} ${fatherName} ${surname}`
                },

                setName: function setName (newName){
                    if (newName[0] === newName[0].toUpperCase()){
                        name = newName;
                    }
                    return name
                },
                setSurname: function setSurname(newSurname){
                    if (setSurname[0] === setSurname[0].toUpperCase()){
                        surname = setSurname;
                    }
                    return surname

                },
                setFatherName: function setFatherName(newFatherName){
                    if (newFatherName[0] === newFatherName[0].toUpperCase()){
                        fatherName = newFatherName;
                    }
                    return fatherName
                },
                setAge: function setAge(newAge){
                    if (newAge >=0 && newAge <= 100){
                        age = newAge;
                    }
                    return age
                },
                setFullName: function setFullName(newFullName){
                    const split = newFullName.split(' ');
                    if (split.length === 3){
                        surname = split[0];
                        name = split[1];
                        fatherName = split[2];
                    }
                    return `${surname} ${name} ${fatherName}`.trim()
                }
            }
        }

        const a = createPersonClosureDestruct(createPerson("Вася Пупкин"))
        const b = createPersonClosureDestruct({name: 'Николай', age: 75})
    }
    // isSorted
    {
        function isSorted(...params) {
            for (let i = 0; i < params.length; i++){

                if(typeof(params[i]) === 'number' && params[i] >= params[i + 1]){
                    return false;
                }
            }
            return true;
        }
        isSorted(1,2,3)
    }
    // Test isSorted
    {
        function isSorted(...params) {
            for (let i = 0; i < params.length; i++){
                debugger;
                if(typeof(params[i]) === 'number' && params[i] >= params[i + 1]){
                    return false;
                }
            }
            return true;
        }
        let arr = [];
        let userValue;
        while (userValue =+prompt('Введите значения в массив',1)){
            arr.push(userValue);
        }
        isSorted(...arr)

    }
    // personForm
    {
        function createPersonClosure(name,surname){
            let fatherName,age;
            return {
                getName: function getName (){
                    return name
                },
                getSurname: function getSurname (){
                    return surname
                },
                getFatherName: function getFatherName (){
                    return fatherName
                },
                getAge: function getAge (){
                    return age
                },
                getFullName: function getFullName (){
                    return `${name} ${fatherName} ${surname}`
                },

                setName: function setName (newName){
                    if (newName[0] === newName[0].toUpperCase()){
                        name = newName;
                    }
                    return name
                },
                setSurname: function setSurname(newSurname){
                    if (setSurname[0] === setSurname[0].toUpperCase()){
                        surname = setSurname;
                    }
                    return surname

                },
                setFatherName: function setFatherName(newFatherName){
                    if (newFatherName[0] === newFatherName[0].toUpperCase()){
                        fatherName = newFatherName;
                    }
                    return fatherName
                },
                setAge: function setAge(newAge){
                    if (newAge >=0 && newAge <= 100){
                        age = newAge;
                    }
                    return age
                },
                setFullName: function setFullName(newFullName){
                    const split = newFullName.split(' ');
                    if (split.length === 3){
                        surname = split[0];
                        name = split[1];
                        fatherName = split[2];
                    }
                    return `${surname} ${name} ${fatherName}`.trim()
                }
            }
        }
        function personForm(parent, person) {

            const nameInput = document.createElement('input');
            const surnameInput = document.createElement('input');
            const fatherNameInput = document.createElement('input');
            const ageInput = document.createElement('input');
            const fullNameInput = document.createElement('input');


            nameInput.value = person.getName();
            surnameInput.value = person.getSurname();
            fatherNameInput.value = person.getFatherName();
            ageInput.value = person.getAge();
            fullNameInput.value = person.getFullName();


            parent.append(nameInput);
            parent.append(surnameInput);
            parent.append(fatherNameInput);
            parent.append(ageInput);
            parent.append(fullNameInput);


            nameInput.oninput = () => {
                nameInput.value = person.setName(nameInput.value);
            };

            surnameInput.oninput = () => {
                surnameInput.value = person.setSurname(surnameInput.value);
            };

            fatherNameInput.oninput = () => {
                fatherNameInput.value = person.setFatherName(fatherNameInput.value);
            };

            ageInput.oninput = () => {
                ageInput.value = person.setAge(Number(ageInput.value));
            };

            fullNameInput.oninput = () => {
                fullNameInput.value = person.setFullName(fullNameInput.value);

                nameInput.value = person.getName();
                surnameInput.value = person.getSurname();
                fatherNameInput.value = person.getFatherName() || '';
            };
        }
        const b = createPersonClosure("Анна", "Иванова")
        b.setAge(15)
        b.setFullName("Петрова Анна Николаевна")
    }