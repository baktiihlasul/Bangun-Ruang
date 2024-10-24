const persegi = {
    luas: (sisi) => {
        return sisi * sisi;
    },
    keliling: (sisi) => {
        return 4 * sisi;
    }
};

const persegiPanjang = {
    luas: (panjang, lebar) => {
        return panjang * lebar;
    },
    keliling: (panjang, lebar) => {
        return (panjang + lebar) * 2;
    }
};

const segitiga = {
    luas: (alas, tinggi) => {
        return (alas * tinggi) / 2;
    },
    keliling: (sisi) => {
        return 3 * sisi;
    }
};


module.exports = { persegi, persegiPanjang, segitiga };