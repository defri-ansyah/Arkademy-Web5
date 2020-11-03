const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;
const nilai = (mtk + bahasaIndonesia + bahasaInggris + ipa)/4;
console.log('Rata-rata = '+ nilai);
if(nilai >= 90){
    console.log("Grade = A");
}else if(nilai >= 80){
    console.log("Grade = B");
}else if(nilai >= 70){
    console.log("Grade = C");
}else if(nilai >= 60){ 
    console.log("Grade = D");
}else {
	console.log("Grade = E");
}