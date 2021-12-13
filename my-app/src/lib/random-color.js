function randomColor(saturation = 100, lightness = 100, alpha = 1) {
  let hue = 0;
  hue = !localStorage.getItem('hueBlock')
    ? Math.ceil(Math.random() * 360)
    : Math.round(
        Number(localStorage.getItem('hueBlock')) + Math.random() * 80 + 100,
      );
  if (hue > 360) hue -= 360;
  localStorage.setItem('hueBlock', hue);
  return (
    'hsla(' + hue + ',' + saturation + '%,' + lightness + '%,' + alpha + ')'
  );
}

export default randomColor;
