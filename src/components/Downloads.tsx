import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function Downloads() {
  return (
    <section id="downloads" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Download LANDrop</h2>
        <div className="inline-block">
          <Tabs defaultValue="ios">
            <TabsList className="rounded-b-none">
              <TabsTrigger value="ios">iOS</TabsTrigger>
              <TabsTrigger value="android">Android (TV)</TabsTrigger>
              <TabsTrigger value="macos">macOS</TabsTrigger>
              <TabsTrigger value="windows">Windows</TabsTrigger>
              <TabsTrigger value="linux">Linux</TabsTrigger>
            </TabsList>
            <Card className="shadow-none rounded-t-none border-t-0 p-2 pb-4">
              <TabsContent value="ios" className="flex flex-col items-center justify-center mt-0">
                <div className="text-sm text-gray-500 mb-2">Version</div>
                <a href="https://apps.apple.com/us/app/landrop/id1568444438" target="_blank">
                  <img src="/assets/img/app-store-badge.svg" className="h-12" />
                </a>
              </TabsContent>
              <TabsContent value="android" className="flex flex-col items-center justify-center mt-0">
                <div className="text-sm text-gray-500 mb-2">Version</div>
                <a href="https://play.google.com/store/apps/details?id=app.landrop.landrop_flutter" target="_blank" className="mb-1">
                  <img src="/assets/img/google-play-badge.svg" className="h-12" />
                </a>
                <a href="https://releases.landrop.app/landrop-v2-flutter/LANDrop-flutter-latest-android.apk" target="_blank" className="text-gray-500 underline text-xs">Download Android APK (TV Supported)</a>
              </TabsContent>
              <TabsContent value="macos" className="flex flex-col items-center justify-center mt-0">
                <div className="text-sm text-gray-500 mb-2">Version</div>
                <Button>macOS &gt;= 10.15</Button>
              </TabsContent>
              <TabsContent value="windows" className="flex flex-col items-center justify-center mt-0">
                <div className="text-sm text-gray-500 mb-2">Version</div>
                <Button className="mb-1">Windows &gt;= 10</Button>
                <a href="https://releases.landrop.app/landrop-v2-qt/LANDrop-latest-win.zip" target="_blank" className="text-gray-500 underline text-xs">Windows &lt; 10 (2.4.0)</a>
              </TabsContent>
              <TabsContent value="linux" className="flex flex-col items-center justify-center mt-0">
                <div className="text-sm text-gray-500 mb-2">Version</div>
                <Button className="mb-1">AppImage (x86_64)</Button>
                <Button variant="outline" className="mb-1">AppImage (aarch64)</Button>
                <Button variant="outline" className="mb-1">DEB (x86_64)</Button>
                <Button variant="outline" className="mb-1">DEB (aarch64)</Button>
              </TabsContent>
            </Card>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default Downloads
