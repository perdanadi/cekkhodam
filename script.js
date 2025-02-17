function cariKhodam() {
    let nama = document.getElementById("namaInput").value.trim().toLowerCase();
    if (nama === "") {
        document.getElementById("hasil").innerText = "Silakan masukkan nama Anda!";
        return;
    }

    // Array nama khodam hewan mistis
    let daftarKhodamHewan = [
        "Serigala Hitam", "Elang Emas", "Harimau Putih", "Ular Naga",
        "Burung Hantu Mistis", "Kuda Petir", "Macan Hitam", "Singa Api",
        "Buaya Raksasa", "Kelelawar Gaib", "Naga Perak", "Rubah Ekor Lima"
    ];

    // Algoritma sederhana: jumlah huruf dari nama dijadikan indeks
    let totalHuruf = nama.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    let indeks = totalHuruf % daftarKhodamHewan.length;
    
    let khodam = daftarKhodamHewan[indeks];

    document.getElementById("hasil").innerText = "Nama Khodam Anda: " + khodam;
    
    // Memainkan backsound
    let audio = document.getElementById("backsound");
    audio.play();
}
