import { useEffect } from 'react';
import { Timeline } from '@/components/ui/timeline';

export default function SaiBaba() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const data = [
        {
            title: "Early Life",
            content: (
                <div>
                    <p className="text-taupe text-sm md:text-base font-normal mb-8 leading-relaxed">
                        The exact place and date of Sai Baba's birth remain unknown, reflecting his teachings that spiritual figures transcend earthly origins. He arrived in the village of Shirdi, Maharashtra, as a young ascetic, meditating under a neem tree. His profound presence and detachment from worldly affairs quickly caught the attention of the villagers.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/saibaba_early_1.jpg"
                            alt="banyan tree early life"
                            className="rounded-lg object-contain bg-black/5 h-32 md:h-56 lg:h-72 w-full shadow-md"
                        />
                        <img
                            src="/images/saibaba_early_2.jpg"
                            alt="indian village"
                            className="rounded-lg object-contain bg-black/5 h-32 md:h-56 lg:h-72 w-full shadow-md"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Return to Shirdi",
            content: (
                <div>
                    <p className="text-taupe text-sm md:text-base font-normal mb-8 leading-relaxed">
                        After a brief period away, Sai Baba returned to Shirdi permanently around 1858. He took up residence in a dilapidated mosque, which he lovingly named 'Dwarkamai'. Here, he welcomed people of all faiths, blurring the lines between Hindu and Islamic traditions, and began his lifelong mission of healing and spiritual guidance.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/saibaba_return_1.jpg"
                            alt="prayers at dusk"
                            className="rounded-lg object-contain bg-black/5 h-32 md:h-56 lg:h-72 w-full shadow-md"
                        />
                        <img
                            src="/images/saibaba_return_2.jpg"
                            alt="spiritual fire dhuni"
                            className="rounded-lg object-contain bg-black/5 h-32 md:h-56 lg:h-72 w-full shadow-md"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Teachings & Miracles",
            content: (
                <div>
                    <p className="text-taupe text-sm md:text-base font-normal mb-4 leading-relaxed">
                        Sai Baba opposed all persecution based on religion or caste. His core philosophy centered on two pillars: <b>Shraddha</b> (faith) and <b>Saburi</b> (patience/compassion). He taught charity, contentment, and inner peace.
                    </p>
                    <div className="mb-8 space-y-2">
                        <div className="flex gap-2 items-center text-taupe text-sm md:text-base">
                            ✨ Emphasized "Sabka Malik Ek" (One God governs all).
                        </div>
                        <div className="flex gap-2 items-center text-taupe text-sm md:text-base">
                            ✨ Maintained the eternal fire (Dhuni) representing spiritual purification.
                        </div>
                        <div className="flex gap-2 items-center text-taupe text-sm md:text-base">
                            ✨ Healed the sick and distributed holy ash (Udi) as a blessing.
                        </div>
                        <div className="flex gap-2 items-center text-taupe text-sm md:text-base">
                            ✨ Encouraged reading of holy scriptures from all religions.
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/saibaba_teachings_1.jpg"
                            alt="spiritual hands"
                            className="rounded-lg object-contain bg-black/5 h-32 md:h-56 lg:h-72 w-full shadow-md"
                        />
                        <img
                            src="/images/saibaba_teachings_2.jpg"
                            alt="teachings light"
                            className="rounded-lg object-contain bg-black/5 h-32 md:h-56 lg:h-72 w-full shadow-md"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "Mahasamadhi (1918)",
            content: (
                <div>
                    <p className="text-taupe text-sm md:text-base font-normal mb-8 leading-relaxed">
                        On October 15, 1918, Baba took Mahasamadhi, peacefully leaving his physical body. Before his passing, he promised his devotees, "My tomb shall speak and move with those who make me their sole refuge." Today, millions visit Shirdi, testifying to his eternal living presence.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="/images/saibaba_maha_1.jpg"
                            alt="mahasamadhi idol"
                            className="rounded-lg object-contain bg-black/5 h-32 md:h-56 lg:h-72 w-full shadow-md"
                        />
                        <img
                            src="/images/saibaba_maha_2.jpg"
                            alt="mahasamadhi shrine"
                            className="rounded-lg object-contain bg-black/5 h-32 md:h-56 lg:h-72 w-full shadow-md"
                        />
                    </div>
                </div>
            ),
        }
    ];

    return (
        <div className="min-h-screen bg-cream w-full">
            <Timeline data={data} />
        </div>
    );
}
