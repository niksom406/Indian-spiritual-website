import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Check, FileText, Users, Utensils, Home, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Donate() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');

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

  const donationAmounts = [500, 1000, 2100, 5000, 11000];

  const causes = [
    { icon: Utensils, title: 'Daily Prasad', desc: 'Support our community meal program that feeds hundreds of devotees daily', amount: '₹500/day' },
    { icon: Home, title: 'Temple Maintenance', desc: 'Help us maintain the temple premises and facilities for devotees', amount: 'Any amount' },
    { icon: Sparkles, title: 'Festival Celebrations', desc: 'Contribute to grand celebrations during major festivals', amount: '₹2100+' },
    { icon: Users, title: 'Charitable Activities', desc: 'Support our outreach programs for the underprivileged', amount: 'Any amount' },
  ];

  const transparencyPoints = [
    '100% of donations go towards temple operations and community service',
    'Monthly financial reports published on our website',
    'Tax benefits available under Section 80G',
    'Receipt provided for every donation',
  ];

  return (
    <div ref={sectionRef} className="overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center overflow-hidden bg-espresso">
        <div className="absolute inset-0">
          <img
            src="/images/donate_plate.jpg"
            alt="Donate Background"
            className="w-full h-[130%] object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-espresso/30 via-espresso/50 to-espresso/90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-8 md:mt-12">
          <span className="animate-item inline-block px-4 py-1.5 bg-saffron/80 text-white backdrop-blur-sm rounded-full text-sm font-medium tracking-widest uppercase mb-6 shadow-xl">
            Donate
          </span>
          <h1 className="animate-item font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
            Support Our <span className="text-gold">Mission</span>
          </h1>
          <p className="animate-item text-white/90 text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            Your generous contributions help us continue our spiritual and charitable work in the community
          </p>
        </div>
      </div>

      {/* Donation Form Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Donation Form */}
            <div className="animate-item">
              <span className="inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
                Make a Donation
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-espresso mb-6">
                Give with a <span className="text-saffron">Full Heart</span>
              </h2>
              <p className="text-taupe leading-relaxed mb-8">
                Your support maintains the temple, funds community meals, and keeps festivals accessible to everyone. Every contribution, big or small, makes a difference.
              </p>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="font-heading text-lg font-semibold text-espresso mb-4">Select Amount</h3>

                {/* Preset Amounts */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`py-3 px-4 rounded-xl font-medium transition-all duration-300 ${selectedAmount === amount
                        ? 'bg-saffron text-white'
                        : 'bg-cream text-espresso hover:bg-saffron/10'
                        }`}
                    >
                      ₹{amount.toLocaleString()}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label className="block text-sm text-taupe mb-2">Or enter custom amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-taupe">₹</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setSelectedAmount(null);
                      }}
                      placeholder="Enter amount"
                      className="w-full pl-10 pr-4 py-3 bg-cream rounded-xl border-0 focus:ring-2 focus:ring-saffron text-espresso"
                    />
                  </div>
                </div>

                {/* Selected Amount Display */}
                {(selectedAmount || customAmount) && (
                  <div className="bg-saffron/10 rounded-xl p-4 mb-6">
                    <p className="text-sm text-taupe">You are donating</p>
                    <p className="text-2xl font-bold text-saffron">
                      ₹{(selectedAmount || parseInt(customAmount) || 0).toLocaleString()}
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <button className="w-full py-4 bg-saffron text-white rounded-xl font-medium hover:bg-saffron-dark transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                  <Heart size={20} />
                  Proceed to Donate
                </button>

                <p className="text-center text-xs text-taupe mt-4">
                  Secure payment powered by Razorpay
                </p>
              </div>
            </div>

            {/* Right: Image & Info */}
            <div className="animate-item">
              <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
                <img
                  src="/images/donate_plate.jpg"
                  alt="Donation"
                  className="w-full h-64 md:h-80 object-cover"
                />
              </div>

              {/* Transparency Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-saffron/10 rounded-lg flex items-center justify-center">
                    <FileText size={20} className="text-saffron" />
                  </div>
                  <h3 className="font-heading font-semibold text-espresso">Transparency Promise</h3>
                </div>
                <ul className="space-y-3">
                  {transparencyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-taupe">
                      <Check size={16} className="text-saffron mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="animate-item inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
              Where Your Donation Goes
            </span>
            <h2 className="animate-item font-heading text-3xl md:text-4xl font-bold text-espresso mb-4">
              Your Support <span className="text-saffron">Matters</span>
            </h2>
            <p className="animate-item text-taupe">
              See how your generous contributions help us serve the community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {causes.map((cause, i) => (
              <div
                key={i}
                className="animate-item bg-cream rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-saffron/10 rounded-xl flex items-center justify-center mb-4">
                  <cause.icon size={24} className="text-saffron" />
                </div>
                <h3 className="font-heading font-semibold text-espresso mb-2">{cause.title}</h3>
                <p className="text-taupe text-sm mb-4">{cause.desc}</p>
                <p className="text-saffron font-medium text-sm">{cause.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-item">
              <span className="inline-block px-4 py-1.5 bg-saffron/10 text-saffron rounded-full text-sm font-medium mb-4">
                Bank Transfer
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-espresso mb-6">
                Direct Bank <span className="text-saffron">Transfer</span>
              </h2>
              <p className="text-taupe leading-relaxed mb-8">
                You can also make a direct bank transfer to support our activities. Please share the transaction details with us via email or WhatsApp so we can send you a receipt.
              </p>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-taupe text-sm">Account Name</span>
                    <span className="font-medium text-espresso">Shree Sai Ram Trust</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-taupe text-sm">Bank Name</span>
                    <span className="font-medium text-espresso">State Bank of India</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-taupe text-sm">Account Number</span>
                    <span className="font-medium text-espresso">12345678901</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="text-taupe text-sm">IFSC Code</span>
                    <span className="font-medium text-espresso">SBIN0001234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-taupe text-sm">Branch</span>
                    <span className="font-medium text-espresso">Ulhasnagar</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-item">
              <img
                src="/images/seva_offering.jpg"
                alt="Seva"
                className="rounded-3xl shadow-xl w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 md:py-20 bg-saffron">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="animate-item font-heading text-2xl md:text-3xl font-bold text-white mb-2">
              Your Donations at Work
            </h2>
            <p className="animate-item text-white/80">See the impact of your generosity</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Daily Meals Served' },
              { value: '50+', label: 'Annual Events' },
              { value: '1000+', label: 'Devotees Supported' },
              { value: '₹10L+', label: 'Annual Charity' },
            ].map((stat, i) => (
              <div key={i} className="animate-item">
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
