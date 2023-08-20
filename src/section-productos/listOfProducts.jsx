import processor_amd_ryzen_3 from '../assets/processorsAmd_1.jpg'; 
import processor_amd_ryzen_5 from '../assets/processorsAmd_2.jpg'; 
import processor_amd_ryzen_7 from '../assets/processorsAmd_3.jpg'; 
import processor_amd_ryzen_9 from '../assets/processorsAmd_4.jpg'; 
import processor_intel_celeron from '../assets/processorsINTEL_1.jpg'; 
import processor_intel_pentium from '../assets/processorsINTEL_1.jpg'; 
import processor_intel_i3 from '../assets/processorsINTEL_2.jpg';
import processor_intel_i5 from '../assets/processorsINTEL_3.jpg';
import processor_intel_i7 from '../assets/processorsINTEL_4.jpg';
import rg from '../assets/processorsAmd_1rbg.png'


export default function listOfProducts(){
    function calculatorPrice(value,discount,id){
        const originalPrice = value; // Precio original en centavos
        const discountPercentage = discount;
        const discountedPrice = Math.round((originalPrice * (100 - discountPercentage)) / 100);
        if(id === 1){
            return discountPercentage
        }else{
            return discountedPrice
        }
    }    
    
    // Los division sirven para filtrar el contenido.
    // Lista de todos: [Processors AMD o Intel , Motherboards AMD o INTEL , Graphics Cards AMD o Intel]
    // Lista de todos: [Ram Memory o Ram Memory Processor AMD RYZEN RADEONs , HDD o SDD o External Storage , Cooler Fan o CPU o Thermal Phaste]
    // Lista de todos: [Cases , Power Supplies , Monitors o TVs , Headphones o Keyboards o Mouse o Microphones o Speakers]
    const data = [
        {
            id: 0,
            division:'Processors AMD',
            img: processor_amd_ryzen_3,
            alt: 'Processor AMD RYZEN RADEON',
            discount: null,
            price: calculatorPrice(93600,0,0).toLocaleString(),
            before: null,
            freeShipping: true,
            description: "Procesador AMD RYZEN 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler"
        },
        {
            id: 1,
            division:'Processors AMD',
            img: processor_amd_ryzen_5,
            alt: 'Processor AMD RYZEN RADEON',
            discount: `${calculatorPrice(100000,30,1)}%`,
            price: calculatorPrice(126450,15,0).toLocaleString(),
            before: (126450).toLocaleString(),
            freeShipping: false,
            description: "Procesador AMD RYZEN 5 3600 4.2GHz Turbo AM4 Wraith Stealth Cooler"
        },
        {
            id: 2,
            division:'Processors AMD',
            img: processor_amd_ryzen_7,
            alt: 'Processor AMD RYZEN RADEON',
            discount: null,
            price: calculatorPrice(330200,0,0).toLocaleString(),
            before: null,
            freeShipping: true,
            description: "Procesador AMD Ryzen 7 5800X 4.7GHz Turbo AM4 - No incluye Cooler"
        },
        {
            id: 3,
            division:'Processors AMD',
            img: processor_amd_ryzen_9,
            alt: 'Processor AMD RYZEN RADEON',
            discount: `10%`,
            price: calculatorPrice(794350,10,0).toLocaleString(),
            before: (794350).toLocaleString(),
            freeShipping: true,
            description: "Procesador AMD Ryzen 9 7950X3D 5.7GHz AM5 - No incluye Cooler"
        },
        {
            id: 4,
            division:'Processors AMD',
            img: processor_amd_ryzen_5,
            alt: 'Processor AMD RYZEN RADEON',
            discount: null,
            price: calculatorPrice(210650,0,0).toLocaleString(),
            before: null,
            freeShipping: false,
            description: "Procesador AMD Ryzen 5 5600X 4.6GHz Turbo AM4 + Wraith Stealth Cooler"
        },
        {
            id: 5,
            division:'Processors INTEL',
            img: processor_intel_celeron,
            alt: 'Processor INTEL',
            discount: `15%`,
            price: calculatorPrice(33650,15,0).toLocaleString(),
            before: (33650).toLocaleString(),
            freeShipping: true,
            description: "Procesador Intel Celeron G5925 3.6GHz Socket 1200 Comet Lake"
        },{
            id: 6,
            division:'Processors INTEL',
            img: processor_intel_i3,
            alt: 'Processor INTEL',
            discount: null,
            price: calculatorPrice(62000,0,0).toLocaleString(),
            before: null,
            freeShipping: false,
            description: "Procesador Intel Core i3 10100F 4.3GHz Turbo Socket 1200 Comet Lake"
        },{
            id: 7,
            division:'Processors INTEL',
            img: processor_intel_i5,
            alt: 'Processor INTEL',
            discount: `30%`,
            price: calculatorPrice(146500,30,0).toLocaleString(),
            before: (146500).toLocaleString(),
            freeShipping: true,
            description: "Procesador Intel Core i5 10400 4.3GHz Turbo Socket 1200 Comet Lake"
        },{
            id: 8,
            division:'Processors INTEL',
            img: processor_intel_i7,
            alt: 'Processor INTEL',
            discount: `10%`,
            price: calculatorPrice(325300,10,0).toLocaleString(),
            before: (325300).toLocaleString(),
            freeShipping: false,
            description: "Procesador Intel Core i7 11700KF 5.0GHz Turbo Socket 1200 Rocket Lake"
        },{
            id: 9,
            division:'Processors INTEL',
            img: processor_intel_pentium,
            alt: 'Processor INTEL',
            discount: null,
            price: calculatorPrice(37200,0,0).toLocaleString(),
            before: null,
            freeShipping: true,
            description: "Procesador Intel Pentium G4560 3.5GHz Socket 1151 Kaby Lake OEM Sin Cooler"
        }
    ]
    return{
        data
    }
}