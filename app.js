function borrarUltimoCaracter() {
  const ansField = document.calculator.ans;
  const currentValue = ansField.value;

  // Verificar si hay al menos un carácter para borrar
  if (currentValue.length > 0) {
    // Eliminar el último carácter
    const newValue = currentValue.slice(0, -1);
    ansField.value = newValue;
  }
}