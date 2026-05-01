import huracan from "../assets/images/lamborghini-huracan.png";
import aventador from "../assets/images/lamborghini-aventador.png";
import urus from "../assets/images/lamborghini-urus.png";
import f488 from "../assets/images/ferrari-488-gtb.png";
import f8 from "../assets/images/ferrari-f8-tributo.png";
import roma from "../assets/images/ferrari-roma.png";
import p911 from "../assets/images/porsche-911-turbo-s.png";
import taycan from "../assets/images/porsche-taycan.png";
import m4 from "../assets/images/bmw-m4-competition.png";
import m8 from "../assets/images/bmw-m8-gran-coupe.png";
import amgGt from "../assets/images/mercedes-amg-gt.png";
import g63 from "../assets/images/mercedes-amg-g63.png";
import corvette from "../assets/images/chevrolet-corvette-c8.png";
import camaro from "../assets/images/chevrolet-camaro-zl1.png";
import r8 from "../assets/images/audi-r8-v10.png";
import rs7 from "../assets/images/audi-rs7-sportback.png";
import mustang from "../assets/images/ford-mustang-gt.png";
import fordGt from "../assets/images/ford-gt.png";

const cars = [
  { id: 1, brand: "Lamborghini", title: "Lamborghini Huracán", text: "Mid-engine supercar with a naturally aspirated V10 producing 640 hp. 0–100 km/h in just 2.9 seconds.", image: huracan, specs: { engine: "5.2L V10", power: "640 hp", torque: "600 Nm", speed: "325 km/h", acceleration: "2.9s", drive: "AWD" } },
  { id: 2, brand: "Lamborghini", title: "Lamborghini Aventador", text: "Flagship model with a 770 hp V12 engine. Aggressive design and unmatched performance on any road.", image: aventador, specs: { engine: "6.5L V12", power: "770 hp", torque: "720 Nm", speed: "350 km/h", acceleration: "2.8s", drive: "AWD" } },
  { id: 3, brand: "Lamborghini", title: "Lamborghini Urus", text: "The world's first Super SUV. Twin-turbo V8 with 650 hp combines luxury comfort with sports car performance.", image: urus, specs: { engine: "4.0L V8 Twin-Turbo", power: "650 hp", torque: "850 Nm", speed: "305 km/h", acceleration: "3.6s", drive: "AWD" } },
  { id: 4, brand: "Ferrari", title: "Ferrari 488 GTB", text: "Mid-engine coupé with a twin-turbo V8 producing 670 hp. Perfect balance of power and handling.", image: f488, specs: { engine: "3.9L V8 Twin-Turbo", power: "670 hp", torque: "760 Nm", speed: "330 km/h", acceleration: "3.0s", drive: "RWD" } },
  { id: 5, brand: "Ferrari", title: "Ferrari F8 Tributo", text: "A tribute to Ferrari's greatest engines. 720 hp V8 with Formula 1-derived aerodynamics.", image: f8, specs: { engine: "3.9L V8 Twin-Turbo", power: "720 hp", torque: "770 Nm", speed: "340 km/h", acceleration: "2.9s", drive: "RWD" } },
  { id: 6, brand: "Ferrari", title: "Ferrari Roma", text: "Elegant grand tourer with a 620 hp twin-turbo V8. Italian style and sophistication in every line.", image: roma, specs: { engine: "3.9L V8 Twin-Turbo", power: "620 hp", torque: "760 Nm", speed: "320 km/h", acceleration: "3.4s", drive: "RWD" } },
  { id: 7, brand: "Porsche", title: "Porsche 911 Turbo S", text: "Legendary sports car with a 650 hp twin-turbo flat-six engine. The benchmark for sports driving.", image: p911, specs: { engine: "3.8L Flat-6 Twin-Turbo", power: "650 hp", torque: "800 Nm", speed: "330 km/h", acceleration: "2.7s", drive: "AWD" } },
  { id: 8, brand: "Porsche", title: "Porsche Taycan", text: "Fully electric sports car with up to 761 hp. The future of performance driving is here.", image: taycan, specs: { engine: "Dual Electric Motors", power: "761 hp", torque: "1050 Nm", speed: "260 km/h", acceleration: "2.8s", drive: "AWD" } },
  { id: 9, brand: "BMW", title: "BMW M4 Competition", text: "Sport coupé with a 510 hp twin-turbo inline-6. Aggressive styling and razor-sharp handling.", image: m4, specs: { engine: "3.0L I6 Twin-Turbo", power: "510 hp", torque: "650 Nm", speed: "290 km/h", acceleration: "3.9s", drive: "RWD" } },
  { id: 10, brand: "BMW", title: "BMW M8 Gran Coupé", text: "Four-door grand tourer with a 625 hp V8. Luxury and raw power in a single sleek body.", image: m8, specs: { engine: "4.4L V8 Twin-Turbo", power: "625 hp", torque: "750 Nm", speed: "305 km/h", acceleration: "3.2s", drive: "AWD" } },
  { id: 11, brand: "Mercedes", title: "Mercedes-AMG GT", text: "Front-engine sports car with a 585 hp twin-turbo V8. German engineering precision at its finest.", image: amgGt, specs: { engine: "4.0L V8 Twin-Turbo", power: "585 hp", torque: "700 Nm", speed: "318 km/h", acceleration: "3.2s", drive: "RWD" } },
  { id: 12, brand: "Mercedes", title: "Mercedes-AMG G63", text: "Iconic SUV with a 585 hp twin-turbo V8. Brutal luxury without compromise, on any terrain.", image: g63, specs: { engine: "4.0L V8 Twin-Turbo", power: "585 hp", torque: "850 Nm", speed: "220 km/h", acceleration: "4.5s", drive: "AWD" } },
  { id: 13, brand: "Chevrolet", title: "Chevrolet Corvette C8", text: "Mid-engine supercar with a 495 hp V8. A new generation of America's legendary sports car.", image: corvette, specs: { engine: "6.2L V8", power: "495 hp", torque: "637 Nm", speed: "312 km/h", acceleration: "3.0s", drive: "RWD" } },
  { id: 14, brand: "Chevrolet", title: "Chevrolet Camaro ZL1", text: "Muscle car with a supercharged 650 hp V8. Pure American power built for the track and the street.", image: camaro, specs: { engine: "6.2L V8 Supercharged", power: "650 hp", torque: "881 Nm", speed: "318 km/h", acceleration: "3.5s", drive: "RWD" } },
  { id: 15, brand: "Audi", title: "Audi R8 V10", text: "Supercar with a naturally aspirated 620 hp V10 and quattro AWD. The everyday supercar.", image: r8, specs: { engine: "5.2L V10", power: "620 hp", torque: "580 Nm", speed: "331 km/h", acceleration: "3.1s", drive: "AWD" } },
  { id: 16, brand: "Audi", title: "Audi RS7 Sportback", text: "Five-door coupé with a 600 hp twin-turbo V8. Practicality and speed without compromise.", image: rs7, specs: { engine: "4.0L V8 Twin-Turbo", power: "600 hp", torque: "800 Nm", speed: "305 km/h", acceleration: "3.6s", drive: "AWD" } },
  { id: 17, brand: "Ford", title: "Ford Mustang GT", text: "Legendary muscle car with a 450 hp V8. An icon of American automotive engineering.", image: mustang, specs: { engine: "5.0L V8", power: "450 hp", torque: "529 Nm", speed: "250 km/h", acceleration: "4.2s", drive: "RWD" } },
  { id: 18, brand: "Ford", title: "Ford GT", text: "Mid-engine supercar with a 660 hp twin-turbo V6. Heir to the Le Mans legend.", image: fordGt, specs: { engine: "3.5L V6 Twin-Turbo", power: "660 hp", torque: "746 Nm", speed: "348 km/h", acceleration: "3.0s", drive: "RWD" } },
];

export default cars;
