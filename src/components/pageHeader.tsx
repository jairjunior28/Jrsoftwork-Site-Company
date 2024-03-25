import { buttonVariants } from "@/components/ui/button"
import MainNav from "@/components/main-nav"
import { siteConfig } from "@/config/site"
import { Link } from "lucide-react"

export default function PageHeader() {
    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex flex-1 items-center justify-end space-x-4">
                <nav className="flex items-center space-x-1">
             <a href={siteConfig.links.github} target="_blank">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                
                <span className="sr-only">GitHub</span>
                
              </div>
              </a>  
                </nav>
                </div>
            </div>
        </header>

    )
}
