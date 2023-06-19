//! 15.soru
//Verilen dizideki her pozitif elemanın toplamını almak için bir kod yazın.
const input = [1, -4, 12, 0, -3, 30, 42, -150];

const pozitifSayilar = input.filter((item) => item > 0);
// console.log(pozitifSayilar);
const newArray = pozitifSayilar.reduce((acc, x) => (acc += x));
console.log(newArray);

//!16.soru
// Verilen adı kısaltmak ve adın baş harflerini döndürmek için bir kod yazın.

const input2 = "John Ronald Reuel Tolkien";

// const basHarfYazdir = (input2) => {
//   const isimDizisi = input2.split(" ");
//   const basHarf = isimDizisi.map((item) => item[0]).join("");
//   return basHarf;
// };
// console.log(basHarfYazdir(input2));
const yazdir = input2
  .split(" ")
  .map((word) => word[0])
  .join("");

console.log(yazdir);

//! 1. Yüksek Fiyatlı Ürün Kategorileri

// Size, her biri bir ad, fiyat ve kategoriye sahip bir ürün koleksiyonunu temsil eden bir dizi nesne verilir. Göreviniz, her kategorideki ürünlerin ortalama fiyatını hesaplamak için map, filter ve reduce kullanmak ve ardından yalnızca ortalama fiyatı 50'nin üzerinde olan kategorileri içeren bir dizi nesne döndürmektir.
//? soru

const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" },
];

//******cozum */

const urunKategorisi = products.reduce((acc, product) => {
  const category = product.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {});

console.log(urunKategorisi);
// Her kategori için ortalama fiyatı hesaplamak için mapi kullanın

const kategoriOrt = Object.keys(urunKategorisi).map((category) => {
  const sum = urunKategorisi[category].reduce(
    (acc, product) => acc + product.price,
    0
  );
  return {
    category: category,
    average: sum / urunKategorisi[category].length,
  };
});
console.log(kategoriOrt);

// Yalnızca ortalama değeri belirli bir eşiğin üzerinde olan kategorileri seçmek için filtreyi kullanın
const istenenOrt = kategoriOrt.filter((category) => category.average > 50);
console.log(istenenOrt);
//    beklenen sonuc
//    [
//     { category: 'Clothes', average: 55 },
//     { category: 'Electronics', average: 55 }
//    ]

//! 2. İK ve BT Departmanı
//Görev : Size, her birinin adı, maaşı ve bölümü olan, bir grup çalışanı temsil eden bir dizi nesne verilir. Göreviniz, her departman için ortalama maaşı hesaplamak için map, filter ve reduce kullanmak ve ardından yalnızca ortalama maaşı 65000'in üzerinde olan departmanları içeren bir dizi nesne döndürmektir.

const calisanlar = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];

//beklenen sonuc[
//  { department: 'HR', average: 71666 }
// ]
//?----------cozum----------------
//-------------önce departmentlara ayiralim----------
const calisanDepartmani = calisanlar.reduce((acc, x) => {
  const department = x.department;
  if (!acc[department]) {
    acc[department] = [];
  }
  acc[department].push(x);
  return acc;
}, {});
console.log(calisanDepartmani);
//--simdi her departmentin ortalama maasini bulalim map ile---

const ortalamaMaas = Object.keys(calisanDepartmani).map((department) => {
  const sum = calisanDepartmani[department].reduce(
    (acc, x) => acc + x.salary,
    0
  );
  return {
    department: department,
    average: (sum / calisanDepartmani[department].length).toFixed(1),
  };
});
console.log(ortalamaMaas);

const yuksekOrtalama = ortalamaMaas.filter(
  (department) => department.average > 65000
);
console.log(yuksekOrtalama);
