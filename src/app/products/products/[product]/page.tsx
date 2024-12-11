//export default function Product(props: {params:{product:string}}){
// return(
//        <p>{props.params.product}</p>    )

export default async function Product1({params}: {params:{product:string}}){
const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`)
//const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`,{next:{revalidate:3000}})   //  For static page
//const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`,{cache:"no-store"})                          //  For dynamic page   


const res = await fetchData.json()  
    return(
        <>
        <h3>Product Details</h3>
        <p>{res.id}</p>
        <p>{res.title}</p>
        <p>{res.body}</p>
        </>
    )
}