export default function Section({ children, bg }) {
  return (
    <section className={`w-full h-screen flex items-center justify-center ${bg || ''}`}>
      {/* Container para sa content */}
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 px-6">
        {children}
      </div>
    </section>
  )
}
