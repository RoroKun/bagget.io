import { FONT_SIZE } from "@/data/utility/types"
import { twMerge } from "tailwind-merge";


export function Heading({size = 'biggest', className, children}: {size?: FONT_SIZE; className?: string; children: React.ReactNode}) {
    
    if (size === 'biggest') {
        return (
            <h1
                className={twMerge(`text-4xl font-bold text-gray-50`, className)}
            >
                {children}
            </h1>
        )
    } else if (size === 'big') {
        return (
            <h2
                className={twMerge(`text-xl text-gray-50`, className)}
            >
                {children}
            </h2>
        )
    } else if (size === 'small') {
        return (
            <h3
                className={twMerge(`text-lg text-gray-50`, className)}
            >
                {children}
            </h3>
        )
    }
}

export function Text({size = 'small', className, children}: {size?: FONT_SIZE; className?: string; children: React.ReactNode}) {
    if (size === 'biggest') {
        return (
            <h1
                className={twMerge(`text-lg text-gray-50`, className)}
            >
                {children}
            </h1>
        )
    } else if (size === 'big') {
        return (
            <h2
                className={twMerge(`text-md text-gray-50`, className)}
            >
                {children}
            </h2>
        )
    } else if (size === 'small') {
        return (
            <h3
                className={twMerge(`text-sm text-gray-50`, className)}
            >
                {children}
            </h3>
        )
    }
}

export function Highlight({children}: {children: React.ReactNode}) {
    return (
        <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-lime-50 to-lime-100 rotate-178 -z-10 "></span>
            <span className="relative text-gray-950 px-2">
                {children}
            </span>
        </span>
    )
}