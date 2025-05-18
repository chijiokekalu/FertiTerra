import { type NextRequest, NextResponse } from "next/server"

interface FertilityRequest {
  lastPeriodStart: string
  cycleLength: number
  periodLength: number
}

interface FertilityResponse {
  nextPeriod: string
  ovulationDay: string
  fertileWindowStart: string
  fertileWindowEnd: string
  currentPhase: string
}

export async function POST(request: NextRequest) {
  try {
    const body: FertilityRequest = await request.json()

    // Validate input
    if (!body.lastPeriodStart || !body.cycleLength || !body.periodLength) {
      return new NextResponse(JSON.stringify({ error: "Missing required parameters" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Calculate fertility information
    const lastPeriod = new Date(body.lastPeriodStart)
    const cycleLength = body.cycleLength
    const periodLength = body.periodLength

    // Calculate next period
    const nextPeriod = new Date(lastPeriod)
    nextPeriod.setDate(nextPeriod.getDate() + cycleLength)

    // Calculate ovulation (typically 14 days before next period)
    const ovulationDay = new Date(nextPeriod)
    ovulationDay.setDate(ovulationDay.getDate() - 14)

    // Calculate fertile window (typically 5 days before to 1 day after ovulation)
    const fertileWindowStart = new Date(ovulationDay)
    fertileWindowStart.setDate(fertileWindowStart.getDate() - 5)

    const fertileWindowEnd = new Date(ovulationDay)
    fertileWindowEnd.setDate(fertileWindowEnd.getDate() + 1)

    // Determine current cycle phase
    const today = new Date()
    let currentPhase = "unknown"

    // Check if in period
    const periodEnd = new Date(lastPeriod)
    periodEnd.setDate(periodEnd.getDate() + periodLength)

    if (today >= lastPeriod && today <= periodEnd) {
      currentPhase = "menstrual"
    } else if (today > periodEnd && today < fertileWindowStart) {
      currentPhase = "follicular"
    } else if (today >= fertileWindowStart && today <= fertileWindowEnd) {
      currentPhase = "fertile"
    } else if (today > fertileWindowEnd && today < nextPeriod) {
      currentPhase = "luteal"
    }

    const response: FertilityResponse = {
      nextPeriod: formatDate(nextPeriod),
      ovulationDay: formatDate(ovulationDay),
      fertileWindowStart: formatDate(fertileWindowStart),
      fertileWindowEnd: formatDate(fertileWindowEnd),
      currentPhase,
    }

    return new NextResponse(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error calculating fertility information:", error)
    return new NextResponse(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0]
}
