function tambah() {
    var frm = document.getElementById('kakulator');
    var a1 = parseFloat(frm.angka1.value)
    var a2 = parseFloat(frm.angka2.value)
    var total = a1 + a2;
    frm.hasil.value = total;
}

function kurang() {
    var frm = document.getElementById('kakulator');
    var a1 = parseFloat(frm.angka1.value)
    var a2 = parseFloat(frm.angka2.value)
    var total = a1 - a2;
    frm.hasil.value = total;
}