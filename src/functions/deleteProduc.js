const deletProduct = async (id) =>{
    try {
        let options = {
            method: 'DELETE',
            headers:{
                'accept': '*/*',      
            },
        }
        

        let res = await fetch(`http://localhost:4000/api/products/${id}`, options);
        
        if(!res.ok){
            const err = {Status: res.status, statusText: res.statusText || "A ocurrido un error"}
            throw err;
        }


    } catch (err) {
       console.log(err);
} 
}

export{
    deletProduct
}