import { valuePropData } from "@/data/value-prop";
import { Heading, Text, Highlight } from "@/components/utility/typography";
import Image from "next/image";

export default function ValueProp() {
    return (
      <section className="flex flex-col justify-center items-center px-[15%] py-[2%] gap-15 bg-gradient-to-t from-green-950 to-emerald-950">
        <Heading size="big">
            Achieve the following with <Highlight>Bag/Get.</Highlight>
        </Heading>
        <div className="flex gap-10">
          {valuePropData.map((valueProp, i) => (
            <div className="flex flex-col justify-center items-center gap-5" key={`${valueProp.title}-id-${i}`}>
              <div className="w-32 h-32">
                <Image 
                  src={valueProp.icon}
                  alt='TODO' 
                  width={1000}
                  height={1000}
                  className={`${valueProp.title} icon`}
                />
              </div>
              <Heading size="big">
                {valueProp.title}
              </Heading>
              <Text className="text-center text-gray-50">
                {valueProp.description}
              </Text>
            </div>
          ))}
        </div>
      </section>
    )
}