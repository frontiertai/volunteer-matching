import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, Clock, MapPin, Users, Building, Phone, Mail, User, FileText, Edit } from "lucide-react"
import Link from "next/link"

// イベントデータのモックデータ（実際のアプリではAPIから取得）
const eventsData = [
  {
    id: "1",
    title: "冬休み子ども学習支援ボランティア",
    date: "2023/12/25 - 2023/12/28",
    time: "10:00 - 16:00",
    location: "東京都新宿区コミュニティセンター",
    address: "東京都新宿区西新宿2-8-1",
    category: "教育支援",
    participants: 8,
    maxParticipants: 15,
    status: "募集中",
    description:
      "冬休み期間中の小学生を対象とした学習支援ボランティアです。基礎学力の向上と楽しく学ぶ環境づくりを目指します。特に算数と国語を中心に、遊びを取り入れた学習プログラムを実施します。子どもたちの「わかった！」という瞬間を一緒に見守りましょう。",
    requirements:
      "・子どもと接することが好きな方\n・基本的な学習指導ができる方（専門的な知識は不要です）\n・全日程参加できる方が望ましいですが、部分参加も可能です",
    learnings:
      "・子どもの学習支援スキル\n・教育現場での実践経験\n・コミュニケーション能力の向上\n・チームワークと協調性\n・教育的課題への理解",
    preparation: "・動きやすい服装\n・筆記用具\n・昼食（持参または近隣で購入可能）",
    organizer: "NPO法人 子ども未来サポート",
    contactPerson: "山田 太郎",
    contactEmail: "yamada@kodomo-mirai.org",
    contactPhone: "03-1234-5678",
    applicants: [
      {
        id: "1",
        name: "田中 美咲",
        university: "東京大学・教育学部",
        grade: "3年生",
        status: "承認済み",
        appliedDate: "2023/11/15",
      },
      {
        id: "3",
        name: "山田 花子",
        university: "早稲田大学・社会学部",
        grade: "2年生",
        status: "承認済み",
        appliedDate: "2023/11/18",
      },
      {
        id: "4",
        name: "鈴木 大輔",
        university: "立命館大学・情報学部",
        grade: "3年生",
        status: "承認済み",
        appliedDate: "2023/11/20",
      },
      {
        id: "7",
        name: "中村 健太",
        university: "明治大学・文学部",
        grade: "2年生",
        status: "申請中",
        appliedDate: "2023/11/25",
      },
      {
        id: "8",
        name: "小林 さくら",
        university: "上智大学・総合人間科学部",
        grade: "1年生",
        status: "申請中",
        appliedDate: "2023/11/26",
      },
    ],
  },
  {
    id: "2",
    title: "児童館でのクリスマスイベントスタッフ",
    date: "2023/12/23",
    time: "9:00 - 17:00",
    location: "東京都渋谷区児童館",
    address: "東京都渋谷区神南1-19-8",
    category: "イベント運営",
    participants: 12,
    maxParticipants: 12,
    status: "募集締切",
    description:
      "地域の児童館で開催されるクリスマスイベントのスタッフを募集します。子どもたちと一緒にゲームやクラフト作りを楽しみ、クリスマスの思い出づくりをサポートします。午前中は会場設営、午後はイベント運営、終了後は片付けを行います。",
    requirements: "・子どもと接することが好きな方\n・体力に自信のある方\n・責任感を持って最後まで参加できる方",
    learnings: "・イベント運営の実践経験\n・子どもとの関わり方\n・チームワークと協調性\n・問題解決能力の向上",
    preparation:
      "・動きやすい服装（できれば赤や緑などクリスマスカラーの服があると良いです）\n・昼食（持参または近隣で購入可能）",
    organizer: "NPO法人 子ども未来サポート",
    contactPerson: "山田 太郎",
    contactEmail: "yamada@kodomo-mirai.org",
    contactPhone: "03-1234-5678",
    applicants: [
      {
        id: "2",
        name: "佐藤 健太",
        university: "慶應義塾大学・環境学部",
        grade: "4年生",
        status: "承認済み",
        appliedDate: "2023/10/05",
      },
      {
        id: "3",
        name: "山田 花子",
        university: "早稲田大学・社会学部",
        grade: "2年生",
        status: "承認済み",
        appliedDate: "2023/10/08",
      },
    ],
  },
  {
    id: "3",
    title: "子ども向けプログラミング教室アシスタント",
    date: "2024/01/14 - 2024/01/15",
    time: "13:00 - 17:00",
    location: "オンライン",
    address: "Zoomを使用したオンライン開催",
    category: "教育支援",
    participants: 3,
    maxParticipants: 10,
    status: "募集中",
    description:
      "小中学生を対象としたオンラインプログラミング教室のアシスタントを募集します。Scratchを使った基本的なプログラミングの指導をサポートしていただきます。講師がメインで指導を行い、参加者からの質問対応や個別サポートをお願いします。",
    requirements:
      "・基本的なプログラミングの知識がある方（Scratchの経験があれば尚可）\n・子どもに分かりやすく説明できる方\n・オンラインツールの基本的な操作ができる方",
    learnings:
      "・教育的指導スキル\n・オンライン教育の実践経験\n・プログラミング教育の知識\n・コミュニケーション能力の向上",
    preparation:
      "・パソコン（カメラ・マイク付き）\n・安定したインターネット環境\n・Zoomアプリのインストール\n・Scratchアカウント（なくても可）",
    organizer: "NPO法人 子ども未来サポート",
    contactPerson: "佐藤 雅子",
    contactEmail: "sato@kodomo-mirai.org",
    contactPhone: "03-1234-5679",
    applicants: [
      {
        id: "4",
        name: "鈴木 大輔",
        university: "立命館大学・情報学部",
        grade: "3年生",
        status: "承認済み",
        appliedDate: "2023/12/01",
      },
      {
        id: "9",
        name: "高橋 直樹",
        university: "筑波大学・情報学群",
        grade: "2年生",
        status: "承認済み",
        appliedDate: "2023/12/05",
      },
      {
        id: "10",
        name: "渡辺 真理",
        university: "東京工業大学・情報理工学院",
        grade: "3年生",
        status: "承認済み",
        appliedDate: "2023/12/08",
      },
    ],
  },
]

export default function EventDetailPage({ params }: { params: { id: string } }) {
  // IDに基づいてイベントデータを取得
  const event = eventsData.find((e) => e.id === params.id) || eventsData[0]

  return (
    <main className="flex-1 container py-6">
      <div className="mb-6">
        <Link href="/dashboard/mypage" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          マイページに戻る
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight">{event.title}</h1>
              <Badge
                className={
                  event.status === "募集中"
                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                    : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                }
              >
                {event.status}
              </Badge>
            </div>
            <p className="text-muted-foreground">
              {event.category} | {event.date}
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Link href={`/dashboard/events/${event.id}/edit`}>
              <Button variant="outline" className="flex items-center gap-2">
                <Edit className="h-4 w-4" />
                <span>編集</span>
              </Button>
            </Link>
            <Link href={`/dashboard/events/${event.id}/applicants`}>
              <Button className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>応募者一覧</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>活動内容</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">作業詳細</h3>
                <p className="text-sm whitespace-pre-line">{event.description}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">求める人物像</h3>
                <p className="text-sm whitespace-pre-line">{event.requirements}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">活動を通して学べること</h3>
                <p className="text-sm whitespace-pre-line">{event.learnings}</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium">持ち物・服装</h3>
                <p className="text-sm whitespace-pre-line">{event.preparation}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>応募状況</CardTitle>
              <CardDescription>
                現在 {event.participants}/{event.maxParticipants} 名が参加予定です
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="approved">
                <TabsList className="mb-4">
                  <TabsTrigger value="approved">
                    承認済み ({event.applicants.filter((a) => a.status === "承認済み").length})
                  </TabsTrigger>
                  <TabsTrigger value="pending">
                    申請中 ({event.applicants.filter((a) => a.status === "申請中").length})
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="approved">
                  <div className="space-y-4">
                    {event.applicants
                      .filter((applicant) => applicant.status === "承認済み")
                      .map((applicant) => (
                        <div key={applicant.id} className="flex items-center justify-between border-b pb-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={applicant.name} />
                              <AvatarFallback>
                                <User className="h-5 w-5" />
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <Link
                                href={`/dashboard/students/${applicant.id}`}
                                className="font-medium hover:underline"
                              >
                                {applicant.name}
                              </Link>
                              <p className="text-sm text-muted-foreground">
                                {applicant.university} {applicant.grade}
                              </p>
                            </div>
                          </div>
                          <div className="text-sm text-muted-foreground">申請日: {applicant.appliedDate}</div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="pending">
                  <div className="space-y-4">
                    {event.applicants
                      .filter((applicant) => applicant.status === "申請中")
                      .map((applicant) => (
                        <div key={applicant.id} className="flex items-center justify-between border-b pb-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={`/placeholder.svg?height=40&width=40`} alt={applicant.name} />
                              <AvatarFallback>
                                <User className="h-5 w-5" />
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <Link
                                href={`/dashboard/students/${applicant.id}`}
                                className="font-medium hover:underline"
                              >
                                {applicant.name}
                              </Link>
                              <p className="text-sm text-muted-foreground">
                                {applicant.university} {applicant.grade}
                              </p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline">
                              詳細
                            </Button>
                            <Button size="sm">承認</Button>
                          </div>
                        </div>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>基本情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-2">
                <Building className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">運営団体</p>
                  <p className="text-sm text-muted-foreground">{event.organizer}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Calendar className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">活動日</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">作業時間</p>
                  <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">開催場所</p>
                  <p className="text-sm text-muted-foreground">{event.location}</p>
                  <p className="text-sm text-muted-foreground">{event.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Users className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">募集人数</p>
                  <p className="text-sm text-muted-foreground">
                    {event.participants}/{event.maxParticipants}名
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>連絡先</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-2">
                <User className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">担当者</p>
                  <p className="text-sm text-muted-foreground">{event.contactPerson}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">メールアドレス</p>
                  <p className="text-sm text-muted-foreground">{event.contactEmail}</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">電話番号</p>
                  <p className="text-sm text-muted-foreground">{event.contactPhone}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>管理メニュー</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href={`/dashboard/events/${event.id}/edit`}>
                  <Edit className="mr-2 h-4 w-4" />
                  募集内容を編集
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href={`/dashboard/events/${event.id}/applicants`}>
                  <Users className="mr-2 h-4 w-4" />
                  応募者一覧
                </Link>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <Link href={`/dashboard/events/${event.id}/report`}>
                  <FileText className="mr-2 h-4 w-4" />
                  活動レポート作成
                </Link>
              </Button>
              <Button variant="destructive" className="w-full mt-4">
                募集を終了する
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
