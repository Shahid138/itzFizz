const Hero = () => {
	return (
		<div className="h-screen overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
			<div className="flex justify-between items-center p-8 bg-[#202120] text-white">
				<img src="./public/logo.svg" className="flex space-x-4" alt="logo" />
				<div className="flex space-x-20 text-lg font-helvetica">
					<a href="#about" className="hover:text-gray-400">
						Our vision
					</a>
					<a href="#services" className="hover:text-gray-400">
						Our team
					</a>
					<a href="#portfolio" className="hover:text-gray-400">
						Our projects
					</a>
					<a href="#contact" className="hover:text-gray-400">
						Contact us
					</a>
					<a href="#blog" className="hover:text-gray-400">
						FR/EN
						<hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
					</a>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center h-screen gap-2 font-extrabold text-white font-phonk text-9xl">
				<style>
					{`
            @supports (-webkit-text-stroke: 0.5px white) {
              .text-container h1 {
                transition: all 0.3s ease;
              }
              
              .text-container:hover h1 {
                -webkit-text-stroke: .4px rgba(255, 255, 255, 0.95);
                text-stroke: .4px rgba(255, 255, 255, 0.95);
                color: transparent;
              }
            }

            /* Fallback for browsers that don't support -webkit-text-stroke */
            @supports not (-webkit-text-stroke: .4px white) {
              .text-container:hover h1 {
                color: transparent;
              
            }
          `}
				</style>
				<div className="flex flex-col items-center text-container">
					<h1>IMAGINING</h1>
					<h1>UNIQUE</h1>
					<h1>CONCEPTS</h1>
					<h1>AND DIGITAL</h1>
					<h1>EXPERIENCES</h1>
				</div>
			</div>
		</div>
	);
};

export default Hero;
