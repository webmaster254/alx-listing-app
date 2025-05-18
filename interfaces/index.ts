//Define all TypeScript interfaces related to the project. Start by creating placeholder interfaces for CardProps and ButtonProps
interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
    price: number;
    location: string;
}

interface ButtonProps {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
}

// Export the interfaces
export type { CardProps, ButtonProps };
