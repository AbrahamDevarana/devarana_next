export interface SvgProps {
    className?: string;
    onClick?: any
    ref?: any
}

export interface VacanteModalProps {
    setShowModal: (showModal: boolean) => void;
    showModal?: boolean | false ;
    modalContent: VacanteProps | null;
    setModalContent?: (vacante: VacanteProps) => void;
    vacantes?: VacanteProps[];
    vacante?: VacanteProps
}

export interface VacanteProps {
    id: number;
    area: string;
    titulo: string;
    descripcion: string;
    requisitos: string[];
    responsabilidades: string[];
    prestaciones: string[];   
}

export interface VacanteCardProps {
    vacante: VacanteProps;
    setShowModal: (showModal: boolean) => void;
    setModalContent: (vacante: VacanteProps) => void;
}

export interface VacanteSliderProps {
    vacantes: VacanteProps[];
    setShowModal: (showModal: boolean) => void;
    setModalContent: (vacante: VacanteProps) => void;
}