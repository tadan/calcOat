import { storyblokInit, apiPlugin, getStoryblokApi } from '@storyblok/react/rsc'
import type { ISbStoriesParams } from '@storyblok/react/rsc'
import { storyblokConfig } from './config'
import type {
    ProductComparisonStoryblok,
    ImpactMetricStoryblok,
    CalculatorSettingsStoryblok,
} from '@/types/storyblok'

/**
 * Initialize Storyblok (must be called before using getStoryblokApi)
 */
storyblokInit({
    accessToken: storyblokConfig.accessToken,
    use: [apiPlugin],
    apiOptions: {
        region: 'eu',
    },
})

/**
 * Get Storyblok API instance
 */
export const storyblokApi = getStoryblokApi()

/**
 * Fetch all product comparison stories
 */
export async function fetchProductComparisons(): Promise<
    ProductComparisonStoryblok[]
> {
    try {
        const { data } = await storyblokApi.get('cdn/stories', {
            version: storyblokConfig.version,
            starts_with: '',
            is_startpage: false,
        } as ISbStoriesParams)

        // Filter for product-comparison component (support both naming conventions)
        const products =
            data.stories?.filter(
                (story: any) =>
                    story.content?.component === 'product-comparison' ||
                    story.content?.component === 'product_comparison'
            ) || []

        return products.map((story: any) => story.content)
    } catch (error) {
        console.error('Error fetching product comparisons:', error)
        return []
    }
}

/**
 * Fetch all impact metric stories
 */
export async function fetchImpactMetrics(): Promise<ImpactMetricStoryblok[]> {
    try {
        const { data } = await storyblokApi.get('cdn/stories', {
            version: storyblokConfig.version,
            starts_with: '',
            is_startpage: false,
        } as ISbStoriesParams)

        // Filter for impact-metric component (support both naming conventions)
        const metrics =
            data.stories?.filter(
                (story: any) =>
                    story.content?.component === 'impact-metric' ||
                    story.content?.component === 'impact_metric'
            ) || []

        return metrics.map((story: any) => story.content)
    } catch (error) {
        console.error('Error fetching impact metrics:', error)
        return []
    }
}

/**
 * Fetch calculator settings
 */
export async function fetchCalculatorSettings(): Promise<CalculatorSettingsStoryblok | null> {
    try {
        const { data } = await storyblokApi.get('cdn/stories', {
            version: storyblokConfig.version,
            starts_with: '',
            is_startpage: false,
        } as ISbStoriesParams)

        // Filter for calculator-settings component (support both naming conventions)
        const settings = data.stories?.find(
            (story: any) =>
                story.content?.component === 'calculator-settings' ||
                story.content?.component === 'calculator_settings'
        )

        return settings ? settings.content : null
    } catch (error) {
        console.error('Error fetching calculator settings:', error)
        return null
    }
}

/**
 * Fetch a single story by slug
 */
export async function fetchStory(slug: string) {
    try {
        const { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
            version: storyblokConfig.version,
        })

        return data.story
    } catch (error) {
        console.error(`Error fetching story ${slug}:`, error)
        return null
    }
}
