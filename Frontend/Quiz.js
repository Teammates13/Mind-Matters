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


 
    function getAllFormValues() {
        // Select all forms
        const forms = document.querySelectorAll('form');
        const formData = {};
    
        // Iterate over each form
        forms.forEach((form, index) => {
            const inputs = form.querySelectorAll('input');
            const formName = `form${index + 1}`;
            formData[formName] = {};
    
            // Iterate over each input in the form
            inputs.forEach(input => {
                // Handle checkboxes and radio buttons
                if ((input.type === 'checkbox' || input.type === 'radio') && !input.checked) {
                    return; // Skip unchecked checkboxes and radio buttons
                }
                formData[formName][input.name] = input.value;
            });
        });
        // Display collected data
     let a=formData.form1.options
     let b=formData.form2.options
     let c=formData.form3.options
  
     console.log(a)
     console.log(b)
     console.log(c)


     


    }
    

    submitBtn.addEventListener("click",()=>{

        

 
       
        getAllFormValues()
   
   })


    

