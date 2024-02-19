import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="flex h-16 items-center bg-white shadow">
      <Link
        className="ml-5 h-10 w-10 flex items-center justify-center"
        href="/"
      >
        <ClockIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
    </nav>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />

      {/* The lines on the clock */}
      <polyline points="12 6 12 12 8 14" />
    </svg>
  );
}
