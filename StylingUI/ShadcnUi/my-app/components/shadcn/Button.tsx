import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Mail } from "lucide-react"
import { Loader2 } from "lucide-react"

export const Shadcn_Button = () => (

  <div className="flex flex-wrap gap-10">
    <p>Buttons:</p>
    <Button variant="outline">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
    <Button variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </Button>
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
    <Button asChild>
      <Link href="">Login</Link>
    </Button>
  </div>


)