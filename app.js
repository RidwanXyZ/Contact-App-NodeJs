const yargs = require('yargs')
const kontak = require ('./lib/func.js')


yargs.command({
  command: 'add',
  describe: 'Menambahkan kontak baru',
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: 'string',
    },
     email: {
      describe: "Email mu",
      demandOption: false,
      type: 'string',
   },
   nohp: {
     describe: "Nomor hp",
     demandOption: true,
     type: 'string'
   }
  },
  handler(argv){
     kontak.simpan(argv.nama, argv.email, argv.nohp)
  }
}).demandCommand();

//To display all name & mobile phone from contacts.JSON
yargs.command({
  command: 'list',
  describe: 'Unuk menampilkan list kontak!',
  handler(){
    kontak.displayj()
  },
})




yargs.parse()





