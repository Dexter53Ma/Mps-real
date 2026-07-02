export function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="17" viewBox="0 0 11 17" fill="none" className={className}>
      <path d="M11 5.86207C11 9.0996 7.425 17 5.5 17C3.3 17 0 9.0996 0 5.86207C0 2.62454 2.46243 0 5.5 0C8.53757 0 11 2.62454 11 5.86207Z" fill="currentColor"/>
    </svg>
  );
}

export function MapMarkerIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="29" viewBox="0 0 20 29" fill="none" className={className}>
      <path d="M20 10C20 15.5228 13.5 29 10 29C6 29 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z" fill="currentColor"/>
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className={className}>
      <path d="M12.7278 14L14 12.7278L8.27225 7.00044L14 1.27313L12.7278 0L7 5.72731L1.27225 0L0 1.27313L5.72775 7.00044L7 8.27268L12.7278 14Z" fill="currentColor"/>
      <path d="M0 12.7278L1.27225 14L5.72687 9.54582L4.45463 8.27269L0 12.7278Z" fill="currentColor"/>
    </svg>
  );
}

export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" className={className}>
      <path d="M4.8103 9.49016L4.62224 9.26326L0.29293 4.02697L0.207245 3.9026C0.169967 3.84376 0.12935 3.77035 0.10153 3.70846L0.0998611 3.70422C-0.203374 2.97074 0.209471 2.0328 0.993431 1.92542L8.77405 0.858871C9.67931 0.734501 10.3069 1.82471 9.84344 2.71775L6.50341 9.15406L6.44554 9.26508C6.09612 9.9385 5.27489 10.0513 4.8103 9.48955" fill="currentColor"/>
    </svg>
  );
}

export function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none" className={className}>
      <path d="M6.42807 0.5L6.42807 14.3263L6.42036 14.3263L6.42036 14.5L5.56465 14.5L6.66862e-08 8.79369L0.606874 8.17638L5.57151 13.2676L5.57151 0.5L6.42807 0.5Z" fill="currentColor"/>
      <path d="M11.3936 8.1764L12.0004 8.79372L7.27734 13.6368L7.27734 12.397L11.3936 8.1764Z" fill="currentColor"/>
    </svg>
  );
}

export function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none" className={className}>
      <path d="M5.57193 0.5L5.57193 14.3263L5.57964 14.3263L5.57964 14.5L6.43535 14.5L12 8.79369L11.3931 8.17638L6.42849 13.2676L6.42849 0.5L5.57193 0.5Z" fill="currentColor"/>
      <path d="M0.606445 8.1764L0 8.79372L4.72266 13.6368L4.72266 12.397L0.606445 8.1764Z" fill="currentColor"/>
    </svg>
  );
}

export function FacebookIcon({ className }: { className?: string }) {
  return (
    <img src="/images/misc/facebook-icon-white.svg" alt="Facebook" className={className} width={20} height={20} />
  );
}

export function InstagramIcon({ className }: { className?: string }) {
  return (
    <img src="/images/misc/instagram-icon.svg" alt="Instagram" className={className} width={20} height={20} />
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <img src="/images/misc/LinkedIn.svg" alt="LinkedIn" className={className} width={20} height={20} />
  );
}

export function MenuIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="4" x2="20" y1="12" y2="12"/>
      <line x1="4" x2="20" y1="6" y2="6"/>
      <line x1="4" x2="20" y1="18" y2="18"/>
    </svg>
  );
}

export function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className={className}>
      <line x1="17.7832" y1="2.93339" x2="2.934" y2="17.7826" stroke="currentColor"/>
      <line x1="18.0664" y1="17.7832" x2="3.21713" y2="2.934" stroke="currentColor"/>
    </svg>
  );
}
