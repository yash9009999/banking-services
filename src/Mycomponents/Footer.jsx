import React from 'react'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="footer-left">
                    <h2>ASSISTECH CONSULTANCY PVT. LTD</h2>
                    <p>
                        With a strong focus on combining cutting-edge advancements with
                        customer-centric strategies, we specialize in creating tailored
                        services that empower businesses and enhance everyday life.
                    </p>
                </div>

                {/* Middle Section */}
                <div className="footer-middle">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT US</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">FAQ's</a></li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="footer-right">
                    <h3>Get Connected</h3>
                    <p><strong>Phone:</strong> 9876543210</p>
                    <p><strong>Email:</strong> demo@gmail.com</p>
                    <p><strong>Location:</strong> A108 Adam Street, New York, NY 535022, United States</p>

                    {/* Social Icons */}
                    <div className="social-icons">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="m323-245 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"/></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="m323-245 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"/></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="m323-245 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"/></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e3e3e3"><path d="m323-245 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"/></svg></a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                &copy; Copyright {new Date().getFullYear()} AssisTech
            </div>
        </footer>
    )
}

export default Footer