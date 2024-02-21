const company = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

let buyukHarf = company.map(function (a) {
  return a.toLocaleUpperCase();
});
console.log(buyukHarf);

let sentence =
  company.slice(0, -1).join(", ") + " and  " + company[company.length - 1];

console.log(sentence);

let arama = "Arcelik";

console.log(company.sort());
console.log(company.reverse());

const dilimli = company.slice(0, 3);
console.log(dilimli);

console.log(company.slice(-3));
console.log(company.slice(4));

const ortadaki = Math.floor(company.length / 2);
console.log(ortadaki);

const ogrİsim = ["ahmet", "ismet", "saffet"];
const ogrSoyisim = ["yılmaz", "can", "baki"];
const ogrAdres = ["kadıköy", "şebinkarahisar", "seferihisar"];

console.log(`${ogrİsim[0]}- ${ogrSoyisim[0]}- ${ogrAdres[0]} `);

const kisi = {
  isim: "Ahmet", //ilk yazılan key :'den sonrası value
  soyİsim: "Yılmaz",
  kimlikNo: "123123341112",
  maas: 70000,
  ehliyet: true,
  diller: ["english", "arabic", "urartuca"],
  notlar: { mat101: "AA", tur101: "BB", ece101: "AA" },
  dogumTarihi: 1990,
  yasHesapla: function () {
    return new Date().getFullYear() - this.dogumTarihi;
  },
};
console.log(kisi.isim);
console.log(kisi.maas);
console.log(kisi.diller[1]);
console.log(kisi.notlar.ece101);

console.log(kisi.yasHesapla());

console.log(kisi["notlar"]["tur101"]);

/* const secici = prompt(
  "kişinin hangi bilgisini öğrenmek istersiniz? isim, soyisim, kimlikno, maas, dogum, yashesapla??"
); */

/* console.log(kisi[secici]);
console.log(kisi.secici); */
console.log(kisi);

kisi.dogumTarihi = 2000;
console.log(kisi);
kisi.diller = "türkçe-latince";
kisi.kilo = 80;

kisi["ehliyet"] = false;

const kisiler = {
  ahmet: {
    soyİsim: "Yılmaz",
    kimlikNo: "123123341112",
    maas: 70000,
  },
  mehmet: {
    soyİsim: "Ozturk",
    kimlikNo: "1696571112",
    maas: 50000,
  },
};
console.log(kisiler.ahmet.soyİsim);
console.log(kisiler.mehmet.maas);
console.log(kisiler["mehmet"]["kimlikNo"]);

const people = [
  { isim: "ahmet", soyİsim: "Yılmaz", kimlikNo: "123123341112", maas: 70000 },
  { isim: "mehmet", soyİsim: "Ozturk", kimlikNo: "1696571112", maas: 50000 },
];
/* const key = prompt("Kişilerin hangi bilgilerini öğrenmek istersiniz? isim, soyİsim, kimlikNo, maas"); */
people.forEach((p) => console.log(p));
people.forEach((k) => console.log(k.isim));
people.forEach((l) => console.log(l.maas));

/* people.forEach((taa) => console.log(taa[key])) */

const people1= [
    {
      isim: "Ahmet",
      soyİsim: "Yılmaz",
      kimlikNo: "123123341112",
      maas: 70000,
      job: "developer",
    },
    {
      isim: "Mehmet",
      soyİsim: "Ozturk",
      kimlikNo: "1696571112",
      maas: 50000,
      job: "developer",
    },
    {
      isim: "Canan",
      soyİsim: "Can",
      kimlikNo: "33344571112",
      maas: 90000,
      job: "tester",
    },
  ]
  // toplam maaş hesabı içim 

 const tplam = people1.reduce((t, m) => t + m.maas, 0)
 console.log(tplam);

 const devs = people1.filter((p) => p.job === "developer")

 console.log(devs);

 const devsNames = people1.filter((p) => p.job === "developer").map((p) => `${p.isim}  ${p.soyİsim}`)
 console.log(devsNames);