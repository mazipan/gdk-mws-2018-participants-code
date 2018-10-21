// type at 11 september 2018
// add2numbers.js
function kalkulator()
{
    let angka = document.querySelectorAll('input'); // Memilih semua element 'input'
    let i1 =  parseInt(angka[0].value); // mengambil value input[0]
    let i2 = parseInt(angka[1].value);  // mengambil value input[1]
    let pesan = document.getElementById('tampil');
    if(!isNaN(i1)&&!isNaN(i2)) {
        angka[2].value = i1 + i2; // memberi value pada input[2]
        pesan.textContent = alert('Berhasil menambahkan!');
    } else {
        pesan.textContent = alert('Gagal menambahkan, Bukan Angka!');
    }
}

let tombol = document.querySelector('button');

tombol.addEventListener('click', kalkulator); // memberi event 'click' dengan menggunakan kalkulator()
