import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "default" | "horizontal" | "icon";
  className?: string;
  iconSize?: number;
}

export default function Logo({
  variant = "default",
  className,
  iconSize = 48,
}: LogoProps) {
  if (variant === "icon") {
    return (
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 148 138"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Servant Property Inspections logo"
      >
        <polygon
          points="74,6 6,56 22,56 22,118 58,118 58,84 90,84 90,118 126,118 126,56 142,56"
          fill="#b0e070"
          opacity="0.06"
        />
        <polygon points="74,6 6,56 142,56" fill="#406080" opacity="0.3" />
        <polyline
          points="74,6 6,56"
          fill="none"
          stroke="#b0e070"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <polyline
          points="74,6 142,56"
          fill="none"
          stroke="#b0e070"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <line x1="6" y1="56" x2="22" y2="56" stroke="#b0e070" strokeWidth="3" />
        <line x1="142" y1="56" x2="126" y2="56" stroke="#b0e070" strokeWidth="3" />
        <line x1="22" y1="56" x2="22" y2="118" stroke="#b0e070" strokeWidth="3" />
        <line x1="126" y1="56" x2="126" y2="118" stroke="#b0e070" strokeWidth="3" />
        <line x1="22" y1="118" x2="58" y2="118" stroke="#b0e070" strokeWidth="3" />
        <line x1="90" y1="118" x2="126" y2="118" stroke="#b0e070" strokeWidth="3" />
        <rect
          x="58"
          y="86"
          width="32"
          height="32"
          rx="2"
          fill="none"
          stroke="#b0e070"
          strokeWidth="2.5"
        />
        <rect
          x="30"
          y="72"
          width="20"
          height="18"
          rx="2"
          fill="none"
          stroke="#b0e070"
          strokeWidth="2"
        />
        <rect
          x="98"
          y="72"
          width="20"
          height="18"
          rx="2"
          fill="none"
          stroke="#b0e070"
          strokeWidth="2"
        />
        <circle cx="100" cy="46" r="22" fill="#202040" stroke="#b0e070" strokeWidth="3" />
        <circle cx="100" cy="46" r="14" fill="none" stroke="#c8e890" strokeWidth="2" />
        <line
          x1="117"
          y1="63"
          x2="130"
          y2="76"
          stroke="#b0e070"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <line
          x1="91"
          y1="41"
          x2="95"
          y2="45"
          stroke="#c8e890"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <svg
          width={iconSize}
          height={Math.round(iconSize * 0.93)}
          viewBox="0 0 148 138"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <polygon
            points="74,6 6,56 22,56 22,118 58,118 58,84 90,84 90,118 126,118 126,56 142,56"
            fill="#b0e070"
            opacity="0.06"
          />
          <polygon points="74,6 6,56 142,56" fill="#406080" opacity="0.3" />
          <polyline
            points="74,6 6,56"
            fill="none"
            stroke="#b0e070"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <polyline
            points="74,6 142,56"
            fill="none"
            stroke="#b0e070"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <line x1="6" y1="56" x2="22" y2="56" stroke="#b0e070" strokeWidth="3" />
          <line x1="142" y1="56" x2="126" y2="56" stroke="#b0e070" strokeWidth="3" />
          <line x1="22" y1="56" x2="22" y2="118" stroke="#b0e070" strokeWidth="3" />
          <line x1="126" y1="56" x2="126" y2="118" stroke="#b0e070" strokeWidth="3" />
          <line x1="22" y1="118" x2="58" y2="118" stroke="#b0e070" strokeWidth="3" />
          <line x1="90" y1="118" x2="126" y2="118" stroke="#b0e070" strokeWidth="3" />
          <rect
            x="58"
            y="86"
            width="32"
            height="32"
            rx="2"
            fill="none"
            stroke="#b0e070"
            strokeWidth="2.5"
          />
          <rect
            x="30"
            y="72"
            width="20"
            height="18"
            rx="2"
            fill="none"
            stroke="#b0e070"
            strokeWidth="2"
          />
          <rect
            x="98"
            y="72"
            width="20"
            height="18"
            rx="2"
            fill="none"
            stroke="#b0e070"
            strokeWidth="2"
          />
          <circle cx="100" cy="46" r="22" fill="#202040" stroke="#b0e070" strokeWidth="3" />
          <circle cx="100" cy="46" r="14" fill="none" stroke="#c8e890" strokeWidth="2" />
          <line
            x1="117"
            y1="63"
            x2="130"
            y2="76"
            stroke="#b0e070"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <line
            x1="91"
            y1="41"
            x2="95"
            y2="45"
            stroke="#c8e890"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
        <div className="flex flex-col leading-none">
          <span
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: `${Math.round(iconSize * 0.42)}px`,
              fontWeight: 700,
              color: "#b0e070",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Servant
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: `${Math.round(iconSize * 0.18)}px`,
              fontWeight: 400,
              color: "#c8e890",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginTop: "4px",
            }}
          >
            Property Inspections
          </span>
        </div>
      </div>
    );
  }

  // Default: stacked
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <svg
        width={iconSize}
        height={Math.round(iconSize * 0.93)}
        viewBox="0 0 148 138"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <polygon
          points="74,6 6,56 22,56 22,118 58,118 58,84 90,84 90,118 126,118 126,56 142,56"
          fill="#b0e070"
          opacity="0.06"
        />
        <polygon points="74,6 6,56 142,56" fill="#406080" opacity="0.3" />
        <polyline
          points="74,6 6,56"
          fill="none"
          stroke="#b0e070"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <polyline
          points="74,6 142,56"
          fill="none"
          stroke="#b0e070"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <line x1="6" y1="56" x2="22" y2="56" stroke="#b0e070" strokeWidth="3" />
        <line x1="142" y1="56" x2="126" y2="56" stroke="#b0e070" strokeWidth="3" />
        <line x1="22" y1="56" x2="22" y2="118" stroke="#b0e070" strokeWidth="3" />
        <line x1="126" y1="56" x2="126" y2="118" stroke="#b0e070" strokeWidth="3" />
        <line x1="22" y1="118" x2="58" y2="118" stroke="#b0e070" strokeWidth="3" />
        <line x1="90" y1="118" x2="126" y2="118" stroke="#b0e070" strokeWidth="3" />
        <rect
          x="58"
          y="86"
          width="32"
          height="32"
          rx="2"
          fill="none"
          stroke="#b0e070"
          strokeWidth="2.5"
        />
        <rect
          x="30"
          y="72"
          width="20"
          height="18"
          rx="2"
          fill="none"
          stroke="#b0e070"
          strokeWidth="2"
        />
        <rect
          x="98"
          y="72"
          width="20"
          height="18"
          rx="2"
          fill="none"
          stroke="#b0e070"
          strokeWidth="2"
        />
        <circle cx="100" cy="46" r="22" fill="#202040" stroke="#b0e070" strokeWidth="3" />
        <circle cx="100" cy="46" r="14" fill="none" stroke="#c8e890" strokeWidth="2" />
        <line
          x1="117"
          y1="63"
          x2="130"
          y2="76"
          stroke="#b0e070"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <line
          x1="91"
          y1="41"
          x2="95"
          y2="45"
          stroke="#c8e890"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.7"
        />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: `${Math.round(iconSize * 0.42)}px`,
          fontWeight: 700,
          color: "#b0e070",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          lineHeight: 1,
          marginTop: "8px",
        }}
      >
        Servant
      </span>
      <span
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: `${Math.round(iconSize * 0.16)}px`,
          fontWeight: 400,
          color: "#c8e890",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          marginTop: "4px",
        }}
      >
        Property Inspections
      </span>
    </div>
  );
}
