"use client"

import { useEffect, useRef } from "react"

export function CycleDistribution() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Data for cycle length distribution
    const data = [
      { label: "21-24", value: 15, color: "#f472b6" },
      { label: "25-28", value: 45, color: "#ec4899" },
      { label: "29-32", value: 25, color: "#db2777" },
      { label: "33-36", value: 10, color: "#be185d" },
      { label: "37+", value: 5, color: "#9d174d" },
    ]

    // Calculate total for percentages
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Draw the pie chart
    let startAngle = 0
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 10

    data.forEach((item) => {
      const sliceAngle = (2 * Math.PI * item.value) / total

      // Draw slice
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      ctx.fillStyle = item.color
      ctx.fill()

      // Calculate label position
      const midAngle = startAngle + sliceAngle / 2
      const labelRadius = radius * 0.7
      const labelX = centerX + labelRadius * Math.cos(midAngle)
      const labelY = centerY + labelRadius * Math.sin(midAngle)

      // Draw label if slice is big enough
      if (item.value / total > 0.05) {
        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 12px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(`${Math.round((item.value / total) * 100)}%`, labelX, labelY)
      }

      startAngle += sliceAngle
    })

    // Draw legend
    const legendX = 10
    let legendY = canvas.height - data.length * 20 - 10

    data.forEach((item) => {
      // Draw color box
      ctx.fillStyle = item.color
      ctx.fillRect(legendX, legendY, 15, 15)

      // Draw label
      ctx.fillStyle = "#000000"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.fillText(`${item.label} days (${item.value}%)`, legendX + 20, legendY + 7.5)

      legendY += 20
    })
  }, [])

  return (
    <div className="w-full h-[200px]">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  )
}
