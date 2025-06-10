import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Links = () => {
    return (
        <section className="links">
            <ul className="icon-list">
                <li>
                    <a
                        href="https://github.com/lee-ranaweer"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <FaGithub className="icon" />
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.linkedin.com/in/nelith-ranaweera/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="icon" />
                    </a>
                </li>
                
                <li>
                    <a
                        href="https://www.instagram.com/6ways_fromsunday?igsh=OGkzNWIxdG5vbDdh"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="icon" />
                    </a>
                </li>

                
            </ul>
        </section>
    );
}

export default Links;   