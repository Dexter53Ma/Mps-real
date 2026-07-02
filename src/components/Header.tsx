"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ManagePropertyModal from "./ManagePropertyModal";

/* ─── Icons ─────────────────────────────────────────────────────────── */

function HamburgerIcon({ className }: { className?: string }) {
  return (
              <svg
                className={className}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
              <svg
                className={className}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 4.5l3 3 3-3" />
    </svg>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 3l3 3-3 3" />
    </svg>
  );
}

/* ─── Marrakech Property Service Logo ────────────────────────────────── */

function MPSLogo({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo.png"
      alt="Marrakech Property Service"
      className={`h-[80px] md:h-[100px] w-auto object-contain ${className ?? ""}`}
    />
  );
}

/* ─── Mega-menu data ─────────────────────────────────────────────────── */

interface MegaMenuItem {
  heading: string;
  description?: string;
  links: { label: string; href: string }[];
}

interface FeaturedCard {
  href: string;
  title: string;
  subtitle?: string;
  image: string;
}

interface MegaMenuData {
  columns: MegaMenuItem[];
  featured?: FeaturedCard;
}

const workspacesMega: MegaMenuData = {
  columns: [
    {
      heading: "Our properties",
      description:
        "Managed properties across Marrakech's most exclusive locations.",
      links: [
        { label: "View all properties", href: "/properties/" },
      ],
    },
    {
      heading: "Browse by location",
      links: [
        { label: "Palmeraie", href: "/properties/?location=palmeraie" },
        { label: "Medina", href: "/properties/?location=medina" },
        { label: "Hivernage", href: "/properties/?location=hivernage" },
        { label: "Guéliz", href: "/properties/?location=gueliz" },
      ],
    },
    {
      heading: "Browse by type",
      links: [
        { label: "Villas", href: "/properties/?type=villa" },
        { label: "Riads", href: "/properties/?type=riad" },
        { label: "Apartments", href: "/properties/?type=apartment" },
      ],
    },
  ],
  featured: {
    href: "/properties/",
    title: "List your property with MPS",
    subtitle: "Start earning passive income",
    image:
      "/images/gallery/735393725_17920253277393261_5794717972720120506_n.jpg",
  },
};

const meetingsMega: MegaMenuData = {
  columns: [
    {
      heading: "Our services",
      description:
        "Complete property management for your Marrakech villa, riad, or apartment.",
      links: [{ label: "View all services", href: "/meeting-and-events/" }],
    },
    {
      heading: "Management services",
      links: [
        { label: "Property Management", href: "/services/property-management/" },
        { label: "Airbnb Management", href: "/services/airbnb-management/" },
        { label: "Dynamic Pricing", href: "/services/dynamic-pricing/" },
        { label: "Professional Photography", href: "/services/professional-photography/" },
      ],
    },
    {
      heading: "Guest services",
      links: [
        { label: "Cleaning & Maintenance", href: "/services/cleaning-maintenance/" },
        { label: "Concierge Services", href: "/services/concierge/" },
        { label: "24/7 Guest Support", href: "/services/concierge/" },
      ],
    },
  ],
  featured: {
    href: "/meeting-and-events/",
    title: "Full-Service Property Management",
    image:
      "/images/gallery/728469101_17918238216393261_531635481015596799_n.jpg",
  },
};

const aboutMega: MegaMenuData = {
  columns: [
    {
      heading: "About MPS",
      links: [
        { label: "Our Story", href: "/our-latest-storey/" },
        { label: "FAQs", href: "/frequently-asked-questions/" },
        { label: "Sustainability", href: "/sustainability/" },
        { label: "Locations", href: "/locations/" },
        { label: "Meeting Spaces", href: "/meeting-space/" },
        { label: "Event Spaces", href: "/event-space/" },
      ],
    },
  ],
  featured: {
    href: "/about-mps/",
    title: "Why Marrakech Property Service",
    image:
      "/images/gallery/727680946_17918238813393261_7302752434960266297_n.jpg",
  },
};

const aboutFeatured2: FeaturedCard = {
  href: "/storey-club/",
  title: "MPS Club",
  image:
    "/images/gallery/723256853_17917386006393261_1045073267955173653_n (1).jpg",
};

const navItems = [
  { label: "Properties", href: "/properties/", mega: workspacesMega },
  { label: "Services", href: "/meeting-and-events/", mega: meetingsMega },
  { label: "About MPS",       href: "/about-mps/", mega: aboutMega, extraFeatured: aboutFeatured2 },
];

/* ─── Mobile menu accordion data ─────────────────────────────────────── */

interface MobileAccordion {
  label: string;
  links: { label: string; href: string }[];
}

const mobileAccordions: MobileAccordion[] = [
  {
    label: "Properties",
    links: [
      { label: "View all properties", href: "/properties/" },
      { label: "Palmeraie", href: "/properties/?location=palmeraie" },
      { label: "Medina", href: "/properties/?location=medina" },
      { label: "Hivernage", href: "/properties/?location=hivernage" },
      { label: "Guéliz", href: "/properties/?location=gueliz" },
      { label: "Villas", href: "/properties/?type=villa" },
      { label: "Riads", href: "/properties/?type=riad" },
      { label: "Apartments", href: "/properties/?type=apartment" },
    ],
  },
  {
    label: "Services",
    links: [
      { label: "View all services", href: "/meeting-and-events/" },
      { label: "Property Management", href: "/services/property-management/" },
      { label: "Airbnb Management", href: "/services/airbnb-management/" },
      { label: "Dynamic Pricing", href: "/services/dynamic-pricing/" },
      { label: "Professional Photography", href: "/services/professional-photography/" },
      { label: "Cleaning & Maintenance", href: "/services/cleaning-maintenance/" },
      { label: "Concierge Services", href: "/services/concierge/" },
    ],
  },
  {
    label: "About MPS",
    links: [
      { label: "Our Story", href: "/our-latest-storey/" },
      { label: "FAQs", href: "/frequently-asked-questions/" },
      { label: "Sustainability", href: "/sustainability/" },
      { label: "Why MPS", href: "/about-mps/" },
      { label: "MPS Club", href: "/storey-club/" },
      { label: "Locations", href: "/locations/" },
      { label: "Meeting Spaces", href: "/meeting-space/" },
      { label: "Event Spaces", href: "/event-space/" },
    ],
  },
];

/* ─── Component ──────────────────────────────────────────────────────── */

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<number | null>(null);
  const [mobileAccordionOpen, setMobileAccordionOpen] = useState<number | null>(null);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  /* scroll detection */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* body scroll lock when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* close mega on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openMega = (idx: number) => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setActiveMega(idx);
  };

  const scheduleCloseMega = () => {
    megaTimeout.current = setTimeout(() => setActiveMega(null), 150);
  };

  return (
    <>
      {/* ── Header bar ─────────────────────────────────────────────── */}
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled
            ? "glass-header shadow-sm"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="flex justify-between items-center py-[16px] px-[24px] md:px-[40px] lg:px-[60px] max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link href="/" className="block relative z-10 shrink-0">
            <MPSLogo className="text-[#1A171A]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-[32px]">
            {navItems.map((item, idx) => (
              <button
                key={item.label}
                className={`nav-link flex items-center gap-[4px] text-[15px] font-[family-name:var(--font-gt-walsheim-prolight)] no-underline transition-opacity duration-300 hover:opacity-70 text-[#1A171A] ${
                  activeMega === idx ? "opacity-70" : ""
                }`}
                onMouseEnter={() => openMega(idx)}
                onMouseLeave={scheduleCloseMega}
              >
                {item.label}
                <ChevronDown
                  className={`w-[10px] h-[10px] transition-transform duration-200 ${
                    activeMega === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-[12px]">
            <div className="w-[1px] h-[20px] bg-[#1A171A] opacity-20 mx-[4px]" />
            <a
              href="/contact-us/"
              className="btn-hover inline-flex items-center px-[18px] py-[8px] text-[13px] font-[family-name:var(--font-gt-walsheim-prolight)] rounded-full no-underline transition-all duration-300 border border-[#1A171A] text-[#1A171A] hover:bg-[#1A171A] hover:text-white"
            >
              Get in touch
            </a>
            <button
              onClick={() => setIsManageModalOpen(true)}
              className="btn-hover inline-flex items-center px-[18px] py-[8px] text-[13px] font-[family-name:var(--font-gt-walsheim-prolight)] rounded-full no-underline bg-[#274038] text-white hover:bg-[#1A171A] transition-colors duration-300"
            >
              Manage my property
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-[8px] border border-[#1A171A] text-[#1A171A] rounded-[6px] transition-all duration-300 hover:bg-[#1A171A] hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <CloseIcon className="w-5 h-5" />
            ) : (
              <HamburgerIcon className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* ── Mega-menu panels ──────────────────────────────────────── */}
        {navItems.map((item, idx) => {
          const data = item.mega;
          if (!data) return null;

          return (
            <div
              key={item.label}
              className={`hidden lg:block absolute left-0 right-0 top-full bg-white border-t border-gray-100 transition-all duration-300 ${
                activeMega === idx
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
              onMouseEnter={() => openMega(idx)}
              onMouseLeave={scheduleCloseMega}
            >
              <div className="max-w-[1440px] mx-auto px-[60px] py-[40px]">
                <div
                  className={`grid gap-[40px] ${
                    data.featured
                      ? item.extraFeatured
                        ? "grid-cols-[1fr_1fr_1fr_320px_320px]"
                        : "grid-cols-[1fr_1fr_1fr_320px]"
                      : "grid-cols-[1fr_1fr_1fr]"
                  }`}
                >
                  {/* Content columns */}
                  {data.columns.map((col) => (
                    <div key={col.heading}>
                      <h3 className="text-[13px] font-[family-name:var(--font-gt-walsheim-medium)] text-[#1A171A] uppercase tracking-wider mb-[16px]">
                        {col.heading}
                      </h3>
                      {col.description && (
                        <p className="text-[13px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A]/60 mb-[16px] leading-relaxed max-w-[280px]">
                          {col.description}
                        </p>
                      )}
                      <ul className="list-none p-0 m-0 space-y-[10px]">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="group inline-flex items-center gap-[6px] text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-[#1A171A] no-underline hover:opacity-70 transition-opacity"
                            >
                              {link.label}
                              <ArrowRight className="w-[12px] h-[12px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {/* Featured card */}
                  {data.featured && (
                    <Link
                      href={data.featured.href}
                      className="group block relative rounded-[12px] overflow-hidden h-[280px] no-underline"
                    >
            <img
              src={data.featured.image}
              alt={data.featured.title}
              width={320}
              height={280}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                        {data.featured.subtitle && (
                          <span className="text-[11px] font-[family-name:var(--font-gt-walsheim-prolight)] text-white/70 uppercase tracking-wider">
                            {data.featured.subtitle}
                          </span>
                        )}
                        <h4 className="text-[18px] font-[family-name:var(--font-gt-walsheim-medium)] text-white mt-[4px]">
                          {data.featured.title}
                        </h4>
                      </div>
                    </Link>
                  )}

                  {/* Extra featured card (About dropdown) */}
                  {item.extraFeatured && (
                    <Link
                      href={item.extraFeatured.href}
                      className="group block relative rounded-[12px] overflow-hidden h-[280px] no-underline"
                    >
                      <img
                        src={item.extraFeatured.image}
                        alt={item.extraFeatured.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                        <h4 className="text-[18px] font-[family-name:var(--font-gt-walsheim-medium)] text-white">
                          {item.extraFeatured.title}
                        </h4>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </header>

      {/* ── Mobile Menu Overlay ─────────────────────────────────────── */}
      <div
        className={`fixed inset-0 bg-[#1A171A] text-white z-[200] transition-all duration-500 ease-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center py-[20px] px-[24px]">
          <Link href="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>
            <MPSLogo className="text-white" />
          </Link>
          <button
            className="p-[8px] border border-white rounded-[6px] transition-all duration-300 hover:bg-white hover:text-[#1A171A] min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <CloseIcon className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Accordion sections with staggered animation */}
        <nav className="flex flex-col items-start px-[24px] mt-[24px]">
          {mobileAccordions.map((section, idx) => (
            <div 
              key={section.label} 
              className={`w-full border-b border-white/10 transition-all duration-500 ${
                isMobileMenuOpen 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: isMobileMenuOpen ? `${idx * 100 + 200}ms` : '0ms' }}
            >
              <button
                className="flex items-center justify-between w-full py-[16px] text-left transition-colors duration-300 hover:text-white/80 min-h-[44px]"
                onClick={() =>
                  setMobileAccordionOpen(mobileAccordionOpen === idx ? null : idx)
                }
              >
                <span className="text-[24px] font-[family-name:var(--font-gt-walsheim-prolight)] text-white">
                  {section.label}
                </span>
                <ChevronRight
                  className={`w-[16px] h-[16px] text-white transition-transform duration-200 ${
                    mobileAccordionOpen === idx ? "rotate-90" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileAccordionOpen === idx ? "max-h-[500px] pb-[16px]" : "max-h-0"
                }`}
              >
                <ul className="list-none p-0 m-0 space-y-[12px] pl-[12px]">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-[8px] text-[15px] font-[family-name:var(--font-gt-walsheim-prolight)] text-white/70 no-underline hover:text-white transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <ArrowRight className="w-[12px] h-[12px]" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom section with staggered animation */}
        <div 
          className={`absolute bottom-[40px] left-0 right-0 px-[24px] transition-all duration-500 ${
            isMobileMenuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? '500ms' : '0ms' }}
        >
          <div className="flex flex-col gap-[12px] mb-[32px]">
            <a
              href="/contact-us/"
              className="btn-hover px-[24px] py-[12px] bg-white text-[#1A171A] rounded-full text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-center no-underline transition-all duration-300 hover:bg-white/90 min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get in touch
            </a>
            <button
              className="btn-hover px-[24px] py-[12px] bg-[#274038] text-white rounded-full text-[14px] font-[family-name:var(--font-gt-walsheim-prolight)] text-center no-underline transition-colors duration-300 hover:bg-[#1A171A] min-h-[44px] flex items-center justify-center"
              onClick={() => { setIsMobileMenuOpen(false); setIsManageModalOpen(true); }}
            >
              Manage my property
            </button>
          </div>

          {/* Social links */}
          <div className="flex gap-[20px] mb-[24px]">
            <a href="https://www.facebook.com/MarrakechPropertyService" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-opacity duration-300 hover:opacity-70">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/marrakechpropertyservice/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-opacity duration-300 hover:opacity-70">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/marrakech-property-service/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-opacity duration-300 hover:opacity-70">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-[8px]">
            <a href="tel:+212621189496" className="text-[14px] text-white no-underline">
              +212 6 21 18 94 96
            </a>
            <a href="mailto:info@marrakechpropertyservice.com" className="text-[14px] text-white no-underline">
              info@marrakechpropertyservice.com
            </a>
          </div>
        </div>
      </div>

      <ManagePropertyModal isOpen={isManageModalOpen} onClose={() => setIsManageModalOpen(false)} />
    </>
  );
}
