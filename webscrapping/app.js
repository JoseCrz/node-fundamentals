const puppeteer = require('puppeteer');

( async () => {
    console.log('Launching browser...')

    const browser = await puppeteer.launch({headless: false})
    
    const page = await browser.newPage()
    
    await page.goto('https://josecuevas.dev')

    const title = await page.evaluate(() => {
        const h1 = document.querySelector('h1')
        return h1.innerHTML
    })

    const anchors = await page.evaluate(() => {
        const anchors = document.querySelectorAll('a')
        console.log(anchors)
        const as = []
        anchors.forEach(a => {
            as.push(a.href)
        })
        console.log(as)
        return as 
    })

    console.log(title)
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