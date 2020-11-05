let a = 'saya belajar JavaScript'
let b = ''
let c = a.split(' ')
b = c[c.length -1];
for (let i = c.length -2; i >= 0; i--) {
 b +=' ' + c[i]
}
console.log(b);