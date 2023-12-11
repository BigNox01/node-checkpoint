var generator=require('generate-password')
// creating password
var password=generator.generate({
    length:10,
    numbers:true
})
console.log(password)