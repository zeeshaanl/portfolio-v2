import Link from 'next/link'
import { headerElements } from '@/data/HeaderElements.js'
import { Container } from '@/components/Container'
import clsx from "clsx"

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer({className}) {
  return (
    <footer className={clsx(className, "mt-32")}>
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {
                  headerElements.map((element) => (
                    <NavLink key={element.name} href={element.link}>{element.name}</NavLink>
                  ))
                }
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Zeeshaan Lakdawala
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
