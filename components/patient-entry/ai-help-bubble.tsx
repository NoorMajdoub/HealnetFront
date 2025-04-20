"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, X, Mic, Send } from "lucide-react"

export function AIHelpBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = () => {
    if (!message.trim()) return
    // In a real app, this would send the message to an AI service
    setMessage("")
  }

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <Button
          onClick={toggleOpen}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-sky-600 hover:bg-sky-700 shadow-lg z-50"
          aria-label="Get AI Help"
        >
          <Bot className="h-6 w-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[350px] shadow-xl z-50">
          <CardHeader className="p-3 border-b flex flex-row items-center justify-between bg-sky-600 text-white rounded-t-lg">
            <div className="flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              <span className="font-medium">AI Medical Assistant</span>
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:bg-sky-700" onClick={toggleOpen}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="p-3 h-[300px] overflow-y-auto">
            <div className="bg-gray-100 rounded-lg p-3 mb-3">
              <p className="text-sm">
                Hello! I'm here to help you through the medical assessment process. How can I assist you today?
              </p>
            </div>
          </CardContent>

          <CardFooter className="p-3 border-t">
            <div className="flex w-full items-center space-x-2">
              <Button variant="ghost" size="icon" className="flex-shrink-0" aria-label="Voice input">
                <Mic className="h-5 w-5" />
              </Button>
              <Input
                placeholder="Ask me anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
              />
              <Button
                size="icon"
                className="flex-shrink-0 bg-sky-600 hover:bg-sky-700"
                onClick={handleSendMessage}
                disabled={!message.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  )
}
