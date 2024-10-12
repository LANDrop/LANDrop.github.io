import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

function Faq() {
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does LANDrop work?</AccordionTrigger>
            <AccordionContent>
              LANDrop uses your local network to transfer files directly between devices, ensuring fast and secure transfers without going through the internet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is LANDrop free to use?</AccordionTrigger>
            <AccordionContent>
              Yes, LANDrop is completely free and open-source software.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do I need an internet connection to use LANDrop?</AccordionTrigger>
            <AccordionContent>
              No, LANDrop works entirely on your local network. You don't need an internet connection to transfer files between devices.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
