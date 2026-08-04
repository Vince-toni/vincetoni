// src/designTokens.js

export const theme = {
  colors: {
    // Backgrounds
    background: "bg-black",
    surface: "bg-[#F7F7F5]",
    white: "bg-white",

    // Gradients
    heroGradient:
      "bg-gradient-to-b from-black via-[#111111] to-[#F7F7F5]",

    // Text
    headingLight: "text-white",
    headingDark: "text-black",

    bodyLight: "text-white/70",
    bodyDark: "text-black/60",

    mutedLight: "text-white/40",
    mutedDark: "text-black/40",

    borderLight: "border-white/10",
    borderDark: "border-black/10",

    lineLight: "bg-white/10",
    lineDark: "bg-black/10",
  },

  spacing: {
    section: "px-6 py-32 md:py-40",
    sectionCompact: "px-6 py-24 md:py-32",
    container: "mx-auto max-w-7xl",
  },

  typography: {
    eyebrow:
      "text-xs font-medium uppercase tracking-[0.3em]",

    display:
      "text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[0.95]",

    heading:
      "text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]",

    cardTitle:
      "text-2xl md:text-3xl font-semibold tracking-tight",

    body:
      "text-lg leading-relaxed",

    caption:
      "text-sm uppercase tracking-[0.2em]",
  },

  radius: {
    card: "rounded-xl",
    button: "rounded-full",
  },

  transition: {
    normal: "transition-all duration-300",
    slow: "transition-all duration-700",
  },

  shadow: {
    soft: "shadow-lg shadow-black/5",
  },
};