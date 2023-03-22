import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import cs from 'classnames';

import CategoryHeader from '~molecules/categoryHeader/CategoryHeader';
import Separator from '~atoms/separator/Separator';

import styles from './Speeches.module.scss';

const squareVariants = {
	visible: { opacity: 1, transition: { duration: 1 } },
	hidden: { opacity: 0 },
};
const Speeches = () => {
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold: 0.3 });

	useEffect(() => {
		if (inView) {
			controls.start('visible');
		}
	}, [controls, inView]);

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={squareVariants}
			className={styles.root}
		>
			<CategoryHeader title="Public Talks" id="talks" number={2} />
			<div className={styles.content}>
				<div className={styles.videoWrapper}>
					<video autoPlay={true} muted={true} loop={true} id="myVideo">
						<source src="/speech.MP4" type="video/mp4" />
					</video>
				</div>
				<div className={styles.talks}>
					<Separator />
					<div className={cs(styles.speech, 'cursor-scale small')}>
						<span className={styles.subtitle}>Jan 01, 2022</span>
						<div className={styles.title}>Quick start for React projects</div>
						<div className={styles.cta}>
							<div className={styles.subtitle}>WarsawJS Meetup #89, Warsaw</div>
							<a
								className={styles.link}
								href={'https://www.youtube.com/watch?v=beJBLGvkqlc'}
								target="_blank"
								rel="noreferrer"
							>
								<span className={styles.label}>
									<span className={styles.view}>Watch&nbsp;</span>
								</span>
								<span className={styles.icon}>&rarr;</span>
							</a>
						</div>
					</div>
					<Separator />
					<div className={cs(styles.speech, 'cursor-scale small')}>
						<span className={styles.subtitle}>July 14, 2022</span>
						<div className={styles.title}>
							Six Apps in 20 Minutes: Cross-Platform JavaScript
							<br /> Development with Monorepo.
						</div>
						<div className={styles.cta}>
							<div className={styles.subtitle}>
								Andersen Front-end Hero Meetup, Krakow
							</div>
							<a
								className={styles.link}
								href={'https://youtu.be/0B84XEP81Ko?t=38'}
								target="_blank"
								rel="noreferrer"
							>
								<span className={styles.label}>
									<span className={styles.view}>Watch&nbsp;</span>
								</span>
								<span className={styles.icon}>&rarr;</span>
							</a>
						</div>
					</div>
					<Separator />
				</div>
			</div>
		</motion.div>
	);
};

export default Speeches;
