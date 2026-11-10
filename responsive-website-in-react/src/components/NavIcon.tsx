type NavName = "work" | "about" | "resume"

export default function NavIcon({ name }: { name: NavName }) {
  if (name === "work") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4.29333 1.33333H11.7C14.0733 1.33333 14.6667 1.92667 14.6667 4.29333V8.51333C14.6667 10.8867 14.0733 11.4733 11.7067 11.4733H4.29333C1.92667 11.48 1.33333 10.8867 1.33333 8.52V4.29333C1.33333 1.92667 1.92667 1.33333 4.29333 1.33333Z" />
        <path d="M8 11.48V14.6667" />
        <path d="M1.33333 8.66667H14.6667" />
        <path d="M5 14.6667H11" />
      </svg>
    )
  }

  if (name === "about") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M11.3333 4.66667C11.3333 6.50762 9.84095 8 8 8C6.15905 8 4.66667 6.50762 4.66667 4.66667C4.66667 2.82572 6.15905 1.33333 8 1.33333C9.84095 1.33333 11.3333 2.82572 11.3333 4.66667Z" />
        <path
          strokeWidth={0.9}
          strokeMiterlimit={10}
          d="M12.8067 10.4933L10.4466 12.8534C10.3533 12.9467 10.2666 13.12 10.2466 13.2467L10.12 14.1467C10.0733 14.4733 10.3 14.7 10.6267 14.6533L11.5266 14.5267C11.6533 14.5067 11.8333 14.42 11.92 14.3267L14.28 11.9667C14.6866 11.56 14.88 11.0867 14.28 10.4867C13.6866 9.89334 13.2133 10.0867 12.8067 10.4933Z"
        />
        <path
          strokeWidth={0.9}
          strokeMiterlimit={10}
          d="M12.4667 10.8333C12.6667 11.5533 13.2267 12.1133 13.9467 12.3133"
        />
        <path d="M2.27332 14.6667C2.27332 12.0867 4.84 10 8 10C8.69333 10 9.35998 10.1 9.97998 10.2867" />
      </svg>
    )
  }

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      aria-hidden="true"
    >
      <path d="M14 4.66667V11.3333C14 13.3333 13 14.6667 10.6667 14.6667H5.33333C3 14.6667 2 13.3333 2 11.3333V4.66667C2 2.66667 3 1.33333 5.33333 1.33333H10.6667C13 1.33333 14 2.66667 14 4.66667Z" />
      <path d="M9.66667 3V4.33333C9.66667 5.06667 10.2667 5.66667 11 5.66667H12.3333" />
      <path d="M5.33333 8.66667H8" />
      <path d="M5.33333 11.3333H10.6667" />
    </svg>
  )
}
