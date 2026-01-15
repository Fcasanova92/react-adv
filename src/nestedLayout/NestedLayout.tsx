import { MainLayout } from "./layout/MainLayout"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { routes } from "./routes/routes"
import { Suspense } from "react"

export const NestedLayout = () => {
  return (
        <BrowserRouter>
            <MainLayout>
                <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {routes.map(({ path, Component }) => (
                        <Route key={path} path={path} element={<Component />} />
                    ))}
                    <Route path="*" element={<Navigate to={routes[0].to} replace />} />
                </Routes>
                </Suspense>
            </MainLayout>
        </BrowserRouter>
  )
}