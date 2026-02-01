import styles from './GraphicDesignSection.module.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

const GraphicDesignSection = ({ sectionRef }) => {
    const containerRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        })

        tl.from(containerRef.current.querySelector('h2'), {
            y: 50,
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power3.out'
        })
            .from(containerRef.current.querySelector('p'), {
                y: 30,
                autoAlpha: 0,
                duration: 0.6,
                ease: 'power3.out'
            }, '-=0.4')
            .from(containerRef.current.querySelectorAll(`.${styles.card}`), {
                y: 40,
                autoAlpha: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power3.out'
            }, '-=0.3')

    }, [])

    return (
        <section ref={sectionRef} className={styles.container} id='graphic-design'>
            <span className={styles.shadow_T}>design</span>
            <div ref={containerRef} className={styles.content}>
                <h2>Graphic <span>Design</span></h2>
                <p className={styles.description}>
                    With over a year of experience in creating visual identities, I specialize in crafting high-impact graphics that communicate brand stories effectively. From logo design to digital marketing assets, I focus on aesthetics that resonate with the target audience.
                </p>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3>Brand Identity</h3>
                        <p>Creating unique logos and brand guidelines that establish a strong market presence.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>UI/UX Design</h3>
                        <p>Designing intuitive interfaces for web and mobile applications with a focus on user experience.</p>
                    </div>
                    <div className={styles.card}>
                        <h3>Digital Assets</h3>
                        <p>Crafting high-quality social media graphics, banners, and digital marketing materials.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GraphicDesignSection
