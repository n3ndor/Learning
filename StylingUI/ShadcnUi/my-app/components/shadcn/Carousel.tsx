import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const Shadcn_Carousel = () => (
  <div>
    <p>Carousel:</p>
    <Carousel>
  <CarouselContent>
    <CarouselItem>This is the first item</CarouselItem>
    <CarouselItem>This is the middle item</CarouselItem>
    <CarouselItem>This is the last item</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

  </div>
)