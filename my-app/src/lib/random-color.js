function randomColor(saturation = 100, lightness = 100, alpha = 1) {
  let color = '';
  if (!localStorage.getItem('backgroundColorBlock')) {
    color = generateColor(saturation, lightness, alpha);
  } else {
    do {
      color = generateColor(saturation, lightness, alpha);
    } while (localStorage.getItem('backgroundColorBlock') === color);
  }
  localStorage.setItem('backgroundColorBlock', color);
  return color;
}

function generateColor(saturation = 100, lightness = 100, alpha = 1) {
  return (
    'hsla(' +
    Math.ceil(Math.random() * 360) +
    ',' +
    saturation +
    '%,' +
    lightness +
    '%,' +
    alpha +
    ')'
  );
}

export default randomColor;
