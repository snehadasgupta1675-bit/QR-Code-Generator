function generateQR(){

    let qrContainer = document.getElementById("qrImage");

    let qrText = document.getElementById("qrText").value;

    // Clear old QR
    qrContainer.innerHTML = "";

    if(qrText.length > 0){

        new QRCode(qrContainer, {
            text: qrText,
            width: 200,
            height: 200
        });

    } else {
        alert("Please enter text");
    }
}

function downloadQR(){

    let img= document.querySelector("#qrImage img");

    if(img){
        let link= document.createElement("a");
        link.href= img.scr;
        link.download= "QRCode.png";
        link.click();
    }
}