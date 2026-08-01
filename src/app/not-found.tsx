import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-7xl font-bold text-blue-700">404</h1>

      <h2 className="mt-4 text-3xl font-bold text-gray-900">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-xl text-gray-600">
        The page you are looking for does not exist or may have been moved.
        Please return to the homepage or explore our logistics services.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}