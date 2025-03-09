import Link from 'next/link'

export function Redirect({redirect, newPage = false, children}: {redirect: string; newPage?: boolean; children: React.ReactNode}) {

    if (newPage) {
        return (
          <Link href={redirect} target="_blank" rel="noopener noreferrer">
            {children}
          </Link>
        )
    } else {
        return (
            <Link href={redirect} rel="noopener noreferrer">
              {children}
            </Link>
          )
    }
}