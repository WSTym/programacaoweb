var a = 10
var b = 40
var c = "Maria"
var d = 105.50
var e = true
var f = null

document.write('a = '+a+'<br>')
document.write('b = '+b+'<br>')
document.write('c = '+c+'<br>')
document.write('d = '+d+'<br>')
document.write('e = '+e+'<br>')
document.write('f = '+f+'<br><br>')

f = a 
a = b
b = f

f = c 
c = d
d = f

document.write('a = '+a+'<br>')
document.write('b = '+b+'<br>')
document.write('c = '+c+'<br>')
document.write('d = '+d+'<br><br>')

console.log('a = '+a)
console.log('b = '+b)
console.log('c = '+c)
console.log('d = '+d)

f = d 
d = e
e = f

document.write('d = '+d+'<br>')
document.write('e = '+e+'<br><br>')

console.log('d = '+d)
console.log('e = '+e)