import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X } from 'lucide-react';
import { ImageGallery } from '@/components/ui/image-gallery';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    gsap.set('.animate-item', { opacity: 0, y: 30 });

    ScrollTrigger.batch('.animate-item', {
      interval: 0.1,
      batchMax: 3,
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', overwrite: true }),
      onLeave: batch => gsap.to(batch, { opacity: 0, y: -30, duration: 0.8, stagger: 0.15, ease: 'power3.inOut', overwrite: true }),
      onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', overwrite: true }),
      onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 30, duration: 0.8, stagger: 0.15, ease: 'power3.inOut', overwrite: true }),
      start: 'top 85%',
      end: 'bottom 15%',
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const galleryImages = [
    { src: '/images/gallery_optimized/opt_DSC01349_1.webp', title: 'Community Gathering', category: 'community', desc: 'Devotees coming together' },
    { src: '/images/gallery_optimized/opt_DSC01358_1.webp', title: 'Temple Events', category: 'community', desc: 'Special celebration' },
    { src: '/images/gallery_optimized/opt_DSC01362_1.webp', title: 'Spiritual Programs', category: 'spiritual', desc: 'Devotional programs' },
    { src: '/images/gallery_optimized/opt_DSC01368_1.webp', title: 'Prayers', category: 'spiritual', desc: 'Moments of devotion' },
    { src: '/images/gallery_optimized/opt_DSC01404_1.webp', title: 'Festival Celebration', category: 'festival', desc: 'Grand religious festival' },
    { src: '/images/gallery_optimized/opt_DSC01436.webp', title: 'Seva', category: 'seva', desc: 'Community service' },
    { src: '/images/gallery_optimized/opt_DSC01439_1.webp', title: 'Temple Decor', category: 'temple', desc: 'Beautiful temple interiors' },
    { src: '/images/gallery_optimized/opt_DSC01440_1.webp', title: 'Devotional Singing', category: 'spiritual', desc: 'Bhajans and kirtans' },
    { src: '/images/gallery_optimized/opt_DSC01444_1.webp', title: 'Aarti Ceremony', category: 'temple', desc: 'Evening aarti Rituals' },
    { src: '/images/gallery_optimized/opt_DSC02070_1.webp', title: 'Prasad Distribution', category: 'seva', desc: 'Serving the community' },
    { src: '/images/gallery_optimized/opt_DSC02074_1.webp', title: 'Temple Gatherings', category: 'community', desc: 'Gathering of Devotees' },
    { src: '/images/gallery_optimized/opt_DSC02107_1.webp', title: 'Cultural Events', category: 'festival', desc: 'Special festive events' },
    { src: '/images/gallery_optimized/opt_DSC02110_1.webp', title: 'Devotion', category: 'spiritual', desc: 'Inner peace seekers' },
    { src: '/images/gallery_optimized/opt_DSC02146_4.webp', title: 'Blessings', category: 'temple', desc: 'Divine blessings' },
    { src: '/images/gallery_optimized/opt_DSC02156_6.webp', title: 'Spiritual Teaching', category: 'spiritual', desc: 'Learning and wisdom' },
    { src: '/images/gallery_optimized/opt_DSC05090_1.webp', title: 'Joyful Moments', category: 'festival', desc: 'Celebrations' },
  ];

  const filters = [
    { key: 'all', label: 'All Photos' },
    { key: 'spiritual', label: 'Spiritual' },
    { key: 'festival', label: 'Festivals' },
    { key: 'seva', label: 'Seva' },
    { key: 'community', label: 'Community' },
    { key: 'temple', label: 'Temple' },
  ];

  const filteredImages = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div ref={sectionRef} className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-espresso">
        <div className="absolute inset-0">
          <img
            src="/images/gallery_aarti.jpg"
            alt="Gallery Background"
            className="w-full h-[130%] object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/50 to-espresso/90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-8 md:mt-12">
          <span className="animate-item inline-block px-4 py-1.5 bg-saffron/80 text-white backdrop-blur-sm rounded-full text-sm font-medium tracking-widest uppercase mb-6 shadow-xl">
            Our Gallery
          </span>
          <h1 className="animate-item font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            Photo <span className="text-gold">Gallery</span>
          </h1>
          <p className="animate-item text-white/90 text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            Glimpses of our spiritual programs, festivals, and community gatherings
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Filters */}
          <div className="animate-item flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.key
                  ? 'bg-saffron text-white'
                  : 'bg-white text-espresso hover:bg-saffron/10 hover:text-saffron'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          {filteredImages.length > 0 && (
            <ImageGallery images={filteredImages} onImageSelect={setSelectedImage} />
          )}

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-taupe">No photos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Video Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
              Videos
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
              Watch Our <span className="text-saffron">Programs</span>
            </h2>
            <p className="animate-item text-taupe">
              Experience the divine atmosphere through our recorded programs
            </p>
          </div>

          <div className="animate-item grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-cream rounded-2xl overflow-hidden">
              <div className="aspect-video bg-espresso/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-taupe text-sm">Thursday Special Aarti</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-espresso mb-2">Sai Baba Thursday Aarti</h3>
                <p className="text-taupe text-sm">Experience the divine Thursday evening aarti dedicated to Sai Baba</p>
              </div>
            </div>

            <div className="bg-cream rounded-2xl overflow-hidden">
              <div className="aspect-video bg-espresso/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-taupe text-sm">Sunday Satsang</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-espresso mb-2">Weekly Satsang Highlights</h3>
                <p className="text-taupe text-sm">Bhajans, spiritual discourse, and community gathering</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
