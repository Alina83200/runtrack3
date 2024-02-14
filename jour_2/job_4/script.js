const textarea = document.getElementById("keylogger");



/*EventTarget метод addEventListener() настраивает функцию, 
  которая будет вызвана каждый раз, когда указанное событие поставляется цели.
*/

//Событие keypress происходит когда нажимается символьная клавиша, то есть клавиша которая создаёт символ.
document.addEventListener("keypress", function (event) {
  const keyPressed = event.key;
  if (/^[a-z]$/.test(keyPressed)) {
    textarea.value +=
      document.activeElement === textarea ? keyPressed.repeat(2) : keyPressed;
  }
});
