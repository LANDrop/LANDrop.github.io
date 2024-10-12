import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import UAParser from 'ua-parser-js'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function Downloads() {
  const { t } = useTranslation()
  const [selectedTab, setSelectedTab] = useState('ios');
  const [iosVersion, setIosVersion] = useState('');
  const [androidVersion, setAndroidVersion] = useState('');
  const [desktopVersion, setDesktopVersion] = useState('');

  useEffect(() => {
    fetch('https://releases.landrop.app/versions.json')
      .then(response => response.json())
      .then(data => {
        setIosVersion(data['ios'])
        setAndroidVersion(data['android'])
        setDesktopVersion(data['desktop'])
      })
  }, []);

  useEffect(() => {
    const parser = new UAParser()
    const os = parser.getOS()
    switch (os.name) {
      case 'iOS':
        setSelectedTab('ios')
        break
      case 'Android':
        setSelectedTab('android')
        break
      case 'Mac OS':
        setSelectedTab('macos')
        break
      case 'Windows':
        setSelectedTab('windows')
        break
      default:
        setSelectedTab('linux')
    }
  }, [])

  return (
    <section id="downloads" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">{t('downloadLANDrop')}</h2>
        <div className="inline-block">
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="rounded-b-none">
              <TabsTrigger value="ios">iOS</TabsTrigger>
              <TabsTrigger value="android">{t('androidSlashTV')}</TabsTrigger>
              <TabsTrigger value="macos">macOS</TabsTrigger>
              <TabsTrigger value="windows">Windows</TabsTrigger>
              <TabsTrigger value="linux">Linux</TabsTrigger>
            </TabsList>
            <Card className="shadow-none rounded-t-none border-t-0 p-2 pb-4">
              <TabsContent value="ios" className="flex flex-col items-center justify-center mt-0">
                <div className="text-sm text-gray-500 mb-2">v{iosVersion}</div>
                <a href="https://apps.apple.com/us/app/landrop/id1568444438" target="_blank">
                  <img src={t('appStoreBadgeUrl')} className="h-12" />
                </a>
              </TabsContent>
              <TabsContent value="android" className="flex flex-col items-center justify-center mt-0">
                <div className="text-sm text-gray-500 mb-2">v{androidVersion}</div>
                <a href="https://play.google.com/store/apps/details?id=app.landrop.landrop_flutter" target="_blank" className="mb-1">
                  <img src={t('googlePlayBadgeUrl')} className="h-12" />
                </a>
                <a href="https://releases.landrop.app/landrop-v2-flutter/LANDrop-flutter-latest-android.apk" target="_blank" className="text-gray-500 underline text-xs">{t('downloadAndroidAPK')}</a>
              </TabsContent>
              <TabsContent value="macos" className="flex flex-col items-center justify-center mt-0">
                <div className="text-sm text-gray-500 mb-2">v{desktopVersion}</div>
                <Button onClick={
                  () => window.open(`https://releases.landrop.app/landrop-v2-electron/LANDrop-${desktopVersion}-macos-universal.dmg`, '_blank')
                }>macOS &gt;= 10.15</Button>
              </TabsContent>
              <TabsContent value="windows" className="flex flex-col items-center justify-center mt-0">
                <div className="text-sm text-gray-500 mb-2">v{desktopVersion}</div>
                <Button className="mb-1"onClick={
                  () => window.open(`https://releases.landrop.app/landrop-v2-electron/LANDrop-${desktopVersion}-win-x64-setup.exe`, '_blank')
                }>Windows &gt;= 10</Button>
                <a href="https://releases.landrop.app/landrop-v2-qt/LANDrop-latest-win.zip" target="_blank" className="text-gray-500 underline text-xs">Windows &lt; 10 (2.4.0)</a>
              </TabsContent>
              <TabsContent value="linux" className="flex flex-col items-center justify-center mt-0">
                <div className="text-sm text-gray-500 mb-2">v{desktopVersion}</div>
                <Button className="mb-1"onClick={
                  () => window.open(`https://releases.landrop.app/landrop-v2-electron/LANDrop-${desktopVersion}-linux-x86_64.AppImage`, '_blank')
                }>AppImage (x86_64)</Button>
                <Button variant="outline" className="mb-1"onClick={
                  () => window.open(`https://releases.landrop.app/landrop-v2-electron/LANDrop-${desktopVersion}-linux-arm64.AppImage`, '_blank')
                }>AppImage (aarch64)</Button>
                <Button variant="outline" className="mb-1"onClick={
                  () => window.open(`https://releases.landrop.app/landrop-v2-electron/LANDrop-${desktopVersion}-linux-amd64.deb`, '_blank')
                }>DEB (x86_64)</Button>
                <Button variant="outline" className="mb-1"onClick={
                  () => window.open(`https://releases.landrop.app/landrop-v2-electron/LANDrop-${desktopVersion}-linux-arm64.deb`, '_blank')
                }>DEB (aarch64)</Button>
              </TabsContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default Downloads
