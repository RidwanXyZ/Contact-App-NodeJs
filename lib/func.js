const fs = require('fs')
const valid = require('validator')




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


const loadData = () => {
    const file = fs.readFileSync('data/contacts.json', 'utf-8')
    const kontak = JSON.parse(file)
  
  return kontak
}



const simpan = (nama, email, hp) => {
  
const contact = { nama, hp, email }
  
    //const file = fs.readFileSync('data/contacts.json', 'utf-8')
    //const kontak = JSON.parse(file)
    //const kontak = JSON.parse(file)
    const kontak = loadData()
    
    const checkExist = kontak.find((contact => contact.nama === nama))
    //if name exist
    if(checkExist){
      console.log('Gunakan nama lain!')
      return false
    }
    //email validator

    
    if(email){
      if(!valid.isEmail(email)){
        console.log('Format email salah!')
        return false
      }
    }
    
    
      if(!valid.isMobilePhone(hp, 'id-ID')){
        console.log('Berikan nomor hp valid!')
        return false
      }
      
    kontak.push(contact)
    fs.writeFileSync('data/contacts.json', JSON.stringify(kontak))
    
    console.log(`Terimakasih ${nama}, anda telah menginputkan data!`)
    
    console.log(kontak)
}

const displayj = () => {
  const data = loadData()
  data.forEach((list, i) => {
    text = `${i + 1} ${list.nama}  -  ${list.hp}`
    console.log(text)
  })
}

    




module.exports = { simpan, displayj }