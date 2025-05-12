import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Filter, User } from "lucide-react"
import Link from "next/link"

export default function StudentsListPage() {
  // 学生データ（実際のアプリではAPIから取得）
  const students = [
    {
      id: "1",
      name: "田中 美咲",
      university: "東京大学・教育学部",
      event: "子ども教育支援",
      date: "2023/10/15",
      status: "参加済み",
      skills: ["教育", "英語"],
    },
    {
      id: "2",
      name: "佐藤 健太",
      university: "慶應義塾大学・環境学部",
      event: "海岸清掃プロジェクト",
      date: "2023/09/23",
      status: "参加済み",
      skills: ["環境保全", "リーダーシップ"],
    },
    {
      id: "3",
      name: "山田 花子",
      university: "早稲田大学・社会学部",
      event: "高齢者サポート",
      date: "2023/11/05",
      status: "参加確定",
      skills: ["介護", "コミュニケーション"],
    },
    {
      id: "4",
      name: "鈴木 大輔",
      university: "立命館大学・情報学部",
      event: "子ども教育支援",
      date: "2023/10/22",
      status: "参加済み",
      skills: ["プログラミング", "教育"],
    },
    {
      id: "5",
      name: "伊藤 さくら",
      university: "同志社大学・心理学部",
      event: "高齢者サポート",
      date: "-",
      status: "申請中",
      skills: ["カウンセリング", "傾聴"],
    },
  ]

  return (
    <main className="flex-1 container">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">参加学生一覧</h2>
          <p className="text-muted-foreground">あなたのボランティア活動に参加した学生の一覧です。</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>エクスポート</span>
          </Button>
        </div>
      </div>

      <Card className="shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle>参加学生</CardTitle>
          <CardDescription>
            合計 <span className="font-medium">42</span> 名の学生が参加しています
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="名前、大学、専攻で検索..." className="pl-8" />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="イベント" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">すべてのイベント</SelectItem>
                  <SelectItem value="event1">海岸清掃プロジェクト</SelectItem>
                  <SelectItem value="event2">子ども教育支援</SelectItem>
                  <SelectItem value="event3">高齢者サポート</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="参加状況" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">すべての状況</SelectItem>
                  <SelectItem value="completed">参加済み</SelectItem>
                  <SelectItem value="confirmed">参加確定</SelectItem>
                  <SelectItem value="pending">申請中</SelectItem>
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
                  <TableHead className="hidden md:table-cell">参加イベント</TableHead>
                  <TableHead className="hidden md:table-cell">参加日</TableHead>
                  <TableHead>状況</TableHead>
                  <TableHead className="hidden lg:table-cell">スキル</TableHead>
                  <TableHead className="text-right">アクション</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>
                      <Link
                        href={`/dashboard/students/${student.id}`}
                        className="flex items-center gap-2 hover:underline font-medium"
                      >
                        <User className="h-4 w-4" />
                        {student.name}
                      </Link>
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">{student.university}</TableCell>
                    <TableCell className="hidden md:table-cell">{student.event}</TableCell>
                    <TableCell className="hidden md:table-cell">{student.date}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          student.status === "参加済み"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : student.status === "参加確定"
                              ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                        }
                      >
                        {student.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      <div className="flex gap-1">
                        {student.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link href={`/dashboard/students/${student.id}`}>
                        <Button variant="ghost" size="sm" className="">
                          詳細
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="md:hidden mt-4 space-y-4">
            <h3 className="text-sm font-medium mb-2">モバイル表示</h3>
            {students.map((student) => (
              <Card key={student.id} className="transition-all duration-300 hover:shadow-md">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <Link href={`/dashboard/students/${student.id}`} className="hover:underline">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <h3 className="font-medium">{student.name}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{student.university}</p>
                    </Link>
                    <Badge
                      className={
                        student.status === "参加済み"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : student.status === "参加確定"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-100"
                            : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                      }
                    >
                      {student.status}
                    </Badge>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="font-medium">イベント:</p>
                      <p className="text-muted-foreground">{student.event}</p>
                    </div>
                    <div>
                      <p className="font-medium">参加日:</p>
                      <p className="text-muted-foreground">{student.date}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium mb-1">スキル:</p>
                    <div className="flex flex-wrap gap-1">
                      {student.skills.map((skill, i) => (
                        <Badge key={i} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <Link href={`/dashboard/students/${student.id}`}>
                      <Button variant="ghost" size="sm" className="">
                        詳細
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center justify-end space-x-2 py-4">
            <Button variant="outline" size="sm" className="">
              前へ
            </Button>
            <Button variant="outline" size="sm" className="">
              次へ
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
