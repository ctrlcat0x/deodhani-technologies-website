"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { companyLinks, serviceLinks } from "@/components/nav-links"
import { LinkItem } from "@/components/sheard"
export function DesktopNav() {
  const pathname = usePathname()
  return (
    <NavigationMenu
      className="flex-initial max-[850px]:hidden"
      aria-label="Desktop navigation"
    >
      <NavigationMenuList className="gap-2 max-[1100px]:gap-0">
        {pathname !== "/" && (
          <NavigationMenuItem>
            <NavigationMenuLink
              className="h-9 px-4 text-[13px] font-normal whitespace-nowrap max-[1100px]:px-2.5 max-[1100px]:text-xs"
              render={<Link href="/" />}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-[13px] font-normal max-[1100px]:px-2.5 max-[1100px]:text-xs">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[560px] grid-cols-2 gap-1 p-1">
              {serviceLinks.map((item) => (
                <NavigationMenuLink
                  key={item.label}
                  render={<LinkItem {...item} />}
                />
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {companyLinks.map(({ label, href }) => (
          <NavigationMenuItem key={href}>
            <NavigationMenuLink
              className="h-9 px-4 text-[13px] font-normal whitespace-nowrap max-[1100px]:px-2.5 max-[1100px]:text-xs"
              render={<a href={href} />}
            >
              {label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
