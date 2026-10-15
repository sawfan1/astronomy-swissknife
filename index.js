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

const drawer = document.getElementById('side-drawer');
const drawerToggle = document.getElementById('drawer-toggle');
const drawerClose = document.getElementById('drawer-close');
const drawerBackdrop = document.getElementById('drawer-backdrop');
const drawerLinks = drawer.querySelectorAll('.drawer-link');

function setDrawerOpen(isOpen) {
  drawer.classList.toggle('is-open', isOpen);
  drawer.setAttribute('aria-hidden', String(!isOpen));
  drawerToggle.setAttribute('aria-expanded', String(isOpen));
  drawerToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  drawerBackdrop.hidden = !isOpen;
}

drawerToggle.addEventListener('click', () => {
  setDrawerOpen(drawerToggle.getAttribute('aria-expanded') !== 'true');
});

drawerClose.addEventListener('click', () => setDrawerOpen(false));
drawerBackdrop.addEventListener('click', () => setDrawerOpen(false));
drawerLinks.forEach((link) => link.addEventListener('click', () => setDrawerOpen(false)));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && drawerToggle.getAttribute('aria-expanded') === 'true') {
    setDrawerOpen(false);
    drawerToggle.focus();
  }
});