import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function Video() {
    const [windowWidth, setWindowWidth] = useState<number>(-1);
    const [heightWidth, setHeightWidth] = useState<number>(-1);
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
            // initial={{ opacity: 0 }}
            // animate={{ opacity: videoLoaded ? 1 : 0 }}
            // transition={{ duration: 0.5 }}
        >
            <video style={videoSize}  muted loop autoPlay>
                <source src="packing-food.webm" type="video/webm" />
                {/* TODO: replace with a loading spinner */}
                Your browser does not support the video tag.
            </video>
        </motion.div>
    )
}