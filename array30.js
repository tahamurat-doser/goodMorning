const company = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amozon",
];
console.log(company);
const len = company.length;
const middle = Math.floor(len / 2);

console.log(middle);

if (len % 2 === 0) {
  company.splice(middle - 1, 2);
} else {
  company.splice(middle, 1);
}
console.log(company);

console.log(company.splice());

company.pop();

console.log(company);

company.splice(0, company.length);
console.log(company);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let cleanedText = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
console.log(cleanedText);

let wordArr = cleanedText.split(" ");
console.log(wordArr);
console.log(wordArr.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");

console.log(shoppingCart);

shoppingCart.push("Sugar");

console.log(shoppingCart);

/* 
console.log(words)

console.log(words.length) */

/* Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description. */

const personAccount = {
  firstName: "",
  lastName: "",
  incomes: [],
  expenses: [],
  totalIncome: function () {
    return this.incomes.reduce((total, income) => total + income.amount, 0);
  },
  totalExpense: function () {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  },
  accountInfo: function () {
    return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Total Income: ${this.totalIncome()}, Total Expense: ${this.totalExpense()} `;
  },
  addIncome: function(description, amount) {
    this.incomes.push({description: description, amount: amount});
  },
  addExpense: function(description, amount) {
    this.expenses.push({description: description, amount: amount});
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  }
  
};
console.log(personAccount);
personAccount.addIncome("maas", 500)

console.log(personAccount);

const users = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ]
  function signUp(user){
    const existingUser = users.find(u => u.username === user || u.email === user);
    if (existingUser) {
      return "zaten bir hesabınız var.";

    }else {
      users.push(user);
      return "hesabınız oluşturuldu.";
    }
  }
 
  console.log( signUp('thomas@thomas.com'));
  console.log( signUp('thom'));
  console.log( signUp('martha@martha.com'));

  function signIn(username, password) {
    const user = users.find( u => u.username === username && u.password === password);
    if (user) {
      
      return "başarıyla giriş yaptınız."
     

    }else {
      return "kullanıcı adı veya şifre hatalı."
    }
  }
  console.log(signIn("Alex",'123123' ));
  console.log(signIn("Alex",'123124' )); 
   const numbers = [1, 2, 3, 4, 5, 6]
   const sum = numbers.reduce((acc, val) => acc + val, 0)
   console.log(sum);

   const product = numbers.reduce((acc, val) => acc * val, 1)
   console.log(product);

   const filtrelenmis = numbers.reduce((acc, val) => {
    if (val % 2 === 0) {
      acc.push(val);
    }
    return acc;
   }, [])
   console.log(filtrelenmis);

   const numberObject = numbers.reduce((acc, val, index) => {
    acc[`number_${index}`] = val;
    return acc
   }, {})
   console.log(numberObject);

   /* numbers adlı bir dizi tanımlanıyor. Bu dizi [1, 2, 3, 4, 5, 6] sayılarını içeriyor.
reduce fonksiyonu bu dizinin üzerinde çağrılıyor. Bu fonksiyon, bir dizi üzerinde gezinir ve her bir eleman için bir işlem yapar. Bu işlem sonucunda tek bir değer döndürülür.
reduce fonksiyonu iki parametre alır: bir işlem ve bir başlangıç değeri. İşlem bir fonksiyon olup, bu örnekte bir ok fonksiyonu ((acc, val, index) => {...}) olarak tanımlanmıştır. Başlangıç değeri ise bir boş obje ({}).
İşlem fonksiyonu üç parametre alır: birikimci (acc), mevcut değer (val) ve mevcut indeks (index). Bu örnekte, birikimci bir obje, mevcut değer dizinin mevcut elemanı ve mevcut indeks ise dizinin mevcut indeksidir.
İşlem fonksiyonu, birikimci objeye yeni bir özellik ekler. Bu özellik adı number_${index} şeklinde bir string ve değeri dizinin mevcut elemanıdır.
İşlem fonksiyonu her bir dizi elemanı için çağrıldığında, birikimci obje güncellenir ve sonraki adımda kullanılır.
reduce fonksiyonu tüm dizi elemanları üzerinde gezindikten sonra, birikimci objeyi döndürür. Bu obje, dizi elemanlarının objeye dönüştürüldüğü sonuçtur.
Sonuç, numberObject adlı bir değişkene atanır ve console.log(numberObject); ile konsola yazdırılır.
Bu kod parçası, bir diziyi bir objeye dönüştürmek için oldukça yaygın bir yöntemdir. Her bir dizi elemanı, objenin bir özelliği haline gelir. Bu, dizileri ve objeleri birbirine dönüştürmek için JavaScript’teki reduce fonksiyonunun gücünü gösterir. Bu kod parçası, dizinin elemanlarını objenin özelliklerine dönüştürürken indeksleri de kullanır, bu da ekstra bir esneklik sağlar. Bu sayede, dizi elemanlarını objenin özelliklerine dönüştürürken her bir özelliğe benzersiz bir ad verilebilir. */

const data = [
  {name: "Alice", age:31, job: "Developer"},
  {name: "Bob", age:25, job: "Taxi Driver"}, 
  {name: "Charlie", age:31, job: "Developer" },
  {name:"Ahmet", age:35, job:"Taxi Driver"}
];
 const groupedAge = data.reduce((acc, val) => {
  const key = val.age;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(val);
  return acc;
 }, {});
 console.log(groupedAge);

 /* data adlı bir dizi tanımlanıyor. Bu dizi, isim ve yaş özelliklerine sahip objeleri içeriyor.
reduce fonksiyonu bu dizinin üzerinde çağrılıyor. Bu fonksiyon, bir dizi üzerinde gezinir ve her bir eleman için bir işlem yapar. Bu işlem sonucunda tek bir değer döndürülür.
reduce fonksiyonu iki parametre alır: bir işlem ve bir başlangıç değeri. İşlem bir fonksiyon olup, bu örnekte bir ok fonksiyonu ((acc, val) => {...}) olarak tanımlanmıştır. Başlangıç değeri ise bir boş obje ({}).
İşlem fonksiyonu iki parametre alır: birikimci (acc) ve mevcut değer (val). Bu örnekte, birikimci bir obje ve mevcut değer dizinin mevcut elemanıdır.
İşlem fonksiyonu, mevcut değerin yaşını (val.age) bir anahtar olarak kullanır. Eğer birikimci objede bu anahtar yoksa, bu anahtarı bir boş dizi ile birlikte birikimci objeye ekler.
Daha sonra, işlem fonksiyonu mevcut değeri (yani mevcut objeyi) bu anahtarın değerine ekler. Bu, yaşları aynı olan objelerin aynı diziye eklenmesini sağlar.
İşlem fonksiyonu her bir dizi elemanı için çağrıldığında, birikimci obje güncellenir ve sonraki adımda kullanılır.
reduce fonksiyonu tüm dizi elemanları üzerinde gezindikten sonra, birikimci objeyi döndürür. Bu obje, dizi elemanlarının yaşlarına göre gruplandırıldığı sonuçtur.
Sonuç, groupedAge adlı bir değişkene atanır ve console.log(groupedAge); ile konsola yazdırılır.
Bu kod parçası, bir diziyi bir objeye dönüştürmek için oldukça yaygın bir yöntemdir. Her bir dizi elemanı, objenin bir özelliği haline gelir. Bu, dizileri ve objeleri birbirine dönüştürmek için JavaScript’teki reduce fonksiyonunun gücünü gösterir. Bu kod parçası, dizinin elemanlarını objenin özelliklerine dönüştürürken indeksleri de kullanır, bu da ekstra bir esneklik sağlar. Bu sayede, dizi elemanlarını objenin özelliklerine dönüştürürken her bir özelliğe benzersiz bir ad verilebilir. JavaScript’teki ! işareti, bir ifadenin mantıksal değerini tersine çevirir. Yani, bir ifade true ise, ! işareti onu false yapar ve tam tersi.

Bu kod parçasında !acc[key] ifadesi, acc objesinde key adında bir özelliğin olup olmadığını kontrol eder. Eğer acc[key] ifadesi undefined veya null ise, bu ifade false değerine sahip olur. Ancak ! işareti bu değeri true yapar. Yani, !acc[key] ifadesi, acc objesinde key adında bir özelliğin olmadığını kontrol eder.

Eğer acc objesinde key adında bir özelliği yoksa, acc[key] = []; satırı bu özelliği boş bir dizi olarak ekler. Bu, acc objesinde her yaş için bir dizi oluşturur. Bu diziler, aynı yaşa sahip olan kişileri gruplamak için kullanılır.*/
  const groupedJob = data.reduce((acc, value) => {
    const key = value.job;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(value);
    return acc;
  }, {})
  console.log(groupedJob);

 /*  yaşalrın toplamını bulma */

 const totalAge = data.reduce((acc, value) => acc + value.age, 0);
 console.log(totalAge);


 

  const numbers1 = [3, 1, 2, 6, 7, 8, 11, 34]
  const min = numbers1.reduce((acc, val) => Math.min(acc, val), Infinity);

  console.log(min);

  const max = numbers1.reduce((acc, val) => Math.max(acc,val), -Infinity)

  console.log(max);

  const words = ["efendim", "Merhabalar","!"]

  const concatenated = words.reduce((acc, val) => acc + " " + val, "")

  console.log(concatenated);

  /* const words1 = ["efendim", "Merhabalar","!"]

  const concatenated1 = words.reduce((acc, val, index) => `${value} `)

  console.log(concatenated1); */






