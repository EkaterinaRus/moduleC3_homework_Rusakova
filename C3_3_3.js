/*
Написать функцию, которая создает пустой объект, но без прототипа.
 */
function createObjWithoutProto(){
    const obj = Object.create(null);
    return (obj);
}


console.log(createObjWithoutProto())