import clsx from "clsx"
import Image from "next/image"
import image1 from '@/images/photos/tiff.jpeg'
import image2 from '@/images/photos/work1.jpeg'
import image3 from '@/images/photos/mba1.jpeg'
import image4 from '@/images/photos/speaking.jpeg'
import image5 from '@/images/photos/barmathilda.jpeg'
// import image5 from '@/images/photos/russia1.jpeg'

export function Photos() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  
    return (
      <div className="mt-16 sm:mt-20 z-50">
        <div className="-my-4 flex justify-center gap-5 py-4 sm:gap-8">
          {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
            <div
              key={image.src}
              className={clsx(
                'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                rotations[imageIndex % rotations.length]
              )}
            >
              <Image
                src={image}
                alt=""
                sizes="(min-width: 640px) 18rem, 11rem"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }