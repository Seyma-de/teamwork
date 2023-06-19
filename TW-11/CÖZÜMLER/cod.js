
//! 15.soru
//Verilen dizideki her pozitif elemanın toplamını almak için bir kod yazın.
const input = [1, -4, 12, 0, -3, 30, 42, -150];
//--------------------------------------------------
// const pozitifTopla = (input) => {
//   let toplam = 0;
//   for (i = 0; i < input.length; i++) {
//     input[i] > 0 ? (toplam += input[i]) : null;
//   }
//   return toplam;
// };
// console.log(pozitifTopla(input));
//-------------------------------------------------


//!16.soru
// Verilen adı kısaltmak ve adın baş harflerini döndürmek için bir kod yazın.

// const input2 = "John Ronald Reuel Tolkien";
//?---------------uzun cozum-------------------------
//oncelikle split ile bize verilen stringi arraya cevirdik
// const basHarfYazdir = (input2) => {
//   const isimDizisi = input2.split(" ");
//   //simdi donguye girip alacagimiz basharfleri icine atacagimiz bir bos string tanimladik
//   let basHarf = "";

//   for (let i = 0; i < isimDizisi.length; i++) {
//     const isimler = isimDizisi[i];
//     basHarf += isimler[0];
//   }
//   return basHarf;
// };
// console.log(basHarfYazdir(input2));
//?---------------pratik------------------------------



//! 1. Yüksek Fiyatlı Ürün Kategorileri

// Size, her biri bir ad, fiyat ve kategoriye sahip bir ürün koleksiyonunu temsil eden bir dizi nesne verilir. Göreviniz, her kategorideki ürünlerin ortalama fiyatını hesaplamak için map, filter ve reduce kullanmak ve ardından yalnızca ortalama fiyatı 50'nin üzerinde olan kategorileri içeren bir dizi nesne döndürmektir.
//? soru

// const products = [
//     { name: "Product 1", price: 20, category: "Electronics" },
//     { name: "Product 2", price: 30, category: "Clothes" },
//     { name: "Product 3", price: 40, category: "Electronics" },
//     { name: "Product 4", price: 50, category: "Clothes" },
//     { name: "Product 5", price: 60, category: "Clothes" },
//     { name: "Product 6", price: 70, category: "Electronics" },
//     { name: "Product 7", price: 80, category: "Clothes" },
//     { name: "Product 8", price: 90, category: "Electronics" },
//   ];
//? uzun yol
// const arr = products.filter((item) => item.category === "Electronics");
// const ort = arr.reduce((acc, x) => (acc += x.price), 0) / arr.length;
// console.log(arr);

// console.log(ort);

// const arr1 = products.filter((item) => item.category === "Clothes");
// const ort1 = arr.reduce((acc, x) => (acc += x.price), 0) / arr.length;
// console.log(arr1);
// console.log(ort1);
//? 2.yol

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

//productsteki urunleri kategoriye ayirmak icin once reduce kullandik.(reducedan sonra obje doner)
//reduce islemi sirasinda categoriAyir dizinine urunun kategorisini atiyoruz.
//if (!acc[categoriAyir]) bu kosulu kullanarak acc adinda bir objenin categoriAyir adinda bir ozelligi var mi kontrol ediliyor.her bir kategorinin urunlerinin icine atilacagi bos bir array tanimlandi
//ardindan acc[categoriAyir] (kategoriye ait dizi) uzreindeki push methodu ile urunler kategorilerine gore dizilere atilir
//son olarak her dongu adiminda guncellenen acc objesi bir sonraki adima devredilir

//reduce işlemi sırasında tanımlanan boş {} objesi, başlangıç değeri olarak kullanılan bir birikimci (accumulator) olarak hizmet eder. Bu, reduce fonksiyonunun ilk döngü adımında birikimciye atanacak başlangıç değeridir.

// Başlangıç değeri olarak boş bir obje kullanıldığı için {} ifadesi kullanılmıştır. Bu, kategorilere göre gruplanacak olan ürünleri tutmak için bir nesne oluşturmaya başlamak için uygun bir başlangıç noktasıdır.

//acc[categoriAyir] ifadesi, JavaScript'te bir objenin özelliğine erişmek veya bir objeye yeni bir özellik eklemek için kullanılan bir gösterimdir.

// JavaScript'te objeler, key-value (anahtar-değer) çiftleri şeklinde bilgi saklamak için kullanılır. Bir objenin bir özelliğine erişmek veya bir objeye yeni bir özellik eklemek için, obje üzerinde nokta (.) veya köşeli parantez ([]) gösterimini kullanabilirsiniz.

// acc[categoriAyir] ifadesinde, acc bir objeyi temsil eder. categoriAyir ise bir değişken olup, bir özelliğin adını tutar. Bu ifade, acc objesinin categoriAyir adlı özelliğine erişmek veya bu özelliği oluşturmak için kullanılır.

const newArray = products.reduce((acc, x) => {
  const kategori = x.category;
  if (!acc[kategori]) {
    acc[kategori] = [];
  }
  acc[kategori].push(x);
  return acc;
}, {});
console.log(newArray);
//-----------------------------------------------------------
const fiyatOrtalama = Object.keys(newArray).map((category) => {
  const sum = newArray[category].reduce((acc, x) => acc + x.price, 0);
  return {
    category: category,
    ortalama: (sum / newArray[category].length).toFixed(1),
  };
});
console.log(fiyatOrtalama);

//cozumun ikinci asamasinda newArray nesnesinde islem yaparak her kategori icin bir ortalama hesaplamasi yapr ve sonuclari fiyatOrtalama adli diziye aktarir

// İlk olarak, Object.keys(newArray) ifadesi kullanılarak newArray nesnesinin tüm anahtarları (kategori isimleri) bir dizi olarak alınır. Bu dizi, her bir kategoriye karşılık gelen bir diziye erişimi kolaylaştırır.Daha sonra, map fonksiyonu kullanılarak her kategori için aşağıdaki adımlar gerçekleştirilir:

// Daha sonra, map fonksiyonu kullanılarak her kategori için aşağıdaki adımlar gerçekleştirilir

// category adında bir parametre alınır, bu kategori ismini temsil eder.

// İçeride, sum adında bir değişken tanımlanır ve başlangıç değeri olarak 0 atanır. Bu değişken, kategorideki ürünlerin toplam fiyatını saklamak için kullanılır.

// İç içe geçmiş bir reduce işlemi kullanılarak newArray[category] (kategoriye ait ürünlerin dizisi) üzerinde dönülür. Her bir ürün için aşağıdaki adımlar gerçekleştirilir:

// a. Redüksiyon işlemi sırasında, her ürünün fiyatı (x.price) toplama eklenir.

// b. Başlangıçta verilen 0 değeri ve ürün fiyatları üzerindeki toplam, sonunda sum değişkeninde biriktirilir.

// Ardından, return ifadesi kullanılarak bir nesne döndürülür. Bu nesne, her kategori için kategori adını (category) ve ortalama fiyatı ((sum/newArray[category].length).toFixed(1)) içerir. Ortalama fiyat, kategorideki ürünlerin toplam fiyatının kategoriye ait ürün sayısına bölünmesiyle elde edilir ve toFixed(1) metoduyla ondalık basamak sayısı bir olarak sınırlanır.
