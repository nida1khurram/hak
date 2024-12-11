interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}
export function Container({children, className}: ContainerProps) {
    return (
        <div className={`max-w-[1920px]  mx-auto px-6 items-center
             font-inter text-base leading-6 text-white py-4 
            ${className}`}>{children}</div>
    )
}