/*
Написать, функцию, которая принимает в качестве аргумента объект
и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение.
 */
function printObject (obj){
    for (let property in obj){
        if (obj.hasOwnProperty(property)){
            console.log(`${property} - ${obj[property]}`);
        }
    }
}

const obj = {
    a: 1,
    b: 2
}

printObject(obj)