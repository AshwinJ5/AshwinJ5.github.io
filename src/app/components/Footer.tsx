const Footer = () => {
    return (
        <footer className="border-t border-zinc-800 bg-[#0E1111] py-8 text-center">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Ashwin Joseph. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
