let data = new Date();
let day = data.getDay();
let month = data.getMonth();

function estacao(day, month) {
  if (month >= 3 && month <= 6) {
    if (month == 3 && day <= 21) {
      alert("Estamos no Verão");
    } else {
      alert("Estamos no Outono");
    }
  } else if (month >= 6 && month <= 12) {
    if (month == 6 && day > 21) {
      alert("Estamos no Inverno");
    } else {
      alert("Estamos na Primavera");
    }
  }
}

estacao(day,month)