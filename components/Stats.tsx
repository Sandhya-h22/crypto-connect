"use client";
import { MotionDiv } from "@/lib/UseClientUIs";

export const Stats = () => {
  return (
    <div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-sky-200 opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-200/30 to-sky-200/30 rounded-full blur-3xl"></div>
        </div>

        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center mb-16"
        >
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            GROWING FAST
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            Trusted by users worldwide
          </p>
          <p className="max-w-xl mt-4 mx-auto text-lg md:text-xl text-gray-600">
            Join thousands of users who are already enjoying the simplicity of
            cryptoconnect
          </p>
        </MotionDiv>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "50+", label: "Active Users", gradient: "from-indigo-600 to-blue-500", shadow: "hover:shadow-indigo-600/100" },
              { value: "$200+", label: "Transactions", gradient: "from-blue-500 to-sky-500", shadow: "hover:shadow-blue-600/100" },
              { value: "99.9%", label: "Uptime", gradient: "from-sky-500 to-teal-500", shadow: "hover:shadow-sky-600/100" },
              { value: "24/7", label: "Support", gradient: "from-teal-500 to-emerald-500", shadow: "hover:shadow-emerald-600/100" }
            ].map((stat, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                viewport={{ once: true }}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl shadow-indigo-100/20 text-center 
                  transform transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-105 hover:bg-white ${stat.shadow}`}
              >
                <div className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
