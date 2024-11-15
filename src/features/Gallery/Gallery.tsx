/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import BlurFade from "@/src/components/ui/blur-fade";

const images = Array.from({ length: 9 }, (_, i) => {
    const isLandscape = i % 2 === 0;
    const width = isLandscape ? 800 : 600;
    const height = isLandscape ? 600 : 800;
    return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

export default function Gallery() {
    return (
        <section id="photos">
            <div className="container mx-auto">
                <div className="my-4 mb-8">
                    <h2 className="text-3xl font-bold text-center ">
                        <span className="text-primary-600">Photos</span> Gallery
                    </h2>
                    <p
                        className="text-center text-gray-600 dark:text-gray-400 max-w-prose mx-auto"
                    >
                        My recent photos from my travels and adventures
                    </p>
                </div>

                <div className="columns-2 gap-4 sm:columns-3">
                    {images.map((imageUrl, idx) => (
                        <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
                            <img
                                className="mb-4 size-full rounded-lg object-contain"
                                src={imageUrl}
                                alt={`Random stock image ${idx + 1}`}
                            />
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}