import logo from "@/assets/dillon-bird-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How We Work", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-brand-navy py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dillon & Bird Partners" className="h-10 brightness-0 invert" />
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-secondary/80 hover:text-secondary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-secondary/10 text-center">
          <p className="text-sm text-secondary/60">
            © {new Date().getFullYear()} Dillon & Bird Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
