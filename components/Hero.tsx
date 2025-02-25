import Image from "next/image"

export default function Hero() {
    return (
      <section className="min-h-screen flex items-center pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <Image src="/imgs/eu.jpg" alt="Your Name" width={300} height={300} className="rounded-full shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h1 className="text-4xl text-gray-900 md:text-6xl font-bold mb-4">Leonardo Tironi</h1>
            <p className="text-xl md:text-2xl text-gray-800">
                {`Hello! I'm a Junior Full Stack Developer, driven by curiosity and a passion for creating efficient and innovative solutions`}
            </p>
          </div>
        </div>
      </section>
    )
  }
  
