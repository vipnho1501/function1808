function veHinh(n, checkPoint, tinhSoCot) {
    for (let dong = 1; dong <= n; dong++) {
        let str = '';
        let soCot = tinhSoCot ? tinhSoCot(n) : n;
        for (let cot = 1; cot <= soCot; cot++) {
            const dk = checkPoint(cot, dong, n);
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

// veHinh(7, (cot, dong, n) => {
//     const tongQuangDuong = (n - 1) / 2;
//     const trungTam = (n + 1) / 2;
//     const quangDuongDoc = Math.abs(dong - trungTam);
//     const quangDuongNgang = Math.abs(cot - trungTam);
//     const dk = quangDuongDoc + quangDuongNgang <= tongQuangDuong;
//     return dk;
// }, n => (n + 1) / 2);
// veHinh(7, (cot, dong, n) => {
//     const tongQuangDuong = n -1;
//     const trungTam = n;
//     const quangDuongDoc = Math.abs(dong - trungTam);
//     const quangDuongNgang = Math.abs(cot - trungTam);
//     const dk = quangDuongDoc + quangDuongNgang <= tongQuangDuong;
//     return dk;
// }, n => (n * 2) - 1);
veHinh(7, (cot, dong) => dong >= cot);
// veHinh(7, (cot, dong, n) => dong + cot >= n + 1, n => n);
// veHinh(7, (cot, dong, n) => {
//     const tongQuangDuong = (n - 1) / 2;
//     const trungTam = (n + 1) / 2;
//     const quangDuongDoc = Math.abs(dong - trungTam);
//     const quangDuongNgang = Math.abs(cot - trungTam);
//     const dk = quangDuongDoc + quangDuongNgang <= tongQuangDuong;
//     return dk;
// }, n => n);
// veHinh(7, (cot, dong, n) => {
//     const tongQuangDuong = (n - 1) / 2;
//     const trungTam = (n + 1) / 2;
//     const quangDuongDoc = Math.abs(dong - trungTam);
//     const quangDuongNgang = Math.abs(cot - trungTam);
//     const dkDuongVien = quangDuongDoc + quangDuongNgang === tongQuangDuong;
//     const dkTrucDoc = cot === trungTam;
//     const dkTrucNgang = dong === trungTam;
//     const dk = dkDuongVien || dkTrucDoc || dkTrucNgang;
//     return dk;
// }, n => n);
