import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function Video() {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
    const [heightWidth, setHeightWidth] = useState<number>(window.innerHeight);
    // const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
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
        <motion.div
        >
            <video style={videoSize}  muted loop autoPlay>
                <source src="packing-food.webm" type="video/webm" />
                {/* TODO: replace with a loading spinner */}
                Your browser does not support the video tag.
            </video>
        </motion.div>
    )
}