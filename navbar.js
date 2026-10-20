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