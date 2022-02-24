const kontak = require ('./lib/func.js')

const main = async () => {
  const nama = await kontak.tanya('Nama: ')
  const email = await kontak.tanya('Email: ')
  const hp = await kontak.tanya('Nomor hp: ')
  
  //save

  kontak.simpan(nama, email, hp)
}

main()





