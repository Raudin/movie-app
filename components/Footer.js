const Footer = () => {
    return (
        <footer className="p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
            <span className="text-sm text-white sm:text-center">© {new Date().getFullYear()} Movie Buzz. All Rights Reserved.</span>
        </footer>
    );
}
 
export default Footer;