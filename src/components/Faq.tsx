import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

function Faq() {
  const faqs = [
    {
      question: 'I can\'t find other devices. What should I do?',
      answer: 'Ensure that all your devices have the latest version of LANDrop and are connected to the same Wi-Fi network. LANDrop uses UDP multicast and broadcast to discover devices. If other devices aren\'t showing up, your router may not support these protocols. Try connecting your devices to a phone\'s hotspot to check. If that works, it\'s likely your router is the issue.',
    },
    {
      question: 'My Windows computer can\'t receive files from my phone. What should I do?',
      answer: 'This is a known issue on Windows. You can resolve it by clicking the "Fix Firewall" button in the app\'s settings.',
    },
    {
      question: 'LANDrop is slow. How can I fix it?',
      answer: 'LANDrop needs a stable Wi-Fi connection for optimal performance. If your signal is strong, it should fully utilize your available bandwidth. For better speed, newer Wi-Fi standards like Wi-Fi 6, Wi-Fi 6E, or Wi-Fi 7 are recommended.',
    },
    {
      question: 'Can LANDrop transfer files between devices on different networks?',
      answer: 'Yes, if the devices can connect via IP address (using methods like port forwarding). You can use the "Add via IP and Port" feature for file transfers. We\'re also working on a feature to transfer files between devices on different networks without requiring port forwarding.',
    },
    {
      question: 'Does LANDrop upload my files to the cloud?',
      answer: 'No, LANDrop transfers files directly between devices, peer-to-peer, without using the cloud.',
    },
    {
      question: 'Does LANDrop use my data plan?',
      answer: 'No, unless you\'re sharing files to a nearby device while not connected to Wi-Fi.',
    },
    {
      question: 'Does LANDrop compress my photos and videos?',
      answer: 'No, LANDrop transfers files without compression.',
    },
    {
      question: 'I have more questions. How can I contact you?',
      answer: 'Join our <a href="https://discord.gg/5adm6sPugT" target="_blank" rel="noreferrer" class="underline">Discord server</a>, and we\'d be happy to assist you.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="max-w-3xl mx-4 md:mx-auto">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger><div className="text-left">{faq.question}</div></AccordionTrigger>
              <AccordionContent>
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
