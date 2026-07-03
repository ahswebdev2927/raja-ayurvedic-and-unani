import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import Container from "./Container";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export default function Breadcrumb({ items, light = false }: BreadcrumbProps) {
  const textColor = light ? "text-slate-400 hover:text-white" : "text-neutral-gray hover:text-primary";
  const activeColor = light ? "text-white" : "text-primary";
  const separatorColor = light ? "text-slate-700" : "text-slate-300";

  return (
    <nav aria-label="Breadcrumb" className={`py-3 text-sm bg-transparent`}>
      <Container>
        <ol className="flex flex-wrap items-center space-x-1.5 sm:space-x-2">
          <li className="flex items-center">
            <Link
              href="/"
              className={`inline-flex items-center transition-colors focus-visible:outline-none ${textColor}`}
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
            </Link>
          </li>
          
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={index} className="flex items-center">
                <ChevronRight className={`w-4 h-4 mx-1 shrink-0 ${separatorColor}`} />
                {isLast || !item.href ? (
                  <span className={`font-medium max-w-[200px] truncate ${activeColor}`} aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`transition-colors focus-visible:outline-none max-w-[200px] truncate ${textColor}`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
