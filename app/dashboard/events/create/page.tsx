"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { ArrowLeft, Calendar, Clock, MapPin, Users, FileImage, Building, Loader2, Camera, Upload } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CreateEventPage() {
  const router = useRouter()
  const { toast } = useToast()

  // フォームの状態
  const [formData, setFormData] = useState({
    title: "",
    organization: "NPO法人 子ども未来サポート", // デフォルト値
    location: "",
    address: "",
    time: "",
    category: "",
    participants: "",
    description: "",
    requirements: "",
    learnings: "",
    preparation: "",
    deadline: "",
    publish: true,
    autoApprove: false,
    skills: {
      education: false,
      communication: false,
      programming: false,
      language: false,
    },
  })

  // 日付範囲の状態
  const [dateRange, setDateRange] = useState({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 7)),
  })

  // エラー状態
  const [errors, setErrors] = useState({})

  // 送信中の状態
  const [isSubmitting, setIsSubmitting] = useState(false)

  // 入力値の変更ハンドラ
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // チェックボックスの変更ハンドラ
  const handleCheckboxChange = (name, checked) => {
    if (name.startsWith("skill-")) {
      const skillName = name.replace("skill-", "")
      setFormData((prev) => ({
        ...prev,
        skills: {
          ...prev.skills,
          [skillName]: checked,
        },
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }))
    }
  }

  // セレクトの変更ハンドラ
  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // フォームの検証
  const validateForm = () => {
    const newErrors = {}

    if (!formData.title.trim()) newErrors.title = "タイトルを入力してください"
    if (!formData.organization.trim()) newErrors.organization = "運営団体名を入力してください"
    if (!formData.location.trim()) newErrors.location = "開催場所を入力してください"
    if (!formData.address.trim()) newErrors.address = "住所を入力してください"
    if (!formData.time.trim()) newErrors.time = "作業時間を入力してください"
    if (!formData.category) newErrors.category = "カテゴリーを選択してください"
    if (!formData.participants) newErrors.participants = "募集人数を入力してください"
    if (!formData.description.trim()) newErrors.description = "作業詳細を入力してください"
    if (!formData.requirements.trim()) newErrors.requirements = "求める人物像を入力してください"
    if (!formData.learnings.trim()) newErrors.learnings = "活動を通して学べることを入力してください"

    if (!dateRange.from || !dateRange.to) newErrors.dateRange = "活動期間を選択してください"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // フォーム送信ハンドラ
  const handleSubmit = async (isDraft = false) => {
    if (!isDraft && !validateForm()) {
      toast({
        title: "入力エラー",
        description: "必須項目を入力してください",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // 実際のアプリではここでAPIリクエストを行う
      // 今回はモックとして3秒待機
      await new Promise((resolve) => setTimeout(resolve, 3000))

      toast({
        title: isDraft ? "下書き保存しました" : "募集を公開しました",
        description: isDraft
          ? "ボランティア募集を下書きとして保存しました。後で編集できます。"
          : `「${formData.title}」の募集を公開しました。応募者を待ちましょう！`,
      })

      // 成功したらマイページに遷移
      router.push("/dashboard/mypage")
    } catch (error) {
      console.error("Error submitting form:", error)
      toast({
        title: "エラーが発生しました",
        description: "ボランティア募集の保存に失敗しました。もう一度お試しください。",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="flex-1 container pb-12">
      <div className="mb-6">
        <Link href="/dashboard/mypage" className="flex items-center text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          マイページに戻る
        </Link>

        <h1 className="text-2xl font-bold tracking-tight">新規ボランティア募集</h1>
        <p className="text-muted-foreground">ボランティア活動の詳細を入力して募集を開始しましょう</p>
      </div>

      {/* モバイル向けタブナビゲーション */}
      <div className="md:hidden mb-6">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="basic">基本情報</TabsTrigger>
            <TabsTrigger value="details">活動内容</TabsTrigger>
            <TabsTrigger value="settings">設定</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <MobileBasicInfoForm
              formData={formData}
              dateRange={dateRange}
              errors={errors}
              handleChange={handleChange}
              handleSelectChange={handleSelectChange}
              setDateRange={setDateRange}
            />
          </TabsContent>

          <TabsContent value="details">
            <MobileDetailsForm formData={formData} errors={errors} handleChange={handleChange} />
          </TabsContent>

          <TabsContent value="settings">
            <MobileSettingsForm
              formData={formData}
              errors={errors}
              handleChange={handleChange}
              handleCheckboxChange={handleCheckboxChange}
              isSubmitting={isSubmitting}
              handleSubmit={handleSubmit}
            />
          </TabsContent>
        </Tabs>
      </div>

      {/* デスクトップ向けレイアウト */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>基本情報</CardTitle>
              <CardDescription>ボランティア活動の基本情報を入力してください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title" className={errors.title ? "text-destructive" : ""}>
                  タイトル <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="例：子ども学習支援ボランティア"
                  className={errors.title ? "border-destructive" : ""}
                />
                {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="organization" className={errors.organization ? "text-destructive" : ""}>
                  運営団体名 <span className="text-destructive">*</span>
                </Label>
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-muted-foreground" />
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="例：NPO法人 子ども未来サポート"
                    className={errors.organization ? "border-destructive" : ""}
                  />
                </div>
                {errors.organization && <p className="text-xs text-destructive">{errors.organization}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className={errors.dateRange ? "text-destructive" : ""}>
                    活動期間 <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <DatePickerWithRange value={dateRange} onChange={setDateRange} />
                  </div>
                  {errors.dateRange && <p className="text-xs text-destructive">{errors.dateRange}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className={errors.time ? "text-destructive" : ""}>
                    作業時間 <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <Input
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      placeholder="例：10:00〜16:00"
                      className={errors.time ? "border-destructive" : ""}
                    />
                  </div>
                  {errors.time && <p className="text-xs text-destructive">{errors.time}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className={errors.location ? "text-destructive" : ""}>
                  開催場所 <span className="text-destructive">*</span>
                </Label>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="例：東京都新宿区コミュニティセンター"
                    className={errors.location ? "border-destructive" : ""}
                  />
                </div>
                {errors.location && <p className="text-xs text-destructive">{errors.location}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className={errors.address ? "text-destructive" : ""}>
                  住所 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="例：東京都新宿区西新宿2-8-1"
                  className={errors.address ? "border-destructive" : ""}
                />
                {errors.address && <p className="text-xs text-destructive">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="category" className={errors.category ? "text-destructive" : ""}>
                    カテゴリー <span className="text-destructive">*</span>
                  </Label>
                  <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
                    <SelectTrigger className={errors.category ? "border-destructive" : ""}>
                      <SelectValue placeholder="カテゴリーを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">教育支援</SelectItem>
                      <SelectItem value="environment">環境保全</SelectItem>
                      <SelectItem value="elderly">高齢者支援</SelectItem>
                      <SelectItem value="disaster">災害支援</SelectItem>
                      <SelectItem value="community">地域活動</SelectItem>
                      <SelectItem value="international">国際協力</SelectItem>
                      <SelectItem value="other">その他</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.category && <p className="text-xs text-destructive">{errors.category}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="participants" className={errors.participants ? "text-destructive" : ""}>
                    募集人数 <span className="text-destructive">*</span>
                  </Label>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <Input
                      id="participants"
                      name="participants"
                      value={formData.participants}
                      onChange={handleChange}
                      type="number"
                      min="1"
                      placeholder="例：10"
                      className={errors.participants ? "border-destructive" : ""}
                    />
                  </div>
                  {errors.participants && <p className="text-xs text-destructive">{errors.participants}</p>}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>活動内容</CardTitle>
              <CardDescription>ボランティア活動の詳細な内容を入力してください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description" className={errors.description ? "text-destructive" : ""}>
                  作業詳細 <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="活動の目的や具体的な作業内容について詳しく記入してください"
                  className={`min-h-[150px] ${errors.description ? "border-destructive" : ""}`}
                />
                {errors.description && <p className="text-xs text-destructive">{errors.description}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements" className={errors.requirements ? "text-destructive" : ""}>
                  求める人物像 <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                  placeholder="どのような人に参加してほしいか、必要なスキルや資質について記入してください"
                  className={`min-h-[100px] ${errors.requirements ? "border-destructive" : ""}`}
                />
                {errors.requirements && <p className="text-xs text-destructive">{errors.requirements}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="learnings" className={errors.learnings ? "text-destructive" : ""}>
                  活動を通して学べること <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="learnings"
                  name="learnings"
                  value={formData.learnings}
                  onChange={handleChange}
                  placeholder="この活動を通して参加者が得られる経験や学びについて記入してください"
                  className={`min-h-[100px] ${errors.learnings ? "border-destructive" : ""}`}
                />
                {errors.learnings && <p className="text-xs text-destructive">{errors.learnings}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="preparation">持ち物・服装</Label>
                <Textarea
                  id="preparation"
                  name="preparation"
                  value={formData.preparation}
                  onChange={handleChange}
                  placeholder="参加者が準備すべき持ち物や服装について記入してください"
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>画像とメディア</CardTitle>
              <CardDescription>活動のイメージ画像をアップロードしてください</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center hover:border-muted-foreground transition-colors cursor-pointer">
                <div className="flex flex-col items-center justify-center">
                  <FileImage className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-2">
                    画像をドラッグ＆ドロップするか、クリックしてアップロード
                  </p>
                  <p className="text-xs text-muted-foreground">推奨サイズ: 1200 x 630px (最大5MB)</p>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      画像を選択
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>募集設定</CardTitle>
              <CardDescription>募集の公開設定を行います</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deadline">応募締切日</Label>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <Input id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label>公開設定</Label>
                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox
                    id="publish"
                    checked={formData.publish}
                    onCheckedChange={(checked) => handleCheckboxChange("publish", checked)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="publish"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      すぐに公開する
                    </label>
                    <p className="text-sm text-muted-foreground">チェックを外すと下書き保存されます</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>応募確認</Label>
                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox
                    id="auto-approve"
                    checked={formData.autoApprove}
                    onCheckedChange={(checked) => handleCheckboxChange("autoApprove", checked)}
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="auto-approve"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      自動承認する
                    </label>
                    <p className="text-sm text-muted-foreground">チェックを入れると応募者を自動的に承認します</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>必要なスキル</Label>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="skill-education"
                      checked={formData.skills.education}
                      onCheckedChange={(checked) => handleCheckboxChange("skill-education", checked)}
                    />
                    <label htmlFor="skill-education" className="text-sm font-medium leading-none">
                      教育
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="skill-communication"
                      checked={formData.skills.communication}
                      onCheckedChange={(checked) => handleCheckboxChange("skill-communication", checked)}
                    />
                    <label htmlFor="skill-communication" className="text-sm font-medium leading-none">
                      コミュニケーション
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="skill-programming"
                      checked={formData.skills.programming}
                      onCheckedChange={(checked) => handleCheckboxChange("skill-programming", checked)}
                    />
                    <label htmlFor="skill-programming" className="text-sm font-medium leading-none">
                      プログラミング
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="skill-language"
                      checked={formData.skills.language}
                      onCheckedChange={(checked) => handleCheckboxChange("skill-language", checked)}
                    />
                    <label htmlFor="skill-language" className="text-sm font-medium leading-none">
                      語学（英語）
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              <Button className="w-full" onClick={() => handleSubmit(false)} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    処理中...
                  </>
                ) : (
                  "募集を公開する"
                )}
              </Button>
              <Button variant="outline" className="w-full" onClick={() => handleSubmit(true)} disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    処理中...
                  </>
                ) : (
                  "下書き保存"
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* モバイル向け固定フッター */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t p-4 flex gap-2 z-10">
        <Button variant="outline" className="flex-1" onClick={() => handleSubmit(true)} disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "下書き保存"}
        </Button>
        <Button className="flex-1" onClick={() => handleSubmit(false)} disabled={isSubmitting}>
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "募集を公開"}
        </Button>
      </div>
    </main>
  )
}

// モバイル向け基本情報フォームコンポーネント
function MobileBasicInfoForm({ formData, dateRange, errors, handleChange, handleSelectChange, setDateRange }) {
  return (
    <Card className="mb-20">
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="mobile-title" className={errors.title ? "text-destructive" : ""}>
            タイトル <span className="text-destructive">*</span>
          </Label>
          <Input
            id="mobile-title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="例：子ども学習支援ボランティア"
            className={errors.title ? "border-destructive" : ""}
          />
          {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile-organization" className={errors.organization ? "text-destructive" : ""}>
            運営団体名 <span className="text-destructive">*</span>
          </Label>
            : ""}>
            運営団体名 <span className="text-destructive">*</span>
          </Label>
          <div className="flex items-center gap-2">
            <Building className="h-4 w-4 text-muted-foreground" />
            <Input
              id="mobile-organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="例：NPO法人 子ども未来サポート"
              className={errors.organization ? "border-destructive" : ""}
            />
          </div>
          {errors.organization && <p className="text-xs text-destructive">{errors.organization}</p>}
        </div>

        <div className="space-y-2">
          <Label className={errors.dateRange ? "text-destructive" : ""}>
            活動期間 <span className="text-destructive">*</span>
          </Label>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <DatePickerWithRange value={dateRange} onChange={setDateRange} />
          </div>
          {errors.dateRange && <p className="text-xs text-destructive">{errors.dateRange}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile-time" className={errors.time ? "text-destructive" : ""}>
            作業時間 <span className="text-destructive">*</span>
          </Label>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <Input
              id="mobile-time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              placeholder="例：10:00〜16:00"
              className={errors.time ? "border-destructive" : ""}
            />
          </div>
          {errors.time && <p className="text-xs text-destructive">{errors.time}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile-location" className={errors.location ? "text-destructive" : ""}>
               開催場所 <span className="text-destructive">*</span>
          </Label>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <Input
              id="mobile-location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="例：東京都新宿区コミュニティセンター"
              className={errors.location ? "border-destructive" : ""}
            />
          </div>
          {errors.location && <p className="text-xs text-destructive">{errors.location}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile-address" className={errors.address ? "text-destructive" : ""}>
            住所 <span className="text-destructive">*</span>
          </Label>
          <Input
            id="mobile-address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="例：東京都新宿区西新宿2-8-1"
            className={errors.address ? "border-destructive" : ""}
          />
          {errors.address && <p className="text-xs text-destructive">{errors.address}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile-category" className={errors.category ? "text-destructive" : ""}>
            カテゴリー <span className="text-destructive">*</span>
          </Label>
          <Select value={formData.category} onValueChange={(value) => handleSelectChange("category", value)}>
            <SelectTrigger className={errors.category ? "border-destructive" : ""}>
              <SelectValue placeholder="カテゴリーを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="education">教育支援</SelectItem>
              <SelectItem value="environment">環境保全</SelectItem>
              <SelectItem value="elderly">高齢者支援</SelectItem>
              <SelectItem value="disaster">災害支援</SelectItem>
              <SelectItem value="community">地域活動</SelectItem>
              <SelectItem value="international">国際協力</SelectItem>
              <SelectItem value="other">その他</SelectItem>
            </SelectContent>
          </Select>
          {errors.category && <p className="text-xs text-destructive">{errors.category}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile-participants" className={errors.participants ? "text-destructive" : ""}>
            募集人数 <span className="text-destructive">*</span>
          </Label>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <Input
              id="mobile-participants"
              name="participants"
              value={formData.participants}
              onChange={handleChange}
              type="number"
              min="1"
              placeholder="例：10"
              className={errors.participants ? "border-destructive" : ""}
            />
          </div>
          {errors.participants && <p className="text-xs text-destructive">{errors.participants}</p>}
        </div>
      </CardContent>
  </Card>
  )
}

// モバイル向け活動内容フォームコンポーネント
function MobileDetailsForm({ formData, errors, handleChange }) {
  return (
    <Card className="mb-20">
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="mobile-description" className={errors.description ? "text-destructive" : ""}>
            作業詳細 <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="mobile-description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="活動の目的や具体的な作業内容について詳しく記入してください"
            className={`min-h-[120px] ${errors.description ? "border-destructive" : ""}`}
          />
          {errors.description && <p className="text-xs text-destructive">{errors.description}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile-requirements" className={errors.requirements ? "text-destructive" : ""}>
            求める人物像 <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="mobile-requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            placeholder="どのような人に参加してほしいか、必要なスキルや資質について記入してください"
            className={`min-h-[100px] ${errors.requirements ? "border-destructive" : ""}`}
          />
          {errors.requirements && <p className="text-xs text-destructive">{errors.requirements}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile-learnings" className={errors.learnings ? "text-destructive" : ""}>
            活動を通して学べること <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="mobile-learnings"
            name="learnings"
            value={formData.learnings}
            onChange={handleChange}
            placeholder="この活動を通して参加者が得られる経験や学びについて記入してください"
            className={`min-h-[100px] ${errors.learnings ? "border-destructive" : ""}`}
          />
          {errors.learnings && <p className="text-xs text-destructive">{errors.learnings}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile-preparation">持ち物・服装</Label>
          <Textarea
            id="mobile-preparation"
            name="preparation"
            value={formData.preparation}
            onChange={handleChange}
            placeholder="参加者が準備すべき持ち物や服装について記入してください"
            className="min-h-[100px]"
          />
        </div>

        <div className="space-y-2">
          <Label>画像アップロード</Label>
          <div className="border-2 border-dashed border-muted rounded-lg p-4 text-center hover:border-muted-foreground transition-colors">
            <div className="flex flex-col items-center justify-center">
              <FileImage className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-2">タップして画像をアップロード</p>
              <div className="flex gap-2 mt-2">
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  カメラ
                </Button>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  ギャラリー
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// モバイル向け設定フォームコンポーネント
function MobileSettingsForm({ formData, errors, handleChange, handleCheckboxChange, isSubmitting, handleSubmit }) {
  return (
    <Card className="mb-20">
      <CardContent className="pt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="mobile-deadline">応募締切日</Label>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <Input id="mobile-deadline" name="deadline" value={formData.deadline} onChange={handleChange} type="date" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>公開設定</Label>
          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="mobile-publish"
              checked={formData.publish}
              onCheckedChange={(checked) => handleCheckboxChange("publish", checked)}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="mobile-publish"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                すぐに公開する
              </label>
              <p className="text-sm text-muted-foreground">チェックを外すと下書き保存されます</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>応募確認</Label>
          <div className="flex items-start space-x-2 pt-2">
            <Checkbox
              id="mobile-auto-approve"
              checked={formData.autoApprove}
              onCheckedChange={(checked) => handleCheckboxChange("autoApprove", checked)}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="mobile-auto-approve"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                自動承認する
              </label>
              <p className="text-sm text-muted-foreground">チェックを入れると応募者を自動的に承認します</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>必要なスキル</Label>
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="mobile-skill-education"
                checked={formData.skills.education}
                onCheckedChange={(checked) => handleCheckboxChange("skill-education", checked)}
              />
              <label htmlFor="mobile-skill-education" className="text-sm font-medium leading-none">
                教育
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="mobile-skill-communication"
                checked={formData.skills.communication}
                onCheckedChange={(checked) => handleCheckboxChange("skill-communication", checked)}
              />
              <label htmlFor="mobile-skill-communication" className="text-sm font-medium leading-none">
                コミュニケーション
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="mobile-skill-programming"
                checked={formData.skills.programming}
                onCheckedChange={(checked) => handleCheckboxChange("skill-programming", checked)}
              />
              <label htmlFor="mobile-skill-programming" className="text-sm font-medium leading-none">
                プログラミング
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="mobile-skill-language"
                checked={formData.skills.language}
                onCheckedChange={(checked) => handleCheckboxChange("skill-language", checked)}
              />
              <label htmlFor="mobile-skill-language" className="text-sm font-medium leading-none">
                語学（英語）
              </label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
