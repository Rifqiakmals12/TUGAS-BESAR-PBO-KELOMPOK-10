const prompt = require('prompt-sync')()

// Function Pelanggan dengan Constructor
function Pelanggan(nama, noRek, namaBank, tanggal,idTransaksi){
  this.nama = nama
  this.noRek = noRek
  this.namaBank = namaBank
  this.tanggal = tanggal
  this.idTransaksi = idTransaksi
}

// Object rumus konfersi mata uang
var rumus = {
  IDRTOUSD : function(rupiah){
      return jumlah = parseFloat(rupiah / 13.924) * 0.001
  },

  IDRTOJPY : function(rupiah){
    return jumlah = parseFloat(rupiah / 135.42)
  },

  IDRTOSAR : function(rupiah){
    return jumlah = parseFloat(rupiah / 3.711) * 0.001
  },

  IDRTOEUR : function(rupiah){
    return jumlah = parseFloat(rupiah / 17.087) * 0.001
  },

  IDRTOTHB : function(rupiah){
    return jumlah = parseFloat(rupiah / 464.75)
  }
}

// Funtion printStruk untuk mencetak struk penukaran mata uang
function printStruk(noRekStruk){
  let kondisi = false
  for(let i=0; i < array.length; i++){
    if(array[i].noRek == noRekStruk){
        console.log('================================ STRUK ================================')
        console.log()
        console.log(`Nama\t\t\t\t\t  : ${array[i].nama}`)
        console.log(`Nomer Rekening\t\t\t  : ${array[i].noRek}`)
        console.log(`Asal Bank\t\t\t\t  : ${array[i].namaBank}`)
        console.log(`Tanggal Transaksi\t\t  : ${array[i].tanggal}`)
        console.log(`Nominal Yang Ditukar (Rp) : ${array[i].rupiah}`)
        console.log(`Jumlah Uang\t\t\t\t  : ${array[i].jumlah.toFixed(2)} `)
        console.log('=======================================================================')
        console.log('| Tukarkan struk ini di bank atau tempat penukaran mata uang terdekat |')
        console.log('=======================================================================')
        kondisi = true
        break
    }
  }
  if(kondisi == false){
    console.log('No Rekening Yang Anda Masukkan Salah')
  }
}

// Function printRiwayat untuk menampilkan riwayat penukaran uang 
function printRiwayat(noRekRiwayat){
  let kondisi = false
  for(let i=0;i<array.length;i++){
    if(array[i].noRek == noRekRiwayat){
        console.log('================== Riwayat Penukaran ==================')
        console.log()
        console.log(`Tanggal Transaksi\t\t\t : ${array[i].tanggal}`)
        console.log(`ID Transaksi\t\t\t\t : ${array[i].idTransaksi}`)
        console.log(`Nama Bank\t\t\t\t\t : ${array[i].namaBank}`)
        console.log(`Jumlah Uang Yang Ditukarkan\t : ${array[i].jumlah.toFixed(2)}`)
        console.log('=======================================================')
        kondisi = true
        break
    }
  }
  if(kondisi == false){
    console.log('No Rekening Yang Anda Masukkan Salah')
  }
}

// Function printPenukaran untuk menampilkan menu penukaran uang dan hasil konversi penukaran uang 
function printPenukaran(noRekPenukaran){
  let kondisi = false
  for(let i=0;i<array.length;i++){

    if(array[i].noRek == noRekPenukaran){

        console.log('<===== Penukaran Uang =====>')
        console.log('1. Rupiah ke Dollar(US)')
        console.log('2. Rupiah ke Yen(JPN)')
        console.log('3. Rupiah ke Riyal(ARB)')
        console.log('4. Rupiah ke Euro(ERP)')
        console.log('5. Rupiah ke Bath(THA)')
        console.log()
        let pilMataUang = prompt('Masukkan Pilihan\t: ')
        console.log()  

        if(pilMataUang == 1){
            console.log('<===== Rupiah ke Dollar(US) =====>')
            console.log('Informasi Kurs Tukar 1 Dollar(US) = Rp.13.924')
            console.log('Minimal Transaksi Penukaran (Rp.250.000)\n')
            
            let rupiah = prompt('Masukkan Nominal Rupiah\t: ')
            
            rumus.IDRTOUSD(rupiah)
            console.log()      
            console.log('Setelah Dikonversi\t:', jumlah.toFixed(2), 'Dollar(US)')
                  
            for(let i = 0; i < array.length; i++){
              if(array[i].noRek == noRekPenukaran){
                array[i].rupiah = rupiah
                array[i].jumlah = jumlah
              }
            }
          
          }else if(pilMataUang == 2){
            console.log('<===== Rupiah ke Yen(JPN) =====>')
            console.log('Informasi Kurs Tukar 1 Yen(JPN) = Rp.135.42')
            console.log('Minimal Transaksi Penukaran (Rp.250.000)\n')
              
            let rupiah = prompt('Masukkan Nominal Rupiah\t: ')
                      
            rumus.IDRTOJPY(rupiah)
            console.log()            
            console.log('Setelah Dikonversi\t:', jumlah.toFixed(2), 'Yen(JPN)')
                      
            for(let i = 0; i < array.length; i++){
              if(array[i].noRek == noRekPenukaran){
                array[i].rupiah = rupiah
                array[i].jumlah = jumlah
              }
            }
              
          }else if(pilMataUang == 3){
            console.log('<===== Rupiah ke Riyal(ARB) =====>')
            console.log('Informasi Kurs Tukar 1 Riyal(ARB) = Rp.3.711')
            console.log('Minimal Transaksi Penukaran (Rp.250.000)\n')
              
            let rupiah = prompt('Masukkan Nominal Rupiah\t: ')
                      
            rumus.IDRTOSAR(rupiah)
            console.log()            
            console.log('Setelah Dikonversi\t:', jumlah.toFixed(2), 'Riyal(ARB)')
                      
            for(let i = 0; i < array.length; i++){
              if(array[i].noRek == noRekPenukaran){
                array[i].rupiah = rupiah
                array[i].jumlah = jumlah
              }
            }
              
          }else if(pilMataUang == 4){
            console.log('<===== Rupiah ke Euro(ERP) =====>')
            console.log('Informasi Kurs Tukar 1 Euro(ERP) = Rp.17.087')
            console.log('Minimal Transaksi Penukaran (Rp.250.000)\n')
              
            let rupiah = prompt('Masukkan Nominal Rupiah\t: ')
                      
            rumus.IDRTOEUR(rupiah)
            console.log()            
            console.log('Setelah Dikonversi\t:', jumlah.toFixed(2), 'Euro(ERP)')
                      
            for(let i = 0; i < array.length; i++){
              if(array[i].noRek == noRekPenukaran){
                array[i].rupiah = rupiah
                array[i].jumlah = jumlah
              }
            }
              
          }else if(pilMataUang == 5){
            console.log('<===== Rupiah ke Bath(THA) =====>')
            console.log('Informasi Kurs Tukar 1 Bath(ERP) = Rp.464.75')
            console.log('Minimal Transaksi Penukaran (Rp.250.000)\n')
              
            let rupiah = prompt('Masukkan Nominal Rupiah\t: ')
                      
            rumus.IDRTOTHB(rupiah)
            console.log()                      
            console.log('Setelah Dikonversi\t:', jumlah.toFixed(2), 'Bath(THA)')
                      
            for(let i = 0; i < array.length; i++){        
              if(array[i].noRek == noRekPenukaran){
                array[i].rupiah = rupiah
                array[i].jumlah = jumlah 
              }      
            }
              
          }else{
            console.log('Maaf, inputan anda salah')
          }
      kondisi = true
      break
    }
  }
  if(kondisi == false){
    console.log('No Rekening Yang Anda Masukkan Salah')
  }
}

var array = [] // Deklarasi array
var cek = false // Deklarasi boolean cek bernilai false 

// Menggunakan perulangan do/while
do{
  // Tampilan menu Money Changer
  console.log()  
  console.log('<===== Menu Money Changer =====>')
  console.log('1. Registrasi')
  console.log('2. Penukaran Uang')
  console.log('3. Cetak Struk Penukaran Uang')
  console.log('4. Riwayat Penukaran')
  console.log('5. Exit')
  console.log()
  
  // Input pilihan menu
  let pil = prompt('Masukkan Pilihan\t: ')
  console.log()
   
  // Menggunakan percabangan switch case
  switch(pil){
  
     // Jika pil = 1, maka akan menjalankan perintah program (Registrasi)
    case '1':
      console.log('<===== Registrasi =====>')
      let nama = prompt('Masukkan Nama\t\t\t\t: ')
      let noRek= prompt('Masukkan Nomer Rekening\t\t: ')
      let namaBank = prompt('Masukkan Asal Bank\t\t\t: ')
      let tanggal = prompt('Masukkan Tanggal Transaksi\t: ')
      let idTransaksi = Math.floor(Math.random() * 10000000)
          
      let pelanggan = new Pelanggan(nama,noRek,namaBank,tanggal,idTransaksi) 
      array.push(pelanggan)

      break
    

    // Jika pil = 2, maka akan menjalankan perintah program (Penukaran Uang)
    case '2':
      let noRekPenukaran = prompt('Masukkan Nomer Rekening\t: ')  
      console.log()
      
      printPenukaran(noRekPenukaran)

      break
  
    // Jika pil = 2, maka akan menjalankan perintah program (Cetak Struk Penukaran Uang)  
    case '3':
      console.log('<===== Cetak Struk Penukaran Uang =====>')
      console.log()
      let noRekStruk = prompt('Masukkan No Rekening\t : ')
      console.log()
      printStruk(noRekStruk)
    break
          
  
    // Jika pil = 4, maka akan menjalankan perintah program (Data Riwayat Transaksi Penukaran)
    case '4':
      let noRekRiwayat = prompt('Masukkan No Rekening\t : ')
      console.log()
      printRiwayat(noRekRiwayat)
    break
    
  
    // Jika pil = 5, maka program akan berhenti
    case '5':
      cek = true
      console.log('Terima Kasih, Sampai Jumpa Lagi')
      console.log()
    break
  
  // Jika user salah menginputkan pilihan makan akan ada pemberitahuan
  // ('Maaf, inputan anda salah')
    default:
      console.log('Maaf, inputan anda salah')
    break
  }
  
// Program akan terus berulang jika cek bernilai true 
}while(!cek)
