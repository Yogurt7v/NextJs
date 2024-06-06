'use client'
import NotFound from "@/app/not-found"

function getRandomInt (count: number) {
    return Math.floor(Math.random() * count)
}

function ReviewWithId ({params} : {params: {productId: string, reviewId: string}}) {
    const random = getRandomInt(2)

    if(random ===1 ){
        throw new Error('Error loading')
    }

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

