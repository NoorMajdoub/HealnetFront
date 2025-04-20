"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Bot, Minimize, Maximize, Mic, Send, ChevronRight } from "lucide-react"

type Message = {
  type: "user" | "assistant"
  text: string
  timestamp: Date
}

export function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")
  const [conversation, setConversation] = useState<Message[]>([
    {
      type: "assistant",
      text: "Hello! I'm your AI Medical Assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (!isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  }, [conversation, isMinimized])

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
    const userMessage: Message = {
      type: "user",
      text: message,
      timestamp: new Date(),
    }

    setConversation([...conversation, userMessage])
    setMessage("")
    setIsTyping(true)

    // Simulate AI response (in a real app, this would call an API)
    setTimeout(
      () => {
        const botResponse = generateBotResponse(userMessage.text)
        setConversation((prev) => [
          ...prev,
          {
            type: "assistant",
            text: botResponse,
            timestamp: new Date(),
          },
        ])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const generateBotResponse = (userText: string): string => {
    // Simple response generation based on keywords for admin interface
    const userTextLower = userText.toLowerCase()

    if (userTextLower.includes("patient") && (userTextLower.includes("new") || userTextLower.includes("add"))) {
      return "To add a new patient, go to the Patient List section and click the 'Add Patient' button. You'll need to enter their basic information and symptoms."
    }

    if (userTextLower.includes("triage") || userTextLower.includes("severity")) {
      return "The triage system automatically categorizes patients as critical (red), moderate (yellow), or stable (green) based on their symptoms and diagnostic scans."
    }

    if (userTextLower.includes("inventory") || userTextLower.includes("medication")) {
      return "You can check current inventory levels in the Medication & Inventory section. Low stock items are highlighted in amber, and critical levels in red."
    }

    if (userTextLower.includes("consult") || userTextLower.includes("doctor")) {
      return "To start a consultation, find the patient in the Patient List, then click the message icon. You can also schedule consultations from the Consultations tab."
    }

    if (userTextLower.includes("report") || userTextLower.includes("analytics")) {
      return "Analytics and reports can be accessed from the Dashboard. You can filter data by date range, condition type, or severity level."
    }

    if (userTextLower.includes("thank") || userTextLower.includes("thanks")) {
      return "You're welcome! Is there anything else you need help with regarding the HealNet admin system?"
    }

    // Default responses for admin interface
    const defaultResponses = [
      "I can help you navigate the admin interface. What specific area are you working with?",
      "I'm here to assist with administrative tasks. Could you provide more details about what you need?",
      "I can provide guidance on patient management, inventory, consultations, and more. What would you like to know?",
      "As your administrative assistant, I can help streamline your workflow. What are you trying to accomplish?",
      "I'm here to make your administrative work easier. How can I assist you today?",
    ]

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
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
          aria-label="Open AI Assistant"
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
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
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
                    disabled={!message.trim() || isTyping}
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </>
          )}
        </Card>
      </div>

      {/* Overlay to close chat when clicking outside on mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={toggleOpen} aria-hidden="true"></div>
      )}
    </>
  )
}