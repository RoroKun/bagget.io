import { Heading } from "@/components/utility/typography";
import { IMAGE } from "@/data/utility/types";
import Image from "next/image";

export default function Hero({image, children}: {image: IMAGE; children: React.ReactNode;}) {
    return (
        <section className="pt-30 pb-10 px-40 flex flex-col gap-10 justify-center items-center bg-gradient-to-b from-emerald-950 to-green-950">
            <Heading size="big">
                {children}
            </Heading>

            <div className="w-1/2 h-64 overflow-hidden rounded-full">
                <Image
                    src={image.url}
                    width={1920}
                    height={1800}
                    alt={image.alt}
                    className="w-full"
                />
            </div>
        </section>
    )
}