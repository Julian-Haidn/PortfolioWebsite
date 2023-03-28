// Select all elements with the class "menu-selection"
const projectSelections = document.querySelectorAll('.menu-selection');


 fetch('content/projectContent-german.json')
        .then(response => response.json())
        .then(data => {
          // use the JSON data here
        })
        .catch(error => {
          console.error('Error:', error);
        });






//console.log(data);
//console.log(data[index].category);
//console.log(data[index].description);

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
        document.documentElement.style.setProperty('--color-accent-current', "var(--color-accent-" + index + ")");
      
      
        
      
    }
});
