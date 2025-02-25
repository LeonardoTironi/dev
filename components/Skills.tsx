import { Check } from "lucide-react"

type Skill = {
  name: string
  level: "Basic" | "Intermediate" | "Experienced"
}

type SkillCategory = {
  title: string
  skills: Skill[]
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: "Experienced" },
        { name: "CSS", level: "Experienced" },
        { name: "JavaScript", level: "Experienced" },
        { name: "Nextjs", level: "Intermediate" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "Tailwind", level: "Basic" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Python", level: "Experienced" },
        { name: "Node JS", level: "Basic" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "Git", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" },
        { name: ".NET", level: "Basic" },
      ],
    },
  ]

  return (
    <div className="mx-4 sm:mx-6 lg:mx-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Experience</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-white rounded-3xl p-8 shadow-sm border border-black text-gray-900">
            <h3 className="text-2xl font-semibold text-center mb-8">{category.title}</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-start text-gray-900">
                  <div className="mt-1 bg-black rounded-full p-1">
                    <Check className="w-4 h-4 text-gray-100" />
                  </div>
                  <div className="ml-2">
                    <div className="font-medium">{skill.name}</div>
                    <div className="text-sm text-gray-900">{skill.level}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

