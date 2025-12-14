import Container from '@/components/layout/Container'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { SpeedInsights } from '@vercel/speed-insights/react'

export default function Loading() {
    return (
        <>
            <SpeedInsights />
            <div className='min-h-screen bg-white py-16'>
                <Container>
                    <div className='mx-auto max-w-2xl border-5 border-black bg-oatly-cream p-12 text-center'>
                        <LoadingSpinner size='lg' className='mb-6' />
                        <p className='font-mono text-lg uppercase'>
                            Loading...
                        </p>
                    </div>
                </Container>
            </div>
        </>
    )
}
