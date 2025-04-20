"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function ImpactCounter() {
  const [count, setCount] = useState(3200)

  // Simulate counter increasing over time
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 10000) // Increase by 1 every 10 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 bg-sky-50">
      <div className="container">
        <Card className="border-none shadow-lg bg-white rounded-2xl overflow-hidden transform -translate-y-16">
          <CardContent className="p-8 flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold text-sky-800 mb-2">Lives Impacted</h2>
            <div className="text-5xl md:text-7xl font-bold text-green-600 mb-2 tabular-nums">
              {count.toLocaleString()}
            </div>
            <p className="text-gray-600 text-center">People helped through our AI-powered medical platform</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
