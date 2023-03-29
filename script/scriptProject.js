// Select all elements with the class "menu-selection"
const projectSelections = document.querySelectorAll('.menu-selection');
const menuContentH2 =     document.querySelector('.menu-content h2');
const menuContentP =      document.querySelector('.menu-content p');
const projectSelector =   document.querySelector('.project-selections');


/** Loop through each selected element of div "project-selections"
* by click change Project Type and Content
*/
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
  // Add Selections (p-selection -> (cursor-current, cursor-selection))
  projectContentGer[index].projects.forEach((prj, ind ) => {
    
    const newDiv = document.createElement('div');
    newDiv.className = 'p-selection';
    newDiv.innerHTML = '<div class="cursor-current"></div><div class="cursor-selection"></div>';
    projectSelector.appendChild(newDiv);
    
  });
  updateSelectedProject(0);
  mouseeventsProjectSelecter();
}


/** 
 * given Param "objectIndex"
 * add the class "selectedProject" only to Param
 */
function updateSelectedProject(objectIndex){
  // delet all 'selectedProject'
  for (var k = 0; k < projectSelector.children.length; k++) {
    projectSelector.children[k].classList.remove('selectedProject');
  }
  //add
  projectSelector.children[objectIndex].classList.add('selectedProject');
}


/** Function mouseeventsProjectSelecter
 * adds mouseover event to Project Seleter
 * adds click event to Project Seleter
 */
function mouseeventsProjectSelecter(){
  Array.from(projectSelector.children).forEach((child, childIndex) => {
    var x = 0;
    
    //add mouseover
    child.addEventListener('mousemove', function (event) {
      let bnds = event.target.getBoundingClientRect();
      x =        event.clientX - bnds.left; // the value of x
      //update css Var
      document.documentElement.style.setProperty('--cursor-selection', (x-5) + "px");
    });
    
    //add onClick
    child.addEventListener('mousedown', function (event) {
      document.documentElement.style.setProperty('--cursor-current', (x-5) + "px");
      updateSelectedProject(childIndex);
      
      //set Video to this Position
    });
    
    
  });

}


