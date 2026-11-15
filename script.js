


const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

   
    e.preventDefault();

   
    const username = document.getElementById("name").value;
    const email = document.getElementById("email").value;

  
    const message = document.getElementById("formMessage");

    if (username !== "" && email !== "") {

        message.textContent =
            "Thank you for visiting, " +
            username +
            "! We will contact you at " +
            email +
            ".";

    }

});



const menuRows = document.querySelectorAll(".menu-row");

menuRows.forEach(function(row) {

   
    row.addEventListener("mouseover", function() {

        row.style.backgroundColor = "#f4c27a";

    });



    row.addEventListener("mouseout", function() {

        row.style.backgroundColor = "";

    });

});




const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

   
    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        themeBtn.textContent = "Toggle Light Mode";

    }

    else {

        themeBtn.textContent = "Toggle Dark Mode";

    }

});




const checkboxes =
    document.querySelectorAll(".menu-check");

const total =
    document.getElementById("total");


checkboxes.forEach(function(checkbox) {

    checkbox.addEventListener("change", function() {

        let sum = 0;


        
        checkboxes.forEach(function(item) {

            if (item.checked) {

           
                sum =
                    sum +
                    parseInt(item.dataset.price);

            }

        });


       
        total.textContent =
            "Total: Rs. " + sum;

    });

});




form.addEventListener("submit", function(e) {


    e.preventDefault();


   
    const birthYearInput =
        document.getElementById("birth-year").value;


   
    const birthYear =
        parseInt(birthYearInput);



    const discountMessage =
        document.getElementById("discountMessage");


    
    if (!isNaN(birthYear)) {

        
        const age =
            2026 - birthYear;


       
        if (age <= 25) {

            discountMessage.textContent =
                "You are " +
                age +
                " years old. You qualify for the student discount!";

        }


     
        else if (age >= 60) {

            discountMessage.textContent =
                "You are " +
                age +
                " years old. You qualify for the senior discount!";

        }


      
        else {

            discountMessage.textContent =
                "You are " +
                age +
                " years old. No special discount applies.";

        }

    }

});




const readMoreBtn =
    document.getElementById("readMoreBtn");

const extraText =
    document.getElementById("extraText");


readMoreBtn.addEventListener("click", function() {

    
    if (extraText.style.display === "none") {

       
        extraText.style.display = "block";

     
        readMoreBtn.textContent = "Read Less";

    }

    else {


        extraText.style.display = "none";

        
        readMoreBtn.textContent = "Read More";

    }

});



const filterButtons =
    document.querySelectorAll(".filter-btn");

const rows =
    document.querySelectorAll(".menu-row");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

       
        const selectedCategory =
            button.dataset.category;


        rows.forEach(function(row) {

           
            const rowCategory =
                row.dataset.category;


         
            if (
                selectedCategory === "all" ||
                rowCategory === selectedCategory
            ) {

            
                row.style.display = "";

            }

            else {

              
                row.style.display = "none";

            }

        });

    });

});



const currentHour =
    new Date().getHours();



const status =
    document.getElementById("status");



if (currentHour >= 8 && currentHour < 21) {

    status.textContent =
        "We are Open!";

    status.style.color =
        "green";

}

else {

    status.textContent =
        "Closed - Open at 8 AM";

    status.style.color =
        "red";

}




const specialNotes =
    document.getElementById("special-notes");

const charCount =
    document.getElementById("charCount");


specialNotes.addEventListener("input", function() {

   
    const remaining =
        100 - specialNotes.value.length;


    
    charCount.textContent =
        remaining +
        " characters remaining";

});

