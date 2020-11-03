let printSegitiga = (row) => {
	if  (typeof row != 'number')
	{
		console.log('Data harus number');
		return;
	}
	for (let i = 1; i <= row; i++) {
		let num = '';
		for (let j = 1; j <= row-i +1; j++) {
			num += j;
		}
		console.log(num);
	}
}
printSegitiga(5);