'use client'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from 'recharts'
import type { ImpactResult } from '@/types/calculator'
import { formatNumber } from '@/lib/utils/format'
import Card from '@/components/ui/Card'

export interface ImpactChartProps {
    result: ImpactResult
}

export default function ImpactChart({ result }: ImpactChartProps) {
    const data = [
        {
            name: 'Carbon',
            value: result.carbonSaved,
            unit: 'kg CO₂',
        },
        {
            name: 'Water',
            value: result.waterSaved / 100, // Scale down for visualization
            unit: 'L (÷100)',
        },
        {
            name: 'Land',
            value: result.landSaved,
            unit: 'm²',
        },
    ]

    return (
        <Card>
            <h2 className='mb-6 text-xl font-bold uppercase'>
                Here we try to quantify the consumption
            </h2>

            <ResponsiveContainer width='100%' height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray='3 3' stroke='#000' />
                    <XAxis
                        dataKey='name'
                        stroke='#000'
                        style={{ fontFamily: 'monospace', fontSize: '12px' }}
                    />
                    <YAxis
                        stroke='#000'
                        style={{ fontFamily: 'monospace', fontSize: '12px' }}
                    />
                    <Tooltip
                        content={({ active, payload }) => {
                            if (active && payload && payload.length) {
                                const data = payload[0].payload
                                return (
                                    <div className='border-3 border-black bg-white p-3 font-mono'>
                                        <p className='font-bold'>{data.name}</p>
                                        <p>
                                            {formatNumber(data.value)}{' '}
                                            {data.unit}
                                        </p>
                                    </div>
                                )
                            }
                            return null
                        }}
                    />
                    <Legend
                        wrapperStyle={{
                            fontFamily: 'monospace',
                            fontSize: '12px',
                        }}
                    />
                    <Bar dataKey='value' fill='#000' />
                </BarChart>
            </ResponsiveContainer>
        </Card>
    )
}
