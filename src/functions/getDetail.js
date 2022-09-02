
const detail = async (id) =>{
    const $container = document.querySelector('.detail-container')
    const $fragmento = document.createDocumentFragment();
    const $category = document.createElement('p');
    const $description = document.createElement('p');
    const $name = document.createElement('p');
    const $price = document.createElement('p');
    const $stock = document.createElement('p');
    const $label = document.createElement('label');
   
    
    try {
        let res = await fetch(`http://localhost:4000/api/products/${id}`),
        json = await res.json();
        if(!res.ok){
            const err = {Status: res.status, statusText: res.statusText || "A ocurrido un error"}
            throw err;
        }

        $category.innerHTML = json.category;
        $description.innerHTML = json.description;
        $name.innerHTML = json.name;
        $price.innerHTML = `${json.price} DOP`;
        $stock.innerHTML = json.stock;

       

        $fragmento.appendChild($category);
        $fragmento.appendChild($description);
        $fragmento.appendChild($name);
        $fragmento.appendChild($price);
        $fragmento.appendChild($stock);

        $category.insertAdjacentHTML('afterend',`<br>`)
        $description.insertAdjacentHTML('afterend',`<br>`)
        $name.insertAdjacentHTML('afterend',`<br>`)
        $price.insertAdjacentHTML('afterend',`<br>`)
        $stock.insertAdjacentHTML('afterend',`<br>`)

        $category.insertAdjacentHTML('beforebegin', $label.innerHTML= `<b>Categoria: </b>`)
        $description.insertAdjacentHTML('beforebegin', $label.innerHTML= `<b>Descripcion: </b>`)
        $name.insertAdjacentHTML('beforebegin', $label.innerHTML= `<b>Nombre: </b>`)
        $price.insertAdjacentHTML('beforebegin', $label.innerHTML= `<b>Precio: </b>`)
        $stock.insertAdjacentHTML('beforebegin', $label.innerHTML= `<b>Stock: </b>`)
      
        $container.appendChild($fragmento);

      

    } catch (err) {
        console.log(err)
        //$content.innerHTML = `Error: ${err.Status}, ${err.statusText}`;  
}

}

export{
    detail
}