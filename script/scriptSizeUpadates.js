// ---- update Size of Content Description Box ----

const projectMenuBox = document.querySelector('.menu-points');

function updateProjectMenuBoxWidth() {
  const projectMenuBoxWidth = projectMenuBox.getBoundingClientRect().width;
  document.documentElement.style.setProperty('--project-menu-box-width', `${projectMenuBoxWidth}px`);
}
updateProjectMenuBoxWidth(); // call the function once on page load
window.addEventListener('resize', updateProjectMenuBoxWidth); // add the event listener
