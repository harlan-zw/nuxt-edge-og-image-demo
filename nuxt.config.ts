// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-og-image'
    ],

    runtimeConfig: {
        username: 'harlan_zw',
        token: '123',
        public: {
            siteUrl: 'https://harlanzw-twitter.com'
        }
    },

    hooks: {
        'nitro:config' (nitroConfig) {
            // we need to mock some of the static requires from chrome-aws-lambda, puppeteer-core is okay though
            ['puppeteer', 'bufferutil', 'utf-8-validate'].forEach((name) => {
                nitroConfig.alias[name] = 'unenv/runtime/mock/proxy'
            })
        }
    },

    nitro: {
        preset: 'vercel-edge',
    },

    ogImage: {
        runtimeImages: true,
    },

    experimental: {
        componentIslands: true
    },
})
