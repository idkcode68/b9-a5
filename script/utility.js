function hidebyElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}


function showbyElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText); 
    return value;

}

function setTextElementValueById(elementId , value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}