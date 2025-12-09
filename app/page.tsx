import Link from 'next/link'
import { fetchProductComparisons } from '@/lib/storyblok/client'
import ProductComparison from '@/components/storyblok/ProductComparison'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

export const revalidate = 60 // Revalidate every 60 seconds (ISR)

export default async function HomePage() {
    const products = await fetchProductComparisons()

    return (
        <div className='min-h-screen bg-white'>
            {/* Hero Section */}
            <section className='border-b-6 border-black bg-black py-16 text-white'>
                <Container>
                    <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
                        <div>
                            <h1 className='mb-6 text-6xl font-bold uppercase leading-tight md:text-7xl'>
                                WOW NO COW!
                            </h1>
                            <p className='mb-8 font-mono text-xl'>
                                It&apos;s like milk but made for humans
                            </p>
                            <p className='mb-8 font-mono'>
                                Calculate the environmental impact of switching
                                from dairy to plant-based alternatives. See how
                                much carbon, water, and land you can save.
                            </p>
                            <Link href='/calculator'>
                                <Button
                                    variant='default'
                                    className='text-lg bg-black border-white'
                                >
                                    Calculate Your Impact
                                </Button>
                            </Link>
                        </div>

                        <div className='grid grid-cols-2 gap-6'>
                            <div className='border-5 border-white bg-white p-6 text-black'>
                                <div className='mb-2 text-4xl font-bold'>
                                    2.5kg
                                </div>
                                <div className='font-mono text-sm uppercase'>
                                    CO₂ saved per liter
                                </div>
                            </div>
                            <div className='border-5 border-white bg-white p-6 text-black'>
                                <div className='mb-2 text-4xl font-bold'>
                                    600L
                                </div>
                                <div className='font-mono text-sm uppercase'>
                                    Water saved per liter
                                </div>
                            </div>
                            <div className='border-5 border-white bg-white p-6 text-black'>
                                <div className='mb-2 text-4xl font-bold'>
                                    8m²
                                </div>
                                <div className='font-mono text-sm uppercase'>
                                    Land saved per liter
                                </div>
                            </div>
                            <div className='border-5 border-white bg-white p-6 text-black'>
                                <div className='mb-2 text-4xl font-bold'>
                                    100%
                                </div>
                                <div className='font-mono text-sm uppercase'>
                                    Plant-based
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Products Section */}
            <section className='py-16'>
                <Container>
                    <div className='mb-12 text-center'>
                        <h2 className='mb-4 text-5xl font-bold uppercase'>
                            Our Products Save The Planet
                        </h2>
                        <p className='font-mono text-lg'>
                            Compare the environmental impact of our products vs.
                            dairy
                        </p>
                    </div>

                    {products.length > 0 ? (
                        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
                            {products.map((product, index) => (
                                <ProductComparison key={index} blok={product} />
                            ))}
                        </div>
                    ) : (
                        <div className='border-5 border-black bg-oatly-cream p-12 text-center'>
                            <h3 className='mb-4 text-2xl font-bold uppercase'>
                                No Products Yet
                            </h3>
                            <p className='font-mono'>
                                Products will appear here once they&apos;re
                                published in Storyblok.
                            </p>
                        </div>
                    )}
                </Container>
            </section>

            {/* CTA Section */}
            <section className='border-t-6 border-black bg-oatly-cream py-16'>
                <Container>
                    <div className='text-center'>
                        <h2 className='mb-6 text-4xl font-bold uppercase'>
                            Ready to Make a Difference?
                        </h2>
                        <p className='mb-8 font-mono text-lg'>
                            Use our calculator to see your personal impact
                        </p>
                        <Link href='/calculator'>
                            <Button variant='inverse' className='text-lg'>
                                Try the Calculator
                            </Button>
                        </Link>
                    </div>
                </Container>
            </section>
        </div>
    )
}
