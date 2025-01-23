import { useState } from 'react'

export const useIsOpen = (state?:boolean ) => {
    const [isOpen, seTisOpen] = useState(state || false)

    const open = () => seTisOpen(true)

    const close = () => seTisOpen(false)

    const toggle = () => seTisOpen(!isOpen)

    return {
        isOpen,
        open,
        close,
        toggle
    }
}