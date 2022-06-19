//BÀI 2
function tinhTong(id1, id2) {
  //input x:number n:number
  var x = Number(document.getElementById(id1).value);
  var n = Number(document.getElementById(id2).value);
  //output: tong:number
  var tong = 0;
  //progress:
  //b1:xác định yếu tố thay đổi
  var so = 1;
  //b2:điều kiện lặp
  while (so <= n) {
    //b3: thực thi
    tong += x ** so;
    //b4: thay đổi điều kiện lặp
    so++;
  }
  document.getElementById("ketQua2").innerHTML = "Tổng: " + tong;
}
