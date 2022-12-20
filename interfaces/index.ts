export interface SvgProps {
    className?: string;
    onClick?: any
}

export interface VacanteModalProps {
    setShowModal: (showModal: boolean) => void;
    showModal?: boolean | false ;
    modalContent?: []
    setModalContent?: (modalContent: JSX.Element) => void;
}