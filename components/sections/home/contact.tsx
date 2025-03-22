"use client"

import { Heading, Text, Highlight } from "@/components/utility/typography";
import { BetterButton } from "../../ui/button";
import { useEffect, useState } from "react";

export default function HeroCTA() {
    return (
      <section className="relative flex flex-col justify-center items-center px-[15%] py-[10%] text-center">
        <div className="flex flex-col justify-center items-center gap-15 z-10">
          <Heading size="big">
            Save time with <Highlight>Bag/Get.</Highlight>
          </Heading>
          <Text className="text-center max-w-1/2 text-gray-50">
            We are currently rolling out our software and piloting at various location 
            across California. If you want to be next and see how Bag/Get can alleviate 
            your pain then all you have to do is...
          </Text>
          <BetterButton variant="secondary" className="text-gray-950" link={"/"}>
            <Text>Waitlist Today</Text>
          </BetterButton>
        </div>
        <div className="absolute inset-0 h-full overflow-hidden z-0 brightness-10">
          <Video/>
        </div>
      </section>
    )
}


function Video() {
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
                <source src="packing-food.webm" type="video/webm" />
                {/* TODO: replace with a loading spinner */}
                Your browser does not support the video tag.
            </video>
        </div>
    )
}