// Select all elements with the class "menu-selection"
const projectSelections = document.querySelectorAll('.menu-selection');

const menuContentH2 = document.querySelector('.menu-content h2');
const menuContentP = document.querySelector('.menu-content p');
const projectSelector = document.querySelector('.project-selections');


// Loop through each selected element and change its text content
projectSelections.forEach((item, index) => {
    item.onclick = function() {
      
      // update Frontend (highlight new Project Type)
        if (!item.classList.contains('selectedProjectType')) {
            projectSelections.forEach(item => {
                item.classList.remove('selectedProjectType');
            });
            item.classList.add('selectedProjectType');
        }
      
        //update Content
        console.log("clicked: " + index);
        updateProject(index);
      
    }
});

/** Function updateProject
* updates the submenu of Project
* updates the Content of the submenu
* updates the Project Selection

*/
function updateProject(index){
  document.documentElement.style.setProperty('--color-accent-current', "var(--color-accent-" + index + ")");
  
  menuContentH2.innerHTML = projectContentGer[index].category;
  menuContentP .innerHTML = projectContentGer[index].description;
  
  
  // Remove all existing divs inside projectSelector
  while (projectSelector.firstChild) {
    projectSelector.removeChild(projectSelector.firstChild);
  }
  // Loop through all Projects in Projecttype
  projectContentGer[index].projects.forEach(prj => {

      const newDiv = document.createElement('div');
      newDiv.className = 'p-selection';
      projectSelector.appendChild(newDiv);
  });
}