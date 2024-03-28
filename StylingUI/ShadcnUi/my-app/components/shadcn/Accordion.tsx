import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const Shadcn_Accordion = () => (
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Accordion? (click)</AccordionTrigger>
      <AccordionContent>
        Yes. Drop down style
      </AccordionContent>
    </AccordionItem>
  </Accordion>
)


