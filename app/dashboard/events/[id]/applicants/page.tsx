import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Calendar, Download, Filter, Mail, Search, User } from "lucide-react"
import Link from "next/link"

// イベントデータのモック（実際のアプリではAPIから取得）
const eventsData = [
  {
    id: "1",
    title: "冬休み子ども学習支援ボランティア",
    date: "2023/12/25 - 2023/12/28",
    location: "東京都新宿区コミュニティセンター",
    participants: 8,
    maxParticipants: 15,
    status: "募集中",
    applicants: [
      {
        id: "1",
        name: "田中 美咲",
        university: "東京大学",
        faculty: "教育学部",
        grade: "3年生",
        email: "misaki.tanaka@example.com",
        phone: "090-1234-5678",
        status: "承認済み",
        appliedDate: "2023/11/15",
        message: "子どもの教育支援に興味があり、将来教員を目指しています。ぜひ参加させてください。",
        skills: ["教育", "英語"],
      },
      {
        id: "3",
        name: "山田 花子",
        university: "早稲田大学",
        faculty: "社会学部",
        grade: "2年生",
        email: "hanako.yamada@example.com",
        phone: "090-3456-7890",
        status: "承認済み",
        appliedDate: "2023/11/18",
        message: "子どもと接することが好きで、ボランティア活動に積極的に参加しています。",
        skills: ["コミュニケーション", "傾聴"],
      },
      {
        id: "4",
        name: "鈴木 大輔",
        university: "立命館大学",
        faculty: "情報学部",
        grade: "3年生",
        email: "daisuke.suzuki@example.com",
        phone: "090-4567-8901",
        status: "承認済み",
        appliedDate: "2023/11/20",
        message: "プログラミングを教えた経験があります。子どもたちに楽しく学んでもらいたいです。",
        skills: ["プログラミング", "教育"],
      },
      {
        id: "7",
        name: "中村 健太",
        university: "明治大学",
        faculty: "文学部",
        grade: "2年生",
        email: "kenta.nakamura@example.com",
        phone: "090-7890-1234",
        status: "申請中",
        appliedDate: "2023/11/25",
        message: "教育ボランティアに興味があります。子どもたちと一緒に学ぶ機会を得たいです。",
        skills: ["国語", "歴史"],
      },
      {
        id: "8",
        name: "小林 さくら",
        university: "上智大学",
        faculty: "総合人間科学部",
        grade: "1年生",
        email: "sakura.kobayashi@example.com",
        phone: "090-8901-2345",
        status: "申請中",
        appliedDate: "2023/11/26",
        message: "子どもの教育に関わる仕事に就きたいと考えています。経験を積みたいです。",
        skills: ["音楽", "アート"],
      },
      {
        id: "11",
        name: "加藤 裕太",
        university: "法政大学",
        faculty: "社会学部",
        grade: "3年生",
        email: "yuta.kato@example.com",
        phone: "090-2345-6789",
        status: "申請中",
        appliedDate: "2023/11/28",
        message: "社会福祉を専攻しています。子どもたちの学習支援に貢献したいです。",
        skills: ["社会福祉", "心理学"],
      },
      {
        id: "12",
        name: "吉田 真理",
        university: "青山学院大学",
        faculty: "教育人間科学部",
        grade: "4年生",
        email: "mari.yoshida@example.com",
        phone: "090-3456-7890",
        status: "却下",
        appliedDate: "2023/11/10",
        message: "教育実習の経験があります。子どもたちの学習をサポートしたいです。",
        skills: ["教育", "カウンセリング"],
        rejectReason: "日程の都合が合わないため",
      },
    ],
  },
]

export default function ApplicantsPage({ params }: { params: { id: string } }) {
  // IDに基づいてイベントデータを取得
  const event = eventsData.find((e) => e.id === params.id) || eventsData[0]

  // 承認済み、申請中、却下の応募者数をカウント
  const approvedCount = event.applicants.filter((a) => a.status === "承認済み").length
  const pendingCount = event.applicants.filter((a) => a.status === "申請中").length
  const rejectedCount = event.applicants.filter((a) => a.status === "却下").length

  return (
    <main className="flex-1 container py-6">
      <div className="mb-6">
        <Link
          href={`/dashboard/events/${event.id}`}
          className="flex items-center text-muted-foreground hover:text-foreground mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          イベント詳細に戻る
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">応募者一覧</h1>
            <p className="text-muted-foreground">{event.title}</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <span>エクスポート</span>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>一括メール送信</span>
            </Button>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle>応募者</CardTitle>
              <CardDescription>
                合計 {event.applicants.length} 名（承認済み: {approvedCount}、申請中: {pendingCount}、却下:{" "}
                {rejectedCount}）
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-auto sm:min-w-[300px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="名前、大学で検索..." className="pl-8" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="ステータス" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">すべてのステータス</SelectItem>
                  <SelectItem value="approved">承認済み</SelectItem>
                  <SelectItem value="pending">申請中</SelectItem>
                  <SelectItem value="rejected">却下</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="大学" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">すべての大学</SelectItem>
                  <SelectItem value="tokyo">東京大学</SelectItem>
                  <SelectItem value="waseda">早稲田大学</SelectItem>
                  <SelectItem value="ritsumeikan">立命館大学</SelectItem>
                  <SelectItem value="meiji">明治大学</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="hidden sm:flex">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="overflow-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>名前</TableHead>
                  <TableHead className="hidden sm:table-cell">大学・学部</TableHead>
                  <TableHead className="hidden md:table-cell">申請日</TableHead>
                  <TableHead>ステータス</TableHead>
                  <TableHead className="hidden lg:table-cell">スキル</TableHead>
                  <TableHead className="text-right">アクション</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {event.applicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell>
                      <Link
                        href={`/dashboard/students/${applicant.id}`}
                        className="flex items-center gap-2 hover:underline font-medium"
                      >
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={applicant.name} />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        {applicant.name}
                      </Link>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {applicant.university}・{applicant.faculty} {applicant.grade}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex items-center">
                        <Calendar className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                        {applicant.appliedDate}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={
                          applicant.status === "承認済み"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : applicant.status === "申請中"
                              ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                              : "bg-red-100 text-red-800 hover:bg-red-100"
                        }
                      >
                        {applicant.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="flex gap-1">
                        {applicant.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/dashboard/students/${applicant.id}`}>
                          <Button variant="ghost" size="sm">
                            詳細
                          </Button>
                        </Link>
                        {applicant.status === "申請中" && (
                          <>
                            <Button variant="outline" size="sm">
                              却下
                            </Button>
                            <Button size="sm">承認</Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="md:hidden mt-4 space-y-4">
            <h3 className="text-sm font-medium mb-2">モバイル表示</h3>
            {event.applicants.map((applicant) => (
              <Card key={applicant.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <Link href={`/dashboard/students/${applicant.id}`} className="hover:underline">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={applicant.name} />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="font-medium">{applicant.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {applicant.university}・{applicant.faculty} {applicant.grade}
                      </p>
                    </Link>
                    <Badge
                      className={
                        applicant.status === "承認済み"
                          ? "bg-green-100 text-green-800"
                          : applicant.status === "申請中"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }
                    >
                      {applicant.status}
                    </Badge>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="font-medium">申請日:</p>
                      <p className="text-muted-foreground">{applicant.appliedDate}</p>
                    </div>
                    <div>
                      <p className="font-medium">スキル:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {applicant.skills.map((skill, i) => (
                          <Badge key={i} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end gap-2">
                    <Link href={`/dashboard/students/${applicant.id}`}>
                      <Button variant="ghost" size="sm">
                        詳細
                      </Button>
                    </Link>
                    {applicant.status === "申請中" && (
                      <>
                        <Button variant="outline" size="sm">
                          却下
                        </Button>
                        <Button size="sm">承認</Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm">
              前へ
            </Button>
            <Button variant="outline" size="sm">
              次へ
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
