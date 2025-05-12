import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Info, AlertTriangle, X, Heart, Star } from "lucide-react"

export default function ColorShowcasePage() {
  return (
    <main className="flex-1 container py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-primary">カラーショーケース</h1>
        <p className="text-muted-foreground">システムで使用可能な色のサンプルとコンポーネント例</p>
      </div>

      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="mb-4 bg-primary/10">
          <TabsTrigger
            value="colors"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            カラーパレット
          </TabsTrigger>
          <TabsTrigger
            value="buttons"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            ボタン
          </TabsTrigger>
          <TabsTrigger
            value="badges"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            バッジ
          </TabsTrigger>
          <TabsTrigger
            value="cards"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            カード
          </TabsTrigger>
        </TabsList>

        <TabsContent value="colors">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ColorPaletteCard
              title="プライマリ"
              description="メインカラー（ティール）"
              colors={[
                { name: "primary-50", class: "bg-primary-50" },
                { name: "primary-100", class: "bg-primary-100" },
                { name: "primary-200", class: "bg-primary-200" },
                { name: "primary-300", class: "bg-primary-300" },
                { name: "primary-400", class: "bg-primary-400" },
                { name: "primary-500", class: "bg-primary-500 text-white" },
                { name: "primary-600", class: "bg-primary-600 text-white" },
                { name: "primary-700", class: "bg-primary-700 text-white" },
                { name: "primary-800", class: "bg-primary-800 text-white" },
                { name: "primary-900", class: "bg-primary-900 text-white" },
              ]}
            />

            <ColorPaletteCard
              title="アクセント"
              description="アクセントカラー（オレンジ）"
              colors={[
                { name: "accent-50", class: "bg-accent-50" },
                { name: "accent-100", class: "bg-accent-100" },
                { name: "accent-200", class: "bg-accent-200" },
                { name: "accent-300", class: "bg-accent-300" },
                { name: "accent-400", class: "bg-accent-400" },
                { name: "accent-500", class: "bg-accent-500 text-white" },
                { name: "accent-600", class: "bg-accent-600 text-white" },
                { name: "accent-700", class: "bg-accent-700 text-white" },
                { name: "accent-800", class: "bg-accent-800 text-white" },
                { name: "accent-900", class: "bg-accent-900 text-white" },
              ]}
            />

            <ColorPaletteCard
              title="サクセス"
              description="成功・完了を表す色（緑）"
              colors={[
                { name: "success-50", class: "bg-success-50" },
                { name: "success-100", class: "bg-success-100" },
                { name: "success-500", class: "bg-success-500 text-white" },
                { name: "success-600", class: "bg-success-600 text-white" },
                { name: "success-700", class: "bg-success-700 text-white" },
              ]}
            />

            <ColorPaletteCard
              title="インフォ"
              description="情報を表す色（青）"
              colors={[
                { name: "info-50", class: "bg-info-50" },
                { name: "info-100", class: "bg-info-100" },
                { name: "info-500", class: "bg-info-500 text-white" },
                { name: "info-600", class: "bg-info-600 text-white" },
                { name: "info-700", class: "bg-info-700 text-white" },
              ]}
            />

            <ColorPaletteCard
              title="ワーニング"
              description="警告を表す色（黄）"
              colors={[
                { name: "warning-50", class: "bg-warning-50" },
                { name: "warning-100", class: "bg-warning-100" },
                { name: "warning-500", class: "bg-warning-500 text-white" },
                { name: "warning-600", class: "bg-warning-600 text-white" },
                { name: "warning-700", class: "bg-warning-700 text-white" },
              ]}
            />

            <ColorPaletteCard
              title="デンジャー"
              description="危険・エラーを表す色（赤）"
              colors={[
                { name: "danger-50", class: "bg-danger-50" },
                { name: "danger-100", class: "bg-danger-100" },
                { name: "danger-500", class: "bg-danger-500 text-white" },
                { name: "danger-600", class: "bg-danger-600 text-white" },
                { name: "danger-700", class: "bg-danger-700 text-white" },
              ]}
            />

            <ColorPaletteCard
              title="パープル"
              description="特別なカテゴリを表す色（紫）"
              colors={[
                { name: "purple-50", class: "bg-purple-50" },
                { name: "purple-100", class: "bg-purple-100" },
                { name: "purple-500", class: "bg-purple-500 text-white" },
                { name: "purple-600", class: "bg-purple-600 text-white" },
                { name: "purple-700", class: "bg-purple-700 text-white" },
              ]}
            />

            <ColorPaletteCard
              title="ピンク"
              description="特別なアクセントを表す色（ピンク）"
              colors={[
                { name: "pink-50", class: "bg-pink-50" },
                { name: "pink-100", class: "bg-pink-100" },
                { name: "pink-500", class: "bg-pink-500 text-white" },
                { name: "pink-600", class: "bg-pink-600 text-white" },
                { name: "pink-700", class: "bg-pink-700 text-white" },
              ]}
            />
          </div>
        </TabsContent>

        <TabsContent value="buttons">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ソリッドボタン</CardTitle>
                <CardDescription>背景色が塗りつぶされたボタン</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>プライマリ</Button>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">アクセント</Button>
                  <Button className="btn-success">サクセス</Button>
                  <Button className="btn-info">インフォ</Button>
                  <Button className="btn-warning">ワーニング</Button>
                  <Button className="btn-danger">デンジャー</Button>
                  <Button className="btn-purple">パープル</Button>
                  <Button className="btn-pink">ピンク</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">スモール</Button>
                  <Button>デフォルト</Button>
                  <Button size="lg">ラージ</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button className="rounded-full">丸型</Button>
                  <Button className="rounded-md">角丸</Button>
                  <Button className="rounded-none">四角</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>アウトラインボタン</CardTitle>
                <CardDescription>枠線のみのボタン</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline">プライマリ</Button>
                  <Button
                    variant="outline"
                    className="border-accent/30 text-accent-foreground hover:bg-accent/10 hover:text-accent-foreground hover:border-accent"
                  >
                    アクセント
                  </Button>
                  <Button variant="outline" className="btn-outline-success">
                    サクセス
                  </Button>
                  <Button variant="outline" className="btn-outline-info">
                    インフォ
                  </Button>
                  <Button variant="outline" className="btn-outline-warning">
                    ワーニング
                  </Button>
                  <Button variant="outline" className="btn-outline-danger">
                    デンジャー
                  </Button>
                  <Button variant="outline" className="btn-outline-purple">
                    パープル
                  </Button>
                  <Button variant="outline" className="btn-outline-pink">
                    ピンク
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" size="sm">
                    スモール
                  </Button>
                  <Button variant="outline">デフォルト</Button>
                  <Button variant="outline" size="lg">
                    ラージ
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="rounded-full">
                    丸型
                  </Button>
                  <Button variant="outline" className="rounded-md">
                    角丸
                  </Button>
                  <Button variant="outline" className="rounded-none">
                    四角
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>アイコン付きボタン</CardTitle>
                <CardDescription>アイコンを含むボタン</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button>
                    <Check className="mr-2 h-4 w-4" /> プライマリ
                  </Button>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Info className="mr-2 h-4 w-4" /> アクセント
                  </Button>
                  <Button className="btn-success">
                    <Check className="mr-2 h-4 w-4" /> サクセス
                  </Button>
                  <Button className="btn-info">
                    <Info className="mr-2 h-4 w-4" /> インフォ
                  </Button>
                  <Button className="btn-warning">
                    <AlertTriangle className="mr-2 h-4 w-4" /> ワーニング
                  </Button>
                  <Button className="btn-danger">
                    <X className="mr-2 h-4 w-4" /> デンジャー
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="btn-outline-success">
                    サクセス <Check className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="btn-outline-info">
                    インフォ <Info className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="btn-outline-warning">
                    ワーニング <AlertTriangle className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="btn-outline-danger">
                    デンジャー <X className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button className="btn-purple">
                    <Heart className="mr-2 h-4 w-4" /> パープル
                  </Button>
                  <Button className="btn-pink">
                    <Star className="mr-2 h-4 w-4" /> ピンク
                  </Button>
                  <Button variant="outline" className="btn-outline-purple">
                    パープル <Heart className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="btn-outline-pink">
                    ピンク <Star className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>特殊ボタン</CardTitle>
                <CardDescription>特殊なスタイルのボタン</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Button variant="ghost">ゴースト</Button>
                  <Button variant="link">リンク</Button>
                  <Button variant="destructive">デストラクティブ</Button>
                  <Button variant="secondary">セカンダリ</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button className="bg-gradient-to-r from-primary to-info text-white hover:from-primary-600 hover:to-info-600">
                    グラデーション 1
                  </Button>
                  <Button className="bg-gradient-to-r from-purple to-pink text-white hover:from-purple-600 hover:to-pink-600">
                    グラデーション 2
                  </Button>
                  <Button className="bg-gradient-to-r from-success to-info text-white hover:from-success-600 hover:to-info-600">
                    グラデーション 3
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button className="shadow-lg shadow-primary/30">シャドウ 1</Button>
                  <Button className="shadow-lg shadow-accent/30 bg-accent text-accent-foreground hover:bg-accent/90">
                    シャドウ 2
                  </Button>
                  <Button className="shadow-lg shadow-success/30 btn-success">シャドウ 3</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="badges">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>ステータスバッジ</CardTitle>
                <CardDescription>ステータスを表すバッジ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="status-badge-recruiting">募集中</Badge>
                  <Badge className="status-badge-ongoing">開催中</Badge>
                  <Badge className="status-badge-closed">募集締切</Badge>
                  <Badge className="status-badge-completed">終了</Badge>
                  <Badge className="status-badge-approved">承認済み</Badge>
                  <Badge className="status-badge-pending">申請中</Badge>
                  <Badge className="status-badge-rejected">却下</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 text-primary hover:bg-primary/30">プライマリ</Badge>
                  <Badge className="bg-accent/20 text-accent-foreground hover:bg-accent/30">アクセント</Badge>
                  <Badge className="bg-success/20 text-success-700 hover:bg-success/30">サクセス</Badge>
                  <Badge className="bg-info/20 text-info-700 hover:bg-info/30">インフォ</Badge>
                  <Badge className="bg-warning/20 text-warning-700 hover:bg-warning/30">ワーニング</Badge>
                  <Badge className="bg-danger/20 text-danger-700 hover:bg-danger/30">デンジャー</Badge>
                  <Badge className="bg-purple/20 text-purple-700 hover:bg-purple/30">パープル</Badge>
                  <Badge className="bg-pink/20 text-pink-700 hover:bg-pink/30">ピンク</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>カテゴリーバッジ</CardTitle>
                <CardDescription>カテゴリーを表すバッジ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="category-badge-education">教育支援</Badge>
                  <Badge className="category-badge-environment">環境保全</Badge>
                  <Badge className="category-badge-elderly">高齢者支援</Badge>
                  <Badge className="category-badge-children">子ども支援</Badge>
                  <Badge className="category-badge-event">イベント運営</Badge>
                  <Badge className="category-badge-international">国際協力</Badge>
                  <Badge className="category-badge-community">地域活動</Badge>
                  <Badge className="category-badge-disaster">災害支援</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-primary/30 bg-primary/5">
                    プライマリ
                  </Badge>
                  <Badge variant="outline" className="border-accent/30 bg-accent/5">
                    アクセント
                  </Badge>
                  <Badge variant="outline" className="border-success/30 bg-success/5">
                    サクセス
                  </Badge>
                  <Badge variant="outline" className="border-info/30 bg-info/5">
                    インフォ
                  </Badge>
                  <Badge variant="outline" className="border-warning/30 bg-warning/5">
                    ワーニング
                  </Badge>
                  <Badge variant="outline" className="border-danger/30 bg-danger/5">
                    デンジャー
                  </Badge>
                  <Badge variant="outline" className="border-purple/30 bg-purple/5">
                    パープル
                  </Badge>
                  <Badge variant="outline" className="border-pink/30 bg-pink/5">
                    ピンク
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>特殊バッジ</CardTitle>
                <CardDescription>特殊なスタイルのバッジ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="rounded-full">丸型バッジ</Badge>
                  <Badge className="rounded-md">角丸バッジ</Badge>
                  <Badge className="rounded-none">四角バッジ</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gradient-to-r from-primary to-info text-white">グラデーション 1</Badge>
                  <Badge className="bg-gradient-to-r from-purple to-pink text-white">グラデーション 2</Badge>
                  <Badge className="bg-gradient-to-r from-success to-info text-white">グラデーション 3</Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className="shadow-sm shadow-primary/30">シャドウ 1</Badge>
                  <Badge className="shadow-sm shadow-accent/30 bg-accent text-accent-foreground">シャドウ 2</Badge>
                  <Badge className="shadow-sm shadow-success/30 bg-success text-success-foreground">シャドウ 3</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>アイコン付きバッジ</CardTitle>
                <CardDescription>アイコンを含むバッジ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>
                    <Check className="mr-1 h-3 w-3" /> 完了
                  </Badge>
                  <Badge className="bg-accent text-accent-foreground">
                    <Info className="mr-1 h-3 w-3" /> 情報
                  </Badge>
                  <Badge className="bg-success text-success-foreground">
                    <Check className="mr-1 h-3 w-3" /> 成功
                  </Badge>
                  <Badge className="bg-info text-info-foreground">
                    <Info className="mr-1 h-3 w-3" /> 情報
                  </Badge>
                  <Badge className="bg-warning text-warning-foreground">
                    <AlertTriangle className="mr-1 h-3 w-3" /> 警告
                  </Badge>
                  <Badge className="bg-danger text-danger-foreground">
                    <X className="mr-1 h-3 w-3" /> エラー
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-success/30 bg-success/5">
                    <Check className="mr-1 h-3 w-3 text-success" /> 完了
                  </Badge>
                  <Badge variant="outline" className="border-info/30 bg-info/5">
                    <Info className="mr-1 h-3 w-3 text-info" /> 情報
                  </Badge>
                  <Badge variant="outline" className="border-warning/30 bg-warning/5">
                    <AlertTriangle className="mr-1 h-3 w-3 text-warning" /> 警告
                  </Badge>
                  <Badge variant="outline" className="border-danger/30 bg-danger/5">
                    <X className="mr-1 h-3 w-3 text-danger" /> エラー
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cards">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-primary">
              <CardHeader className="bg-primary/5">
                <CardTitle className="text-primary">プライマリカード</CardTitle>
                <CardDescription>プライマリカラーを使用したカード</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm">
                  プライマリカラー（ティール）を使用したカードです。ボーダーやヘッダーの背景色にプライマリカラーを使用しています。
                </p>
                <Button className="mt-4 w-full">アクション</Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-accent">
              <CardHeader className="bg-accent/5">
                <CardTitle className="text-accent">アクセントカード</CardTitle>
                <CardDescription>アクセントカラーを使用したカード</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm">
                  アクセントカラー（オレンジ）を使用したカードです。ボーダーやヘッダーの背景色にアクセントカラーを使用しています。
                </p>
                <Button className="mt-4 w-full bg-accent text-accent-foreground hover:bg-accent/90">アクション</Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-success">
              <CardHeader className="bg-success/5">
                <CardTitle className="text-success">サクセスカード</CardTitle>
                <CardDescription>サクセスカラーを使用したカード</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm">
                  サクセスカラー（緑）を使用したカードです。ボーダーやヘッダーの背景色にサクセスカラーを使用しています。
                </p>
                <Button className="mt-4 w-full btn-success">アクション</Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-info">
              <CardHeader className="bg-info/5">
                <CardTitle className="text-info">インフォカード</CardTitle>
                <CardDescription>インフォカラーを使用したカード</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm">
                  インフォカラー（青）を使用したカードです。ボーダーやヘッダーの背景色にインフォカラーを使用しています。
                </p>
                <Button className="mt-4 w-full btn-info">アクション</Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-warning">
              <CardHeader className="bg-warning/5">
                <CardTitle className="text-warning">ワーニングカード</CardTitle>
                <CardDescription>ワーニングカラーを使用したカード</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm">
                  ワーニングカラー（黄）を使用したカードです。ボーダーやヘッダーの背景色にワーニングカラーを使用しています。
                </p>
                <Button className="mt-4 w-full btn-warning">アクション</Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-danger">
              <CardHeader className="bg-danger/5">
                <CardTitle className="text-danger">デンジャーカード</CardTitle>
                <CardDescription>デンジャーカラーを使用したカード</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm">
                  デンジャーカラー（赤）を使用したカードです。ボーダーやヘッダーの背景色にデンジャーカラーを使用しています。
                </p>
                <Button className="mt-4 w-full btn-danger">アクション</Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-purple">
              <CardHeader className="bg-purple/5">
                <CardTitle className="text-purple">パープルカード</CardTitle>
                <CardDescription>パープルカラーを使用したカード</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm">
                  パープルカラー（紫）を使用したカードです。ボーダーやヘッダーの背景色にパープルカラーを使用しています。
                </p>
                <Button className="mt-4 w-full btn-purple">アクション</Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-pink">
              <CardHeader className="bg-pink/5">
                <CardTitle className="text-pink">ピンクカード</CardTitle>
                <CardDescription>ピンクカラーを使用したカード</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm">
                  ピンクカラー（ピンク）を使用したカードです。ボーダーやヘッダーの背景色にピンクカラーを使用しています。
                </p>
                <Button className="mt-4 w-full btn-pink">アクション</Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-info/5">
              <CardHeader>
                <CardTitle className="text-gradient-primary">グラデーションカード 1</CardTitle>
                <CardDescription>グラデーションを使用したカード</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-sm">
                  プライマリカラーとインフォカラーのグラデーションを使用したカードです。背景色とテキストにグラデーションを使用しています。
                </p>
                <Button className="mt-4 w-full bg-gradient-to-r from-primary to-info text-white hover:from-primary-600 hover:to-info-600">
                  アクション
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}

// カラーパレットカードコンポーネント
function ColorPaletteCard({ title, description, colors }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color.name} className="flex items-center">
              <div className={`w-8 h-8 rounded mr-2 ${color.class}`}></div>
              <span className="text-sm">{color.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
