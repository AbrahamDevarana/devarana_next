import React from 'react'


interface Props {
    type: 'button' | 'submit' | 'reset'
    onClick?: () => void
    disabled?: boolean
    children?: React.ReactNode
    colorType: colorType
    textColor?: string
}

type colorType = 'pink' | 'pinkInverted' | 'whiteInverted'


export const Button = ({
    type,
    onClick,
    disabled,
    colorType,
    textColor,
    children = 'Enviar'

}: Props) => {

    const className = (colorType:colorType) => {
        switch (colorType) {
            case 'pink':
                return `buttonEffect bg-devarana-pink text-${textColor} border-2 border-devarana-pink hover:bg-transparent hover:text-devarana-pink after:hover:border-devarana-pink`
            case 'pinkInverted':
                return `text-${textColor} after:border-devarana-pink border-devarana-pink hover:bg-devarana-pink hover:text-devarana-graph hover:border-devarana-pink buttonEffectInverted`
            case 'whiteInverted':
                return `text-${textColor} after:border-white border-white hover:bg-white hover:text-devarana-graph hover:border-white buttonEffectInverted`
            default:
                return 'hidden'
        }
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`block py-1 px-8 border-2 after:border-2 ${className(colorType)}`}
            >{children}</button>
    )
}
