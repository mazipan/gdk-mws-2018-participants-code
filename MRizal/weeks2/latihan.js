var a = 100;
if (a > 0) {
	var a = 900;
	console.log(a); // Output: 900
}
console.log(a);
// Output: 900
// Jawab: Nilai a yang terakhir adalah 900

let b = 100;
if (b > 0) {
	let b = 900;
	console.log(b); // Output: 900
}
console.log(b);
// Output: 100
// Jawab: Nilai b yang terakhir adalah 100

// Arrow Functions
// Anonymous Functions

let f = () => console.log("Fat Arrow!"); // arrow functions.
f();
f;

let g = function () {
	console.log("Fungsi Anonymous");
}

let salam = function (nama) {
	console.log(`Hallo ${nama}, Selamat jumpa dengan kami`);
}

salam("Dastan");

let salam_juga = (nama) => {
		console.log(`Hallo ${nama}, Selamat jumpa dengan kami`);
		salam_juga("Anone");

		let myf = (a) {
			return a * a;
		}

		let myf = a => a * a;

		var obj = function () {
			return {
				nama: 'Badu',
				alamat: 'Jl. Biawak 200',
				kota: 'Manado'
			}
		}

		// IIFE (Immediately Invoke Functions Expression)

		var pegawai = (
			function () {
				return {
					nama: 'Badu',
					alamat: 'Jl. Biawak 200',
					kota: 'Manado'
				}
			}
		)(); // pegawai();

	var pegawai = (

		function () {
			let honor = 5000;
			return {
				nama: 'Badu',
				alamat: 'Jalan. Biawak 200',
				kota: 'Manado',
				getHonor: function () {
					return honor;
				},
				setHonor: function (new_honor) {
					honor = new_honor;
				}
			}
		}
	)();


		var pegawai = (
			function () {
				let honor = 5000;
				function getHonor() {
					return honor;
				};
				function setHonor(new_honor) {
					honor = new_honor;
				};
				return {
					nama: 'Badu',
					alamat: 'JL. Biawak 200',
					kota: 'Manado',
					getHonor: getHonor,
					setHonor: setHonor
				}
			}
		)();