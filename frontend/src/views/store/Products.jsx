import { useState, useEffect } from "react"

import apiInstance from "../../utils/axios"

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        apiInstance.get('products/')
        .then((res) => {
            const response = res.data
            //console.log(response)
            setProducts(response)
        })
    },[])


    console.log('products: ',products)


    return (
    <div>
    <main className="mt-5">
        <div className="container">
        <section className="text-center">
            <div className="row">
                {products?.map((product) => (
                    <div key={product.pid} className="col-lg-4 col-md-12 mb-4">
                        <div className="card">
                        <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
                            <img
                            src={product.image}
                            className="auto-fit-image card-img-top"
                            />
                            <a href="#!">
                            <div className="mask">
                                <div className="d-flex justify-content-start align-items-end h-100">
                                <h5>
                                    <span className="badge badge-primary ms-2">New</span>
                                </h5>
                                </div>
                            </div>
                            <div className="hover-overlay">
                                <div
                                className="mask"
                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                />
                            </div>
                            </a>
                        </div>
                        <div className="card-body">
                            <a href="/" className="text-reset">
                            <h5 className="card-title mb-3">{product.title}</h5>
                            </a>
                            <a href="/" className="text-reset">
                            <p>{product.category?.title}</p>
                            </a>
                            <h6 className="mb-3">${product.price}</h6>
                            <div className="btn-group">
                            <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenuClickable"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="false"
                                aria-expanded="false"
                            >
                                Variation
                            </button>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuClickable"
                            >
                                <div className="d-flex flex-column">
                                <li className="p-1">
                                    <b>Size</b>: XL
                                </li>
                                <div className="p-1 mt-0 pt-0 d-flex flex-wrap">
                                    <li>
                                    <button className="btn btn-secondary btn-sm me-2 mb-1">
                                        XXL
                                    </button>
                                    </li>
                                    <li>
                                    <button className="btn btn-secondary btn-sm me-2 mb-1">
                                        XXL
                                    </button>
                                    </li>
                                    <li>
                                    <button className="btn btn-secondary btn-sm me-2 mb-1">
                                        XXL
                                    </button>
                                    </li>
                                </div>
                                </div>
                                <div className="d-flex flex-column mt-3">
                                <li className="p-1">
                                    <b>COlor</b>: Red
                                </li>
                                <div className="p-1 mt-0 pt-0 d-flex flex-wrap">
                                    <li>
                                    <button
                                        className="btn btn-sm me-2 mb-1 p-3"
                                        style={{ backgroundColor: "red" }}
                                    />
                                    </li>
                                    <li>
                                    <button
                                        className="btn btn-sm me-2 mb-1 p-3"
                                        style={{ backgroundColor: "green" }}
                                    />
                                    </li>
                                    <li>
                                    <button
                                        className="btn btn-sm me-2 mb-1 p-3"
                                        style={{ backgroundColor: "yellow" }}
                                    />
                                    </li>
                                </div>
                                </div>
                                <div className="d-flex mt-3 p-1">
                                <button
                                    type="button"
                                    className="btn btn-primary me-1 mb-1"
                                >
                                    <i className="fas fa-shopping-cart" />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger px-3 me-1 mb-1 ms-2"
                                >
                                    <i className="fas fa-heart" />
                                </button>
                                </div>
                            </ul>
                            <button
                                type="button"
                                className="btn btn-danger px-3 me-1 ms-2"
                            >
                                <i className="fas fa-heart" />
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        {/*Section: Category*/}
        <section className="text-center">
                <div className="flex flex-row justify-between">
                    <div>
                        <img src="https://placehold.co/150" className="rounded-full"></img>
                        <h6 className="text-center">Category</h6>
                    </div>
                    <div>
                        <img src="https://placehold.co/150" className="rounded-full"></img>
                        <h6 className="text-center">Category</h6>
                    </div>
                    <div>
                        <img src="https://placehold.co/150" className="rounded-full"></img>
                        <h6 className="text-center">Category</h6>
                    </div>
                    <div>
                        <img src="https://placehold.co/150" className="rounded-full"></img>
                        <h6 className="text-center">Category</h6>
                    </div>
                    <div>
                        <img src="https://placehold.co/150" className="rounded-full"></img>
                        <h6 className="text-center">Category</h6>
                    </div>
                </div>
        </section>
        {/*Section: Wishlist*/}
        </div>
    </main>
    </div>
    )
}

export default Products
