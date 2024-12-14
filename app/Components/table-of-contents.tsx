import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

const sections = [
  "Introduction",
  "Company Profile",
  "SWOT Analysis",
  "Brand Positioning Statement",
  "Target Audience Strategy",
  "Content Strategy",
  "Channel Strategy",
  "Customer Engagement Plan",
  "KPIs and Metrics for Success",
  "Budget and Resource Allocation"
]

export function TableOfContents() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Digital Transformation Strategy</h1>
        <Button variant="outline" className="w-full sm:w-auto">Table of Contents</Button>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Table of Contents</h2>
        <div className="space-y-1">
          {sections.map((section, index) => (
            <div key={section} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <span>{index + 1}.</span>
              <span>{section}</span>
              <ChevronRight className="ml-auto h-4 w-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

