import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Download, Edit, Filter, MapPin, Plus, Search, Trash, Users } from "lucide-react"
import Link from "next/link"

// イベントデータのモック（実際のアプリではAPIから取得）
const events = [
  {
    id: "1",
    title: "冬休み子ども学習支援ボランティア",
    date: "2023/12/25 - 2023/12/28",
    time: "10:00 - 16:00",
    location: "東京都新宿区コミュニティセンター",
    category: "教育支援",
    participants: 8,
    maxParticipants: 15,
    status: "募集中",
    applicants: 12,
    organizer: "NPO法人 子ども未来サポート",
  },
  {
    id: "2",
    title: "児童館でのクリスマスイベントスタッフ",
    date: "2023/12/23",
    time: "9:00 - 17:00",
    location: "東京都渋谷区児童館",
    category: "イベント運営",
    participants: 12,
    maxParticipants: 12,
    status: "募集締切",
    applicants: 15,
    organizer: "NPO法人 子ども未来サポート",
  },
  {
    id: "3",
    title: "子ども向けプログラミング教室アシスタント",
    date: "2024/01/14 - 2024/01/15",
    time: "13:00 - 17:00",
    location: "オンライン",
    category: "教育支援",
    participants: 3,
    maxParticipants: 10,
    status: "募集中",
    applicants: 5,
    organizer: "NPO法人 子ども未来サポート",
  },
  {
    id: "4",
    title: "海岸清掃プロジェクト",
    date: "2023/09/23 - 2023/09/24",
    time: "9:00 - 15:00",
    location: "神奈川県湘南海岸",
    category: "環境保全",
    participants: 20,
    maxParticipants: 20,
    status: "終了",
    applicants: 25,
    organizer: "NPO法人 子ども未来サポート",
  },
  {
    id: "5",
    title: "高齢者サポート",
    date: "2023/11/05 - 2024/03/31",
    time: "14:00 - 17:00",
    location: "東京都新宿区シニアセンター",
    category: "高齢者支援",
    participants: 5,
    maxParticipants: 8,
    status: "開催中",
    applicants: 7,
    organizer: "NPO法人 子ども未来サポート",
  },
  {
    id: "6",
    title: "子ども食堂ボランティアスタッフ",
    date: "2023/09/23",
    time: "16:00 - 20:00",
    location: "東京都新宿区コミュニティキッチン",
    category: "子ども支援",
    participants: 8,
    maxParticipants: 10,
    status: "終了",
    applicants: 12,
    organizer: "NPO法人 子ども未来サポート",
  },
  {
    id: "7",
    title: "放課後学習支援ボランティア",
    date: "2023/10/01 - 2023/10/31",
    time: "15:00 - 18:00",
    location: "東京都新宿区立小学校",
    category: "教育支援",
    participants: 15,
    maxParticipants: 15,
    status: "終了",
    applicants: 18,
    organizer: "NPO法人 子ども未来サポート",
  },
]

export default function EventsPage() {
  // 各ステータスのイベント数をカウント
  const recruitingCount = events.filter((event) => event.status === "募集中").length
  const ongoingCount = events.filter((event) => event.status === "開催中").length
  const completedCount = events.filter((event) => event.status === "終了").length

  return (
    <main className="flex-1 container">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">イベント管理</h1>
          <p className="text-muted-foreground">ボランティア活動の募集と管理を行います</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Link href="/dashboard/events/create">
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>新規ボランティア募集</span>
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>イベント概要</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">募集中</span>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{recruitingCount}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">開催中</span>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">{ongoingCount}</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">終了</span>
                  <Badge className="bg-red-100 text-red-800 hover:bg-red-100">{completedCount}</Badge>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-sm font-medium">合計</span>
                  <Badge variant="secondary">{events.length}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader className="pb-3">
              <CardTitle>フィルター</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>カテゴリー</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="すべてのカテゴリー" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべてのカテゴリー</SelectItem>
                    <SelectItem value="education">教育支援</SelectItem>
                    <SelectItem value="environment">環境保全</SelectItem>
                    <SelectItem value="elderly">高齢者支援</SelectItem>
                    <SelectItem value="children">子ども支援</SelectItem>
                    <SelectItem value="event">イベント運営</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>期間</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="すべての期間" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべての期間</SelectItem>
                    <SelectItem value="upcoming">今後の予定</SelectItem>
                    <SelectItem value="past">過去の活動</SelectItem>
                    <SelectItem value="month">今月</SelectItem>
                    <SelectItem value="quarter">今四半期</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>フィルターを適用</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 hover:shadow-md">
            <CardHeader className="pb-3">
              <CardTitle>アクション</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href="/dashboard/events/create">
                  <Plus className="mr-2 h-4 w-4" />
                  新規ボランティア募集
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                イベントリストをエクスポート
              </Button>
              <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                選択したイベントを削除
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card className="shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>イベント一覧</CardTitle>
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="イベントを検索..." className="pl-8" />
                </div>
              </div>
              <CardDescription>
                合計 {events.length} 件のボランティア活動（
                <span className="font-medium">募集中: {recruitingCount}</span>、
                <span className="font-medium">開催中: {ongoingCount}</span>、
                <span className="font-medium">終了: {completedCount}</span>）
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">すべて</TabsTrigger>
                  <TabsTrigger value="recruiting">募集中</TabsTrigger>
                  <TabsTrigger value="ongoing">開催中</TabsTrigger>
                  <TabsTrigger value="completed">終了</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  {events.map((event) => (
                    <EventItem key={event.id} event={event} />
                  ))}
                </TabsContent>

                <TabsContent value="recruiting" className="space-y-4">
                  {events
                    .filter((event) => event.status === "募集中")
                    .map((event) => (
                      <EventItem key={event.id} event={event} />
                    ))}
                </TabsContent>

                <TabsContent value="ongoing" className="space-y-4">
                  {events
                    .filter((event) => event.status === "開催中")
                    .map((event) => (
                      <EventItem key={event.id} event={event} />
                    ))}
                </TabsContent>

                <TabsContent value="completed" className="space-y-4">
                  {events
                    .filter((event) => event.status === "終了")
                    .map((event) => (
                      <EventItem key={event.id} event={event} />
                    ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

// イベントアイテムコンポーネント
function EventItem({ event }) {
  // ステータスに応じたバッジのスタイルを設定
  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case "募集中":
        return "bg-blue-100 text-blue-800 hover:bg-blue-100"
      case "開催中":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      case "募集締切":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100"
      case "終了":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      default:
        return ""
    }
  }

  // カテゴリーに応じたバッジのスタイルを設定
  const getCategoryBadgeStyle = (category) => {
    switch (category) {
      case "教育支援":
        return "bg-indigo-100 text-indigo-800 hover:bg-indigo-100"
      case "環境保全":
        return "bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
      case "高齢者支援":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100"
      case "子ども支援":
        return "bg-sky-100 text-sky-800 hover:bg-sky-100"
      case "イベント運営":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100"
      default:
        return ""
    }
  }

  return (
    <Card className="transition-all duration-300 hover:shadow-md overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{event.title}</h3>
              <Badge className={getStatusBadgeStyle(event.status)}>{event.status}</Badge>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                {event.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-3.5 w-3.5 mr-1" />
                {event.time}
              </div>
              <div className="flex items-center">
                <MapPin className="h-3.5 w-3.5 mr-1" />
                {event.location}
              </div>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
              <div className="flex items-center">
                <Users className="h-3.5 w-3.5 mr-1" />
                参加者: <span className="font-medium ml-1">{event.participants}</span>/{event.maxParticipants}名
              </div>
              <div>
                応募者: <span className="font-medium">{event.applicants}</span>名
              </div>
              <Badge className={getCategoryBadgeStyle(event.category)} variant="outline">
                {event.category}
              </Badge>
            </div>
          </div>
          <div className="flex mt-4 sm:mt-0 gap-2">
            <Link href={`/dashboard/events/${event.id}/applicants`}>
              <Button variant="outline" size="sm" className="">
                応募者一覧
              </Button>
            </Link>
            <Link href={`/dashboard/events/${event.id}/edit`}>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Edit className="h-3.5 w-3.5" />
                編集
              </Button>
            </Link>
            <Link href={`/dashboard/events/${event.id}`}>
              <Button size="sm">詳細</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Label コンポーネント
function Label({ children, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium">
      {children}
    </label>
  )
}
