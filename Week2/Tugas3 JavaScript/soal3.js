//soal3a
const getData = () => {
    return new Promise((resolve, reject)=>{
    let ajax = new XMLHttpRequest ();
    ajax.open ('GET', 'biodata.json')
    ajax.send();
    ajax.onreadystatechange = function () {
        if(ajax.status === 200){
            const result = JSON.parse(ajax.responseText)
            resolve(result)
            }else{
            reject(new Error('koneksi atau url salah'))
        }
    }
    })
}
getData()
.then((res)=>{
    const result = res
    result.map((item)=>{
        console.log(item.email)
    })
})
.catch((err)=>{
    console.log(err.message)
})

//soal3b
const cekStock = (stockItem)=>{
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const stockToko = ['pena', 'penggaris', 'penggaris', 'penghapus', 'rautan', 'spidol', 'tipex', 'tinta'];
            let cek = stockToko.find((item) =>{
                return item === stockItem
            })
            if (cek){
                resolve(`${stockItem} Tersedia`)
            } else {
                reject (new Error (`${stockItem} tidak tersedia`))
            }
        },3000)
    })
}
cekStock ('pensil')
.then ((res)=>{
    console.log(res);
})
.catch ((err)=>{
    console.log(err.message);
})