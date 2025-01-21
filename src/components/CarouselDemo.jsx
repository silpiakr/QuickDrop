
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {

  const images = [
    "https://i.ibb.co.com/LCVvrt4/01.jpg",
    "https://i.ibb.co.com/nr0VMyh/02.jpg",
    "https://i.ibb.co.com/YdNPDv9/03.png",
    "https://i.ibb.co.com/YdNPDv9/03.png",
  ];

  return (
    <Carousel className="w-full max-w-xl mx-auto my-12">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col  items-center justify-center p-2">
                  <img src={image} alt={`Carousel item ${index + 1}`} className="w-full object-cover "
                  />
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
