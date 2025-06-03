import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
                
                {/* <li>
                    <a
                        href="mailto:nranawee@uoguelph.ca"
                        aria-label="Email"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <FaEnvelope className="icon" />
                    </a>
                </li> */}

                
            </ul>
        </section>
    );
}

export default Links;   