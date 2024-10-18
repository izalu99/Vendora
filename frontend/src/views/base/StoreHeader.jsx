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
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex items-center justify-between py-4" aria-label="Main Navigation">
                <Link className="text-2xl font-bold" to="/">Vendora</Link>
                <button className="lg:hidden" onClick={toggleNavbar} aria-expanded={isNavbarOpen} aria-controls="navbar-menu">
                    <i className="fas fa-bars"></i>
                    <span className="sr-only">Toggle navigation</span>
                </button>
                <div id="navbar-menu" className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-transform transform ${isNavbarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 lg:flex lg:items-center lg:space-x-4`}>
                    <div className="flex flex-col space-y-4 text-center lg:flex-row lg:items-center lg:space-x-4 p-4 lg:p-0">
                        <button className="self-end lg:hidden mb-4" onClick={toggleNavbar} aria-expanded={isNavbarOpen} aria-controls="navbar-menu">
                            <i className="fas fa-times"></i>
                            <span className="sr-only">Close navigation</span>
                        </button>
                        <div className="relative">
                            <button onClick={toggleAccountDropdown} className="flex items-center space-x-2 justify-center" aria-expanded={isAccountDropdownOpen} aria-haspopup="true">
                                <span>Account</span>
                                <i className="fas fa-caret-down"></i>
                            </button>
                            {isAccountDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg" role="menu">
                                    <li><Link to={'/customer/account/'} className="block px-4 py-2 hover:bg-gray-200" role="menuitem"><i className='fas fa-user'></i> Account</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to={`/customer/orders/`} role="menuitem"><i className='fas fa-shopping-cart'></i> Orders</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to={`/customer/wishlist/`} role="menuitem"><i className='fas fa-heart'></i> Wishlist</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to={`/customer/notifications/`} role="menuitem"><i className='fas fa-bell fa-shake'></i> Notifications</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to={`/customer/settings/`} role="menuitem"><i className='fas fa-gear fa-spin'></i> Settings</Link></li>
                                </ul>
                            )}
                        </div>
                        <div className="relative">
                            <button onClick={toggleVendorDropdown} className="flex items-center space-x-2" aria-expanded={isVendorDropdownOpen} aria-haspopup="true">
                                <span>Vendor</span>
                                <i className="fas fa-caret-down"></i>
                            </button>
                            {isVendorDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg" role="menu">
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/dashboard/" role="menuitem"><i className='fas fa-user'></i> Dashboard</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/products/" role="menuitem"><i className='bi bi-grid-fill'></i> Products</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/product/new/" role="menuitem"><i className='fas fa-plus-circle'></i> Add Products</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/orders/" role="menuitem"><i className='fas fa-shopping-cart'></i> Orders</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/earning/" role="menuitem"><i className='fas fa-dollar-sign'></i> Earning</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/reviews/" role="menuitem"><i className='fas fa-star'></i> Reviews</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/coupon/" role="menuitem"><i className='fas fa-tag'></i> Coupon</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/notifications/" role="menuitem"><i className='fas fa-bell fa-shake'></i> Notifications</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to="/vendor/settings/" role="menuitem"><i className='fas fa-gear fa-spin'></i> Settings</Link></li>
                                </ul>
                            )}
                        </div>
                        <div className="flex items-center space-x-2">
                            <label htmlFor="search" className="sr-only">Search</label>
                            <input id="search" name="search" className="form-input px-4 py-2 rounded" type="text" placeholder="Search" aria-label="Search" />
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" type="submit">Search</button>
                        </div>
                        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" to="/login">Login</Link>
                        <Link className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" to="/register">Register</Link>
                        <Link className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" to="/cart/"><i className='fas fa-shopping-cart'></i> <span id='cart-total-items'>{cartCount || 0}</span></Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default StoreHeader;