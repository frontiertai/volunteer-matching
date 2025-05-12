import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building, Calendar, MapPin, Plus, Users, User, ChevronRight, FileText } from "lucide-react"
import Link from "next/link"

export default function MyPage() {
  // 団体情報（実際のアプリではAPIから取得）
  const organization = {
    name: "NPO法人 子ども未来サポート",
    description:
      "子どもたちの教育支援と健全な成長をサポートする非営利団体です。学習支援、自然体験活動、国際交流など様々なプログラムを提供しています。",
    address: "東京都新宿区西新宿2-8-1",
    email: "info@kodomo-mirai.org",
    phone: "03-1234-5678",
    website: "https://www.kodomo-mirai.org",
    foundedYear: "2010年",
    members: 25,
    activeVolunteers: 120,
  }

  // 現在募集中のボランティア（実際のアプリではAPIから取得）
  const activeEvents = [
    {
      id: "1",
      title: "冬休み子ども学習支援ボランティア",
      date: "2023/12/25 - 2023/12/28",
      location: "東京都新宿区コミュニティセンター",
      participants: 8,
      maxParticipants: 15,
      status: "募集中",
    },
    {
      id: "2",
      title: "児童館でのクリスマスイベントスタッフ",
      date: "2023/12/23",
      location: "東京都渋谷区児童館",
      participants: 12,
      maxParticipants: 12,
      status: "募集締切",
    },
    {
      id: "3",
      title: "子ども向けプログラミング教室アシスタント",
      date: "2024/01/14 - 2024/01/15",
      location: "オンライン",
      participants: 3,
      maxParticipants: 10,
      status: "募集中",
    },
  ]

  // 過去のボランティア募集（実際のアプリではAPIから取得）
  const pastEvents = [
    {
      id: "4",
      title: "夏休み自然体験キャンプボランティア",
      date: "2023/08/10 - 2023/08/12",
      location: "山梨県富士河口湖町",
      participants: 20,
      maxParticipants: 20,
      status: "終了",
    },
    {
      id: "5",
      title: "子ども食堂ボランティアスタッフ",
      date: "2023/09/23",
      location: "東京都新宿区コミュニティキッチン",
      participants: 8,
      maxParticipants: 10,
      status: "終了",
    },
    {
      id: "6",
      title: "放課後学習支援ボランティア",
      date: "2023/10/01 - 2023/10/31",
      location: "東京都新宿区立小学校",
      participants: 15,
      maxParticipants: 15,
      status: "終了",
    },
  ]

  return (
    <main className="flex-1 container">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">マイページ</h1>
          <p className="text-muted-foreground">団体情報と募集中のボランティア活動を管理します</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Link href="/dashboard/events/create">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              新規ボランティア募集
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>団体情報</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64" alt={organization.name} />
                <AvatarFallback>
                  <Building className="h-8 w-8" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{organization.name}</h3>
                <p className="text-sm text-muted-foreground">設立: {organization.foundedYear}</p>
              </div>
            </div>

            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">所在地</p>
                  <p className="text-sm text-muted-foreground">{organization.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <User className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">メンバー数</p>
                  <p className="text-sm text-muted-foreground">{organization.members}名</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Users className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">活動ボランティア</p>
                  <p className="text-sm text-muted-foreground">{organization.activeVolunteers}名</p>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm">{organization.description}</p>
            </div>

            <div className="mt-4 pt-4 border-t">
              <Link href="/dashboard/mypage/edit">
                <Button variant="outline" className="w-full">
                  団体情報を編集
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="active">募集中のボランティア</TabsTrigger>
              <TabsTrigger value="past">過去の募集</TabsTrigger>
              <TabsTrigger value="stats">活動統計</TabsTrigger>
            </TabsList>

            <TabsContent value="active">
              <div className="grid gap-4">
                {activeEvents.map((event) => (
                  <Card key={event.id} className="transition-all duration-300 hover:shadow-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{event.title}</h3>
                            <Badge
                              className={
                                event.status === "募集中"
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                  : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                              }
                            >
                              {event.status}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              {event.date}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-3.5 w-3.5 mr-1" />
                              {event.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-3.5 w-3.5 mr-1" />
                              {event.participants}/{event.maxParticipants}名
                            </div>
                          </div>
                        </div>
                        <div className="flex mt-4 sm:mt-0 gap-2">
                          <Link href={`/dashboard/events/${event.id}/applicants`}>
                            <Button variant="outline" size="sm">
                              応募者一覧
                            </Button>
                          </Link>
                          <Link href={`/dashboard/events/${event.id}`}>
                            <Button variant="ghost" size="sm" className="flex items-center">
                              詳細
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="past">
              <div className="grid gap-4">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="transition-all duration-300 hover:shadow-md">
                    <CardContent className="p-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{event.title}</h3>
                            <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{event.status}</Badge>
                          </div>
                          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              {event.date}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-3.5 w-3.5 mr-1" />
                              {event.location}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-3.5 w-3.5 mr-1" />
                              {event.participants}/{event.maxParticipants}名
                            </div>
                          </div>
                        </div>
                        <div className="flex mt-4 sm:mt-0 gap-2">
                          <Link href={`/dashboard/events/${event.id}/report`}>
                            <Button variant="outline" size="sm">
                              活動レポート
                            </Button>
                          </Link>
                          <Link href={`/dashboard/events/${event.id}`}>
                            <Button variant="ghost" size="sm" className="flex items-center">
                              詳細
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stats">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">42</div>
                      <p className="text-sm text-muted-foreground">募集イベント数</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">256</div>
                      <p className="text-sm text-muted-foreground">参加ボランティア数</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold">1,280</div>
                      <p className="text-sm text-muted-foreground">総活動時間</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>活動レポート</CardTitle>
                  <CardDescription>過去の活動レポートと統計情報</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>2023年度第3四半期活動レポート</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        ダウンロード
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>2023年度第2四半期活動レポート</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        ダウンロード
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>2023年度第1四半期活動レポート</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        ダウンロード
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        <span>2022年度年間活動レポート</span>
                      </div>
                      <Button variant="ghost" size="sm">
                        ダウンロード
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
