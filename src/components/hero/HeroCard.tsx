import { House } from "lucide-react";

export default function HeroCard() {
    return (
        <div className="bg-white py-6 px-4 rounded-xl shadow-lg w-80 lg:mb-12 max-[750px]:hidden">
            <div className="flex items-center gap-3 mb-2">
                <House className="w-5 h-5 text-black" />
                <h3 className="font-semibold">Modern Family Home</h3>
            </div>
            <p className="text-sm text-gray-500">
                1234 Maple Avenue, Greenfield, TX
            </p>

            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-700 transition-all duration-300">
                View Detail
            </button>
        </div>
    );
}