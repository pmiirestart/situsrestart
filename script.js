// script.js

// Ambil semua elemen <a> yang mengelilingi gambar di dalam <section id="beranda">
const links = document.querySelectorAll('#beranda a');

// Loop melalui setiap link dan tambahkan event listener untuk event klik
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default dari link

        const url = this.getAttribute('href'); // Ambil URL dari atribut href

        // Buka URL di jendela baru
        window.open(url, '_blank');
    });
});
