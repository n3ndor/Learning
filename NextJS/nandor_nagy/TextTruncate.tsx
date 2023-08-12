// Universal Component to truncate any text messages
// this component will auto truncate to 3 lines, we can change that by adding ex. lines={2}

// Usage: 
// import TextTruncate from "@/app/components/TextTruncate";
// <TextTruncate text={"Here comes the text we want to truncate ..."} lines={2} />

"use client"

import { useState, useRef, useEffect } from 'react';

interface TextTruncateProps {
    text: string;
    lines?: number;
}

const TextTruncate: React.FC<TextTruncateProps> = ({ text, lines = 3 }) => {
    const [showFullText, setShowFullText] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    
    const textRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        if (textRef.current) {
            // Store original value
            const originalWebkitLineClamp = textRef.current.style.webkitLineClamp;
            
            // Set to 'none' to measure the full height of the content
            textRef.current.style.webkitLineClamp = 'none';
            const fullHeight = textRef.current.scrollHeight;
            
            // Restore to the original value
            textRef.current.style.webkitLineClamp = originalWebkitLineClamp;

            // Set to the desired lines to measure the clamped height
            const clampedHeight = textRef.current.offsetHeight;

            // Compare the two heights to see if truncation is happening
            if (fullHeight > clampedHeight) {
                setIsTruncated(true);
            } else {
                setIsTruncated(false);
            }
        }
    }, [text, lines]);

    return (
        <div>
            <p 
                ref={textRef} 
                className={`${showFullText ? '' : `line-clamp-${lines}`}`}
            >
                {text}
            </p>
            {isTruncated && (
                <span 
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setShowFullText(!showFullText)}
                >
                    {showFullText ? "Hide" : "Read more"}
                </span>
            )}
        </div>
    );
};

export default TextTruncate;