import NotFound from "@/app/not-found"

function ReviewWithId ({params} : {params: {productId: string, reviewId: string}}) {
    if(parseInt(params.reviewId) >=100) {
        return (
            <NotFound />
        )
    } 

    return (
        <h1>Review with id {params.reviewId} for product {params.productId}</h1>
    )
}

export default ReviewWithId