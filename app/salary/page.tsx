import { DollarSign, TrendingUp, MapPin, Briefcase } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function SalaryPage() {
  const salaryData = [
    { title: "Software Engineer", location: "San Francisco, CA", salary: "$120,000 - $180,000", growth: "+8%" },
    { title: "Product Manager", location: "New York, NY", salary: "$110,000 - $160,000", growth: "+12%" },
    { title: "UX Designer", location: "Seattle, WA", salary: "$90,000 - $130,000", growth: "+6%" },
    { title: "Data Scientist", location: "Austin, TX", salary: "$100,000 - $150,000", growth: "+15%" },
    { title: "DevOps Engineer", location: "Remote", salary: "$95,000 - $140,000", growth: "+10%" },
    { title: "Marketing Manager", location: "Los Angeles, CA", salary: "$80,000 - $120,000", growth: "+5%" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Salary Guide</h1>
          <p className="text-xl text-gray-600 mb-8">Discover competitive salary ranges for your role and location</p>

          {/* Salary Search */}
          <Card className="max-w-4xl mx-auto p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Input placeholder="Job title (e.g., Software Engineer)" />
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sf">San Francisco, CA</SelectItem>
                    <SelectItem value="ny">New York, NY</SelectItem>
                    <SelectItem value="seattle">Seattle, WA</SelectItem>
                    <SelectItem value="austin">Austin, TX</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="lg">Get Salary Data</Button>
            </div>
          </Card>
        </div>

        {/* Salary Insights */}
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Salary</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$125,000</div>
              <p className="text-xs text-muted-foreground">Across all tech roles</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Salary Growth</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+9.2%</div>
              <p className="text-xs text-muted-foreground">Year over year</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Top Paying City</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">SF</div>
              <p className="text-xs text-muted-foreground">San Francisco, CA</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hot Skills</CardTitle>
              <Briefcase className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">AI/ML</div>
              <p className="text-xs text-muted-foreground">Highest demand</p>
            </CardContent>
          </Card>
        </div>

        {/* Salary Data Table */}
        <Card>
          <CardHeader>
            <CardTitle>Popular Job Salaries</CardTitle>
            <CardDescription>Current salary ranges for in-demand positions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {salaryData.map((job, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{job.title}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{job.salary}</div>
                    <Badge variant="outline" className="mt-1">
                      {job.growth} growth
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-16 py-12 bg-blue-50 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Negotiate Your Salary?</h2>
          <p className="text-gray-600 mb-8">Get personalized salary insights and negotiation tips</p>
          <div className="space-x-4">
            <Button size="lg">Get Salary Report</Button>
            <Button variant="outline" size="lg">
              Learn Negotiation Tips
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
