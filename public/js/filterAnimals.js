/* window.addEventListener('DOMContentLoaded', function(){

const filter = document.getElementById('filter');
const content_img = document.getElementById('content-img'); /// No existe este element
function filterAnimals(){

    const filterValue = filter.value;
    if(filterValue.length > 3) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET','/animals/' + filterValue ,true);
        xhr.setRequestHeader("X-CSRF-TOKEN", document.head.querySelector("[name=csrf-token]").content );
        xhr.onreadystatechange = function() {

            if(xhr.readyState == 4 && xhr.status == 200)
            {
                console.log(xhr)
                content_img.innerHTML =   xhr.responseText;


            }
        }
        xhr.send()
    };


}
filter.addEventListener('input',filterAnimals);
});
 */
