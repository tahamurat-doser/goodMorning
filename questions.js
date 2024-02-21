


function isimFormatlama (ad, soyad){
    console.log(ad);
    return `${soyad[0].toLoc}, ${ad} `;

}

const format = isimFormatlama("ali", "yılmaz")
console.log(format);
