import Link from "next/link";

const contactLinks = [
  { href: "tel:09519333653", label: "Phone: 09519333653" },
  { href: "mailto:test@gmail.com", label: "Email: zachbanned23@gmail.com" },
  { href: "#", label: "Github" },
  { href: "#", label: "LinkedIn" },
] as const;

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
] as const;

const sociallinks = [
  { href: "https://facebook.com", label: "FACEBOOK" },
  { href: "https://twitter.com", label: "TWITTER" },
  { href: "https://gmail.com", label: "GMAIL" },
  { href: "https://github.com", label: "GITHUB" },
] as const;



export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="ml-1  mr-10 grid grid-cols-2 gap-20 lg:grid-cols-3">
          {/* Brand */}
        
             {/* Contact */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-foreground ">CONTACT INFO</h3>
            <ul className="space-y-2 border-r-1 border-primary">
              {contactLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-md text-color: black hover:text-foreground "
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
 {/* Social Links */}
          <div>
            <h3 className="ml-30 mb-3 text-lg font-bold text uppercase text-foreground ">Social Links</h3>
            <ul className="ml-12 space-y-5 flex flex-row gap-4">
              {sociallinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-md text-color: gray hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="ml-45 mb-3 text-lg font-bold text uppercase text-foreground">Pages</h3>
            <ul className="ml-20 space-y-2 border-l-1 pl-20 border-primary">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-md text-color: black hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
     
        </div>
      </div>
    </footer>
  );
}