import React from "react";
import { ShieldCheck, Cog, Clock3, Users } from "lucide-react";
import { motion } from "framer-motion";

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

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="product"
      className="bg-[#FAF7F3] py-12 sm:py-16 md:py-20 lg:py-15 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14 lg:mb-16"
        >
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
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10"
        >
          {features.map((itemData, index) => {
            const Icon = itemData.icon;

            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                className={`
                  group
                  flex items-start gap-4 sm:gap-5
                  p-4 sm:p-6
                  bg-white
                  rounded-xl
                  border border-[#E5E7EB]
                  hover:border-[#D08A1A]
                  hover:shadow-[0_12px_35px_rgba(208,138,26,0.18)]
                  cursor-pointer
                  ${
                    index !== features.length - 1
                      ? "xl:border-r xl:border-[#E5E7EB]"
                      : ""
                  }
                `}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="shrink-0 mt-1"
                >
                  <Icon
                    size={30}
                    strokeWidth={1.6}
                    className="text-[#D08A1A] sm:w-8 sm:h-8 lg:w-9 lg:h-9"
                  />
                </motion.div>

                {/* Content */}
                <div>
                  <motion.h3
                    whileHover={{ x: 4 }}
                    className="
                      text-lg
                      sm:text-xl
                      font-semibold
                      text-[#0F172A]
                      mb-2
                    "
                  >
                    {itemData.title}
                  </motion.h3>

                  <p
                    className="
                      text-sm
                      sm:text-[15px]
                      text-[#64748B]
                      leading-6
                      sm:leading-7
                    "
                  >
                    {itemData.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}