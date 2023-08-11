//Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ?

let firstAddNumber = Number(prompt("sayi giriniz"));
let secondAddNumber = Number(prompt("ikinci sayiyi giriniz"));
console.log(firstAddNumber + secondAddNumber);

//Örnek-2
/* 
Kullanıcıdan aldığımız sayıyı dereceden fahrenhyat'a çeviren JS kodu yazınız ?
Formül: (derece*9/5)+32 
*/

let celsius = Number(prompt("derece giriniz"));
console.log((celsius * 9 / 5) + 32);

//Örnek-3
// y=3x+4k ==>1.dereceden 2 bilinmeyenli denklem algoritması
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?

let x = Number(prompt("x degerini giriniz"));
let k = Number(prompt("k degerini giriniz"));
console.log(x * 3 + 4 * k);


// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))

// Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin

let number = Math.round(Math.sqrt(Math.pow(Math.round(Math.abs(-5.9)), 2))) / 5;
console.log(number);
let n = Math.min(1, 5);
if (n % 2 === 0) {
  n = n + 3;
} else {
  n = n + 5;
}

console.log(n);

// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// NOT: cast kullalım ?

let isPos = Number(prompt("sayi giriniz"));
console.log(isPos < 0 ? "negatif" : "pozitif");

// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

let firstPassword = prompt("sifre giriniz");
let secondPassword = prompt("tekrar sifre giriniz");
firstPassword === secondPassword
  ? console.log("sifre dogru")
  : console.log("sifre yanlis");
