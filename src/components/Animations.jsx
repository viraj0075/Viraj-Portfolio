export const containerVar = {
    hidden: { opacity: 0, y: 100 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
            ease: "easeOut",
            duration: 1.5
        }
    },
}
export const projVar = {
    hidden: { opacity: 0, y: 70 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
            ease: "easeOut",
            duration: 1.5
        }
    },
}
export const imageVar = {
    hidden: { y: -10 },
    show: {
        y: [10, -10],
        transition: {
            staggerChildren: 0.2,
            ease: "linear",
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse"
        }
    },
}
export const emoji = {
    hidden: { x: -10 },
    show: {
        x: [10, -10],
        transition: {
            staggerChildren: 0.2,
            ease: "linear",
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse"
        }
    },
}

export const containerVari = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, ease: "easeOut" } }
};

export const itemVar = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
};