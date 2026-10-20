const degreesInput = document.getElementById('degrees');
const radiansOutput = document.getElementById('radians-cv');

degreesInput.addEventListener('input', () => {
  const degrees = degreesInput.valueAsNumber;

  if (Number.isNaN(degrees)) {
    radiansOutput.textContent = '';
    return;
  }

  const radians = (degrees * (Math.PI / 180)).toFixed(5);
  radiansOutput.textContent = radians;
});

const radiansInput = document.getElementById('radians');
const degreesOutput = document.getElementById('degrees-cv');

radiansInput.addEventListener('input', () => {
  const radians = radiansInput.valueAsNumber;

  if (Number.isNaN(radians)) {
    degreesOutput.textContent = '';
    return;
  }

  const degrees = (radians * (180 / Math.PI)).toFixed(5);
  degreesOutput.textContent = degrees;
});

const radians2Input = document.getElementById('radians-2');
const gradiansOutput = document.getElementById('gradians-cv');

radians2Input.addEventListener('input', () => {
  const radians = radians2Input.valueAsNumber;

  if (Number.isNaN(radians)) {
    gradiansOutput.textContent = '';
    return;
  }

  const gradians = (radians * (200 / Math.PI)).toFixed(5);
  gradiansOutput.textContent = gradians;
});

