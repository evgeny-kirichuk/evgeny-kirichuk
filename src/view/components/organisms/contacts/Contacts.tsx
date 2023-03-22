import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import cs from 'classnames';

import CategoryHeader from '~molecules/categoryHeader/CategoryHeader';

import styles from './Contacts.module.scss';

const contacts = [
	{
		name: 'evgeny@kirichuk.me',
		link: 'mailto:evgeny@kirichuk.me',
		icon: false,
	},
	{
		name: 'Linkedin',
		link: 'https://www.linkedin.com/in/kirichuk',
		icon: true,
	},
	{
		name: 'GitHub',
		link: 'https://github.com/evgeny-kirichuk',
		icon: true,
	},
	{
		name: 'Instagram',
		link: 'https://www.instagram.com/evgeny_kirichuk',
		icon: true,
	},
];
const squareVariants = {
	visible: { opacity: 1, transition: { duration: 1 } },
	hidden: { opacity: 0 },
};

const Contacts = () => {
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
			<CategoryHeader
				title={
					<>
						Contact
						<br /> Me
					</>
				}
				id="contacts"
				number={4}
			>
				<div className={styles.content}>
					<img src="/avatar.jpg" alt="avatar" />
					<div className={styles.contacts}>
						{contacts.map((c) => (
							<a
								className={cs(styles.link, 'cursor-scale small')}
								key={c.link}
								href={c.link}
								rel="noreferrer"
								target="_blank"
							>
								<span className={styles.label}>{c.name}&nbsp;</span>

								{c.icon ? <span className={styles.icon}>&rarr;</span> : null}
							</a>
						))}
					</div>
				</div>
			</CategoryHeader>
		</motion.div>
	);
};

export default Contacts;
