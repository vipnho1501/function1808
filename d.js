function veHinh1(n) {
    for (let dong = 1; dong <= n; dong++) {
        let str = '';
        for (let cot = 1; cot <= n; cot++) {
            const dk = dong >= cot;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh2(n) {
    for (let dong = 1; dong <= n; dong++) {
        let str = '';
        for (let cot = 1; cot <= n; cot++) {
            const dk = dong + cot >= n + 1;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh3(n) {
    for (let dong = 1; dong <= n; dong++) {
        let str = '';
        for (let cot = 1; cot <= n; cot++) {
            const tongQuangDuong = (n - 1) / 2;
            const trungTam = (n + 1) / 2;
            const quangDuongDoc = Math.abs(dong - trungTam);
            const quangDuongNgang = Math.abs(cot - trungTam);
            const dk = quangDuongDoc + quangDuongNgang <= tongQuangDuong;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh4(n) {
    for (let dong = 1; dong <= n; dong++) {
        let str = '';
        for (let cot = 1; cot <= n; cot++) {
            const tongQuangDuong = (n - 1) / 2;
            const trungTam = (n + 1) / 2;
            const quangDuongDoc = Math.abs(dong - trungTam);
            const quangDuongNgang = Math.abs(cot - trungTam);
            const dkDuongVien = quangDuongDoc + quangDuongNgang === tongQuangDuong;
            const dkTrucDoc = cot === trungTam;
            const dkTrucNgang = dong === trungTam;
            const dk = dkDuongVien || dkTrucDoc || dkTrucNgang;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh5(n) {
    for (let dong = 1; dong <= n; dong++) {
        let str = '';
        const soCot = (n + 1) / 2;
        for (let cot = 1; cot <= soCot; cot++) {
            const tongQuangDuong = (n - 1) / 2;
            const trungTam = (n + 1) / 2;
            const quangDuongDoc = Math.abs(dong - trungTam);
            const quangDuongNgang = Math.abs(cot - trungTam);
            const dk = quangDuongDoc + quangDuongNgang <= tongQuangDuong;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

function veHinh6(n) {
    for (let dong = 1; dong <= n; dong++) {
        let str = '';
        const soCot = (n * 2) - 1;
        for (let cot = 1; cot <= soCot; cot++) {
            const tongQuangDuong = n -1;
            const trungTam = n;
            const quangDuongDoc = Math.abs(dong - trungTam);
            const quangDuongNgang = Math.abs(cot - trungTam);
            const dk = quangDuongDoc + quangDuongNgang <= tongQuangDuong;
            str += dk ? '*' : ' ';
        }
        console.log(str);
    }
}

veHinh6(9);

