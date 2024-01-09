function focusNext(currentInput) {
  const maxLength = parseInt(currentInput.getAttribute("maxlength"));
  const currentInputIndex = Array.from(document.getElementsByClassName("otp-input")).indexOf(currentInput);

  if (currentInput.value.length === maxLength) {
    if (currentInputIndex < maxLength - 1) {
      document.getElementsByClassName("otp-input")[currentInputIndex + 1].focus();
    } else {
      // Anda bisa menambahkan logika tambahan di sini, misalnya, mengirimkan OTP
      console.log("OTP submitted:", getOtpValue());
    }
  }
}

function getOtpValue() {
  const otpInputs = document.getElementsByClassName("otp-input");
  let otpValue = "";

  for (let i = 0; i < otpInputs.length; i++) {
    otpValue += otpInputs[i].value;
  }

  return otpValue;
}

document.addEventListener("input", function (e) {
  const target = e.target;
  if (target.matches(".otp-input") && target.value.length === 1) {
    setTimeout(function () {
      focusNext(target);
    }, 0);
  }
});


