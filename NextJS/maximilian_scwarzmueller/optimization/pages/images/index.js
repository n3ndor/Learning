import React from "react";
import Image from "next/image";

const ImagePage = () => {
	return (
		<div>
			<h2>Images Page:</h2>
			<img src="/laptop.jpg" alt="laptop" width={500} height={300} /> {/* added width and height, because img is too big */}
			
			{/* converts to webp format, making the 2mb picture to be 200kb  */}
			<Image src="/laptop.jpg" alt="laptop" width={500} height={300} /> {/* this line returns error if no width and height added*/}
		</div>
	);
};

export default ImagePage;
