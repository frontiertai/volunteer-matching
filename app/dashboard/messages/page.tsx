import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Bell,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Filter,
  Info,
  MessageSquare,
  Search,
  Trash,
  User,
  Users,
} from "lucide-react"
import Link from "next/link"

// メッセージデータのモック（実際のアプリではAPIから取得）
const messages = [
  {
    id: "1",
    type: "application",
    title: "冬休み子ども学習支援ボランティアに新しい応募があります",
    content: "3名の学生が新たに応募しました。応募者の詳細を確認し、承認または却下してください。",
    date: "2023/12/10 14:30",
    isRead: false,
    eventId: "1",
    eventTitle: "冬休み子ども学習支援ボランティア",
    count: 3,
    applicants: [
      {
        id: "7",
        name: "中村 健太",
        university: "明治大学・文学部",
      },
      {
        id: "8",
        name: "小林 さくら",
        university: "上智大学・総合人間科学部",
      },
      {
        id: "11",
        name: "加藤 裕太",
        university: "法政大学・社会学部",
      },
    ],
  },
  {
    id: "2",
    type: "system",
    title: "児童館でのクリスマスイベントスタッフの募集が締め切られました",
    content: "定員に達したため、募集が自動的に締め切られました。応募者の最終確認を行ってください。",
    date: "2023/12/08 09:15",
    isRead: true,
    eventId: "2",
    eventTitle: "児童館でのクリスマスイベントスタッフ",
  },
  {
    id: "3",
    type: "message",
    title: "田中 美咲さんからメッセージが届いています",
    content: "冬休み子ども学習支援ボランティアについて質問があります。当日の持ち物について詳細を教えていただけますか？",
    date: "2023/12/07 18:45",
    isRead: false,
    studentId: "1",
    studentName: "田中 美咲",
  },
  {
    id: "4",
    type: "application",
    title: "子ども向けプログラミング教室アシスタントに新しい応募があります",
    content: "2名の学生が新たに応募しました。応募者の詳細を確認し、承認または却下してください。",
    date: "2023/12/05 11:20",
    isRead: true,
    eventId: "3",
    eventTitle: "子ども向けプログラミング教室アシスタント",
    count: 2,
    applicants: [
      {
        id: "9",
        name: "高橋 直樹",
        university: "筑波大学・情報学群",
      },
      {
        id: "10",
        name: "渡辺 真理",
        university: "東京工業大学・情報理工学院",
      },
    ],
  },
  {
    id: "5",
    type: "system",
    title: "ボランティア活動レポートの提出期限が近づいています",
    content: "「海岸清掃プロジェクト」の活動レポート提出期限は12月15日です。期限までに提出してください。",
    date: "2023/12/01 10:00",
    isRead: true,
    eventId: "4",
    eventTitle: "海岸清掃プロジェクト",
  },
  {
    id: "6",
    type: "message",
    title: "佐藤 健太さんからメッセージが届いています",
    content: "次回の環境フォーラム運営について相談したいことがあります。都合の良い時間を教えていただけますか？",
    date: "2023/11/28 16:30",
    isRead: true,
    studentId: "2",
    studentName: "佐藤 健太",
  },
  {
    id: "7",
    type: "application",
    title: "高齢者サポートに新しい応募があります",
    content: "1名の学生が新たに応募しました。応募者の詳細を確認し、承認または却下してください。",
    date: "2023/11/25 13:10",
    isRead: true,
    eventId: "5",
    eventTitle: "高齢者サポート",
    count: 1,
    applicants: [
      {
        id: "3",
        name: "山田 花子",
        university: "早稲田大学・社会学部",
      },
    ],
  },
]

export default function MessagesPage() {
  // 未読メッセージの数をカウント
  const unreadCount = messages.filter((message) => !message.isRead).length

  return (
    <main className="flex-1 container">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">メッセージ</h1>
          <p className="text-muted-foreground">通知、応募、メッセージを管理します</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>すべて既読にする</span>
          </Button>
          <Button variant="outline" className="flex items-center gap-2 text-destructive hover:text-destructive">
            <Trash className="h-4 w-4" />
            <span>選択削除</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>フォルダ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-4">
              <Button variant="ghost" className="w-full justify-start">
                <Bell className="mr-2 h-4 w-4" />
                <span>すべての通知</span>
                <Badge className="ml-auto">{messages.length}</Badge>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Info className="mr-2 h-4 w-4" />
                <span>未読</span>
                <Badge className="ml-auto bg-accent text-accent-foreground">{unreadCount}</Badge>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Users className="mr-2 h-4 w-4" />
                <span>応募通知</span>
                <Badge className="ml-auto">{messages.filter((m) => m.type === "application").length}</Badge>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>メッセージ</span>
                <Badge className="ml-auto">{messages.filter((m) => m.type === "message").length}</Badge>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Info className="mr-2 h-4 w-4" />
                <span>システム通知</span>
                <Badge className="ml-auto">{messages.filter((m) => m.type === "system").length}</Badge>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>フィルター</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>イベント</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="すべてのイベント" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">すべてのイベント</SelectItem>
                    <SelectItem value="1">冬休み子ども学習支援ボランティア</SelectItem>
                    <SelectItem value="2">児童館でのクリスマスイベントスタッフ</SelectItem>
                    <SelectItem value="3">子ども向けプログラミング教室アシスタント</SelectItem>
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
                    <SelectItem value="today">今日</SelectItem>
                    <SelectItem value="week">過去7日間</SelectItem>
                    <SelectItem value="month">過去30日間</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>フィルターを適用</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-3">
          <Card className="shadow-sm">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>通知一覧</CardTitle>
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="メッセージを検索..." className="pl-8" />
                </div>
              </div>
              <CardDescription>
                {unreadCount > 0 ? `${unreadCount}件の未読メッセージがあります` : "すべてのメッセージを既読済みです"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">すべて</TabsTrigger>
                  <TabsTrigger value="applications">応募通知</TabsTrigger>
                  <TabsTrigger value="messages">メッセージ</TabsTrigger>
                  <TabsTrigger value="system">システム通知</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4">
                  {messages.map((message) => (
                    <MessageItem key={message.id} message={message} />
                  ))}
                </TabsContent>

                <TabsContent value="applications" className="space-y-4">
                  {messages
                    .filter((message) => message.type === "application")
                    .map((message) => (
                      <MessageItem key={message.id} message={message} />
                    ))}
                </TabsContent>

                <TabsContent value="messages" className="space-y-4">
                  {messages
                    .filter((message) => message.type === "message")
                    .map((message) => (
                      <MessageItem key={message.id} message={message} />
                    ))}
                </TabsContent>

                <TabsContent value="system" className="space-y-4">
                  {messages
                    .filter((message) => message.type === "system")
                    .map((message) => (
                      <MessageItem key={message.id} message={message} />
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

// メッセージアイテムコンポーネント
function MessageItem({ message }) {
  // メッセージタイプに応じたアイコンを表示
  const getIcon = (type) => {
    switch (type) {
      case "application":
        return <Users className="h-5 w-5 text-blue-500" />
      case "message":
        return <MessageSquare className="h-5 w-5 text-green-500" />
      case "system":
        return <Info className="h-5 w-5 text-amber-500" />
      default:
        return <Bell className="h-5 w-5" />
    }
  }

  // メッセージタイプに応じたリンク先を設定
  const getLink = (message) => {
    if (message.type === "application" && message.eventId) {
      return `/dashboard/events/${message.eventId}/applicants`
    } else if (message.type === "message" && message.studentId) {
      return `/dashboard/students/${message.studentId}`
    } else if (message.eventId) {
      return `/dashboard/events/${message.eventId}`
    }
    return "#"
  }

  return (
    <div
      className={`border rounded-lg p-4 transition-colors ${
        message.isRead ? "bg-background" : "bg-muted/10"
      } hover:bg-muted/20`}
    >
      <div className="flex items-start gap-3">
        <div className="mt-1">{getIcon(message.type)}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3 className={`font-medium ${!message.isRead && "font-semibold"}`}>{message.title}</h3>
            {!message.isRead && <Badge className="bg-accent text-accent-foreground whitespace-nowrap">未読</Badge>}
          </div>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{message.content}</p>

          {/* 応募通知の場合は応募者リストを表示 */}
          {message.type === "application" && message.applicants && (
            <div className="mt-3 space-y-2">
              <p className="text-sm font-medium">応募者:</p>
              <div className="flex flex-wrap gap-2">
                {message.applicants.map((applicant) => (
                  <div key={applicant.id} className="flex items-center gap-2 bg-muted/20 rounded-full px-3 py-1">
                    <Avatar className="h-5 w-5">
                      <AvatarFallback>
                        <User className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs">{applicant.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center text-xs text-muted-foreground gap-3">
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {message.date}
              </div>
              {message.eventTitle && (
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  {message.eventTitle}
                </div>
              )}
            </div>
            <Link href={getLink(message)}>
              <Button variant="ghost" size="sm" className="flex items-center">
                詳細
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
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
