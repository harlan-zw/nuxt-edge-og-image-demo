import edgeChromium from 'chrome-aws-lambda'
import puppeteer from 'puppeteer-core'
import { setHeader, defineEventHandler } from "h3";

async function createBrowser() {
    return puppeteer.launch({
        args: edgeChromium.args,
        executablePath: await edgeChromium.executablePath,
        headless: true,
    })
}

export default defineEventHandler(async (e) => {
    const browser = createBrowser()
    const page = await browser.newPage()
    await page.setViewportSize({
        width: 1200,
        height: 630,
    })
    await page.goto('https://nuxt-edge-og-image-demo.vercel.app/', {
        timeout: 10000,
        waitUntil: 'networkidle',
    })
    setHeader(e, 'Content-Type', 'image/png')
    return await page.screenshot()
})
