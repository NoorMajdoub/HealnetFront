"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, X, Mic, Send, ChevronRight, ChevronLeft } from "lucide-react"


type Message = {
  type: "user" | "bot"
  text: string
  timestamp: Date
}

export function AIHelpBubble() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [conversationHistory, setConversationHistory] = useState<string[]>([])
const [step, setStep] = useState<"initial" | "first_assessment" | "physical_test" | "final_assessment" | "recommendation">("initial")

  const [conversation, setConversation] = useState<Message[]>([
    {
      type: "bot",
      text: "Hello! The image you uploaded indicates possibility of fracture",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [conversation])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = async () => {
    if (!message.trim()) return
  
    const userMessage: Message = {
      type: "user",
      text: message,
      timestamp: new Date(),
    }
  
    setConversation((prev) => [...prev, userMessage])
    setMessage("")
    setIsTyping(true)
  
    const newHistory = [...conversationHistory, `A: ${message}\n`]
  
    try {
      const data = await sendToBackend(newHistory, message, step)
      const botMessage: Message = {
        type: "bot",
        text: data.response,
        timestamp: new Date(),
      }
  
      setConversation((prev) => [...prev, botMessage])
      setConversationHistory(data.conversation_history)
  
      // Advance to the next step based on your logic
      if (step === "initial") setStep("first_assessment")
      else if (step === "first_assessment") setStep("physical_test")
      else if (step === "physical_test") setStep("final_assessment")
      else if (step === "final_assessment") setStep("recommendation")
  
    } catch (err) {
      console.error("Error talking to backend:", err)
    } finally {
      setIsTyping(false)
    }
  }

  async function sendToBackend(
    conversationHistory: string[],
    userInput: string,
    step: string
  ): Promise<{ response: string; conversation_history: string[] }> {
    const res = await fetch("http://localhost:8000/injury-assessment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conversation_history: conversationHistory,
        user_input: userInput,
        step: step,
      }),
    })
    return await res.json()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <>
      {/* Floating button - only show when chat is closed */}
      {!isOpen && (
        <Button
          onClick={toggleOpen}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-sky-600 hover:bg-sky-700 shadow-lg z-50"
          aria-label="Get AI Help"
        >
          <Bot className="h-6 w-6" />
        </Button>
      )}

      {/* Full-height chat sidebar */}
      <div
        className={`fixed top-0 right-0 h-full z-50 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ width: "400px", maxWidth: "100vw" }}
      >
        <Card className="h-full flex flex-col shadow-xl rounded-none">
          <CardHeader className="p-3 border-b flex flex-row items-center justify-between bg-sky-600 text-white">
            <div className="flex items-center">
              <Bot className="h-5 w-5 mr-2" />
              <span className="font-medium">AI Medical Assistant</span>
            </div>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-white hover:bg-sky-700" onClick={toggleOpen}>
              {isOpen ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </Button>
          </CardHeader>

          <CardContent className="p-3 flex-grow overflow-y-auto">
            <div className="space-y-4">
            {conversation.map((msg, index) => (
  <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
    <div
      className={`max-w-[80%] rounded-lg px-3 py-2 ${
        msg.type === "user" ? "bg-sky-600 text-white" : "bg-gray-100 dark:bg-gray-800"
      }`}
    >
      <p className="text-sm">{msg.text}</p>
      <p className={`text-xs mt-1 ${msg.type === "user" ? "text-sky-100" : "text-gray-500"}`}>
        {formatTime(msg.timestamp)}
      </p>
    </div>
  </div>
))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 max-w-[80%]">
                    <div className="flex space-x-1">
                      <div
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
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
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button
                size="icon"
                className="flex-shrink-0 bg-sky-600 hover:bg-sky-700"
                onClick={handleSendMessage}
                disabled={!message.trim() || isTyping}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>

      {/* Overlay to close chat when clicking outside on mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={toggleOpen} aria-hidden="true"></div>
      )}
    </>
  )
}