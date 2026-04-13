import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCarousel } from "../hooks/useCarousel";
import { Testimonials } from "../data/Testimonial";
import Logos from '../ui/Logos/Logos';

export default function Testimonial() {
  // On initialise le hook avec la longueur des données
  const { index, paginate, setIndex } = useCarousel(Testimonials.length, 6000);

  const currentItem = Testimonials[index];

  return (
    <div>
      <div className="bg-slate-50 py-16 px-4 lg:mt-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Hear From Our Satisfied Clients
            </h2>
          </div>

          <div className="text-center min-h-[200px] flex flex-col items-center justify-center">
            <p className="text-gray-600 text-xl lg:text-2xl leading-relaxed italic mb-8 max-w-3xl">
              "{currentItem.quote}"
            </p>

            <div className="mb-10">
              <h4 className="font-bold text-gray-900 text-lg">
                {currentItem.name}
              </h4>
              <p className="text-gray-400 text-sm uppercase tracking-widest">
                {currentItem.title}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">

            <button
              onClick={() => paginate(-1)}
              className="p-1.5 rounded-full border border-gray-300 bg-white hover:bg-gray-300 transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-3 h-3 text-gray-600" />
            </button>

            <div className="flex gap-2.5">
              {Testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex([i, i > index ? 1 : -1])}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === index
                      ? "bg-gray-900 w-6"
                      : "bg-gray-300 w-2.5 hover:bg-gray-400"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="p-1.5 rounded-full bg-white  hover:bg-gray-300 transition-all shadow-md"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-3 h-3 text-gray-600" />
            </button>

          </div>
        </div>

      </div>
      <div className="flex flex-wrap">
        <Logos />

      </div>
    </div>
  );
}