//String adalah type data primitif

let str = "Welcome"
let message = "You need prayed"
console.log(str)
console.log(message)

// ES6 with ``
let ES6 = `Tutor dek`
console.log(ES6)

let character = `"I'm Good", Sorry"`
console.log(character)

//add var in string
let nama = "Aldo"
let answer = "Nice to meet you"
let text = `Hi, I'm ${nama}\n${answer} ${nama}`
console.log(text)

//t = tab , n = turunkan text
let pesan1 = 'ini adalah\tcontoh\n string"'
console.log(pesan1)

//mengecek panjang karakter string
let cek = "Aldo Wiranata"
console.log(cek.length)
//mengambil huruf tertentu
//dengan index dimulai dari 0
//dengan array dari 1
let get = "alwi"
console.log(get[0])

let namaDepan = "Aldo"
let namaBelakang = "Wiranata"
let name1 = namaDepan + " " + namaBelakang
console.log(name1)

//penggabungan secara rekursif
let nmClass = "btn"
nmClass += " btn-primary"
nmClass += " null"
console.log(nmClass)

//mengkonversi
let status = false // boolean false
let sts1 = status.toString() // mengkonversi type boolean false menjadi type string false
let back = Boolean(sts1) //mengecek variabel sts1 dengan Boleean yang hasilnya true karena ada nilai string di dalamnya

console.log(back)
