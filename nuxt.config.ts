// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
    // 'nuxt-og-image'
    ],

    runtimeConfig: {
        username: 'harlan_zw',
        token: '123',
        public: {
            siteUrl: 'https://harlanzw-twitter.com'
        }
    },

    ogImage: {
        runtimeImages: true,
    },

    experimental: {
        componentIslands: true
    },
})
