
interface ApplicationLogoProps {
    className?: string;
}

export default function ApplicationLogo({ className = "" }: ApplicationLogoProps) {
    return (
        <>
            <img
                src="./images/logos.png"
                className={`text-primary-foreground font-bold ${className}`}
                alt="Application Logo"
            />
            &nbsp;
        </>
    );
}
