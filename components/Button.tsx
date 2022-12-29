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
    children = 'ENVIAR'

}: Props) => {

    const className = (colorType:colorType) => {
        switch (colorType) {
            case 'pink':
                return `buttonEffect bg-devarana-pink text-${textColor} border-devarana-pink hover:bg-transparent hover:text-devarana-pink after:hover:border-devarana-pink`
            case 'pinkInverted':
                return `text-${textColor} after:border-devarana-pink border-devarana-pink hover:bg-devarana-pink hover:text-white hover:border-devarana-pink buttonEffectInverted`
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
            className={`px-8 tracking-[0.15em] border font-normal lg:text-xs text-[8px] after:border font-mulish ${className(colorType)}`}
            >{children}</button>
    )
}
