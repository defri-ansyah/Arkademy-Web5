let seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    let err = ''
    if  (typeof nilaiAwal != 'number' || typeof nilaiAkhir  != 'number'){
		err += 'Data harus number \n';
	}
    if  (!Array.isArray (dataArray)){
		err += 'Data harus array \n';
    }
    if (nilaiAwal>nilaiAkhir){
        err += 'Nilai akhir harus lebih besar dari nilai awal \n';
    }
    if (dataArray.length <= 5){
        err += 'Jumlah array kurang dari lima \n';
    }
    if (err.length != 0){
        return err 
    }
    dataArray.sort((a,b) => a-b);

    output = dataArray.filter((nilai) => {
        return nilai >= nilaiAwal && nilai <=nilaiAkhir;
    })
    if (output.length === 0) {
        return 'Jumlah angka dalam dataArray tidak ada';
    }
    return output;
}

console.log(seleksiNilai(10, 20, [30,10,15,5,12,40]));