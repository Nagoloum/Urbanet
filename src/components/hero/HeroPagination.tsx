import { ArrowRightCircle, ArrowLeftCircle } from "lucide-react";

type Props = {
    total: number;
    current: number;
    setIndex: (val: [number, number]) => void;
};

export default function HeroPagination({ total, current, setIndex }: Props) {
    
    // Fonction pour changer de slide avec sécurité pour les index
    const handleMove = (direction: number) => {
        const nextIndex = current + direction;
        
        // On évite de sortir des limites (optionnel selon ton besoin)
        if (nextIndex >= 0 && nextIndex < total) {
            setIndex([nextIndex, direction]);
        }
    };

    return (
        <div className="flex items-center gap-4 max-[750px]:hidden">
            {/* Bouton Précédent */}
            <button 
                onClick={() => handleMove(-1)}
                disabled={current === 0}
                className="disabled:opacity-30 transition-opacity"
            >
                <ArrowLeftCircle className="w-10 h-10 text-white" />
            </button>

            {/* Bouton Suivant */}
            <button 
                onClick={() => handleMove(1)}
                disabled={current === total - 1}
                className="disabled:opacity-30 transition-opacity"
            >
                <ArrowRightCircle className="w-10 h-10 text-white" />
            </button>
        </div>
    );
}