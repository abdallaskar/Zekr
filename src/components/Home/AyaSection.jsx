import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

export default function AyaSection() {
  const [aya, setAya] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAya = async () => {
      try {
        const response = await fetch('https://api.alquran.cloud/v1/ayah/random/ar.alafasy');
        const result = await response.json();
        setAya(result.data);
      } catch (error) {
        console.error('Error fetching Aya:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAya();
  }, []); // Empty dependency array means it runs once on mount

  return (
    <section className="px-6 py-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-3xl p-8 shadow-lg">
          <div className="text-right text-white">
            <div className="flex items-center justify-end gap-2 mb-6">
              <span className="text-sm font-semibold opacity-90">آية اليوم</span>
              <Quote size={20} className="opacity-90" />
            </div>

            {loading ? (
              <h2 className="text-xl font-bold leading-relaxed mb-6 animate-pulse">جاري التحميل...</h2>
            ) : (
              <>
                <h2 className="text-2xl font-bold leading-relaxed mb-6">"{aya?.text}"</h2>
                <p className="text-sm opacity-90">
                  {aya?.surah?.name} - آية {aya?.numberInSurah}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
