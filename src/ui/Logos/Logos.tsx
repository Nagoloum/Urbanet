import { Feather, Frame, Hexagon, Shield, TargetIcon } from "lucide-react";

export default function Logos() {
    return (
        <div className="flex items-center justify-center lg:gap-24 gap-10 py-10 flex-wrap mx-auto text-slate-400 text-2xl">
            <span className="flex items-center gap-2">
                <Feather />
                <h3>LogoIpsum</h3>
            </span>
            <span className="flex items-center gap-2">
                <Frame/>
                <h3>LogoIpsum</h3>
            </span>

            <span className="flex items-center gap-2">
                <Hexagon />
                <h3>LogoIpsum</h3>
            </span>

            <span className="flex items-center gap-2">
                <Shield />
                <h3>LogoIpsum</h3>
            </span>

            <span className="flex items-center gap-2">
                <TargetIcon />
                <h3>LogoIpsum</h3>
            </span>

        </div>
    )
}
