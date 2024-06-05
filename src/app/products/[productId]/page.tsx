type Params = {
    params: {
        productId: string
    }
}

function ProductDetails ({params} : Params) {
    return (
        <h1>Details about product {params.productId}</h1>
    )
}

export default ProductDetails