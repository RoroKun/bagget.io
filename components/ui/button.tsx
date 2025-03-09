import { Redirect } from "../utility/link";
import { twMerge } from "tailwind-merge";

export function Button({className, variant="primary", link, children}: {className?: string; variant?: string; link: string; children: React.ReactNode}) {

  
    const baseStyle = "w-full px-10 py-3 rounded-2xl"
    const primary = "bg-gradient-to-r from-emerald-950 to-green-900 hover:from-emerald-800 hover:to-green-800"
    const secondary = "bg-gradient-to-r from-lime-50 to-lime-100 hover:from-emerald-800 hover:to-green-800"

    const variantStyle = variant === "primary" ? primary : secondary

    return (
      <Redirect redirect={link}>
        <button className={twMerge(baseStyle, variantStyle, className)}>{children}</button>
      </Redirect>
    )
  }