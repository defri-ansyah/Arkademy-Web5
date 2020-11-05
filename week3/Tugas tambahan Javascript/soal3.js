function divideAndSort(num) {
    if  (typeof num != 'number'){
      return 'Data harus number';
    }
    let n = num.toString();
    let hasil = n.split('0');
    for (let i = 0; i < hasil.length; i++){
      const sort = hasil[i].split('').sort((a,b) => a-b).join('');
      hasil[i] = sort;
    }
    return parseInt(hasil.join(''));
  }
  console.log(divideAndSort(5956560159466056));
//   let y =divideAndSort(5956560159466056)
//   console.log(typeof(y));