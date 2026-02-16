import React from 'react';
import { NavLink } from 'react-router';
import { Home, BookOpen, Heart, User } from 'lucide-react';

const Footer = () => {
  const navItems = [
    {
      path: '/profile',
      icon: User,
      label: 'حسابي',
      ariaLabel: 'My Account',
    },
    {
      path: '/quran',
      icon: BookOpen,
      label: 'القرآن',
      ariaLabel: 'Quran',
    },
    {
      path: '/favorites',
      icon: Heart,
      label: 'المفضلة',
      ariaLabel: 'Favorites',
    },
    {
      path: '/',
      icon: Home,
      label: 'الرئيسية',
      ariaLabel: 'Home',
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <nav className="max-w-2xl mx-auto px-4">
        <ul className="flex justify-around items-center py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex flex-col items-center gap-1 px-6 py-2 rounded-2xl transition-all duration-300 ${
                      isActive ? 'bg-emerald-50 text-emerald-500' : 'text-gray-400 hover:text-gray-600'
                    }`
                  }
                  aria-label={item.ariaLabel}>
                  {({ isActive }) => (
                    <>
                      <Icon
                        size={24}
                        className={isActive ? 'stroke-emerald-500' : 'stroke-current'}
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                      <span className="text-xs font-medium">{item.label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
