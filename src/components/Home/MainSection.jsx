import React from 'react';
import { Moon, Sunrise, Heart, Target } from 'lucide-react';
import { NavLink } from 'react-router';

export default function MainSection() {
  const features = [
    {
      id: 1,
      icon: Moon,
      iconBgColor: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      title: 'أذكار المساء',
      description: 'حصن نفسك في المساء',
      link: '/azkar/evening',
    },
    {
      id: 2,
      icon: Sunrise,
      iconBgColor: 'bg-amber-100',
      iconColor: 'text-amber-600',
      title: 'أذكار الصباح',
      description: 'ابدأ يومك بذكر الله',
      link: '/azkar/morning',
    },

    {
      id: 3,
      icon: Heart,
      iconBgColor: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      title: 'أشهر الأدعية',
      description: 'أدعية من القرآن والسنة',
      link: '/duas',
    },
    {
      id: 4,
      icon: Target,
      iconBgColor: 'bg-teal-100',
      iconColor: 'text-teal-600',
      title: 'المسبحة',
      description: 'عداد التسبيح الرقمي',
      link: '/tasbih',
    },
  ];

  return (
    <main className="px-6 py-2">
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <NavLink
                key={feature.id}
                to={feature.link}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer active:scale-95 block">
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div
                    className={`${feature.iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <Icon size={28} className={feature.iconColor} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </main>
  );
}
