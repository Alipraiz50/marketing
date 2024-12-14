import { Button } from "@/components/ui/button"
import { Wand2 } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"

export function AISidebar() {
  return (
    <div className="w-full lg:w-80 p-4 sm:p-6 space-y-6 bg-gray-50 border-t lg:border-t-0 lg:border-l">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Wand2 className="h-5 w-5" />
          <span className="font-semibold">Optimize with AI</span>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">Welcome</h3>
          <p className="text-sm mt-2">
            Here is a sample outline based on your project description.
          </p>
          <p className="text-sm mt-2">
            Answer some questions to customise your plan
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Who is your primary target audience?</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="small-businesses" />
              <label htmlFor="small-businesses" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Small businesses</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="mid-sized-companies" defaultChecked />
              <label htmlFor="mid-sized-companies" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Mid-sized companies</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="enterprise-level-businesses" defaultChecked />
              <label htmlFor="enterprise-level-businesses" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Enterprise-level businesses</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="individual-consumers" />
              <label htmlFor="individual-consumers" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Individual consumers</label>
            </div>
          </div>
        </div>

        <Button className="w-full">Next question</Button>

        <div>
          <h3 className="text-sm font-semibold text-blue-600">Target Audience Strategy</h3>
          <p className="text-sm mt-2">
            Summary: Your target audience includes Enterprise-level businesses and Small businesses. Based on your input, we recommend focusing marketing efforts on decision-makers in these companies.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-blue-600">Revenue Growth Strategy</h3>
          <p className="text-sm mt-2">
            Summary: You aim to increase revenue by 20% within the next year, with a focus on email marketing and social media campaigns.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-blue-600">Content Strategy</h3>
          <p className="text-sm mt-2">
            Summary: Your content will primarily focus on Case Studies, Whitepapers, and Blog posts. These content types should be used to showcase success stories, thought leadership, and valuable insights to attract and retain your audience.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="flex-1">Cancel</Button>
          <Button className="flex-1">Apply to doc</Button>
        </div>
      </div>
    </div>
  )
}

