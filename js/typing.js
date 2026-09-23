const elemento = document.getElementById('typing');

if (elemento) {
  const texto = '>EXTRA! EXTRA!';
  let animando = false;

  function digitar() {
    if (animando) return;
    animando = true;
    elemento.innerText = '';
    let i = 0;

    function loop() {
      if (i < texto.length) {
        elemento.innerText += texto[i];
        i++;
        setTimeout(loop, 150);
      } else {
        animando = false;
      }
    }

    loop();
  }
  digitar();


  elemento.addEventListener('mouseenter', digitar);
}