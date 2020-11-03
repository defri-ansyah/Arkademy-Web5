// 1. String concat
//     Method ini menambahkan dua atau lebih string dan mengembalikan satu string baru. contoh syntax: 
    let str1 = new String( "This is string one" );
    let str2 = new String( "This is string two" );
    let str3 = str1.concat( str2 );      
    console.log("Concatenated String :" + str3);
// 2. String length
//     method ini menghitung dan mengembalikan jumlah karakter dalam string. contoh syntax:
    let str = new String( "This is string" );
    console.log("str.length is: " + str.length);
// 3. String match
//     Method ini digunakan untuk mengambil kecocokan saat mencocokkan string dengan ekspresi reguler. contoh syntax:
    let totn_string = 'TechOnTheNet';
    console.log(totn_string.match(/[A-Z]/g));
// 4. String replace
//     Metode ini menemukan kecocokan antara ekspresi reguler dan string, dan mengganti substring yang cocok dengan     substring baru. contoh syntax:
    const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
    console.log(p.replace('dog', 'monkey'));
// 5. String toLowerCase
//     Method ini untuk mengubah semua string menjadi kecil semua. contoh syntax:
    let kalimat = "Belajar JAVASCRIPT Arkademy";   
    let a = kalimat.toLowerCase();
    console.log(a);
//6. String toUpperCase
//     Method ini untuk mengubah semua string menjadi besar semua. contoh syntax:
    let kalimat = "Belajar JAVASCRIPT Arkademy";   
    let a = kalimat.toUpperCase();
    console.log(a);
//7. String split
//     Split digunakan untuk membagi string menjadi array substring dan mengembalikan array baru tanpa mengubah string asli. contoh syntax:
     let arka = "We Are Bootcamp ARKADEMY Family";
     let hasil1 = dumet.split(" ");
     let hasil2 = dumet.split("");
     let hasil3 = dumet.split(" ", 4);
     let hasil4 = dumet.split("o");
     console.log(hasil1 + " <br>  " + hasil2 + "<br>" + hasil3 + "<br> " + hasil4);
//8. Array join
//      mengonversi string dari semua elemen array dengan menggabungkannya menjadi sebuah string. Jika elemen bernilai undefined atau null, akan dikonversi menjadi string kosong. contoh syntax:
     let a = ['Angin', 'Air', 'Api'];
     let variabel1 = a.join();      
     let variabel2 = a.join(', ');  
     let variabel3 = a.join(' + '); 
     let variabel4 = a.join('');
     console.log(variabel3);
//9. Array filter 
//      Fungsi filter() membuat array baru berisi elemen yang lolos pengecekan di dalam fungsi anonim yang dikirim sebagai parameter. contoh syntax:
     const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
     let longWords = words.filter(word => word.length > 6);
//      console.log(longWords);
//10. Array Foreach
//      method forEach () menjalankan fungsi yang disediakan satu kali untuk setiap elemen array. contoh syntax:
    const array1 = ['a', 'b', 'c'];
    array1.forEach(element => console.log(element));