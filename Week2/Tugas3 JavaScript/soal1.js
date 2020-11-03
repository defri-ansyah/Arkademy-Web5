const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find ((item)=>{
                return item === day
            })
            if (cek){
                resolve (cek)
            }else{
                reject (new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}
//then catch
cekHariKerja('senin')
.then((res)=>{
     console.log(res);
})
.catch((err)=>{
    console.log(err.message)
})

//try catch
const resultData = async()=>{
    try {
        const result = await cekHariKerja('minggu')
    console.log(result)
    }
    catch (err)  { 
        console.log(err.message);
    }
}
resultData()