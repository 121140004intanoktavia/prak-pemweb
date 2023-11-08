// Intan Oktavia
// 121140004 - RB

const inputValue = (value) => {
  document.querySelector("#tampilan").value += value;
};

const clearAjah = () => {
  document.querySelector("#tampilan").value = "";
};

const hasilHitung = () => {
  let expression = document.querySelector("#tampilan").value;
  try {
    let hasil = eval(expression);
    document.querySelector("#tampilan").value = hasil;
  } catch (error) {
    document.querySelector("#tampilan").value = "error";
  }
};
