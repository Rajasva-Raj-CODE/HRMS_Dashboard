'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const banners = [
  {
    title: "Stay financially savvy with",
    subtitle: "One-Click access to Payroll",
    description: "and expenses information.",
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Mark your",
    subtitle: "Attendance & Record",
    description: "your daily mood in seconds!",
    color: "from-green-500 to-blue-500"
  },
  {
    title: "Streamline your",
    subtitle: "Leave Requests",
    description: "with smart approval workflows.",
    color: "from-orange-500 to-red-500"
  }
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-r ${banners[currentSlide].color} opacity-10 dark:opacity-20`} />
      
      <div className="relative flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {banners[currentSlide].title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
            {banners[currentSlide].subtitle}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {banners[currentSlide].description}
          </p>
        </div>
        
        <div className="hidden md:block">
          <div className="w-64 h-32 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
            <div className="text-6xl">🎯</div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-4 left-8 flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={prevSlide}>
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <div className="flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
        <Button variant="outline" size="sm" onClick={nextSlide}>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}