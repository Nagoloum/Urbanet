export default function HeroClients() {
  return (
    <div className="flex items-center gap-3 max-[750px]:mt-12 max-[750px]:gap-5 max-[750px]:w-full">
      <div className="flex -space-x-3">
        <img src="/avatar1.jpg" className="w-16 h-16 rounded-full border max-[750px]:w-12 max-[750px]:h-12" />
        <img src="/avatar2.jpg" className="w-16 h-16 rounded-full border max-[750px]:w-12 max-[750px]:h-12" />
        <img src="/avatar3.jpg" className="w-16 h-16 rounded-full border max-[750px]:w-12 max-[750px]:h-12" />
      </div>
      <div>
        <p className="text-white text-lg font-semibold max-[750px]:text-base">50K+</p>
        <p className="text-white text-lg font-semibold max-[750px]:text-base">Happy Clients</p>
      </div>
    </div>
  );
}