import { Navigation } from "@/app/Components/navigation"
import { TableOfContents } from "@/app/Components/table-of-contents"
import { ContentArea } from "@/app/Components/content-area"
import { AISidebar } from "@/app/Components/ai-sidebar"

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Navigation />
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 border-r overflow-y-auto">
          <div className="p-4 sm:p-6 max-w-3xl mx-auto">
            <TableOfContents />
            <ContentArea />
          </div>
        </div>
        <AISidebar />
      </div>
    </div>
  )
}

