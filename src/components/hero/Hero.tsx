import { motion, AnimatePresence } from "framer-motion";
import { useCarousel } from "../../hooks/useCarousel";
import HeroContent from "./HeroContent";
import HeroCard from "./HeroCard";
import HeroPagination from "./HeroPagination";
import HeroClients from "./HeroClient";
import { images } from "../../data/CarousselImg";
import "./hero.css";

export default function Hero() {
  const { index, direction, paginate, setIndex } = useCarousel(images.length);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="relative  overflow-hidden">

      <AnimatePresence custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_e, info) => {
            if (info.offset.x < -100) paginate(1);
            if (info.offset.x > 100) paginate(-1);
          }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex flex-col justify-between px-16 py-6 max-[750px]:px-6 max-[750px]:py-4">

        <HeroContent />

        <div className="flex justify-between items-end">
          <HeroClients />

          <div className="flex flex-col items-end gap-3">
            <HeroCard />
            <HeroPagination
              total={images.length}
              current={index}
              setIndex={setIndex}
            />
          </div>
        </div>

      </div>
    </section>
  );
}