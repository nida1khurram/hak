"use client"
import Image from "next/image";
import { Container } from '../container';
import { usePathname } from "next/navigation"; // usePathname is from next/navigation

interface Breadcrumb {
  name: string;
  href: string;
}

interface PHeaderProps {
  title: string;
}

export function PHeader({ title }: PHeaderProps) {
  const pathname = usePathname(); // Use usePathname to get the current path

  // Helper function to generate breadcrumb data from the URL path
  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split("/").filter(Boolean); // split the URL path into segments
    
    const breadcrumbs: Breadcrumb[] = [
      { name: "Home", href: "/" },
    //   { name: "Menu", href: "/menu" },
    //   { name: "Blog", href: "/blog" },

      ...pathSegments.map((segment, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        return {
          name: segment.replace(/-/g, " "), // replace hyphens with spaces for better readability
          href,
        };
      }),
    ];

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(); // Dynamically generate the breadcrumb data

  return (
    <Container>
    <div className="relative h-[320px] mx-auto overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 "/>
        <Image src="/header2/p1.png" alt="header-background" 
        layout="fill"
        // objectFit="cover"  // Ensures the image covers the container
        // className="absolute inset-0"
        />

      <div/>
      {/* Content */}
      <div className="relative h-full max-w-[1920px] mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        {/* Breadcrumb Navigation */}
        <nav className="text-[20px]" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            {breadcrumbs.map((item, index) => (
              <li key={item.name} className="inline-flex items-center">
                {index > 0 && <span className="text-white">›</span>}
                <a
                  href={item.href}
                  className={`ms-1 text-[20px] font-medium ${
                    index === breadcrumbs.length - 1
                      ? "text-orange-500"
                      : "text-white hover:text-orange-500 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>

    </Container>
  );
}
