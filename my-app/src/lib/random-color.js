function randomColor(brightness) {
  let color = '';
  if (!localStorage.getItem('backgroundColorBlock')) {
    color = generateColor(brightness);
  } else {
    do {
      color = generateColor(brightness);
    } while (localStorage.getItem('backgroundColorBlock') === color);
  }
  localStorage.setItem('backgroundColorBlock', color);
  return color;
}

function generateColor(brightness) {
  return (
    'hsla(' + Math.round(Math.random() * 360) + ', 100%,' + brightness + '%, 1)'
  );
}

export default randomColor;
