document.getElementById('display-btn').addEventListener('click', function(){
    document.getElementById('main-body').scrollIntoView();
})


function changeColor(buttonId) {
    const button = document.getElementById(buttonId);
  
    // Get all button elements within the "select-btn" container
    const buttons = document.getElementById('select-btn').getElementsByTagName('button');
  
    // Loop through each button and remove the "btn-selected" class
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('btn-selected');
    }
  
    // Add the "btn-selected" class to the clicked button
    button.classList.add('btn-selected');
  }