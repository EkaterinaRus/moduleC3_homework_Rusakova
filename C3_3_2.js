/*
Написать функцию, которая принимает в качестве аргументов строку
и объект, а затем проверяет, есть ли у переданного объекта свойство
с данным именем. Функция должна возвращать true или false.
 */
function checkPropInObj(str, obj){
    return (str in obj);
}

const obj = {
    a: 1,
    b: 2
}
str = 'c'
str1 = 'b'

console.log(checkPropInObj(str, obj))
console.log(checkPropInObj(str1, obj))