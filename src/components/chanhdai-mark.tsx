import React from "react"

export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 256 256"
      aria-hidden
      {...props}
    >
      {/* Bold geometric P mark */}
      <path
        fill="currentColor"
        d="M32 0h128c53.02 0 96 42.98 96 96s-42.98 96-96 96H96v64H32V0zm64 64v64h64c17.67 0 32-14.33 32-32s-14.33-32-32-32H96z"
      />
    </svg>
  )
}

export function getMarkSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 256"><path fill="currentColor" d="M32 0h128c53.02 0 96 42.98 96 96s-42.98 96-96 96H96v64H32V0zm64 64v64h64c17.67 0 32-14.33 32-32s-14.33-32-32-32H96z"/></svg>`
}
