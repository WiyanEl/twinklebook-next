'use client'

interface Props {
  progress: number
}

export default function SectionLoading({
  progress,
}: Props) {
  return (
    <section className="fixed inset-0 z-[99999] flex items-center justify-center bg-white">
      <div className="w-[300px] text-center">

        <p className="mb-4 text-sm">
          Loading...
        </p>

        <div className="h-[5px] w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-black transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <p className="mt-2 text-xs">
          {progress}%
        </p>

      </div>
    </section>
  )
}