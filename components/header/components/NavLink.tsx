"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface linkType {
  href: string;
  children: React.ReactNode;
}
function NavLink({ href, children }: linkType) {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${pathname === href ? "text-green-400" : ""} font-semibold hover:text-green-400`}>
      {children}
    </Link>
  );
}

export default NavLink;
