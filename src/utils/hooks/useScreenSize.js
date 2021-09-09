import { useEffect, useState } from 'react'

export default function useScreenSize() {

    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            // screenSize.current = window.innerWidth;
            setScreenSize(window.innerWidth);
        });
        return () => {
            window.removeEventListener("resize", () => {
                setScreenSize(window.innerWidth);
            })
        }
    }, []);

    return {
        isMobile: screenSize < 700
    };
}
