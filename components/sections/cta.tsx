"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { fadeIn } from "@/lib/animate";
import { motion } from "motion/react";

export default function CTA({videoURL, haveBorders = false, children}: {videoURL: string; haveBorders?: boolean; children: React.ReactNode;}) {
    return (
      <section className="relative flex flex-col justify-center items-center px-[15%] py-[10%] text-center">
        <motion.div 
          variants={fadeIn}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true}}
          className="flex flex-col justify-center items-center lg:gap-15 md:gap-8 gap-5 z-20"
        >
          {children}
        </motion.div>
        <div className="absolute inset-0 h-full overflow-hidden z-0 brightness-10">
          <Video videoURL={videoURL}/>
        </div>
        {haveBorders &&
          <div className="absolute top-0 w-full z-10">
            <Image
              src="/contact-top-border.svg"
              width={1920}
              height={1800}
              alt="border top of contact section"
              className="w-full"
            />
          </div>
        }
        {haveBorders && 
          <div className="absolute bottom-0 w-full z-10">
            <Image
              src="/contact-bot-border.svg"
              width={1920}
              height={1800}
              alt="border bottom of contact section"
              className="w-full"
            />
          </div>
        }
      </section>
    )
}


function Video({videoURL} : {videoURL: string}) {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [heightWidth, setHeightWidth] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            setHeightWidth(window.innerHeight);
        }
        
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setHeightWidth(window.innerHeight);
          };
      
          window.addEventListener('resize', handleResize);
          
          return () => {
            window.removeEventListener('resize', handleResize);
          }
    }, []);

    let videoSize = windowWidth < heightWidth ? { maxWidth: 'unset', height: '100%'} : { maxWidth: '100%', height: 'unset'}

    return (
        <div
        >
            <video style={videoSize}  muted loop autoPlay>
                <source src={videoURL} type="video/webm" />
                {/* TODO: replace with a loading spinner */}
                Your browser does not support the video tag.
            </video>
        </div>
    )
}