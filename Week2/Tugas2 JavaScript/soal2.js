const searchString = (search, word) => {
    let hasString = false;
    for (let i = 0; i < word.length; i++) {
        if (search.toLowerCase() === word.slice(i, i + search.length).toLowerCase()) {
            hasString = true;
            break;
        }   
    }
    return hasString;
}
const searchName = (search, max, callback) => {
    const name = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
        'Ella', 'Faith', 'Olivia', 'Penelope'
    ];
    let find = [];
    for (let i = 0; i < name.length; i++) {
        if (find.length >= max) {
            break;
        }
        if (callback(search, name[i])){
            find.push(name[i]);
        }
    }
    return find;
}
console.log(output = searchName('an', 3, searchString));