import { MapPin, DollarSign, Clock, Heart } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { Job } from "@/lib/data"

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
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
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">{job.companyLogo}</span>
            </div>
            <div>
              <CardTitle className="text-lg">
                <Link href={`/jobs/${job.id}`} className="hover:text-blue-600">
                  {job.title}
                </Link>
              </CardTitle>
              <CardDescription>
                <Link
                  href={`/companies/${job.company.toLowerCase().replace(/\s+/g, "-")}`}
                  className="hover:text-blue-600"
                >
                  {job.company}
                </Link>
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {job.featured && <Badge variant="secondary">Featured</Badge>}
            {job.urgent && <Badge variant="destructive">Urgent</Badge>}
            {job.remote && <Badge variant="outline">Remote</Badge>}
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <DollarSign className="w-4 h-4" />
            <span>{job.salary}</span>
          </div>
          <Badge variant="outline">{job.type}</Badge>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
          {job.skills.length > 3 && <Badge variant="outline">+{job.skills.length - 3} more</Badge>}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{getTimeAgo(job.postedDate)}</span>
          </div>
          <Button size="sm" asChild>
            <Link href={`/jobs/${job.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
