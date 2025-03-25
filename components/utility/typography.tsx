import { FONT_SIZE } from "@/data/utility/types"
import { cn } from "@/lib/utils";

export function Heading({size = 'biggest', className, children}: {size?: FONT_SIZE; className?: string; children: React.ReactNode}) {
    
    if (size === 'biggest') {
        return (
            <h1 className={cn(`lg:text-7xl sm:text-xl text-lg font-bold text-gray-50`, className)}>
                {children}
            </h1>
        )
    } else if (size === 'big') {
        return (
            <h2 className={cn(`lg:text-4xl sm:text-md text-md font-semibold text-gray-50`, className)}>
                {children}
            </h2>
        )
    } else if (size === 'small') {
        return (
            <h3 className={cn(`lg:text-2xl sm:text-sm text-sm font-semibold text-gray-50`, className)}>
                {children}
            </h3>
        )
    }
}

export function Text({size = 'small', className, children}: {size?: FONT_SIZE; className?: string; children: React.ReactNode}) {
    let fontSize = "lg:text-lg sm:text-md text-sm"

    if (size === "big") {
        fontSize = "lg:text-xl sm:text-lg text-md"
    } else if (size === "biggest") {
        fontSize = "lg:text-2xl sm:text-xl text-lg"
    }

    return (
        <p className={cn(fontSize, className)}>
            {children}
        </p>
    )
}

export function Highlight({children}: {children: React.ReactNode}) {
    return (
        <span className="relative inline-block mx-1">
            <span className="absolute inset-0 bg-gradient-to-r from-lime-50 to-lime-100 rotate-180 rounded-md"></span>
            <span className="relative text-gray-950 px-3">
                {children}
            </span>
        </span>
    )
}