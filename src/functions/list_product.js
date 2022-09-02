

async function getData() {
    const $content = document.querySelector('.content');
    const $fragment = document.createDocumentFragment();
    

    try {
        let res = await fetch('http://localhost:4000/api/products/all'),
        json = await res.json();
        if(!res.ok){
            
            const err = {Status: res.status, statusText: res.statusText || "A ocurrido un error"}
            throw err;
        }
        
        json.forEach((el)=>{
            
            const $card = document.createElement('div');
            const $title = document.createElement('h4');
            const $description = document.createElement('p');
            const $category = document.createElement('p');
            const $btnDatails = document.createElement(`a`)
            

            $category.innerHTML = `${el.category}`
            $title.innerHTML = `${el.name}`;
            $description.innerHTML = `${el.description}`;
            $btnDatails.classList.add('btn', 'btn-primary') ;
            $btnDatails.innerHTML = 'Detalles';
            $btnDatails.href = `/Products/${el._id}`
                 

            $card.appendChild($title);
            $card.appendChild($description);
            $card.appendChild($category)
            $card.appendChild($btnDatails)
            $fragment.appendChild($card);

            $category.classList.add('categoria')
            $title.classList.add('titulo')
            $title.classList.add('mb-5',)
            $card.classList.add('transition','text-center', 'border','bg-light', 'm-5','p-4', 'producto')
            $card.setAttribute('data-id', el._id);
            
            $content.appendChild($fragment)
        })

    } catch (err) {
        console.log(err)
        $content.innerHTML = `Error: ${err.Status}, ${err.statusText}`;  
}}


export { 
    getData

}