function capNhatChiTiet(event) {
    let theHoatDong = event.target.parentElement;
    let tenHoatDong = theHoatDong.querySelector('h3').innerText;
    let diemThuong = theHoatDong.querySelector('span').innerText;

    document.getElementById('sidebar-muc-chon').innerText = tenHoatDong;
    
    document.getElementById('hoat-dong-chon').innerText = tenHoatDong;
    document.getElementById('diem-thuong-chon').innerText = diemThuong;
}

let danhSachNut = document.querySelectorAll('.btn-chitiet');
danhSachNut.forEach(function(nut) {
    nut.addEventListener('click', capNhatChiTiet);
});

let danhSachMenuDoc = document.querySelectorAll('.menu-left a');
danhSachMenuDoc.forEach(function(muc) {
    muc.addEventListener('click', function(e) {
        e.preventDefault(); 
        document.getElementById('sidebar-muc-chon').innerText = this.innerText;
    });
});

function capNhatThoiGian() {
    let thoiGianHienTai = new Date();
    document.getElementById('thoi-gian').innerText = thoiGianHienTai.toLocaleString('vi-VN');
}

setInterval(capNhatThoiGian, 1000);
capNhatThoiGian();