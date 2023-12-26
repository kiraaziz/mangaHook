import MainLayout from "@/components/MainLyout"
import "@/styles/globals.css"
import { Analytics } from '@vercel/analytics/react'

const Layout = ({ children }) => {

    return (
        <MainLayout>
            <Analytics />
            {children}
        </MainLayout>
    )
}

export default Layout