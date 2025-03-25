import { FONT_SIZE } from "@/data/utility/types"
import { cn } from "@/lib/utils";

export function Heading({size = 'biggest', className, children}: {size?: FONT_SIZE; className?: string; children: React.ReactNode}) {
    
    if (size === 'biggest') {
        return (
            <h1 className={cn(`text-7xl font-bold text-gray-50`, className)}>
                {children}
            </h1>
        )
    } else if (size === 'big') {
        return (
            <h2 className={cn(`text-4xl font-semibold text-gray-50`, className)}>
                {children}
            </h2>
        )
    } else if (size === 'small') {
        return (
            <h3 className={cn(`text-2xl font-semibold text-gray-50`, className)}>
                {children}
            </h3>
        )
    }
}

export function Text({size = 'small', className, children}: {size?: FONT_SIZE; className?: string; children: React.ReactNode}) {
    let fontSize = "text-lg"

    if (size === "big") {
        fontSize = "text-xl"
    } else if (size === "biggest") {
        fontSize = "text-2xl"
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