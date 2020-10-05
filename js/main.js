const gfx = [
    {   id: 1,
        name:  "MSI GeForce GTX 1650 D6 Gaming X 4GB GDDR6 (GTX 1650 D6 GAMING X)",
        price: 2000,
        producent:  "MSI"
    },
    {
        id: 2,
        name:  "MSI GeForce RTX 2070 SUPER Gaming X 8GB GDDR6",
        price: 2300,
        producent: "MSI",
    },
    {
        id: 3,
        name:  "Karta graficzna XFX Radeon RX 580 GTS XXX OC+ 8GB GDDR5",
        price: 800,
        producent: "Radeon",
    }

]
const mb = [
    {
        id: 1,
        name: "Gigabyte B450 AORUS ELITE ",
        price: 409,
        producent: "Gigabyte",
    },
    {
        id: 2,
        name: "Gigabyte X570 GAMING X",
        price: 769,
        producent: "Gigabyte",
    },
    {
        id: 3,
        name: "Gigabyte GA-A320M-S2H BESTSELLER",
        price: 239,
        producent: "Gigabyte",
    },
    {
        id: 4,
        name: "ASROCK GA-A320M-S2H BESTSELLER",
        price: 259,
        producent: "Arock",
    },
    {
        id: 5,
        name: "Płyta główna MSI Z390-A PRO",
        price: 549,
        producent: "MSI",
    },
    {
        id: 6,
        name: "Gigabyte B-550",
        price: 449,
        producent: "Gigabyte",
    },
    {
        id:7,
        name: "Gigabyte C-660",
        price: 649,
        producent: "Gigabyte",
    }
]

const cpu = [
    {
        id: 1,
        name: "Intel Core i5-10400F, 2.9GHz, 12 MB, BOX",
        price: 699,
        producent: "Intel",
    },
    {
        id: 2,
        name: "AMD Ryzen 5 3600, 3.6GHz, 32 MB, BOX",
        price: 929,
        producent: "AMD",
    },
    {
        id: 3,
        name: "Core i9-10850K, 3.6GHz, 20 MB, BOX",
        price: 2139,
        producent: "Intel",
    },
    {
        id: 4,
        name: "Intel Core i3-9100F, 3.6GHz, 6 MB, BOX",
        price: 325,
        producent: "Intel",
    },
]

var cart = [
    {
        name: 'mainboard',
        price:0
    },
    {
        name: 'graphic card',
        price:0
    },
    {
        name: 'processor',
        price:0
    },
]

function addOpt(elem, optValue, textOpt) {
    let select1 = document.getElementById(elem); // pobranie id miejsca do dodania opcji
    option = document.createElement("option"); // utworzenie elementu option
    option.setAttribute("value", optValue); // dodaje atrybut value
    const textOption = document.createTextNode(textOpt); // tekst do opcji
    option.appendChild(textOption); // dodanie tekstu do pocji
    select1.appendChild(option); // finalizacja dodanie opcji
}

function SelectedItemValue(SelectId){
    const selectedItem = document.getElementById(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute('value');
    console.log("Wybrany element ma ID:"+strAtt);

    const summaryCPU = document.getElementById("summaryCpu");
    const summaryMb = document.getElementById("summaryMb");
    const summaryGfx = document.getElementById("summaryGfx");


    if (SelectId == "cpu") {
        summaryCPU.innerHTML = cpu[strAtt - 1].name + " " + cpu[strAtt - 1].price
        cart[2].price = cpu[strAtt - 1].price
        cart[2].name = cpu[strAtt - 1].name

    }
    else if (SelectId == "mb") {
        summaryMb.innerHTML = mb[strAtt - 1].name + " " + cpu[strAtt - 1].price
        cart[0].price = mb[strAtt - 1].price
        cart[0].name = mb[strAtt - 1].name
        //document.getElementById("summaryMainboard").innerHTML="mainboard:"+cart[0].name+ " "+cart[0].price;
    }
    else if (SelectId == "gpu") {
        summaryGfx.innerHTML = gfx[strAtt - 1].name + " " + gfx[strAtt - 1].price
        cart[1].price =gfx[strAtt - 1].price
        cart[1].name = gfx[strAtt - 1].name
    }
    else
    {}


    document.getElementById("sumAll").innerHTML="<b>Suma koszyka:"+ (cart[0].price+cart[1].price+cart[2].price)+"</b>"

    //return(parseInt(strAtt));
}




for(let i=0; i<mb.length; i++) {
    addOpt("mb", mb[i].id, mb[i].name)
}

for(let i=0; i<gfx.length; i++) {
    addOpt("gpu", gfx[i].id, gfx[i].name)
}

for(let i=0; i<cpu.length; i++) {
    addOpt("cpu", cpu[i].id, cpu[i].name)
}

