import { createClient } from '@sanity/client'

export const sanityClient = createClient({
    projectId: 'oi2eyr33',
    dataset: 'production',
    apiVersion: '2024-01-01',
    useCdn: true,
})