'use client'

import { Card } from "@/components/ui/card"
import { PieChart } from "./pie-chart"

export function ContentArea() {
  return (
    <div className="mt-8 space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-4">2: Company Profile</h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Established in 1995, now a leading financial institution with assets totaling $10 billion. Specializing in serving public sector enterprises across the UAE.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Core Services</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>• Loan Origination: Current loan portfolio of $6 billion.</li>
            <li>• Transaction Processing: Managing over 500,000 transactions annually.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Mission & Vision:</h3>
          <Card className="p-4 space-y-2 bg-blue-50/50 dark:bg-blue-950/50 text-sm sm:text-base">
            <p>• Mission: Empower public sector growth through innovative financial solutions.</p>
            <p>• Vision: Be the preferred banking partner for the UAE public sector through digital innovation.</p>
          </Card>
        </div>
      </div>

      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-4">Revenue Distribution by Service</h3>
        <Card className="p-4">
          <div className="text-xs sm:text-sm text-muted-foreground mb-2">January - June 2023</div>
          <div className="h-[300px] sm:h-[400px]">
            <PieChart />
          </div>
        </Card>
      </div>
    </div>
  )
}

