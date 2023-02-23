function Escopo() {
  const items = document.querySelectorAll(".js");
  const controlador = {
    0: 8,
    1: 6,
    2: 50,
    3: 15,
  };
  decrementador();


  function decrementador() {
    iniciador();
    controlador[3]--;

    if (controlador[3] < 0) {
      controlador[3] = 59;
      controlador[2]--;
    }
    setTimeout(decrementador, 1000);
  }

  function iniciador() {
    items.forEach((item, index) => {
      if (controlador[index] < 10) {
        item.innerText = `0${controlador[index]}`;
      } else {
        item.innerText = `${controlador[index]}`;
      }
    });
  }
}
Escopo()