import React from 'react';
import { motion } from 'framer-motion';

import styles from './About.module.scss';

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
		>
			<div className={styles.root}>
				<div className={styles.nameWrapper}>
					<span className={styles.hello}>
						Hello, <br /> I am&nbsp;
					</span>
					<span className={styles.name}>Evgeny</span>
				</div>

				<span className={styles.surname}>Kirichuk</span>
				<span className={styles.description}>
					Full-stack developer, Solutions architect, Team lead.
				</span>
			</div>
		</motion.div>
	);
};

export default About;
