

const addProduct = async (e) =>{
       const $sucsses = document.querySelector('.message');
      


      try {
        let options = {
            method: 'POST',
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
        

        let res = await fetch('http://localhost:4000/api/products/add', options),
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
       
        $sucsses.classList.add('alert','alert-danger');
        $sucsses.innerHTML = err;
        setTimeout(() => {
            $sucsses.innerHTML = '';
            $sucsses.classList.remove('alert','alert-success')
        }, 3000);
} 
 
}


export {
    addProduct,
    
    
}