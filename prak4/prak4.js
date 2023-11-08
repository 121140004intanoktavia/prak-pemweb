const hitungGanjilGenap = () => {
  let inputNumber = document.querySelector("#inputNumber").value;
  let ganjil = 0;
  let genap = 0;

  if (inputNumber === "" || isNaN(inputNumber)) {
    alert(`salah input dek! angka ajh. peace lov and gaul`);
  }
  for (let i = 1; i <= inputNumber; i++) {
    if (i % 2 === 0) {
      genap++;
    } else {
      ganjil++;
    }
  }
  document.querySelector("#bilanganGanjil").textContent = ganjil;
  document.querySelector("#bilanganGenap").textContent = genap;
};
