import { useTranslation } from 'react-i18next'

function Privacy() {
  const { t } = useTranslation()

  return (
    <section id="privacy" className="py-20">
      <div className="container px-4 md:px-0 mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{t('privacyPolicy')}</h2>
        <div className="space-y-4 leading-relaxed text-gray-500 max-w-3xl mx-auto" dangerouslySetInnerHTML={{ __html: t('privacyPolicyDetails') }} />
      </div>
    </section>
  )
}

export default Privacy
