export default function Footer() {
  return (
    <footer className="border-t py-8 mt-8 bg-white dark:bg-[#071024]">
      <div className="container text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Anuj Shah · Built with Next.js ·{" "}
        <a className="text-primary" href="/resume">
          Resume
        </a>
      </div>
    </footer>
  );
}
