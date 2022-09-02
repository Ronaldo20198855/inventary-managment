
async function SearchProduct() {
    let $input = document.querySelector('.search-input')

    try {
        document.querySelectorAll('.producto').forEach((el)=>{
            let titulo = el.querySelector('.titulo')
            let categoria = el.querySelector('.categoria')
            
            titulo.textContent.normalize('NFD')
            .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
            .toLowerCase()
            .includes($input.value
                .toLowerCase())       
            ||      
            categoria.textContent.normalize('NFD')
            .replace(/([aeio])\u0301|(u)[\u0301\u0308]/gi,"$1$2")
            .toLowerCase()
            .includes($input.value
                .toLowerCase())
            ? el.classList.remove('filter') 
            : el.classList.add('filter')
        })

    } catch (err) {
        console.log(err)
}
}

export {
    SearchProduct
}