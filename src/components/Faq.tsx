import { useTranslation } from 'react-i18next'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

function Faq() {
  const { t } = useTranslation()
  const faqs = [
    {
      question: t('cantFindOtherDevices'),
      answer: t('cantFindOtherDevicesAnswer'),
    },
    {
      question: t('cantReceiveFiles'),
      answer: t('cantReceiveFilesAnswer'),
    },
    {
      question: t('landropIsSlow'),
      answer: t('landropIsSlowAnswer'),
    },
    {
      question: t('transferBetweenNetworks'),
      answer: t('transferBetweenNetworksAnswer'),
    },
    {
      question: t('doesLANDropUploadToCloud'),
      answer: t('doesLANDropUploadToCloudAnswer'),
    },
    {
      question: t('doesLANDropUseData'),
      answer: t('doesLANDropUseDataAnswer'),
    },
    {
      question: t('doesLANDropCompress'),
      answer: t('doesLANDropCompressAnswer'),
    },
    {
      question: t('moreQuestions'),
      answer: t('moreQuestionsAnswer'),
    },
  ]

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('frequentlyAskedQuestions')}</h2>
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
