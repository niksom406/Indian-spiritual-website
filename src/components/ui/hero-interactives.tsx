import { useState, useRef, useEffect } from 'react';
import { Music, Flower2, CircleStop } from 'lucide-react';

const Petal = ({ delay, duration, left, scale, opacity }: { delay: number, duration: number, left: number, scale: number, opacity: number }) => (
    <div
        className="absolute top-[-50px] pointer-events-none animate-fall"
        style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            transform: `scale(${scale})`,
            opacity: opacity,
        }}
    >
        {/* Softer, more organic Marigold petal SVG */}
        <svg width="20" height="28" viewBox="0 0 20 28" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm filter drop-shadow-[0_2px_2px_rgba(249,115,22,0.5)]">
            <path d="M10 0C6 6 0 10 2 18C4 26 10 28 10 28C10 28 16 26 18 18C20 10 14 6 10 0Z" fill="url(#petalGradient)" />
            <defs>
                <linearGradient id="petalGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#FFA12E" /> {/* Lighter Orange */}
                    <stop offset="100%" stopColor="#EA580C" /> {/* Deeper Saffron/Orange */}
                </linearGradient>
            </defs>
        </svg>
    </div>
);

export function HeroInteractives() {
    const [isMusicPlaying, setIsMusicPlaying] = useState(false);
    const [isFlowersFalling, setIsFlowersFalling] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [petals, setPetals] = useState<{ id: number; delay: number; duration: number; left: number; scale: number; opacity: number }[]>([]);

    useEffect(() => {
        // Create audio element lazily
        if (!audioRef.current) {
            // Pointing to the local file the user will add
            const audio = new Audio("/audio/bg-music.mp3");
            audio.loop = true;
            audioRef.current = audio;
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isMusicPlaying) {
            audioRef.current.pause();
        } else {
            // Browsers might require user interaction first, which this click satisfies
            audioRef.current.play().catch(e => console.error("Audio playback failed:", e));
        }
        setIsMusicPlaying(!isMusicPlaying);
    };

    const toggleFlowers = () => {
        if (!isFlowersFalling) {
            // Generate 40 random petals
            const newPetals = Array.from({ length: 40 }).map((_, i) => ({
                id: i,
                delay: Math.random() * 5, // Random start delay 0-5s
                duration: 5 + Math.random() * 5, // Random fall speed 5-10s
                left: Math.random() * 100, // Random horizontal position 0-100%
                scale: 0.4 + Math.random() * 0.5, // Random scale 0.4-0.9
                opacity: 0.4 + Math.random() * 0.4 // Random transparency 0.4-0.8
            }));
            setPetals(newPetals);
        } else {
            setPetals([]);
        }
        setIsFlowersFalling(!isFlowersFalling);
    };

    return (
        <>
            {/* Absolute positioning for the buttons container at top right */}
            <div className="absolute top-6 right-6 z-50 flex gap-3">
                {/* Music Button */}
                <button
                    onClick={toggleMusic}
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg group"
                    title={isMusicPlaying ? "Stop Music" : "Play Music"}
                >
                    {isMusicPlaying ? (
                        <CircleStop size={22} className="group-hover:scale-110 transition-transform" />
                    ) : (
                        <Music size={22} className="group-hover:scale-110 transition-transform" />
                    )}
                </button>

                {/* Flower Button */}
                <button
                    onClick={toggleFlowers}
                    className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg group"
                    title={isFlowersFalling ? "Stop Flowers" : "Shower Flowers"}
                >
                    {isFlowersFalling ? (
                        <CircleStop size={22} className="group-hover:scale-110 transition-transform text-saffron" />
                    ) : (
                        <Flower2 size={22} className="group-hover:scale-110 transition-transform" />
                    )}
                </button>
            </div>

            {/* Falling Petals Container (Covering the whole parent) */}
            {isFlowersFalling && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
                    {petals.map(petal => (
                        <Petal key={petal.id} {...petal} />
                    ))}
                </div>
            )}
        </>
    );
}
