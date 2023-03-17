function dataPerson() {
    let fr = document.getElementById("frs");
    let nama = fr.nama.value;
    let perkerjaan = fr.pekerjaan.value;
    let hobi = fr.hobi.value;
    let data = `inputkan data:
    <br> Nama : ${nama}
    <br> perkerjaan : ${perkerjaan}
    <br> hobi : ${hobi}`;
    document.getElementById('hasil').innerHTML = data;
    
}