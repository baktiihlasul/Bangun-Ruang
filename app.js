const express = require('express');
const app = express();
const port = 3000;

const { persegi, persegiPanjang, segitiga } = require('./modules/shape.js');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/persegi/:number', (req, res) => {
    const sisi = req.params.number;
    const keliling = persegi.keliling(sisi);
    const luas = persegi.luas(sisi);
        
    res.send('Sisi Persegi: ' + sisi + '<br>Keliling Persegi: ' + keliling + '<br>Luas Persegi: ' + luas);
});

app.get('/persegi-panjang/:panjang/:lebar', (req, res) => {
    const panjang = req.params.panjang;
    const lebar = req.params.lebar;
    const luas = persegiPanjang.luas(panjang, lebar);
    const keliling = persegiPanjang.keliling(panjang, lebar);
    
    res.send('Panjang Persegi: ' + panjang + '<br>Lebar Persegi: '+ lebar + '<br>Luas Persegi Panjang: '+ luas + '<br>Keliling Persegi Panjang: ' + keliling);
});

app.get('/segitiga/:alas/:tinggi', (req, res) => {
    const alas = req.params.alas;
    const tinggi = req.params.tinggi;
    const luas = segitiga.luas(alas, tinggi);
    const keliling = segitiga.keliling(alas, tinggi);

    res.send('Alas: ' + alas + '<br>Tinggi: ' + tinggi + '<br>Luas: ' + luas + '<br>keliling: ' + keliling);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
