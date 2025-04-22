"use client";

import { FeatureCard } from "./FeaturesCard";
import { MotionDiv } from "@/lib/UseClientUIs";

export const AppFeatures = () => {
  const features = [
    {
      title: "Easy Google Sign In",
      description:
        "Sign up with Google account and start sending and receiving crypto in no time. Your private key is encrypted with your transaction PIN and stored securely.",
      imageUrl:
        "https://res.cloudinary.com/dorblk1gb/image/upload/v1745302455/easysignin.png",
        
    },
    {
      title: "All-in-One Crypto Solution",
      description:
        "Send crypto to any address, receive crypto payments by generating payment links, and create multiple wallets - all within one beautiful app.",
      imageUrl:
        "https://res.cloudinary.com/dorblk1gb/image/upload/v1745302535/allinone.png",
    },
    {
      title: "Payment Categories",
      description:
        "Organize your payment links with categories. Create, share, enable or disable payment links or entire categories with just a few taps.",
      imageUrl:
        "https://github.com/user-attachments/assets/a66a665b-71c9-4dc9-8c6a-7d0674b9032d",
    },
    {
      title: "Multiple Wallets",
      description:
        "Create multiple wallets for different businesses, customers, products or services. Manage everything from one convenient dashboard.",
      imageUrl:
        "https://res.cloudinary.com/dorblk1gb/image/upload/v1745302495/multiwallet.png",
    },
    {
      title: "Pin based Transactions",
      description:
        "Provide your customers with a simple, intuitive payment experience that makes transactions fast and seamless with just a 6 digit pin.",
      imageUrl:
        "https://res.cloudinary.com/dorblk1gb/image/upload/v1745302377/6digitpin.png",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 mb-4">
            <span className="text-indigo-600 font-medium text-sm">
              POWERFUL FEATURES
            </span>
          </div>
          <h2 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Everything you need
          </h2>
          <p className="max-w-2xl mt-6 mx-auto text-xl text-gray-600">
            Discover how our app simplifies crypto management with these
            powerful features
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                imageUrl={feature.imageUrl}
                index={index}
              />
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};
