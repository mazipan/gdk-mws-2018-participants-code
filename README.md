# gdk-mws-2018-participants-code

Dokumentasi kode untuk Google Developer Kejar - Mobile Web Specialist 2018

## Bagaimana menambahkan file kalian?

+ Fork repo ini, kalau belum bisa cara fork bisa baca artikel https://help.github.com/articles/fork-a-repo/
+ Buat `branch` dengan nama kalian, misal `participants/IrfanMaulana`. Baca artikel ini https://help.github.com/articles/creating-and-deleting-branches-within-your-repository/
+ Setelah membuat branch tersebut, kalian akan bekerja di branch itu dengan langkah kurang lebih seperti pada poin selanjutnya
+ Pastikan kalian membuat folder dengan nama kalian terlebih dahulu, seperti sudah saya contohkan dengan folder `IrfanMaulana`
+ Tiap folder paling tidak memuat satu file `readme.md` yang diisi dengan **nama** dan **email** kalian masing-masing.
+ Jika telah selesai, buatlah `pull request` ke repository ini ke branch `master`. Baca artikel https://help.github.com/articles/creating-a-pull-request/ 
+ Pastikan di `pull request` tersebut kalian sebutkan nama kalian di judul pull request-nya.
+ **Selamat Belajar!!!**

## Menambahkan menggunakan `submodule`

+ Buat repository baru di akun kalian, dan tambahkan file disana
+ Tambahkan submodule di repo ini dengan cara:

```shell
# Run
git submodule add [URL_REPOSITORY] FOLDER_NAME
# Example
git submodule add https://github.com/DeriKurniawan/DeriKurniawanMWS DeriKurniawan
# Update Submodule
git submodule update --recursive
```

+ Buat pull request ke repo ini branch `master`

## Development Web 

+ `yarn run dev` untuk development di lokal
+ `yarn run dist` untuk menmbuat file production

## Jangan lupa untuk tekan ⭐ pada repository ini


--------

Copyright © 2018

