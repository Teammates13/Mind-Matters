const submitBtn=document.querySelector("#submit-btn");


   function getSelectedColor() {
        // Get all radio buttons with the name 'color'
        const radios = document.getElementsByName('options');
    
        // Loop through the radio buttons to find the checked one
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                // Get the value of the checked radio button
                const selectedValue = radios[i].value;
    
                console.log(selectedValue);
                
                // Display the selected value
               // document.getElementById('result').innerText = `You selected: ${selectedValue}`;
                
                // Stop the loop once we find the checked radio button
                break;
            }
        }
    }


    submitBtn.addEventListener("click",()=>{

        


getSelectedColor()
    
    })
    

