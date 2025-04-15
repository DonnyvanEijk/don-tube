interface LayoutProps {
    children: React.ReactNode
}


const RootLayout = ({children}:LayoutProps) => {
    return ( 
        <div className="min-h-screen flex items-center justify-center">
            {children}
        </div>
     );
}
 
export default RootLayout;