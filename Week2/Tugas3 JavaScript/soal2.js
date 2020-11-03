const getmonth = (callback) => {
    setTimeout (()=>{
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'July', 'August', 'September', 'Oktober', 'November', 'Desember'];
        if (!error){
            callback (null,month)
        } else{
            callback(new Error('Sorry Data Not Found',[]))
        }
    },4000)
}
getMonth = (err, month) => {
    if (err !== null){
    console.log(err.message); 
    }
    else {
        month.map ((item) => {
        console.log(item);
    })
}
}
getmonth(getMonth)