import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiInstance from "../../utils/axios";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [OpenVariationMenus, setOpenVariationMenus] = useState({});
    const [chosenColors, setChosenColors] = useState({});
    const [chosenSizes, setChosenSizes] = useState({});


    const toggleVariationMenu = (productId) => {
        setOpenVariationMenus((prevVariationMenus) => ({
            ...prevVariationMenus,
            [productId]: !prevVariationMenus[productId],
        }));
    };

    const chooseColor = (productId, color) => {
        setChosenColors((prevChosenColors) => ({
            ...prevChosenColors,
            [productId]: color,
        }));
    }

    const chooseSize = (productId, size) => {
        setChosenSizes((prevChosenSizes) => ({
            ...prevChosenSizes,
            [productId]: size,
        }));
    }

    useEffect(() => {
        apiInstance.get('products/')
            .then((res) => {
                const response = res.data;
                setProducts(response);
            });
    }, []);

    useEffect(() => {
        apiInstance.get('category/')
            .then((res) => {
                const responseCat = res.data;
                setCategories(responseCat);
            });
    }, []);

    return (
        <div>
            <main className="mt-5">
                <div className="flex flex-col space-y-5">
                    {/* Section: Category */}
                    <section className="text-center">
                        <div className="flex flex-row justify-center">
                            <h4 className="text-center">Categories</h4>
                            {categories?.map((category) => (
                                <div key={category.slug} className="mx-4">
                                    <img src="https://placehold.co/100" className="rounded-full" alt="Category" />
                                    <h6 className="text-center">{category.title || "Category"}</h6>
                                </div>
                            ))}
                        </div>
                    </section>
                    {/* Section: Products */}
                    <section className="text-center">
                        <div className="flex flex-wrap justify-center">
                            {products?.map((product) => (
                                <div key={product.pid} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                                    <div className="bg-white shadow-md rounded-lg">
                                        <div className="relative">
                                            <Link to={`/detail/${product.slug}`}>
                                                <img
                                                    src={product.image}
                                                    className="w-full h-48 object-cover"
                                                    alt={product.title}
                                                />
                                            </Link>
                                            <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-br-lg">
                                                New
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <Link to={`/detail/${product.slug}`} className="text-gray-900 hover:text-blue-500">
                                                <h5 className="text-lg font-semibold mb-2">{product.title}</h5>
                                            </Link>
                                            <p className="text-gray-600">{product.category?.title}</p>
                                            <h6 className="text-lg font-bold mb-3">${product.price}</h6>
                                            <div className="relative inline-block text-left space-x-2">
                                                <button
                                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                                                    type="button"
                                                    id="dropdownMenuButton"
                                                    aria-expanded={OpenVariationMenus[product.pid] ? "true" : "false"}
                                                    aria-haspopup="true"
                                                    onClick={() => toggleVariationMenu(product.pid)}
                                                >
                                                    Variation
                                                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                                {/* Variation Menu */}
                                                {OpenVariationMenus[product.pid] && (
                                                <div className="origin-top-right absolute z-50 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdownMenuButton">
                                                        <div className="px-4 py-2 text-sm text-gray-700">
                                                            <b>Size</b>: {chosenSizes[product.pid] || "None"}
                                                        </div>
                                                        <div className="px-4 py-2 flex flex-wrap">
                                                            {product.size?.map((size) => (
                                                                <button 
                                                                onClick={()=> chooseSize(product.pid, size.name)} 
                                                                key={`${size.id}-${size.name}`} 
                                                                className="bg-gray-200 text-gray-700 text-xs font-semibold py-1 px-2 rounded mr-2 mb-2"
                                                                >{size.name}</button>
                                                            ))

                                                            }
                                                        </div>
                                                        <div className="px-4 py-2 text-sm text-gray-700">
                                                            <b>Color</b>: {chosenColors[product.pid] || "None"}
                                                        </div>
                                                        <div className="px-4 py-2 flex flex-wrap">
                                                            {product.color?.map((color) => (
                                                                <button 
                                                                onClick={() => chooseColor(product.pid, color.name)} 
                                                                key={`${color.id}-${color.name}`} 
                                                                style={{backgroundColor: color.name}} 
                                                                className="w-6 h-6 rounded-full mr-2 mb-2"
                                                                ></button>
                                                            ))
                                                            }
                                                        </div>
                                                        <div className="px-4 py-2 flex">
                                                            <button className="bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded mr-2 mb-2">
                                                                <i className="fas fa-shopping-cart"></i>
                                                            </button>
                                                            <button className="bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded mr-2 mb-2">
                                                                <i className="fas fa-heart"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                )}
                                            </div>
                                            <button className="bg-red-500 ml-2 text-white text-xs font-semibold py-1 px-2 rounded mt-2">
                                                <i className="fas fa-heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default Products;