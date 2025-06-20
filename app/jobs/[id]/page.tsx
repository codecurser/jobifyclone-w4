import { notFound } from "next/navigation"
import { MapPin, DollarSign, Clock, Share2, Heart, Flag } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { jobs } from "@/lib/data"

interface JobDetailPageProps {
  params: {
    id: string
  }
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = jobs.find((j) => j.id === params.id)

  if (!job) {
    notFound()
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "1 day ago"
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    return `${Math.ceil(diffDays / 30)} months ago`
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Job Header */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-2xl">{job.companyLogo}</span>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                    <div className="flex items-center space-x-4 text-gray-600">
                      <Link
                        href={`/companies/${job.company.toLowerCase().replace(/\s+/g, "-")}`}
                        className="hover:text-blue-600 font-medium"
                      >
                        {job.company}
                      </Link>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{getTimeAgo(job.postedDate)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Heart className="w-4 h-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Flag className="w-4 h-4 mr-2" />
                    Report
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-lg">{job.salary}</span>
                </div>
                <Badge variant="outline">{job.type}</Badge>
                <Badge variant="outline">{job.experience}</Badge>
                {job.featured && <Badge variant="secondary">Featured</Badge>}
                {job.urgent && <Badge variant="destructive">Urgent</Badge>}
                {job.remote && <Badge variant="outline">Remote</Badge>}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {job.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="px-8">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Easy Apply
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Job Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Job Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>Benefits & Perks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {job.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Apply for this job</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" size="lg">
                    Apply Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Easy Apply
                  </Button>
                  <Separator />
                  <div className="text-sm text-gray-600">
                    <p className="mb-2">Application deadline:</p>
                    <p className="font-medium">No deadline specified</p>
                  </div>
                </CardContent>
              </Card>

              {/* Company Info */}
              <Card>
                <CardHeader>
                  <CardTitle>About {job.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">{job.companyLogo}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{job.company}</h3>
                      <p className="text-sm text-gray-600">Technology Company</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    Leading technology company focused on innovative solutions for modern businesses.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/companies/${job.company.toLowerCase().replace(/\s+/g, "-")}`}>
                      View Company Profile
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Similar Jobs */}
              <Card>
                <CardHeader>
                  <CardTitle>Similar Jobs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {jobs
                      .filter((j) => j.id !== job.id)
                      .slice(0, 3)
                      .map((similarJob) => (
                        <div key={similarJob.id} className="border-b pb-4 last:border-b-0">
                          <Link href={`/jobs/${similarJob.id}`} className="block hover:bg-gray-50 p-2 rounded -m-2">
                            <h4 className="font-medium text-sm mb-1">{similarJob.title}</h4>
                            <p className="text-xs text-gray-600 mb-2">{similarJob.company}</p>
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <span>{similarJob.location}</span>
                              <span>{getTimeAgo(similarJob.postedDate)}</span>
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
