import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GrcCarouselProps {
  items: React.ReactNode[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  itemWidthClassName?: string;
  gapClassName?: string;
  pyClassName?: string;
  dotsClassName?: string;
}

export const GrcCarousel = ({
  items,
  autoplay = false,
  autoplayInterval = 5000,
  showArrows = true,
  showDots = true,
  itemWidthClassName = "w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]",
  gapClassName = "gap-6 px-2 -mx-2 pb-4",
  pyClassName = "py-4",
  dotsClassName = "mt-4",
}: GrcCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxScrollIndex, setMaxScrollIndex] = useState(items.length - 1);

  // Recalculate max index based on layout
  const updateMetrics = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerWidth = container.clientWidth;
      
      // Calculate how many items fit in the container visible width
      const children = Array.from(container.children) as HTMLElement[];
      if (children.length > 0) {
        const itemWidth = children[0].offsetWidth;
        const visibleCount = Math.round(containerWidth / itemWidth) || 1;
        const maxIndex = Math.max(0, items.length - visibleCount);
        setMaxScrollIndex(maxIndex);
      } else {
        setMaxScrollIndex(items.length - 1);
      }
    }
  }, [items.length]);

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollLeft = container.scrollLeft;
      const children = Array.from(container.children) as HTMLElement[];
      if (children.length > 0) {
        const itemWidth = children[0].offsetWidth;
        const index = Math.round(scrollLeft / itemWidth);
        setActiveIndex(Math.min(index, items.length - 1));
      }
    }
  };

  useEffect(() => {
    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, [updateMetrics]);

  const scrollTo = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const children = Array.from(container.children) as HTMLElement[];
      const targetIndex = Math.max(0, Math.min(index, items.length - 1));
      
      if (children[targetIndex]) {
        container.scrollTo({
          left: children[targetIndex].offsetLeft - container.offsetLeft,
          behavior: "smooth",
        });
        setActiveIndex(targetIndex);
      }
    }
  };

  const handlePrev = () => {
    scrollTo(activeIndex - 1);
  };

  const handleNext = () => {
    scrollTo(activeIndex + 1);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      if (activeIndex >= maxScrollIndex) {
        scrollTo(0);
      } else {
        scrollTo(activeIndex + 1);
      }
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [autoplay, autoplayInterval, activeIndex, maxScrollIndex]);

  return (
    <div className={`relative w-full group/carousel ${pyClassName}`}>
      {/* Scrollable Container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className={`flex ${gapClassName} overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`${itemWidthClassName} shrink-0 snap-start snap-always`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && items.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-slate-200/80 bg-white/95 backdrop-blur-sm shadow-lg flex items-center justify-center text-slate-700 transition-all duration-300 active:scale-95 ${
              activeIndex === 0
                ? "opacity-0 pointer-events-none"
                : "opacity-0 group-hover/carousel:opacity-100 hover:text-blue-600 hover:border-blue-500/30 hover:shadow-blue-500/5"
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={activeIndex >= maxScrollIndex}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-slate-200/80 bg-white/95 backdrop-blur-sm shadow-lg flex items-center justify-center text-slate-700 transition-all duration-300 active:scale-95 ${
              activeIndex >= maxScrollIndex
                ? "opacity-0 pointer-events-none"
                : "opacity-0 group-hover/carousel:opacity-100 hover:text-blue-600 hover:border-blue-500/30 hover:shadow-blue-500/5"
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Pagination Dots */}
      {showDots && maxScrollIndex > 0 && (
        <div className={`flex justify-center items-center gap-2 ${dotsClassName}`}>
          {Array.from({ length: maxScrollIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === idx
                  ? "w-6 bg-blue-600 shadow-md shadow-blue-500/20"
                  : "w-1.5 bg-slate-350 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
