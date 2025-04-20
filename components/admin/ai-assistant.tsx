"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, X, Minimize, Maximize, Mic, Send } from "lucide-react"

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [conversation, setConversation] = useState<{ type: "user" | "assistant"; text: string }[]>([
    {
      type: "assistant",
      text: "Hello! I'm your AI Medical Assistant. How can I help you today?",
    },
  ])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
    if (isMinimized) setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message to conversation
    setConversation([...conversation, { type: "user", text: message }])

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(() => {
      setConversation((prev) => [
        ...prev,
        {
          type: "assistant",
          text: "I understand. Let me help you with that. What other information can you provide about the patient's condition?",
        },
      ])
    }, 1000)

    setMessage("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <Button
          onClick={toggleOpen}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-sky-600 hover:bg-sky-700 shadow-lg"
          aria-label="Open AI Assistant"
        >
          <Bot className="h-6 w-6" />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card
          className={`fixed right-6 shadow-xl transition-all duration-300 ${
            isMinimized ? "bottom-6 h-14 w-64" : "bottom-6 h-[500px] w-[350px] sm:w-[400px]"
          }`}
        >
          <CardHeader className="p-3 border-b flex flex-row items-center justify-between">
            <CardTitle className="text-sm font-medium flex items-center">
              <Bot className="h-5 w-5 mr-2 text-sky-600" />
              AI Medical Assistant
            </CardTitle>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={toggleMinimize}
                aria-label={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize className="h-4 w-4" /> : <Minimize className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleOpen} aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="p-3 overflow-y-auto h-[calc(100%-110px)]">
                <div className="space-y-4">
                  {conversation.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 ${
                          msg.type === "user" ? "bg-sky-600 text-white" : "bg-gray-100 dark:bg-gray-800"
                        }`}
                      >
                        <p className="text-sm">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-3 border-t">
                <div className="flex w-full items-center space-x-2">
                  <Button variant="ghost" size="icon" className="flex-shrink-0" aria-label="Voice input">
                    <Mic className="h-5 w-5" />
                  </Button>
                  <Input
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1"
                  />
                  <Button
                    size="icon"
                    className="flex-shrink-0 bg-sky-600 hover:bg-sky-700"
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </>
          )}
        </Card>
      )}
    </>
  )
}
