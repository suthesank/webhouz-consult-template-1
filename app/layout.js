import { Kumbh_Sans, Nunito, Outfit,Lora } from 'next/font/google'
import "/public/assets/css/plugins/bootstrap.min.css"
import "/public/assets/css/plugins/font-awesome-pro.css"
import "/public/assets/css/plugins/nice-select.css"
import "/public/assets/css/plugins/swiper.bundle.css"
import "/public/assets/icon/font-awesome/css/all.css"
// import "/public/assets/css/plugins/owl.carousel.min.css"
import "/public/assets/css/plugins/modal-video.min.css"
import "/public/assets/css/plugins/mobile.css"
import "/public/assets/css/plugins/aos.css"
import "/public/assets/css/typography.css"
import "/public/assets/css/master.css"
import "/public/assets/css/plugins/responsive.css"

const nunito = Nunito({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--nunito-font-family",
    display: 'swap',
})
const outfit = Outfit({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--outfit-font-family",
    display: 'swap',
})
const kumbh = Kumbh_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--kumbh-font-family",
    display: 'swap',
})
const lora = Lora({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--lora-font-family",
    display: 'swap',
})

export const metadata = {
    title: 'WebHouz || Multipurpose Business Template - Consult',
    description: 'Template suitable for any kind of business, consulting, finance, insurance, tax, and other services.',
    keywords: 'business, consulting, finance, insurance, tax, services',
    authors: [{ name: 'WebHouz', url: 'https://webhouz.com/' }],
    creator: 'WebHouz',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${nunito.variable} ${outfit.variable} ${kumbh.variable} ${lora.variable}`}>{children}</body>
        </html>
    )
}
