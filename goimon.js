function myfuction(){

var N=document.getElementById("nuoc");
var valueN=N[N.selectedIndex].value;
var T=document.getElementById("traicay");
var valueT=T[T.selectedIndex].value;
var mymoney=parseInt(document.getElementById("tien").value);
var ketqua;
var tiennuoc;
var tientrai;
if(valueN=="Nước Suối"){
    tiennuoc=15000;
}else if(valueN=="COCA COLA"){
    tiennuoc=17000;
}else if(valueN=="7 Up"){
    tiennuoc=17000;
}else if(valueN=="Pessi"){
    tiennuoc=17000;
}else if(valueN=="Cam ép"){
    tiennuoc=17000;
}else if(valueN=="Sting"){
    tiennuoc=17000;
}else if(valueN=="Bò Húc"){
    tiennuoc=17000;
}else{
    tiennuoc=0;
};

if(valueT=="Trái cây nhỏ"){
    tientrai=99000;
}else if(valueT=="Trái cây lớn"){
    tientrai=129000;
}else if(valueT=="Bưởi"){
    tientrai=189000;
}else{
    tientrai=0;
};
// switch(valueN){
//     case "Nước Suối":
//        tiennuoc=parseInt("17000");
//     case "COCA COLA":
//        tiennuoc=parseInt("17000");
//     case "7 Up":
//         tiennuoc=parseInt("17000");
//     case "Pessi":
//         tiennuoc=parseInt("17000");
//     case "Cam ép":
//         tiennuoc=parseInt("17000");
//     case "Sting":
//         tiennuoc=parseInt("17000");
//     case "Bò Húc":
//         tiennuoc=parseInt("17000");
// };
// switch(valueT){
//     case "Trái cây nhỏ":
//         tientrai=parseInt("99000");
//     case "Trái cây lớn":
//         tientrai=parseInt("129000");
//     case "Bưởi":
//         tientrai=parseInt("189000");
// };
ketqua=(tiennuoc+tientrai);
if(mymoney==ketqua){
    document.getElementById("kq").innerHTML="Đây là"+" "+valueN+" "+"của bạn"+"    "+"$ Số tiền thanh toán là:"+" "+ketqua;
}else if(mymoney>ketqua){
    document.getElementById("kq").innerHTML="Đây là"+" "+valueN+" "+"của bạn"+"   " +"$ Số tiền thanh toán là:"+" "+ketqua+" "+"Số tiền dư là:"+" "+(mymoney-ketqua);
}else{
    document.getElementById("kq").innerHTML="Số tiền bạn không đủ!!!"+"  "+"Số tiền bạn cần phải thanh toán là:"+" "+ketqua;
};
};




