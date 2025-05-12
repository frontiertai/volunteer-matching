import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Mail, Phone, MapPin, Calendar, Award, Clock, User, Cake, GraduationCap, Clock3 } from "lucide-react"
import Link from "next/link"

// 学生データのモックデータ（実際のアプリではAPIから取得）
const studentsData = [
  {
    id: "1",
    accountId: "ST100001",
    name: "田中 美咲",
    birthDate: "2001年5月15日",
    gender: "女性",
    university: "東京大学",
    faculty: "教育学部",
    grade: "3年生",
    email: "misaki.tanaka@example.com",
    phone: "090-1234-5678",
    address: "東京都文京区本郷7-3-1",
    skills: ["教育", "英語", "プレゼンテーション", "コンピュータ基礎", "子ども対応"],
    interests: ["子ども支援", "国際協力", "環境問題"],
    bio: "教育学部で児童教育について学んでいます。将来は教育関連の仕事に就きたいと考えており、様々なボランティア活動を通じて経験を積みたいと思っています。特に子どもの教育支援に興味があります。",
    events: [
      {
        name: "子ども教育支援",
        date: "2023/10/15",
        period: "5日間",
        status: "参加済み",
        hours: 25,
        content: "小学生向け学習支援ボランティア。放課後の学習指導と遊びを通した教育活動を実施。",
        feedback:
          "子どもたちと積極的にコミュニケーションを取り、素晴らしい活動をしていました。次回もぜひ参加してほしいです。",
      },
      {
        name: "国際交流イベント",
        date: "2023/08/20",
        period: "1日間",
        status: "参加済み",
        hours: 8,
        content: "外国人留学生との交流イベント。言語交換や文化紹介を通じた国際交流の促進。",
        feedback: "英語力を活かして外国人参加者のサポートをしてくれました。コミュニケーション能力が高く、好評でした。",
      },
    ],
  },
  {
    id: "2",
    accountId: "ST100002",
    name: "佐藤 健太",
    birthDate: "2000年9月8日",
    gender: "男性",
    university: "慶應義塾大学",
    faculty: "環境学部",
    grade: "4年生",
    email: "kenta.sato@example.com",
    phone: "090-2345-6789",
    address: "神奈川県横浜市港北区日吉4-1-1",
    skills: ["環境保全", "リーダーシップ", "プロジェクト管理", "チームワーク"],
    interests: ["環境問題", "持続可能な開発", "海洋保全"],
    bio: "環境学部で持続可能な開発について研究しています。環境問題に関心があり、特に海洋プラスチック問題に取り組んでいます。将来は環境NGOで働きたいと考えています。",
    events: [
      {
        name: "海岸清掃プロジェクト",
        date: "2023/09/23",
        period: "2日間",
        status: "参加済み",
        hours: 16,
        content: "湘南海岸でのプラスチックごみ回収活動。環境教育ワークショップも実施。",
        feedback:
          "リーダーシップを発揮し、チームを効果的に組織しました。環境問題に関する知識も深く、参加者への説明も分かりやすかったです。",
      },
      {
        name: "環境フォーラム運営",
        date: "2023/07/15",
        period: "3日間",
        status: "参加済み",
        hours: 24,
        content: "大学生向け環境フォーラムの企画・運営。持続可能な開発に関するパネルディスカッションを担当。",
        feedback: "イベント運営の経験を活かし、スムーズな進行に貢献しました。参加者からの評価も非常に高かったです。",
      },
    ],
  },
  {
    id: "3",
    accountId: "ST100003",
    name: "山田 花子",
    birthDate: "2002年3月20日",
    gender: "女性",
    university: "早稲田大学",
    faculty: "社会学部",
    grade: "2年生",
    email: "hanako.yamada@example.com",
    phone: "090-3456-7890",
    address: "東京都新宿区戸山1-24-1",
    skills: ["介護", "コミュニケーション", "傾聴", "高齢者支援"],
    interests: ["社会福祉", "高齢者ケア", "地域コミュニティ"],
    bio: "社会学部で高齢化社会の課題について学んでいます。祖父母との関わりから高齢者支援に興味を持ち、将来は社会福祉の分野で活躍したいと考えています。",
    events: [
      {
        name: "高齢者サポート",
        date: "2023/11/05",
        period: "継続中",
        status: "参加確定",
        hours: 0,
        content: "地域の高齢者施設での定期的な訪問活動。レクリエーションの企画・実施や話し相手になる活動。",
        feedback: "まだ活動開始前です。",
      },
    ],
  },
  {
    id: "4",
    accountId: "ST100004",
    name: "鈴木 大輔",
    birthDate: "1999年11月12日",
    gender: "男性",
    university: "立命館大学",
    faculty: "情報学部",
    grade: "3年生",
    email: "daisuke.suzuki@example.com",
    phone: "090-4567-8901",
    address: "京都府京都市北区等持院北町56-1",
    skills: ["プログラミング", "教育", "ウェブ開発", "デジタルリテラシー"],
    interests: ["IT教育", "デジタル格差解消", "テクノロジー"],
    bio: "情報学部でプログラミングとウェブ開発を学んでいます。テクノロジーを通じて社会課題を解決したいと考えており、特にデジタル格差の解消に関心があります。",
    events: [
      {
        name: "子ども教育支援",
        date: "2023/10/22",
        period: "4日間",
        status: "参加済み",
        hours: 20,
        content: "小中学生向けプログラミング教室の講師。基本的なコーディングからゲーム開発までを指導。",
        feedback:
          "技術的な知識を分かりやすく伝える能力に優れています。子どもたちの興味を引き出し、楽しみながら学べる環境を作り出していました。",
      },
    ],
  },
  {
    id: "5",
    accountId: "ST100005",
    name: "伊藤 さくら",
    birthDate: "2001年4月3日",
    gender: "女性",
    university: "同志社大学",
    faculty: "心理学部",
    grade: "2年生",
    email: "sakura.ito@example.com",
    phone: "090-5678-9012",
    address: "京都府京都市上京区今出川通烏丸東入",
    skills: ["カウンセリング", "傾聴", "心理サポート", "グループファシリテーション"],
    interests: ["メンタルヘルス", "高齢者支援", "コミュニティケア"],
    bio: "心理学部で臨床心理学を専攻しています。人の心に寄り添うことに関心があり、将来はカウンセラーとして活動したいと考えています。ボランティア活動を通じて実践的なスキルを身につけたいです。",
    events: [],
  },
]

export default function StudentDetailPage({ params }: { params: { id: string } }) {
  // IDに基づいて学生データを取得
  const student = studentsData.find((s) => s.id === params.id) || studentsData[0]

  return (
    <main className="flex-1 container py-6">
      <div className="mb-6">
        <Link href="/dashboard/students" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          参加学生一覧に戻る
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={`/placeholder.svg?height=64&width=64`} alt={student.name} />
              <AvatarFallback>
                <User className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-2xl font-bold tracking-tight">{student.name}</h2>
                <Badge variant="outline" className="ml-2">
                  ID: {student.accountId}
                </Badge>
              </div>
              <p className="text-muted-foreground">
                {student.university}・{student.faculty} {student.grade}
              </p>
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button variant="outline" className="flex-1 md:flex-none flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="md:inline">メッセージを送る</span>
            </Button>
            <Button className="flex-1 md:flex-none flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="md:inline">連絡する</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>基本情報</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-2">
              <User className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">アカウントID</p>
                <p className="text-sm text-muted-foreground">{student.accountId}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Cake className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">生年月日</p>
                <p className="text-sm text-muted-foreground">{student.birthDate}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <User className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">性別</p>
                <p className="text-sm text-muted-foreground">{student.gender}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <GraduationCap className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">学校・学年</p>
                <p className="text-sm text-muted-foreground">
                  {student.university} {student.faculty} {student.grade}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">メールアドレス</p>
                <p className="text-sm text-muted-foreground">{student.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">電話番号</p>
                <p className="text-sm text-muted-foreground">{student.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">住所</p>
                <p className="text-sm text-muted-foreground">{student.address}</p>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="text-sm font-medium mb-2">スキル</h4>
              <div className="flex flex-wrap gap-1">
                {student.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <h4 className="text-sm font-medium mb-2">興味のある分野</h4>
              <div className="flex flex-wrap gap-1">
                {student.interests.map((interest, index) => (
                  <Badge key={index} variant="outline">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>自己紹介</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{student.bio}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>参加履歴</CardTitle>
              <CardDescription>これまでに参加したボランティア活動</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="history">
                <TabsList className="mb-4">
                  <TabsTrigger value="history">参加履歴</TabsTrigger>
                  <TabsTrigger value="stats">活動統計</TabsTrigger>
                </TabsList>
                <TabsContent value="history">
                  {student.events.length > 0 ? (
                    <div className="space-y-4">
                      {student.events.map((event, index) => (
                        <div key={index} className="border rounded-lg p-4">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                            <div>
                              <h4 className="font-medium">{event.name}</h4>
                              <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-y-1">
                                <div className="flex items-center mr-3">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {event.date}
                                </div>
                                <div className="flex items-center mr-3">
                                  <Clock3 className="h-3 w-3 mr-1" />
                                  {event.period}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  合計: {event.hours}時間
                                </div>
                              </div>
                            </div>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-100 w-fit">
                              {event.status}
                            </Badge>
                          </div>
                          <div className="mt-3 border-t pt-2">
                            <p className="text-sm font-medium">活動内容:</p>
                            <p className="text-sm text-muted-foreground mb-2">{event.content}</p>
                            <p className="text-sm font-medium">フィードバック:</p>
                            <p className="text-sm text-muted-foreground">{event.feedback}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>参加履歴はまだありません</p>
                    </div>
                  )}
                </TabsContent>
                <TabsContent value="stats">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold">{student.events.length}</div>
                          <p className="text-sm text-muted-foreground">参加回数</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold">
                            {student.events.reduce((total, event) => total + event.hours, 0)}
                          </div>
                          <p className="text-sm text-muted-foreground">活動時間（時間）</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold">4.8</div>
                          <p className="text-sm text-muted-foreground">平均評価（5段階）</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium mb-2">獲得した認定</h4>
                    <div className="flex flex-wrap gap-2">
                      <div className="flex items-center border rounded-full px-3 py-1">
                        <Award className="h-4 w-4 mr-2 text-amber-500" />
                        <span className="text-sm">子ども支援スペシャリスト</span>
                      </div>
                      <div className="flex items-center border rounded-full px-3 py-1">
                        <Award className="h-4 w-4 mr-2 text-emerald-500" />
                        <span className="text-sm">環境保全ボランティア</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
