const puppeteer = require('puppeteer');

( async () => {
    console.log('Launching browser...')

    const browser = await puppeteer.launch({headless: true})
    
    const page = await browser.newPage()
    
    await page.goto('https://josecuevas.dev')

    const anchors = await page.evaluate(() => {
        const anchors = document.querySelectorAll('a')
        const as = []
        
        anchors.forEach(a => {
            as.push(a.href)
        })
        
        return as 
    })
    console.log('Closing browser')
    browser.close()

    console.table(anchors)

    const mailtos = anchors.filter(anchor => {
        return anchor.includes('mailto:')
    })

    console.log(mailtos)

    const mails = mailtos.map(mailto => {
        mail = mailto.split(':')[1]
        return mail
    })

    console.log(mails)


})()