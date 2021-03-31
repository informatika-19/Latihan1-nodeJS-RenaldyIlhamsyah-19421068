// array

const dataMahasiswa = [
    {
        nama : 'Renaldy Ilhamsyah',
        npm : '19421068',
        prodi : 'informatika'
    },
    {
        nama : 'Zaenal',
        npm : '19421020',
        prodi : 'HukumTatadaerah'  
    }
]
    for (let i in dataMahasiswa){
        console.log(dataMahasiswa[i].nama + '-' + dataMahasiswa[i].npm + '-' + dataMahasiswa[i].prodi)
    }