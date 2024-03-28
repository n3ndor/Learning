import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export const Shadcn_AspectRatio = () => (
  <div className="w-[450px] flex gap-10 mx-auto">
    <div>
      <AspectRatio ratio={5/5} className="w-full">
        <Image src="/sample.jpg" alt="Image" className="rounded-md object-cover" layout="fill" />
      </AspectRatio>
        <p>Aspect Ratio 16/9</p>
    </div>

    <div>
      <AspectRatio ratio={3/5} className="w-full">
        <Image src="/sample.jpg" alt="Image" className="rounded-md object-cover" layout="fill"/>
      </AspectRatio>
        <p>Aspect Ratio 3 / 5</p>
    
    </div>

  </div>
)