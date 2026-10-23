
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = ({
  backgroundType = "image",
  backgroundSrc,
  title,
  buttonText = "Learn More",
  buttonLink = "#",
}) => {
  const heroHeight =
    backgroundType === "video" ? "min-h-screen" : "min-h-[85vh]";

  return (
    <section
      className={`relative ${heroHeight} w-full overflow-hidden`}
    >
      {/* Background */}
      {backgroundType === "video" ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full scale-105 object-cover"
          src={backgroundSrc}
        >
          Your browser does not support the video element.
        </video>
      ) : (
        <img
          src={backgroundSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-52">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Title */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-8xl">
            {title}
          </h1>

          {/* Button */}
          {buttonText && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="mt-10"
            >
              <a
                href={buttonLink}
                className="group inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black"
              >
                <span className="text-sm font-medium md:text-base">
                  {buttonText}
                </span>

                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/50 transition group-hover:border-black/20">
                  <ArrowRight size={18} />
                </span>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;










// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const Hero = ({
//   backgroundType = "image",
//   backgroundSrc,
//   title,
//   description,
//   buttonText = "Learn More",
//   buttonLink = "#",
//   showButton = true,
//   overlay = true,
//   overlayColor = "bg-slate-900",
//   overlayOpacity = "80",
//   alignment = "left",
//   minHeight = "min-h-screen",
//   contentWidth = "max-w-3xl",
//   titleSize = "text-5xl sm:text-6xl md:text-8xl",
//   titleClassName = "",
//   descriptionClassName = "",
//   buttonClassName = "",
//   className = "",
//   children,
// }) => {
//   const alignmentClasses = {
//     left: "items-start text-left",
//     center: "items-center text-center",
//     right: "items-end text-right",
//   };

//   return (
//     <section
//       className={`relative ${minHeight} w-full overflow-hidden ${className}`}
//     >
//       {/* Background */}
//       {backgroundType === "video" ? (
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="absolute inset-0 h-full w-full object-cover scale-105"
//           src={backgroundSrc}
//         >
//           {/* <source src={backgroundSrc} type="video/mp4" /> */}
//           Your browser does not support the video element.
//         </video>
//       ) : (
//         <img
//           src={backgroundSrc}
//           alt=""
//           className="absolute inset-0 h-full w-full object-cover"
//         />
//       )}

//       {/* Overlay */}
//       {overlay && (
//         <div
//           className={`absolute inset-0 ${overlayColor}/${overlayOpacity}`}
//         />
//       )}

//       {/* Content */}
//       <div
//         className={`relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 pt-52 ${alignmentClasses[alignment]}`}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className={contentWidth}
//         >
//           {/* Title */}
//           <h1
//             className={`font-bold leading-[1.05] tracking-tight text-white ${titleSize} ${titleClassName}`}
//           >
//             {title}
//           </h1>

//           {/* Description */}
//           {description && (
//             <motion.p
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.1,
//               }}
//               className={`mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg ${descriptionClassName}`}
//             >
//               {description}
//             </motion.p>
//           )}

//           {/* Custom Content */}
//           {children}

//           {/* Button */}
//           {showButton && buttonText && (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.2,
//               }}
//               className="mt-10"
//             >
//               <a
//                 href={buttonLink}
//                 className={`group inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/10 px-6 py-3 text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black ${buttonClassName}`}
//               >
//                 <span className="text-sm font-medium md:text-base">
//                   {buttonText}
//                 </span>

//                 <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/50 transition group-hover:border-black/20">
//                   <ArrowRight size={18} />
//                 </span>
//               </a>
//             </motion.div>
//           )}
//         </motion.div>
        
//       </div>
//     </section>
//   );
// };

// export default Hero;






// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import herovdo from "../../../public/SmartkeyHeroVdo.mp4";
// const Hero = () => {
//   return (
//     <section className="relative min-h-screen w-full overflow-hidden">

//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover scale-105"
//       >
//         <source src={herovdo} type="video/mp4" />
//       </video>

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-slate-900/80" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-52">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="max-w-3xl"
//         >
//           <h1 className="text-white font-bold leading-[1.05] tracking-tight text-5xl sm:text-6xl md:text-8xl">
//             The Key to <br />
//             Hassle-Free <br />
//             Property <br />
//             Management
//           </h1>

//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="mt-10"
//           >
//             <button className="group inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/10 px-6 py-3 text-white backdrop-blur-sm hover:bg-white hover:text-black transition duration-300">
//               <span className="text-sm md:text-base font-medium">
//                 Schedule Free Consultation
//               </span>
//               <span className="inline-flex items-center justify-center rounded-full border border-white/50 w-8 h-8 group-hover:border-black/20 transition">
//                 <ArrowRight size={18} />
//               </span>
//             </button>
//           </motion.div>
//         </motion.div>
//       </div>

//     </section>
//   );
// };

// export default Hero;