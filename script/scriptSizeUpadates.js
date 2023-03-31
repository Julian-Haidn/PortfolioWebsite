// ---- update Size of Content Description Box ---- //

const projectMenuBox = document.querySelector('.menu-points');

function updateProjectMenuBoxWidth() {
  const projectMenuBoxWidth = projectMenuBox.getBoundingClientRect().width;
  document.documentElement.style.setProperty('--project-menu-box-width', `${projectMenuBoxWidth}px`);
}
updateProjectMenuBoxWidth(); // call the function once on page load
window.addEventListener('resize', updateProjectMenuBoxWidth); // add the event listener



// ---- convert Hex to Dec ---- //
function hexToRgb(hex) {
  // Remove the hash symbol from the beginning of the string
	hex = hex.trim().replace(/\s+(?=#)/g, '').replace('#', '');

  // If the hex value is shorthand (e.g. #abc), expand it to full form (e.g. #aabbcc)
  if (hex.length === 3) {
    hex = hex.replace(/./g, '$&$&');
  }

  // Convert the hex value to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB color value as a string
  return `${r}, ${g}, ${b}`;
}
function updateRgbColor(cssVar){
	const colorAccentCurrent = getComputedStyle(document.documentElement).getPropertyValue(cssVar);
	document.documentElement.style.setProperty('--color-accent-current-rgb', hexToRgb(colorAccentCurrent))
}