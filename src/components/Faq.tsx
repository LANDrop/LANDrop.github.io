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
            <AccordionTrigger>I can't find other devices. What should I do?</AccordionTrigger>
            <AccordionContent>
              Ensure that all your devices have the latest version of LANDrop and are connected to the same Wi-Fi network. LANDrop uses UDP multicast and broadcast to discover devices. If other devices aren't showing up, your router may not support these protocols. Try connecting your devices to a phone's hotspot to check. If that works, it's likely your router is the issue.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>My Windows computer can't receive files from my phone. What should I do?</AccordionTrigger>
            <AccordionContent>
              This is a known issue on Windows. You can resolve it by clicking the "Fix Firewall" button in the app’s settings.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>LANDrop is slow. How can I fix it?</AccordionTrigger>
            <AccordionContent>
              LANDrop needs a stable Wi-Fi connection for optimal performance. If your signal is strong, it should fully utilize your available bandwidth. For better speed, newer Wi-Fi standards like Wi-Fi 6, Wi-Fi 6E, or Wi-Fi 7 are recommended.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Can LANDrop transfer files between devices on different networks?</AccordionTrigger>
            <AccordionContent>
              Yes, if the devices can connect via IP address (using methods like port forwarding). You can use the "Add via IP and Port" feature for file transfers. We're also working on a feature to transfer files between devices on different networks without requiring port forwarding.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Does LANDrop upload my files to the cloud?</AccordionTrigger>
            <AccordionContent>
              No, LANDrop transfers files directly between devices, peer-to-peer, without using the cloud.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Does LANDrop use my data plan?</AccordionTrigger>
            <AccordionContent>
              No, unless you're sharing files to a nearby device while not connected to Wi-Fi.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Does LANDrop compress my photos and videos?</AccordionTrigger>
            <AccordionContent>
              No, LANDrop transfers files without compression.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>I have more questions. How can I contact you?</AccordionTrigger>
            <AccordionContent>
              Join our <a href="https://discord.gg/5adm6sPugT" target="_blank" rel="noreferrer" className="underline">Discord server</a>, and we'd be happy to assist you.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
