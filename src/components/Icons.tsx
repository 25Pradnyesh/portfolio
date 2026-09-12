import React from "react";

export function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="GitHub"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="X"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      aria-label="LinkedIn"
    >
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#ffffff"
        d="M19 19h-3.125v-4.896c0-1.168-.023-2.67-1.627-2.67-1.629 0-1.878 1.272-1.878 2.587V19H9.245V8.95h3V10.32h.042c.418-.792 1.439-1.627 2.962-1.627 3.167 0 3.751 2.085 3.751 4.797V19zM6.545 7.577a1.815 1.815 0 110-3.63 1.815 1.815 0 010 3.63zm-1.562 11.423h3.125V8.95H4.983V19z"
      />
    </svg>
  );
}

export function CalIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 32 20"
      className={className}
      aria-label="Cal.com"
    >
      <rect width="32" height="20" rx="4" fill="#18181b" stroke="#27272a" strokeWidth="1" />
      <text
        x="16"
        y="13.5"
        fill="#f4f4f5"
        fontSize="8"
        fontWeight="600"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        textAnchor="middle"
        letterSpacing="-0.2px"
      >
        Cal.com
      </text>
    </svg>
  );
}

export function ResumeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Resume"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

/* =========================================================================
   AUTHENTIC BRAND ICONS (Simple Icons / Official Brand Geometry)
   ========================================================================= */

export function BrandXIcon({ className = "size-[18px] text-zinc-100" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="X">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function BrandGithubIcon({ className = "size-[20px] text-zinc-100" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-label="GitHub">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function BrandLinkedinIcon({ className = "size-[19px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="LinkedIn" role="img">
      <rect width="24" height="24" rx="4" fill="#0A66C2" />
      <path
        fill="#FFFFFF"
        d="M19 19h-3.125v-4.896c0-1.168-.023-2.67-1.627-2.67-1.629 0-1.878 1.272-1.878 2.587V19H9.245V8.95h3V10.32h.042c.418-.792 1.439-1.627 2.962-1.627 3.167 0 3.751 2.085 3.751 4.797V19zM6.545 7.577a1.815 1.815 0 110-3.63 1.815 1.815 0 010 3.63zm-1.562 11.423h3.125V8.95H4.983V19z"
      />
    </svg>
  );
}

export function BrandCalIcon({ className = "w-[25px] h-auto" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 32 20"
      className={className}
      aria-label="Cal.com"
    >
      <rect width="32" height="20" rx="4" fill="var(--muted)" stroke="var(--edge)" strokeWidth="1" />
      <text
        x="16"
        y="13.5"
        fill="var(--foreground)"
        fontSize="8.5"
        fontWeight="600"
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
        textAnchor="middle"
        letterSpacing="-0.2px"
      >
        Cal.com
      </text>
    </svg>
  );
}

export function BrandTelegramIcon({ className = "size-[20px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Telegram" role="img">
      <circle cx="12" cy="12" r="12" fill="#229ED9" />
      <path
        fill="#ffffff"
        d="M17.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.945z"
      />
    </svg>
  );
}

export function BrandEmailIcon({ className = "size-[18px] text-zinc-300" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Email"
    >
      <rect width="20" height="16" x="2" y="4" rx="2.5" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function BrandResumeIcon({ className = "size-[18px] text-zinc-300" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="Resume"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

export function BrandDiscordIcon({ className = "w-[20px] h-auto text-[#5865F2]" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="Discord"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}


/* =========================================================================
   PIXEL "PS" LOGO (Exact 4x5 chunky block font geometry)
   ========================================================================= */

export function PixelPSLogo({ className = "h-16 w-32" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 126 70"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="PS Logo"
    >
      {/* P: 56px wide x 70px high (4x5 blocks, block=14px) */}
      <rect x="0" y="0" width="14" height="70" />
      <rect x="14" y="0" width="28" height="14" />
      <rect x="42" y="14" width="14" height="14" />
      <rect x="14" y="28" width="28" height="14" />

      {/* S: 56px wide x 70px high (starts at x=70, 4x5 blocks) */}
      <rect x="70" y="0" width="56" height="14" />
      <rect x="70" y="14" width="14" height="14" />
      <rect x="70" y="28" width="56" height="14" />
      <rect x="112" y="42" width="14" height="14" />
      <rect x="70" y="56" width="56" height="14" />
    </svg>
  );
}

/* =========================================================================
   VERIFIED BADGE (Twitter / X style blue badge with crisp white checkmark)
   ========================================================================= */

export function VerifiedBadge({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-label="Verified"
      role="img"
    >
      <path
        fill="#1D9BF0"
        d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.34 2.19c-1.39-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91C2.63 9.33 1.75 10.57 1.75 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34z"
      />
      <path
        fill="#FFFFFF"
        d="M10.53 16.25l-4.24-4.24 1.41-1.41 2.83 2.83 6.77-6.77 1.41 1.41-8.18 8.18z"
      />
    </svg>
  );
}

