


const getName = async (id) =>{
    const $titulo = document.querySelector('.titulo');
    const $name = document.querySelector('.name');
    const $description = document.querySelector('.description');
    const $category = document.querySelector('.category');
    const $price = document.querySelector('.price');
    const $stock = document.querySelector('.stock');


    try {
        let res = await fetch(`http://localhost:4000/api/products/${id}`),
        json = await res.json();

        if(!res.ok){
            const err = {Status: res.status, statusText: res.statusText || "A ocurrido un error"}
            throw err;
        }   
        
        $titulo.innerHTML += ` ${json.name}`
        $name.value = ` ${json.name}`
        $description.value = ` ${json.description}`
        $category.value = ` ${json.category}`
        $price.value = json.price
        $stock.value =  json.stock
        
        
    } catch (err) {
        console.log(err)
        //$content.innerHTML = `Error: ${err.Status}, ${err.statusText}`;  
    }
}

const editProduct = async (id,e) =>{
    const $sucsses = document.querySelector('.message');
    try {
        let options = {
            method: 'PUT',
            headers:{
                'accept': '*/*',
                'content-type': 'application/json; charset=utf-8'       
            },
            body: JSON.stringify({
                "name": e.target.name.value,
                "description": e.target.descripcion.value ,
                "category": e.target.categoria.value,
                "price": e.target.precio.value,
                "stock": e.target.stock.value       
            })

        }

        let res = await fetch(`http://localhost:4000/api/products/${id}`, options),
        json = await res.json();

        $sucsses.innerHTML = json.msg;
        $sucsses.classList.add('alert','alert-success');
        setTimeout(() => {
            $sucsses.innerHTML = '';
            $sucsses.classList.remove('alert','alert-success')
        }, 3000);

        
        if(!res.ok){
            const err = {Status: res.status, statusText: res.statusText || "A ocurrido un error"}
            throw err;
        }

      

    } catch (err) {
        console.log(err)
        $sucsses.classList.add('alert','alert-danger');
        $sucsses.innerHTML = err;
        setTimeout(() => {
            $sucsses.innerHTML = '';
            $sucsses.classList.remove('alert','alert-success')
        }, 3000);
    }
}



export{
    getName,
    editProduct
}