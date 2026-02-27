"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, Award, Briefcase, GraduationCap, Code, Database, Wrench } from "lucide-react"

export function Resume() {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white text-black print:shadow-none shadow-2xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Borse Vaishnavi</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>borsevr13@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>At.Post Yeola, Nashik</span>
          </div>
        </div>
      </div>

      {/* Education */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <GraduationCap className="w-5 h-5" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">B.Tech in Artificial Intelligence and Machine Learning</h3>
                <p className="text-gray-600">Alard College of Engineering and Management, Marunji Pune</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>November 2022 - July 2025</p>
                <p className="font-medium">CGPA: 6.38</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Diploma in Computer Science Engineering</h3>
                <p className="text-gray-600">Maharashtra State Board Of Technical Education, Ahmednagar</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>August 2019 - July 2022</p>
                <p className="font-medium">Percentage: 83.20%</p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">SSC (Secondary School Certificate)</h3>
                <p className="text-gray-600">Janata Vidyalaya, Yeola, Dist-Nashik</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>2018 - 2019</p>
                <p className="font-medium">Percentage: 87.20%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Experience */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Briefcase className="w-5 h-5" />
            Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">Web Developer Intern</h3>
                <p className="text-gray-600">DataStack Technology, Pune</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>Current Position</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Developing enterprise web applications using C#, .NET Framework, and PostgreSQL. Built comprehensive task
              management system for daily operations and worklog management.
            </p>
          </div>

          <Separator />

          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold">PHP Web Developer Intern</h3>
                <p className="text-gray-600">Rbtech Services, Ahmednagar</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>Previous Position</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Developed web applications using PHP, JavaScript, and MySQL. Gained experience in full-stack development
              and database management.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Code className="w-5 h-5" />
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Code className="w-4 h-4" />
              Programming Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "JavaScript", "Java", "C#"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-gray-300">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Libraries/Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {["React", ".NET"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-gray-300">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              Tools / Platforms
            </h4>
            <div className="flex flex-wrap gap-2">
              {["PowerBI", "VS Code", "DBeaver", "Visual Studio"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-gray-300">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Database className="w-4 h-4" />
              Databases
            </h4>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "PostgreSQL"].map((skill) => (
                <Badge key={skill} variant="outline" className="border-gray-300">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Code className="w-5 h-5" />
            Projects / Open-Source
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="mb-2">
              <h3 className="font-semibold">Bank Management System</h3>
              <div className="flex flex-wrap gap-1 mb-2">
                {["PHP", "JavaScript", "XAMPP", "MySQL"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Bank Management System is a website which helps users do all banking related things such as creating
              accounts and performing debit/credit transactions. It includes two modules: user and admin. In the user
              module, users can see account statements, current balance, and account status. In admin module, admin can
              review new requested account details and accept/reject them.
            </p>
          </div>

          <Separator />

          <div>
            <div className="mb-2">
              <h3 className="font-semibold">Task Management System</h3>
              <div className="flex flex-wrap gap-1 mb-2">
                {["C#", "HTML", "CSS", "JavaScript", ".NET Framework", "PostgreSQL"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Task Management System is a web app used by DataStack for their daily tasks, activities, and worklog
              management. It manages multiple stakeholders on same tasks, who can add activities, comments, to-do lists,
              and attachments for sharing updates. It also has worklog features for managing working hours with
              corresponding tasks and daily task status.
            </p>
          </div>

          <Separator />

          <div>
            <div className="mb-2">
              <h3 className="font-semibold">Login Page Template</h3>
              <div className="flex flex-wrap gap-1 mb-2">
                {["JavaScript", "React.js"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Login page Template is a React and JavaScript based UI design with decent animations and user interactive
              features, such as red highlighting of user input fields if they don't correlate with mentioned rules, and
              animated background UI.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Award className="w-5 h-5" />
            Certifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Award className="w-4 h-4 mt-0.5 text-gray-500" />
              <span className="text-sm">Certificate of Ethical Hacking Training Program</span>
            </li>
            <li className="flex items-start gap-2">
              <Award className="w-4 h-4 mt-0.5 text-gray-500" />
              <span className="text-sm">PostgreSQL Developer Guide, Udemy</span>
            </li>
            <li className="flex items-start gap-2">
              <Award className="w-4 h-4 mt-0.5 text-gray-500" />
              <span className="text-sm">.NET Core MVC Complete Guide, Udemy</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
