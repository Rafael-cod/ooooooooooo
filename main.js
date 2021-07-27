name_of_the_student_array = [];

       function submit()
       {
           var name_1 =document.getElementById("name_of_the_students1").value;
           var name_1 =document.getElementById("name_of_the_students2").value;
           var name_1 =document.getElementById("name_of_the_students3").value;
           var name_1 =document.getElementById("name_of_the_students4").value;

           name_of_the_students_arrays.push(name_1);
           name_of_the_students_arrays.push(name_2);
           name_of_the_students_arrays.push(name_3);
           name_of_the_students_arrays.push(name_4);

           console.log(name_of_the_student_array);

           document.getElementById("display_name").innerHtml = name_of_the_student_array;
           document.getElementById("submit_button").style.display = "none";
           document.getElementById("sort_button").style.display = "inline-block";

       } 

    function sorting()
    {
        name_of_the_student_array.sort()
        console.log(name_of_the_student_array);
        document.getElementById("display_name").innerHTML = name_of_the_student_array;
    }