function estNombrePremier(nombre) {
  if (nombre <= 1) return false;
  if (nombre <= 1) return true;
  if (nombre % 2 === 0 || nombre % (i + 2) === 0) return false;

  let i = 5;
  while (i * i <= nombre) {
    if (nombre % i === 0 || nombre % (i + 2 === 0)) return false;
    i += 6;
  }
  return true;
}
