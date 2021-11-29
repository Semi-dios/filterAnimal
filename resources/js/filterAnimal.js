
 window.addEventListener('DOMContentLoaded', function(){

const filter = document.getElementById('filter');
const content_img = document.getElementById('content-img'); /// No existe este element
function filterAnimals(){


    let config = {
        headers: {
            "X-CSRF-TOKEN":  document.head.querySelector("[name=csrf-token]").content ,
        }
    }
    const filterValue = filter.value;
    if(filterValue.length > 3) {
        const response = axios.get('/animals/'+filterValue , config);
        response.then((res)=> {
            console.log(res.data)
            if(res.data.length === 0) {
                content_img.innerHTML = '<p>Not found</p>';
            }else {
                content_img.innerHTML = res.data;
            }


        })
        .catch(e=>e)
    };


}
filter.addEventListener('input',filterAnimals);
});

