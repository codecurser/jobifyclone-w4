"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { SlidersHorizontal, Briefcase } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SearchForm } from "@/components/search-form"
import { JobCard } from "@/components/job-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { jobs, type Job } from "@/lib/data"

export default function JobsPage() {
  const searchParams = useSearchParams()
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs)
  const [filters, setFilters] = useState({
    jobType: [] as string[],
    experience: [] as string[],
    salary: "",
    location: "",
    remote: false,
  })

  const query = searchParams.get("q") || ""
  const location = searchParams.get("location") || ""
  const category = searchParams.get("category") || ""

  useEffect(() => {
    let filtered = jobs

    // Search by query
    if (query) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(query.toLowerCase()) ||
          job.company.toLowerCase().includes(query.toLowerCase()) ||
          job.skills.some((skill) => skill.toLowerCase().includes(query.toLowerCase())),
      )
    }

    // Filter by location
    if (location) {
      filtered = filtered.filter((job) => job.location.toLowerCase().includes(location.toLowerCase()))
    }

    // Filter by category (this would need more sophisticated mapping in real app)
    if (category) {
      filtered = filtered.filter((job) =>
        job.skills.some((skill) => skill.toLowerCase().includes(category.toLowerCase())),
      )
    }

    // Apply other filters
    if (filters.jobType.length > 0) {
      filtered = filtered.filter((job) => filters.jobType.includes(job.type))
    }

    if (filters.experience.length > 0) {
      filtered = filtered.filter((job) => filters.experience.includes(job.experience))
    }

    if (filters.remote) {
      filtered = filtered.filter((job) => job.remote)
    }

    setFilteredJobs(filtered)
  }, [query, location, category, filters])

  const handleFilterChange = (type: string, value: string, checked: boolean) => {
    setFilters((prev) => ({
      ...prev,
      [type]: checked
        ? [...(prev[type as keyof typeof prev] as string[]), value]
        : (prev[type as keyof typeof prev] as string[]).filter((item) => item !== value),
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <SearchForm />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Job Type */}
                <div>
                  <h3 className="font-semibold mb-3">Job Type</h3>
                  <div className="space-y-2">
                    {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={type}
                          checked={filters.jobType.includes(type)}
                          onCheckedChange={(checked) => handleFilterChange("jobType", type, checked as boolean)}
                        />
                        <Label htmlFor={type}>{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Experience Level */}
                <div>
                  <h3 className="font-semibold mb-3">Experience Level</h3>
                  <div className="space-y-2">
                    {["Entry", "Mid", "Senior", "Executive"].map((level) => (
                      <div key={level} className="flex items-center space-x-2">
                        <Checkbox
                          id={level}
                          checked={filters.experience.includes(level)}
                          onCheckedChange={(checked) => handleFilterChange("experience", level, checked as boolean)}
                        />
                        <Label htmlFor={level}>{level}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Remote Work */}
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remote"
                      checked={filters.remote}
                      onCheckedChange={(checked) => setFilters((prev) => ({ ...prev, remote: checked as boolean }))}
                    />
                    <Label htmlFor="remote">Remote Work Only</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job Results */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{query ? `Jobs for "${query}"` : "All Jobs"}</h1>
                <p className="text-gray-600">{filteredJobs.length} jobs found</p>
              </div>
              <Select defaultValue="newest">
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="salary-high">Salary: High to Low</SelectItem>
                  <SelectItem value="salary-low">Salary: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Active Filters */}
            {(query || location || filters.jobType.length > 0 || filters.experience.length > 0 || filters.remote) && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {query && <Badge variant="secondary">Query: {query}</Badge>}
                  {location && <Badge variant="secondary">Location: {location}</Badge>}
                  {filters.jobType.map((type) => (
                    <Badge key={type} variant="secondary">
                      {type}
                    </Badge>
                  ))}
                  {filters.experience.map((level) => (
                    <Badge key={level} variant="secondary">
                      {level}
                    </Badge>
                  ))}
                  {filters.remote && <Badge variant="secondary">Remote</Badge>}
                </div>
              </div>
            )}

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
              ) : (
                <Card className="p-12 text-center">
                  <div className="text-gray-400 mb-4">
                    <Briefcase className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                  <Button variant="outline">Clear Filters</Button>
                </Card>
              )}
            </div>

            {/* Load More */}
            {filteredJobs.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Jobs
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
