const fs = require('fs')
const readline = require('readline')


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

//Cek dan buat folder jika tidak ada
const locationDir = './data'
if(!fs.existsSync(locationDir)){
  fs.mkdirSync(locationDir)
}
//jika file blm ada
const datanya = './data/contacts.json'
if(!fs.existsSync(datanya)){
  fs.writeFileSync(datanya, '[]', 'utf-8')
}




//Menanyakan
const tanya = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama)
    })
  })
}


const simpan = (nama, email, hp) => {
  
const contact = { nama, hp, email }
  
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const kontak = JSON.parse(file)
    kontak.push(contact)
    fs.writeFileSync('data/contacts.json', JSON.stringify(kontak))
    
    console.log(`Terimakasih ${nama}, anda telah menginputkan data!`)
    
    console.log(kontak)
    rl.close()
}


    




module.exports = { tanya, simpan }