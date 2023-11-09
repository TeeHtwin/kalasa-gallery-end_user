import React from 'react'

interface LayoutProps {
    className: string
    children: React.ReactNode
}

const Layout = ({className, children}: LayoutProps) => {
  return (
    <section className={`container bg-neutral-light py-6 px-4 lg:py-1 ${className}`}>
      {children}
    </section>
  )
}

export default Layout
