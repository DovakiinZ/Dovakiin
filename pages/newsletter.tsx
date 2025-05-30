export default function Newsletter() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-md rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-4">Subscribe to the Newsletter</h1>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Your email" className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-sm" />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}