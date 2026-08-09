type IconProps = {
  className?: string;
};

const common = {
  width: 15,
  height: 15,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function MailIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="m4 6.5 8 6.2 8-6.2" />
    </svg>
  );
}

export function LinkedInIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.8 10.2v6.2M7.8 7.6v.01" />
      <path d="M11.6 16.4v-3.6c0-1.3.9-2.2 2-2.2s2 .9 2 2.2v3.6M11.6 10.2v6.2" />
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.68c-2.5.55-3.03-1.08-3.03-1.08-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.32-.98.57-1.21-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.92-2.42-.09-.23-.4-1.15.09-2.4 0 0 .76-.24 2.48.92a8.5 8.5 0 0 1 4.52 0c1.72-1.16 2.48-.92 2.48-.92.49 1.25.18 2.17.09 2.4.57.63.92 1.44.92 2.42 0 3.46-2.1 4.22-4.11 4.44.33.29.62.85.62 1.72v2.55c0 .24.15.51.61.43A9 9 0 0 0 12 3Z" />
    </svg>
  );
}

export function FileIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M7 3.5h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4" />
      <path d="M9 13.5h6M9 16.5h6" />
    </svg>
  );
}
