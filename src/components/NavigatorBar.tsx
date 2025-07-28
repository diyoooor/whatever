import Link from "next/link";

export default function NavigatorBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
        </li>
        <li>
          <a href="/encryption" className="text-white hover:underline">
            Encryption
          </a>
        </li>
      </ul>
    </nav>
  );
}
