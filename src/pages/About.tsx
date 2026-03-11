import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Users, Target, Lightbulb } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

function MissionVisionCard({
  title, description, icon: Icon, direction = 'left'
}: { title: string, description: string, icon: any, direction?: 'left' | 'right' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={!shouldReduceMotion ? { y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } } : {}}
      className="relative rounded-3xl p-8 md:p-10 cursor-pointer overflow-hidden group
        bg-white/5 backdrop-blur-sm border border-white/10
        hover:border-saffron/40 transition-colors duration-500 shadow-xl"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-saffron to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glow blob */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-saffron/10 rounded-full blur-3xl group-hover:bg-saffron/20 transition-colors duration-700 pointer-events-none" />

      {/* Icon */}
      <div className="w-14 h-14 bg-saffron/15 border border-saffron/30 rounded-2xl flex items-center justify-center mb-7 group-hover:bg-saffron/25 transition-colors duration-300">
        <Icon size={26} className="text-saffron" />
      </div>

      <h3 className="font-heading text-2xl md:text-[28px] font-bold text-white mb-4">
        {title}
      </h3>

      <div className="w-10 h-[2px] bg-saffron/50 mb-5 group-hover:w-20 transition-all duration-500" />

      <p className="text-white/65 text-base md:text-lg leading-[1.85] group-hover:text-white/80 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
}

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (heroRef.current) {
      gsap.fromTo(heroRef.current.querySelectorAll('.hero-animate'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
      );

      gsap.to('.hero-parallax', {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
      });
    }
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

  const trustees = [
    { name: 'Sunil Sudhamomal Somani', role: 'President', image: '/images/Trustee 1.png', objectPosition: 'center 35%' },
    { name: 'Radhika Sudhamomal Somani', role: 'Secretary', image: '/images/Trustee 2.png', objectPosition: 'center 90%' },
    { name: 'Sandeep Gopaldas Vazirani', role: 'Treasurer', image: '/images/Trustee 3.png', objectPosition: 'center 45%' },
  ];

  const values = [
    { icon: Heart, title: 'Seva (Service)', desc: 'Selfless service to humanity without expecting anything in return' },
    { icon: Users, title: 'Community', desc: 'Building a strong, supportive community of devotees' },
    { icon: Target, title: 'Devotion', desc: 'Deep faith and dedication to Sai Baba teachings' },
    { icon: Lightbulb, title: 'Wisdom', desc: 'Spreading spiritual knowledge and guidance' },
  ];

  return (
    <div ref={sectionRef} className="overflow-hidden">
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-espresso">
        <div className="absolute inset-0 hero-parallax">
          <img
            src="/images/about_interior.jpg"
            alt="About Us Background"
            className="w-full h-[130%] object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/50 to-espresso/90" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-8 md:mt-12">
          <span className="hero-animate inline-block px-4 py-1.5 bg-saffron/80 text-white backdrop-blur-sm rounded-full text-sm font-medium tracking-widest uppercase mb-6 shadow-xl">
            Our Heritage
          </span>
          <h1 className="hero-animate font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            About <span className="text-gold">Us</span>
          </h1>
          <p className="hero-animate text-white/90 text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            Discover our journey, mission, and the dedicated team behind Shree Sai Ram Trust
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-item">
              <span className="inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-espresso mb-6">
                A Journey of <span className="text-saffron">Faith & Service</span>
              </h2>
              <div className="space-y-4 text-taupe leading-relaxed">
                <p>
                  Shree Sai Ram Trust was established in 1993 by Sunil Sudhamomal Somani in loving memory of Late Shri Sudhamomal G. Somani. The trust was founded as a tribute to his life, values, and dedication to faith, kindness, and service to society.
                </p>
                <p>
                  Inspired by the teachings of Shree Sai Baba, the trust works to promote spirituality, compassion, and support for the community. It aims to continue the noble ideals of Late Shri Sudhamomal G. Somani by encouraging devotion, unity, and charitable activities that benefit people from all walks of life.
                </p>
                <p>
                  Located in the city of Ulhasnagar, Shree Sai Ram Trust stands as a symbol of remembrance, faith, and service, keeping alive the legacy and values of Late Shri Sudhamomal G. Somani.
                </p>
              </div>
            </div>
            <div className="animate-item relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/saibaba_early_1.jpg"
                  alt="Sai Baba Early Life"
                  className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover object-top"
                />
                <img
                  src="/images/saibaba_teachings_2.jpg"
                  alt="Sai Baba Preaching"
                  className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover mt-8 object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-espresso">
        {/* Decorative background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-saffron/8 rounded-full blur-[100px]" />
          {/* Subtle dot grid */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(circle, #DDAF54 1px, transparent 1px)', backgroundSize: '28px 28px' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center max-w-2xl mx-auto mb-14 md:mb-20"
          >
            <span className="inline-block px-4 py-1.5 bg-saffron/15 text-saffron rounded-full text-sm font-medium tracking-widest uppercase mb-5">
              Our Purpose
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
              Mission &amp; <span className="text-gold">Vision</span>
            </h2>
            <p className="text-white/50 text-lg">
              The guiding principles that shape every prayer, every act of service, and every step forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            <MissionVisionCard
              title="Our Mission"
              description="To spread Sai Baba's message of love, compassion, and unity through spiritual practices, community service, and charitable activities. We aim to create a welcoming space where devotees can connect with the divine and serve humanity."
              icon={Target}
              direction="left"
            />
            <MissionVisionCard
              title="Our Vision"
              description="To be a beacon of spiritual light in our community, inspiring individuals to lead lives of purpose, compassion, and devotion. We envision a world where the teachings of Sai Baba bring peace and harmony to all."
              icon={Lightbulb}
              direction="right"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
              Core Values
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
              Principles That <span className="text-saffron">Guide Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="animate-item bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-saffron/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} className="text-saffron" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-espresso mb-2">{value.title}</h3>
                <p className="text-taupe text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trustees */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
              Meet the <span className="text-saffron">Trustees</span>
            </h2>
            <p className="animate-item text-taupe">
              Dedicated souls serving the community with devotion and commitment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustees.map((trustee, i) => (
              <div
                key={i}
                className="animate-item text-center group"
              >
                <div className="relative w-40 h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-saffron rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 scale-110" />
                  <img
                    src={trustee.image}
                    alt={trustee.name}
                    className="w-full h-full object-cover rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300"
                    style={{ objectPosition: trustee.objectPosition ?? 'center top' }}
                  />
                </div>
                <h3 className="font-heading text-lg font-semibold text-espresso mb-1">{trustee.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
