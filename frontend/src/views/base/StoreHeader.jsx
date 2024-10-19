import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const StoreHeader = () => {
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
    const [isVendorDropdownOpen, setIsVendorDropdownOpen] = useState(false);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const cartCount = 0;

    const accountDropdownRef = useRef(null);
    const vendorDropdownRef = useRef(null);
    const navbarRef = useRef(null);

    const toggleAccountDropdown = () => {
        setIsAccountDropdownOpen(!isAccountDropdownOpen);
        setIsVendorDropdownOpen(false);
    };

    const toggleVendorDropdown = () => {
        setIsVendorDropdownOpen(!isVendorDropdownOpen);
        setIsAccountDropdownOpen(false);
    };

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    const handleClickOutside = (event) => {
        if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
            setIsAccountDropdownOpen(false);
        }
        if (vendorDropdownRef.current && !vendorDropdownRef.current.contains(event.target)) {
            setIsVendorDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex items-center justify-between py-4 relative z-50" aria-label="Main Navigation">
                <Link className="text-2xl font-bold" to="/">Vendora</Link>
                <button onClick={toggleNavbar} className="lg:hidden py-1 px-2 bg-gray-800 rounded-md hover:bg-gray-600" aria-label={isNavbarOpen ? "Close Menu" : "Open Menu"}>
                    <i className={`fas ${isNavbarOpen ? `fa-times` : `fa-bars`}`}></i>
                </button>
                <div
                    id="navbar-menu"
                    ref={navbarRef}
                    className={`fixed inset-x-0 top-20 bottom-0 bg-gray-800 bg-opacity-75 z-40 transition-transform transform ${isNavbarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:top-0 lg:translate-x-0 lg:flex lg:items-center lg:space-x-4`}
                >
                    <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center lg:space-x-4 p-4 lg:p-0">
                        <div className="relative" ref={accountDropdownRef}>
                            <button onClick={toggleAccountDropdown} className="flex items-center space-x-2" aria-expanded={isAccountDropdownOpen} aria-haspopup="true">
                                <span>Account</span>
                                <i className="fas fa-caret-down"></i>
                            </button>
                            {isAccountDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50" role="menu">
                                    <li><Link to={'/customer/account/'} className="block px-4 py-2 hover:bg-gray-200" role="menuitem"><i className='fas fa-user'></i> Account</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to={`/customer/orders/`} role="menuitem"><i className='fas fa-shopping-cart'></i> Orders</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to={`/customer/wishlist/`} role="menuitem"><i className='fas fa-heart'></i> Wishlist</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to={`/customer/notifications/`} role="menuitem"><i className='fas fa-bell fa-shake'></i> Notifications</Link></li>
                                    <li><Link className="block px-4 py-2 hover:bg-gray-200" to={`/customer/settings/`} role="menuitem"><i className='fas fa-gear fa-spin'></i> Settings</Link></li>
                                </ul>
                            )}
                        </div>
                        <div className="relative" ref={vendorDropdownRef}>
                            <button onClick={toggleVendorDropdown} className="flex items-center space-x-2" aria-expanded={isVendorDropdownOpen} aria-haspopup="true">
                                <span>Vendor</span>
                                <i className="fas fa-caret-down"></i>
                            </button>
                            {isVendorDropdownOpen && (
                                <ul className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50" role="menu">
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
                        <div className="flex items-start space-x-2">
                            <label htmlFor="search" className="sr-only">Search</label>
                            <input id="search" name="search" className="px-4 py-2 rounded" type="text" placeholder="Search" aria-label="Search" />
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" type="submit">Search</button>
                        </div>
                        <Link className=" text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" to="/login">Login</Link>
                        <Link className="text-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" to="/register">Register</Link>
                        <Link className="text-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" to="/cart/"><i className='fas fa-shopping-cart'></i> <span id='cart-total-items'>{cartCount || 0}</span></Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default StoreHeader;