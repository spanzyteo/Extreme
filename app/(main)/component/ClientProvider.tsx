'use client'
import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "../store"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function ClientProvider({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <Provider store={store}>
      <Navbar />
      {children}
      <Footer />
    </Provider>
  )
}