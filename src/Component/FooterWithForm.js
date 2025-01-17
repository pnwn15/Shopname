import React from 'react'

function FooterWithForm() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
  <footer className="footer flex flex-col lg:flex-row justify-center bg-base-200 text-base-content py-8 space-y-6 lg:space-y-0 lg:space-x-20 w-full max-w-screen-lg">
    <nav className="text-center lg:text-left">
      <h6 className="footer-title text-lg font-semibold mb-2">Customer Service</h6>
      <a className="link link-hover block">Monday to Friday <br />10am - 6.30pm<br />(New York time)</a>
      <a className="link link-hover block mt-2">+(001) 23 45 67 89</a>
      <a className="link link-hover block mt-2">Send us an email</a>
    </nav>
    <nav className="text-center lg:text-left">
      <h6 className="footer-title text-lg font-semibold mb-2">Your Account</h6>
      <a className="link link-hover block">Personal info</a>
      <a className="link link-hover block mt-2">Orders</a>
      <a className="link link-hover block mt-2">Credit slips</a>
      <a className="link link-hover block mt-2">Addresses</a>
    </nav>
    <nav className="text-center lg:text-left">
      <h6 className="footer-title text-lg font-semibold mb-2">Our Company</h6>
      <a className="link link-hover block">Delivery</a>
      <a className="link link-hover block mt-2">Legal Notice</a>
      <a className="link link-hover block mt-2">About Us</a>
      <a className="link link-hover block mt-2">Contact Us</a>
      <a className="link link-hover block mt-2">Terms and conditions of use</a>
    </nav>
  </footer>

  <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-screen-lg space-y-6 sm:space-y-0 sm:space-x-8 mt-4">
    <div className="text-xs font-semibold text-center sm:text-left">
      © 2025 - Mobilex. All rights reserved
    </div>
    <div className="flex justify-center gap-4">
      <a href="#" className="text-gray-500 hover:text-gray-900">
        <img src="/picture/amzon.svg" className="w-6 h-6" alt="Amazon" />
      </a>
      <a href="#" className="text-gray-500 hover:text-gray-900">
        <img src="/picture/a.svg" className="w-6 h-6" alt="Logo A" />
      </a>
      <a href="#" className="text-gray-500 hover:text-gray-900">
        <img src="/picture/pay.svg" className="w-6 h-6" alt="Pay" />
      </a>
      <a href="#" className="text-gray-500 hover:text-gray-900">
        <img src="/picture/master.svg" className="w-6 h-6" alt="MasterCard" />
      </a>
      <a href="#" className="text-gray-500 hover:text-gray-900">
        <img src="/picture/pp.svg" className="w-6 h-6" alt="PayPal" />
      </a>
      <a href="#" className="text-gray-500 hover:text-gray-900">
        <img src="/picture/visa.svg" className="w-6 h-6" alt="Visa" />
      </a>
    </div>
  </div>
</div>


  )
}

export default FooterWithForm
