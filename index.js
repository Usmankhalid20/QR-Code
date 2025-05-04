let ImgBox = document.getElementById("imgBox");
let QrImg = document.getElementById("QRimg");
let QRText = document.getElementById("QRText");


function generateQRcode(){
if(QRText.value.length > 0){
    QrImg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRText.value;
    ImgBox.classList.add("show-img")
} else{
    QRText.classList.add("error")
    setTimeout(() => {
        QRText.classList.remove("error")
    }, 1000);
}
}