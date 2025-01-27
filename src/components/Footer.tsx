import React from 'react'

export const Footer = () => {
  
    const year = new Date().getFullYear()
  
  return (
    <footer className='p-5 w-full border-t-2 border-white/20' >
        <p className='text-center' >
            © {year} Dev Learn. Todos los derechos reservados.
        </p>
    </footer>
  )
}