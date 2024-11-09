'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ProfileImage } from '@/src/assects'
import { BorderBeam } from '@/src/components/ui/border-beam'

const ImageSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative mx-auto w-full max-w-md"
        >
            <div className="group relative aspect-[4/5] w-full overflow-hidden">
                <BorderBeam size={400} duration={20} colorFrom="#9333ea" colorTo="#4f46e5" />
                <div className="relative h-full w-full overflow-hidden">
                    <Image
                        src={ProfileImage}
                        alt="Ashim Rudra Paul"
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        priority
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900/80 to-transparent p-6"
                >
                    <h2 className="text-2xl font-bold text-white">Ashim Rudra Paul</h2>
                    <p className="text-purple-200">Software Engineer</p>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -left-4 top-1/4 h-24 w-24 border-l-2 border-t-2 border-purple-500"
            />
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -right-4 bottom-1/4 h-24 w-24 border-b-2 border-r-2 border-purple-500"
            />
            <div className="absolute -left-2 -top-2 h-8 w-8 bg-purple-500/20 backdrop-blur-sm" />
            <div className="absolute -right-2 -bottom-2 h-8 w-8 bg-purple-500/20 backdrop-blur-sm" />
        </motion.div>
    )
}

export default ImageSection;