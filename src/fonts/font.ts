import { Inter, Cardo } from "next/font/google";

export const Primary = Inter({
    weight:['500','600','700'],
    display:'swap',
    subsets:['latin'],
    variable: "--font-inter",
})

export const Cardo_font = Cardo({
    weight:['400','700'],
    display:'swap',
    subsets:['latin'],
    variable: "--font-cardo",

})