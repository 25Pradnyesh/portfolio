export function ChanhDaiWordmark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 1000 200"
      {...props}
    >
      <text
        x="50%"
        y="140"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="monospace"
        fontWeight="800"
        fontSize="120"
        letterSpacing="0.15em"
      >
        PRADNYESH
      </text>
    </svg>
  )
}

export function getWordmarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1000 200"><text x="50%" y="140" text-anchor="middle" fill="currentColor" font-family="monospace" font-weight="800" font-size="120" letter-spacing="0.15em">PRADNYESH</text></svg>`
}
