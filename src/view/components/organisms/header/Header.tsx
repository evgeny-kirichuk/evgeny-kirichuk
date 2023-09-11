import React from 'react';
import { motion } from 'framer-motion';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
	return (
		<header className={styles.headerWrapper}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.5 } }}
			>
				<nav className={styles.headerItems}>
					<a className="cursor-scale small" href="#certifications">
						<span className={styles.js}>Certifications</span>
					</a>
					<a className="cursor-scale small" href="#talks">
						<span className={styles.js}>Public Talks</span>
					</a>
					<a className="cursor-scale small" href="#articles">
						<span className={styles.js}>Articles</span>
					</a>
					<a className="cursor-scale small" href="#works">
						<span className={styles.js}>Selected Works</span>
					</a>
					<a className="cursor-scale small" href="#experience">
						<span className={styles.js}>Experience</span>
					</a>
					<a className="cursor-scale small" href="#contacts">
						<span className={styles.js}>Contacts</span>
					</a>
				</nav>
			</motion.div>
		</header>
	);
};
