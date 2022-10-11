export const validation = (input) => {
  let errors = {};

  if (!input.name) errors.name = 'Debes escribir un nombre!🤨';
  if (!input.description) errors.description = 'Debes agregar una descripción!🤨';
  if (!input.released) errors.released = 'Debes agregar un fechade lanzamiento!🤨'
  if (input.rating < 0 || input.rating > 5) errors.rating = 'Debes elegir un rango entre 0 y 5!🤔';
  if (!input.platforms.length) errors.platforms = 'Debes elejir al menos una Plataforma!🤨';

  return errors;
}