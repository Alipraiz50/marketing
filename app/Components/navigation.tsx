import { ChevronLeft, ChevronRight, Share2, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <div className="w-full lg:w-12 border-b lg:border-r bg-background flex lg:flex-col items-center justify-between lg:justify-start p-2 lg:py-4 lg:gap-4">
      <div className="w-8 h-8 bg-primary rounded-sm" />
      <div className="flex lg:flex-col gap-2">
        <Button variant="ghost" size="icon">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex lg:flex-col gap-2 lg:mt-auto">
        <Button variant="ghost" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

