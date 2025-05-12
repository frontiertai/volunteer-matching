import type React from "react"
import { Button } from "@/components/ui/button"
import { Menu, Bell, Home, Calendar, Users, MessageSquare, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // 未読メッセージ数（実際のアプリではAPIから取得）
  const unreadMessages = 3

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-black text-white py-4 shadow-sm">
        <div className="container flex items-center justify-between">
          <h1 className="text-xl font-bold">ボランティアマッチングシステム</h1>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/dashboard/mypage">
              <Button variant="ghost" className="text-white hover:bg-gray-800 hover:text-white">
                マイページ
              </Button>
            </Link>
            <Link href="/dashboard/events">
              <Button variant="ghost" className="text-white hover:bg-gray-800 hover:text-white">
                イベント管理
              </Button>
            </Link>
            <Link href="/dashboard/students">
              <Button variant="ghost" className="text-white hover:bg-gray-800 hover:text-white">
                参加者一覧
              </Button>
            </Link>
            <Link href="/dashboard/messages" className="relative">
              <Button variant="ghost" className="text-white hover:bg-gray-800 hover:text-white flex items-center gap-2">
                メッセージ
                {unreadMessages > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-orange-500 text-white">
                    {unreadMessages}
                  </Badge>
                )}
              </Button>
            </Link>
            <Button variant="ghost" className="text-white hover:bg-gray-800 hover:text-white">
              設定
            </Button>
          </nav>
          <div className="flex items-center gap-2 md:hidden">
            <Link href="/dashboard/messages" className="relative">
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                <Bell className="h-5 w-5" />
                {unreadMessages > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-orange-500 text-white">
                    {unreadMessages}
                  </Badge>
                )}
              </Button>
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">メニュー</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 mt-8">
                  <Link
                    href="/dashboard/mypage"
                    className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-blue-50"
                  >
                    <Home className="h-5 w-5 text-blue-600" />
                    <span>マイページ</span>
                  </Link>
                  <Link
                    href="/dashboard/events"
                    className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-blue-50"
                  >
                    <Calendar className="h-5 w-5 text-blue-600" />
                    <span>イベント管理</span>
                  </Link>
                  <Link
                    href="/dashboard/students"
                    className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-blue-50"
                  >
                    <Users className="h-5 w-5 text-blue-600" />
                    <span>参加者一覧</span>
                  </Link>
                  <Link
                    href="/dashboard/messages"
                    className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-blue-50"
                  >
                    <MessageSquare className="h-5 w-5 text-blue-600" />
                    <span>メッセージ</span>
                    {unreadMessages > 0 && <Badge className="bg-orange-500 text-white">{unreadMessages}</Badge>}
                  </Link>
                  <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-blue-50"
                  >
                    <Settings className="h-5 w-5 text-blue-600" />
                    <span>設定</span>
                  </Link>
                  <div className="border-t mt-4 pt-4">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <LogOut className="h-5 w-5 mr-2" />
                      ログアウト
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <div className="bg-gradient-to-b from-blue-50 to-transparent pt-6 pb-12">{children}</div>
    </div>
  )
}
