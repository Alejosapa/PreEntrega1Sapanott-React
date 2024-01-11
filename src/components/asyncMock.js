
const products = [
    {
        id: '1', name:'Remera', price:'6000', category:'parte-superior', img:'https://acdn.mitiendanube.com/stores/219/431/products/8b4fa3e4-b028-4bd0-a2ba-a2ac0065cbef-40dc5bd09032a46cf616935214938318-1024-1024.webp', stock:15, 
    },
    {
        id: '2', name:'jogger', price:'15000', category:'parte-inferior', img:'https://acdn.mitiendanube.com/stores/002/580/475/products/pg5020-7-5e46cc1b0484d594ce16969507778528-1024-1024.webp', stock:5, 
    },
    {
        id: '3', name:'Jens', price:'10000', category:'parte-inferior', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2gfzGb40Fzx8-9nd52teAV6wudMd_Gn4Y5i39PuWb8hOL3idlOd9zS8asWUuiNiNH7-c&usqp=CAU', stock:8, 
    },
]

export const getProducts = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        },500)
    })
}
export const getProductosById = (ProductosId)=>{
    return new Promise((resolve)=> { setTimeout(()=>{
            resolve(products.find(prod => prod.id === ProductosId))
        }, 500)
    })
}
export const getProductosByCategoria = (categoryId)=>{
    return new Promise((resolve)=> { setTimeout(()=>{
            resolve(products.filter(prod=> prod.category === categoryId))
        }, 500)
    })
}



