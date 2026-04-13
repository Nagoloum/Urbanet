import { ArrowRight, ArrowDown } from "lucide-react"

export default function Gestarted() {
  const steps = [
    { title: "Browse Listings", desc: "Find diverse properties in Urbanet" },
    { title: "Contact Agent", desc: "Ask, schedule and get tailored deals" },
    { title: "Schedule Visits", desc: "Pick a time, and our agents ensure a hassle-free viewing" },
    { title: "Close the Deal", desc: "Close your deal confidently with expert guidance" },
  ];

  return (
    <div className="py-16">
      <div className="flex flex-col lg:px-10 py-2 px-3">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 my-10">
            Getting Started With Urbanet
          </h2>
        </div>

        <div className="flex items-center justify-center gap-6 flex-col lg:flex-row">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center gap-6">
              
              <div className="flex flex-col py-6 px-8 bg-gray-50 rounded-xl w-full max-w-[280px] h-[120px] border border-gray-100">
                <span className="text-sm font-bold text-gray-900">{step.title}</span>
                <p className="text-gray-500 mt-2 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {index < steps.length - 1 && (
                <>
                  <ArrowRight className="w-5 h-5 text-gray-400 hidden lg:block" />
                  
                  <ArrowDown className="w-5 h-5 text-gray-400 block lg:hidden" />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}