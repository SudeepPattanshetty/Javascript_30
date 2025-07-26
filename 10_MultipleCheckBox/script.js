const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;
let inBetween = false;

function handleChecked(e) {
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
                console.log("started");
            }
            console.log(checkbox);
            if(inBetween){
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkboxes.forEach(check => {
    check.addEventListener('click', handleChecked) 
})