export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold text-white mb-2">RJ Chand's Project</p>
        <p className="text-sm text-gray-400">
          Built with Next.js & Cosmic CMS · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}