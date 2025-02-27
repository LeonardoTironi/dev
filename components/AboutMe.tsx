import Image from "next/image"
import { Github, Linkedin } from "lucide-react"

export default function AboutMe() {
  return (
    <div className="px-5">
      <div className="px-4 py-5 sm:px-6 flex justify-center">
        <h3 className="text-4xl leading-6 font-medium text-gray-900">About Me</h3>
      </div>
      <div className="border-t border-gray-200">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
              <Image
                src="/imgs/eu2.jpg"
                alt="About Me"
                width={300}
                height={300}
                className="rounded-lg shadow-md"
              />
              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href="https://github.com/LeonardoTironi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 flex items-center"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/leonardotironi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 flex items-center"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg border border-black">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Experience</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>3D Printing Technician (2024)</li>
                    <li>Robotics Member (2019 - 2022)</li>
                    <li>Research Fellow (2019-2020)</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-black">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">Education</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Bachelor’s in Systems Analysis and Development</li>
                    <li>Technical High School in IT</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 rounded-lg border border-black">
                <h4 className="text-lg font-semibold mb-2 text-gray-900">History</h4>
                <p className="text-gray-800">
                Hello, World! I began my journey in the tech field in 2016 when I first learned about robotics. After that,
                I enrolled in a Technical High School in IT at IFPR. Now, I’m pursuing a degree in
                Systems Analysis and Development, expanding my knowledge every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

