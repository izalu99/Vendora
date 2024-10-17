import { useState } from 'react';
import { Link } from 'react-router-dom';

const StoreHeader = () => {
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
    const [isVendorDropdownOpen, setIsVendorDropdownOpen] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const cartCount = 0;

    const toggleAccountDropdown = () => {
        setIsAccountDropdownOpen(!isAccountDropdownOpen);
        setIsVendorDropdownOpen(false); // Close the other dropdown
    };

    const toggleVendorDropdown = () => {
        setIsVendorDropdownOpen(!isVendorDropdownOpen);
        setIsAccountDropdownOpen(false); // Close the other dropdown
    };

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <div className="bg-gray-800 text-white">
            <nav className="container mx-auto flex items-center justify-between py-4">
                <Link className="text-2xl font-bold" to="/">Vendora</Link>
                <button className="lg:hidden" onClick={toggleNavbar}>
                    <i className="fas fa-bars"></i>
                </button>
                <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-transform transform ${isNavbarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:flex lg:items-center lg:space-x-4`}>
                    <div className="flex flex-col space-y-4 text-center lg:flex-row lg:items-center lg:space-x-4 p-4 lg:p-0">
                        <button className="self-end lg:hidden mb-4" onClick={toggleNavbar}>
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="relative">
                            <button onClick={toggleAccountDropdown} className="flex items-center space-x-2 justify-center">
                                <span>Account</span>
                                <i className="fas fa-caret-down"></i>
                            </button>
                            {isAccountDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                                    <li><Link to={'/customer/account/'} className="block px-4 py-2 hover:bg-gray-200"><i className='fas fa-user'></i> Account</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to={`/customer/orders/`}><i className='fas fa-shopping-cart'></i> Orders</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to={`/customer/wishlist/`}><i className='fas fa-heart'></i> Wishlist</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to={`/customer/notifications/`}><i className='fas fa-bell fa-shake'></i> Notifications</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to={`/customer/settings/`}><i className='fas fa-gear fa-spin'></i> Settings</Link></li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button onClick={toggleVendorDropdown} className="flex items-center space-x-2">
                                <span>Vendor</span>
                                <i className="fas fa-caret-down"></i>
                            </button>
                            {isVendorDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/dashboard/"> <i className='fas fa-user'></i> Dashboard</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/products/"> <i className='bi bi-grid-fill'></i> Products</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/product/new/"> <i className='fas fa-plus-circle'></i> Add Products</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/orders/"> < i className='fas fa-shopping-cart'></i> Orders</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/earning/"> <i className='fas fa-dollar-sign'></i> Earning</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/reviews/"> <i className='fas fa-star'></i> Reviews</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/coupon/"> <i className='fas fa-tag'></i> Coupon</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/notifications/"> <i className='fas fa-bell fa-shake'></i> Notifications</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/settings/"> <i className='fas fa-gear fa-spin'></i> Settings</Link></li>
                                </ul>
                            )}
                        </div>
                        <div className="flex items-center space-x-2">
                            <input name='search' className="form-input px-4 py-2 rounded" type="text" placeholder="Search" aria-label="Search" />
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" type="submit">Search</button>
                        </div>
                        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" to="/login">Login</Link>
                        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" to="/register">Register</Link>
                        <Link className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" to="/cart/"><i className='fas fa-shopping-cart'></i> <span id='cart-total-items'>{cartCount || 0}</span></Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default StoreHeader;