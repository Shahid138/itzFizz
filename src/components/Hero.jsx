import React, { useEffect, useRef } from "react";

const Hero = () => {
	const imagesRef = useRef([]);
	const captionsRef = useRef([]);
	const textRef = useRef(null);
	const gsapRef = useRef(null);

	const imageData = [
		{
			title: "BIGGER SCIENCE",
			description: "Emersive Experience/WebG/Gaming",
		},
		{
			title: "MUCEUM",
			description: "Experiential Website",
		},
		{
			title: "UNGANISHA",
			description: "Experiential Website /WebGL /3D",
		},
		{
			title: "Olive Tree",
			description: "Interactive Installation/Real Time",
		},
	];

	useEffect(() => {
		const loadGSAP = async () => {
			const gsap = (await import("gsap")).default;
			gsapRef.current = gsap;

			imagesRef.current.forEach((img, index) => {
				if (!img) return;

				gsap.fromTo(
					img,
					{
						opacity: 0,
						scale: 0.8,
						y: 50,
					},
					{
						opacity: 1,
						scale: 1,
						y: 0,
						duration: 0.8,
						delay: index * 0.2,
						ease: "power3.out",
					}
				);
			});
		};

		loadGSAP();
	}, []);

	const handleMouseMove = (e, index) => {
		if (!gsapRef.current) return;

		const image = imagesRef.current[index];
		const caption = captionsRef.current[index];
		if (!image || !caption) return;

		const rect = image.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const distanceX = e.clientX - centerX;
		const distanceY = e.clientY - centerY;

		const maxMove = 35;
		const moveX = (distanceX / rect.width) * maxMove;
		const moveY = (distanceY / rect.height) * maxMove;

		gsapRef.current.to([image, caption], {
			x: moveX,
			y: moveY,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	const resetMagneticEffect = (index) => {
		if (!gsapRef.current) return;

		const image = imagesRef.current[index];
		const caption = captionsRef.current[index];
		if (!image || !caption) return;

		gsapRef.current.to([image, caption], {
			x: 0,
			y: 0,
			duration: 0.3,
			ease: "power2.out",
		});
	};

	const handleMouseEnter = async (index) => {
		if (!gsapRef.current) return;

		const hoveredImage = imagesRef.current[index];
		const hoveredCaption = captionsRef.current[index];

		gsapRef.current.to(hoveredCaption, {
			opacity: 1,
			y: 0,
			duration: 0.3,
			ease: "power2.inOut",
		});

		imagesRef.current.forEach((img, i) => {
			if (i !== index && img) {
				gsapRef.current.to(img, {
					opacity: 0,
					scale: 0.8,
					duration: 0.3,
					ease: "power2.inOut",
				});
			}
		});

		gsapRef.current.to(hoveredImage, {
			scale: 1.2,
			duration: 0.5,
			ease: "power2.inOut",
			onStart: () => {
				hoveredImage.style.zIndex = 100;
				hoveredCaption.style.zIndex = 100;
			},
		});

		gsapRef.current.to(".hero-text", {
			color: "transparent",
			webkitTextStroke: "0.4px rgba(255, 255, 255, 0.95)",
			duration: 0.3,
			ease: "power2.inOut",
		});
	};

	const handleMouseLeave = async (index) => {
		if (!gsapRef.current) return;

		const hoveredImage = imagesRef.current[index];
		const hoveredCaption = captionsRef.current[index];

		gsapRef.current.to(hoveredCaption, {
			opacity: 0,
			y: 20,
			duration: 0.3,
			ease: "power2.inOut",
		});

		imagesRef.current.forEach((img, i) => {
			if (i !== index && img) {
				gsapRef.current.to(img, {
					opacity: 1,
					scale: 1,
					duration: 0.3,
					ease: "power2.inOut",
				});
			}
		});

		gsapRef.current.to(hoveredImage, {
			scale: 1,
			duration: 0.5,
			ease: "power2.inOut",
			onComplete: () => {
				hoveredImage.style.zIndex = 1;
				hoveredCaption.style.zIndex = 1;
			},
		});

		gsapRef.current.to(".hero-text", {
			color: "white",
			webkitTextStroke: "0px rgba(255, 255, 255, 0)",
			duration: 0.3,
			ease: "power2.inOut",
		});
	};

	return (
		<div className="h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
			<div className="flex justify-between items-center p-8 bg-[#202120] text-white">
				<img src="./public/logo.svg" className="flex space-x-4" alt="logo" />
				<div className="flex space-x-20 text-xl font-helvetica">
					<a href="#about" className="font-semibold hover:text-gray-400">
						Our vision
					</a>
					<a href="#services" className="font-semibold hover:text-gray-400">
						Our team
					</a>
					<a href="#portfolio" className="font-semibold hover:text-gray-400">
						Our projects
					</a>
					<a href="#contact" className="font-semibold hover:text-gray-400">
						Contact us
					</a>
					<a href="#blog" className="font-semibold hover:text-gray-400">
						FR/EN
						<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
					</a>
				</div>
			</div>

			<div
				className="relative flex flex-col items-center justify-center h-screen bg-[#202120] [pointer-events:none]"
				style={{ isolation: "isolate" }}
			>
				<div className="absolute inset-0 [pointer-events:auto]">
					{[
						{ pos: "top-[155px] left-[365px]", size: "h-50 w-80" },
						{ pos: "top-[100px] right-[400px]", size: "h-40 w-80" },
						{ pos: "bottom-[155px] left-[380px]", size: "h-50 w-80" },
						{ pos: "bottom-[195px] right-[390px]", size: "h-50 w-80" },
					].map((position, index) => (
						<React.Fragment key={index}>
							<img
								ref={(el) => (imagesRef.current[index] = el)}
								src={`/${
									index === 3
										? "bottom_right.jpg"
										: ["top_left.png", "top_right.png", "bottom_left.png"][
												index
										  ]
								}`}
								alt={`Image ${index + 1}`}
								className={`corner-image absolute ${position.pos} ${position.size} object-cover cursor-pointer [pointer-events:auto]`}
								style={{ zIndex: 1 }}
								onMouseEnter={() => handleMouseEnter(index)}
								onMouseLeave={() => {
									handleMouseLeave(index);
									resetMagneticEffect(index);
								}}
								onMouseMove={(e) => handleMouseMove(e, index)}
							/>
							<div
								ref={(el) => (captionsRef.current[index] = el)}
								className={`absolute ${position.pos} ${position.size} flex flex-col justify-end p-4 opacity-0 pointer-events-none`}
								style={{ zIndex: 1 }}
							>
								<h3 className="text-2xl font-bold text-right text-white font-phonk">
									{imageData[index].title}
								</h3>
								<p className="mt-1 text-sm text-right text-white">
									{imageData[index].description}
								</p>
							</div>
						</React.Fragment>
					))}
				</div>

				<div
					ref={textRef}
					className="relative flex flex-col items-center -mt-20 text-container"
					style={{ zIndex: 5 }}
				>
					<h1 className="font-extrabold text-white hero-text font-phonk text-9xl">
						IMAGINING
					</h1>
					<h1 className="font-extrabold text-white hero-text font-phonk text-9xl">
						UNIQUE
					</h1>
					<h1 className="font-extrabold text-white hero-text font-phonk text-9xl">
						CONCEPTS
					</h1>
					<h1 className="font-extrabold text-white hero-text font-phonk text-9xl">
						AND DIGITAL
					</h1>
					<h1 className="font-extrabold text-white hero-text font-phonk text-9xl">
						EXPERIENCES
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Hero;
