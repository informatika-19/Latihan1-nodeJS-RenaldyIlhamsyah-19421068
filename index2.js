const nilai = 8
let nilaihuruf, ket

// logika bercabang
if (nilai >= 8.5) {
    nilaihuruf = 'A'
    ket = 'Sangat Baik'
} else if (nilai >= 7.5) {
    nilaihuruf = 'B'
    ket = 'Baik'
} else if (nilai >= 65) {
    nilaihuruf = 'C'
    ket = 'Cukup'
}  else if (niali >= '55') {
    nilaihuruf = 'D'
    ket = 'buruk'
} else if (nilai >= '50') {
    nilaihuruf = 'E'
    ket = 'sangat buruk'
} 

console.log('Nilai Anda ' + nilaihuruf + '('+ ket +')') 


