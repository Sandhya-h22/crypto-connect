import { MotionDiv } from "@/lib/UseClientUIs";
import { FeatureCard } from "./FeaturesCard";

export const AppFeatures = () => {
  const features = [
    {
      title: "Easy Google Sign In",
      description:
        "Sign up with Google account and start sending and receiving crypto in no time. Your private key is encrypted with your transaction PIN and stored securely.",
      img: "C:/Users/admin/Desktop/project/crypto-connect/.next/cache/images/afRwtPeuzh-6uFcJtK-JjC3XVLT7V7z0E6SogRZigAE=/2592000.1746174694026.dfTeGCWbFtJfRuQaE7L5qc3mn2Ft8k7wPyclXM0Fn5g=.webp",
    },
    {
      title: "All-in-One Crypto Solution",
      description:
        "Send crypto to any address, receive crypto payments by generating payment links, and create multiple wallets - all within one beautiful app.",
      img: "https://media.assettype.com/analyticsinsight%2F2024-10-24%2Fyxj09rfk%2FPlus-Wallet-1.png?w=480&auto=format%2Ccompress&fit=max",
    },
    {
      title: "Payment Categories",
      description:
        "Organize your payment links with categories. Create, share, enable or disable payment links or entire categories with just a few taps.",
      img: "C:/Users/admin/Desktop/project/crypto-connect/.next/cache/images/afRwtPeuzh-6uFcJtK-JjC3XVLT7V7z0E6SogRZigAE=/2592000.1746174694026.dfTeGCWbFtJfRuQaE7L5qc3mn2Ft8k7wPyclXM0Fn5g=.webp",
    },
    {
      title: "Multiple Wallets",
      description:
        "Create multiple wallets for different businesses, customers, products or services. Manage everything from one convenient dashboard.",
      img: "/assets/features/multiple-wallets.png",
    },
    {
      title: "Slim & Clean Payment Page",
      description:
        "Provide your customers with a sleek, intuitive payment experience that makes transactions fast and seamless.",
      img: ".next/cache/images/jqMX-cwcDiIJEzuNX4GhPcLbkn3c6AUhuNjmqS90G-g=/2592000.1746174695050.oejv5n+sitPRrgRIqLVK5ovLf104YXKAFP9mArP6k28=.webp",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* ... rest of your component remains the same ... */}
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
              img={feature.img}
              index={index}
            />
          </MotionDiv>
        ))}
      </div>
    </section>
  );
};
