import { Menu, X, Github, Linkedin, Mail, File, LucideIcon } from 'lucide-react';
import { useState, ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  onClick: () => void;
  children: ReactNode;
}

function NavLink({ href, onClick, children }: NavLinkProps) {
  return (
    <span
      onClick={onClick}
      className="text-white hover:text-purple-200 transition-colors cursor-pointer whitespace-nowrap"
    >
      {children}
    </span>
  );
}

interface SocialIconProps {
  href: string;
  Icon: LucideIcon;
}

function SocialIcon({ href, Icon }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-purple-200 transition-colors"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#timeline', label: 'Experience & Education' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  { href: 'https://github.com/Supratip1', Icon: Github },
  { href: 'https://www.linkedin.com/in/supratip/', Icon: Linkedin },
  { href: 'mailto:supratipbhattacharya2@gmail.com', Icon: Mail },
  {
    href: 'https://drive.google.com/file/d/1eAS8KV77d9jaCVnvledI5s-tVe2SJEAd/view?usp=sharing',
    Icon: File,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full bg-gradient-to-r from-purple-700 via-indigo-500 to-blue-500 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              onClick={() => scrollToSection('#hero')}
              className="text-lg md:text-xl lg:text-2xl font-bold text-white cursor-pointer whitespace-nowrap"
            >
              Supratip | Developer
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 ml-8">
            <div className="flex items-center space-x-6">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={() => scrollToSection(item.href)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="flex items-center space-x-4 border-l pl-8 border-white/30">
              {SOCIAL_LINKS.map((link) => (
                <SocialIcon key={link.href} {...link} />
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-purple-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 top-16 bg-gray-800 bg-opacity-25" onClick={() => setIsOpen(false)} />
            <div className="fixed inset-x-0 top-16 bg-gradient-to-b from-gray-900 via-purple-900 to-black shadow-lg">
              <div className="pt-2 pb-3 space-y-1 px-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    onClick={() => scrollToSection(item.href)}
                  >
                    <div className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-white">
                      {item.label}
                    </div>
                  </NavLink>
                ))}
                <div className="flex items-center space-x-4 px-3 py-4 border-t border-white/30 mt-4">
                  {SOCIAL_LINKS.map((link) => (
                    <SocialIcon key={link.href} {...link} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
