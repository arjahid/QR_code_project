function qrGenerator() {
  const qrText = document.getElementById("qrText").value;
  const qrImage = document.getElementById("qrImage");
  if (qrText.trim() !== "") {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
      qrText
    )}&size=150x150`;
    qrImage.alt = `QR Code for ${qrText}`;
  } else {
    alert("Please enter text or URL");
  }
}
