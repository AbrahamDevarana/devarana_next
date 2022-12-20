

export interface SvgProps {
    className?: string;
}

export interface VacanteModalProps {
    setShowModal: (showModal: boolean) => void;
    showModal?: boolean | false ;
    modalContent?: []
    setModalContent?: (modalContent: JSX.Element) => void;
}