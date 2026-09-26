import {  Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div>
                <h3>Victoria Uzoma</h3>
                <p>
                    Building useful digital experience through code and creativity
                </p>
            </div>

            <div className="footer-link">
                <a href="#" aria-label="FaGithub">
                    <FaGithub size={20}/>
                </a>

                <a href="#" aria-label="FaLinkedin">
                    <FaLinkedin size={20} />
                </a>

                <a href="mailto:vuzoma140@gmail.com" aria-label="Email">
                    <Mail size={20} />
                </a>
            </div>

            <p className="copyright">
                2026 Victoria Uzoma. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;