import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { companyLinks, productLinks } from "@/components/nav-links"
import { LinkItem } from "@/components/sheard"
export function DesktopNav() {
  return (
    <NavigationMenu
      className="flex-initial max-[850px]:hidden"
      aria-label="Desktop navigation"
    >
      <NavigationMenuList className="gap-3 max-[1100px]:gap-0">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-[13px] font-normal max-[1100px]:px-2.5 max-[1100px]:text-xs">
            Data products
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[520px] grid-cols-2 gap-1.5 p-2">
              {productLinks.map((item) => (
                <NavigationMenuLink
                  key={item.label}
                  render={<LinkItem {...item} />}
                />
              ))}
            </div>
            <div className="border-t border-border px-[22px] py-3.5 text-xs text-primary">
              <a href="mailto:info@deodhanitechnologies.com">Discuss your data requirements</a>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="text-[13px] font-normal whitespace-nowrap max-[1100px]:px-2.5 max-[1100px]:text-xs"
            href="/#data-products"
          >
            OTS datasets
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="text-[13px] font-normal whitespace-nowrap max-[1100px]:px-2.5 max-[1100px]:text-xs"
            href="/#annotation-team"
          >
            Enterprise data
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent text-[13px] font-normal max-[1100px]:px-2.5 max-[1100px]:text-xs">
            About us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-[330px] p-2">
              {companyLinks.map((item) => (
                <NavigationMenuLink
                  key={item.label}
                  render={<LinkItem {...item} />}
                />
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
