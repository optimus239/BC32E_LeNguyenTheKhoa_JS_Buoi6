//-----------------Bài 1---------------------
document.getElementById("btnTinhSoChanLe").onclick = function () {
  //input: sum=0 soNguyenDuong=0
  //output: số nguyên dương nhỏ nhất > 10000: number
  //progress:
  //b1: xác định yếu tố thay đổi
  var tong = 0;
  var soNguyenDuong = 0;
  //b2: điều kiện lặp
  while (tong < 10000) {
    //b3: khối lệnh thực thi;
    soNguyenDuong += 1;
    tong += soNguyenDuong;
    //b4: Thay đổi điều kiện lặp
  }
  document.getElementById("ketQua1").innerHTML =
    "Số nguyên dương nhỏ nhất: " + soNguyenDuong;
};

//-----------------Bài 2---------------------
document.getElementById("btnTinhTong").onclick = function (event) {
  event.preventDefault();
  tinhTong("nhapSoX", "nhapSoN");
};

//-----------------Bài 3---------------------
document.getElementById("btnTinhGiaiThua").onclick = function (event) {
  event.preventDefault();
  //input: so:number
  var n = Number(document.getElementById("nhapN").value);
  //output: giaithuan: number
  var giaiThua = 1;
  //progress
  //b1:xác định yếu tố thay đổi
  var so = 1;
  //b2:điều kiện lặp
  while (so <= n) {
    //b3:thực thi
    giaiThua *= so;
    so++;
  }
  document.getElementById("ketQua3").innerHTML = "Giai thừa: " + giaiThua;
};

//-----------------Bài 4---------------------
document.getElementById("btnTaoThe").onclick = function () {
  //input:
  //output: 10 div
  var ketQua = "";
  //progress:
  //b1: xác định yếu tố thay đổi
  var n = 1;
  //b2: điều kiện lặp
  while (n <= 10) {
    //b3: thực thi
    if (n % 2 !== 0) {
      var divLe =
        "<div style=background-color:blue;color:white;padding:10px 0" +
        ">Div lẻ</div>";
      ketQua += divLe;
      document.getElementById("ketQua4").innerHTML = ketQua;
    } else if (n % 2 === 0) {
      var divChan =
        "<div style=background-color:red;color:white;padding:10px 0>Div chẵn</div>";
      ketQua += divChan;
      document.getElementById("ketQua4").innerHTML = ketQua;
    }
    //b4: thay đổi điều kiện lặp
    n++;
  }
};
