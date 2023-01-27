// родительский класс
class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    // метод, который показывает что прибор включен
    plugIn() {
        console.log(this.name + " включен!");
        this.isPlugged = true;
    }

    // метод, который показывает что прибор выключен
    unplug() {
        console.log(this.name + " выключен!");
        this.isPlugged = false;
    }
}

class Kettle extends ElectricalAppliance {
    constructor(name, brand, power, caseMaterial, controlType, waterVolume) {
        super(name, power);
        this.brand = brand;
        this.caseMaterial = caseMaterial;
        this.controlType = controlType;
        this.waterVolume = waterVolume;
        this.isPlugged = false;
    }
}

class Toaster extends ElectricalAppliance {
    constructor(name, brand, power, caseMaterial, controlType, numberOfCompartments) {
        super(name, power);
        this.brand = brand;
        this.caseMaterial = caseMaterial;
        this.controlType = controlType;
        this.numberOfCompartments = numberOfCompartments;
        this.isHeatingMode = false;
        this.isPlugged = false;
    }

    // метод, который определяет что тостер в режиме подогрева
    heatingMode() {
        console.log(this.name + " в режиме подогрева!");
        this.isHeatingMode = true;
    }
}

// экземпляр чайника
const kettle = new Kettle('Электрический чайник', 'Tefal', 3000, 'нержавеющая сталь', 'механический', 1.5);

// экземпляр тостера
const toaster = new Toaster('Тостер', 'Vitek', 800, 'пластик', 'механический', 2);

toaster.unplug();
toaster.heatingMode();

kettle.plugIn();

console.log(kettle)
console.log(toaster)