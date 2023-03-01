// Import react scroll for view projects link
import { Link } from "react-scroll";
// Import animation
import { motion } from "framer-motion";
// Import data
import { heroData } from "../../data/heroData";
import heroImg from "../../assets/images/heroImg.jpg";

 // Animation 
 const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

 const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};


export default function Hero() {
// Data Imports
  // Greeting
  const heroGreeting = heroData.greeting.length ? (
    heroData.greeting.map((greeting, index) => <h1 key={index}>{greeting}</h1>)
  ) : (
    <p>Data Not Found</p>
  );

  // Bio
  const heroBio = heroData.bio.length ? (
    heroData.bio.map((bio, index) => <h1 key={index}>{bio}</h1>)
  ) : (
    <p>Data Not Found</p>
  );

  return (
    <>
      <motion.div 
      id="hero" 
      className="relative ml-20 mt-0.5"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden fill-primary h-full w-80 translate-x-1/2 transform lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex"></div>
                <motion.h1 
                className="text-5xl font-bold tracking-tight text-secondary sm:text-6xl"
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible
                }}
                >
                  {heroGreeting}
                </motion.h1>
                <p className="mt-6 text-lg leading-8 text-secondary">
                  {heroBio}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  {/* TODO: Link href to project page*/}
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-base font-semibold leading-7 text-silver cursor-pointer hover:text-gold"
                  >
                    View my projects <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
       lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
        >
          <img
            className="aspect-auto object-cover rounded-lg xlg:aspect-auto lg:h-full lg:w-full 2xl:object-contain"
            src={heroImg}
            alt="Grayson Harvey"
          />
        </div>
      </motion.div>
    </>
  );
}
