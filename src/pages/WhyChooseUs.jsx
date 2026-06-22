import React from "react";
import {
  ShieldCheck,
  Cog,
  Clock3,
  Users,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Creative Excellence",
      description: "Unique designs tailored to your brand.",
    },
    {
      icon: Cog,
      title: "Strategic Approach",
      description: "Designs backed by research and strategy.",
    },
    {
      icon: Clock3,
      title: "Timely Delivery",
      description: "We value your time as much as you do.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our ultimate goal.",
    },
  ];

  return (
<section
  id="product"
  className="bg-[#FAF7F3] py-12 sm:py-16 md:py-20 lg:py-15"
>
  <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

    {/* Heading */}
    <div className="text-center mb-10 md:mb-14 lg:mb-16">
      <h2
        className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          font-bold
          text-[#0F172A]
          uppercase
          tracking-wide
          leading-tight
        "
      >
        WHY CHOOSE NOVA EDGE?
      </h2>
    </div>

    {/* Features */}
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
      {features.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className={`
              flex items-start gap-4 sm:gap-5
              p-4 sm:p-6
              bg-white
              rounded-xl
              border border-[#E5E7EB]
              transition-all duration-300
              hover:shadow-lg
              hover:-translate-y-1
              ${
                index !== features.length - 1
                  ? "xl:border-r xl:border-[#E5E7EB]"
                  : ""
              }
            `}
          >
            {/* Icon */}
            <div className="shrink-0 mt-1">
              <Icon
                size={28}
                className="text-[#D08A1A] sm:w-8 sm:h-8 lg:w-9 lg:h-9"
                strokeWidth={1.5}
              />
            </div>

            {/* Content */}
            <div>
              <h3
                className="
                  text-lg
                  sm:text-xl
                  font-semibold
                  text-[#0F172A]
                  mb-2
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  text-sm
                  sm:text-[15px]
                  text-[#64748B]
                  leading-6
                  sm:leading-7
                "
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>

  </div>
</section>
  );
}