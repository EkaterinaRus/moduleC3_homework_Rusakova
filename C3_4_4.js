// родительская функция
function ElectricalAppliance(name, power){
    this.name = name;
    this.power = power;
    this.isPlugged = false;
}

// метод родительской функции, который показывает что прибор включен
ElectricalAppliance.prototype.plugIn = function (){
    console.log(this.name + " включен!");
    this.isPlugged = true;
};

// метод родительской функции, который показывает что прибор выключен
ElectricalAppliance.prototype.unplug = function (){
    console.log(this.name + " выключен!");
    this.isPlugged = false;
};

function Kettle(name, brand, power, caseMaterial, controlType, waterVolume){
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.caseMaterial = caseMaterial;
    this.controlType = controlType;
    this.waterVolume = waterVolume;
}

Kettle.prototype = new ElectricalAppliance();

function Toaster(name, brand, power, caseMaterial, controlType, numberOfCompartments){
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.caseMaterial = caseMaterial;
    this.controlType = controlType;
    this.numberOfCompartments = numberOfCompartments;
    this.isHeatingMode = false;
}

Toaster.prototype = new ElectricalAppliance();

// метод, который определяет что тостер в режиме подогрева
Toaster.prototype.heatingMode = function (){
    console.log(this.name + " в режиме подогрева!");
    this.isHeatingMode = true;
};

// экземпляр чайника
const kettle = new Kettle('Электрический чайник', 'Tefal', 3000, 'нержавеющая сталь', 'механический', 1.5);

// экземпляр тостера
const toaster = new Toaster('Тостер', 'Vitek', 800, 'пластик', 'механический', 2);

toaster.unplug();
toaster.plugIn();
toaster.heatingMode();

kettle.unplug();
kettle.plugIn();

console.log(kettle)
console.log(toaster)