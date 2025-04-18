@keyframes marquee {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(calc(-100% - var(--gap)));
    }
}

@keyframes marquee-vertical {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(calc(-100% - var(--gap)));
    }
}

.marquee {
    animation: marquee var(--duration) linear infinite;
}

.marquee-vertical {
    animation: marquee-vertical var(--duration) linear infinite;
}
