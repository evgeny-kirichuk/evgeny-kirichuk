import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import cs from 'classnames';

import CategoryHeader from '~molecules/categoryHeader/CategoryHeader';
import Separator from '~atoms/separator/Separator';

import styles from './Certificates.module.scss';

interface ICertificate {
	title: string;
	completed: boolean;
	link?: string;
	imageUrl: string;
	small: boolean;
}

const certificates: ICertificate[] = [
	{
		title: 'AWS Certified Solutions Architect - Associate',
		completed: true,
		imageUrl: '/certImg/aws-saa.png',
		link: 'https://www.credly.com/badges/4fa29fd7-5569-4208-a067-32f6f6710c73/public_url',
		small: false,
	},
	{
		title: 'AWS Certified Cloud Practitioner',
		completed: true,
		link: 'https://www.credly.com/badges/202ff76d-b073-4013-856f-c4fedc121a92/public_url',
		imageUrl: '/certImg/aws-ccp.png',
		small: false,
	},
	{
		title: 'Database Design and Architecture in PostgreSQL',
		completed: true,
		link: 'https://www.coursera.org/account/accomplishments/specialization/T5XTEKDLUPBD',
		imageUrl: '/certImg/michiganlogo.png',
		small: true,
	},
];

const squareVariants = {
	visible: { opacity: 1, transition: { duration: 1 } },
	hidden: { opacity: 0 },
};

const Certificates = () => {
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
			<CategoryHeader title="Certifications" id="certifications" number={0} />
			<div className={styles.projectsGrid}>
				{certificates.map((cert, i) => (
					<React.Fragment key={cert.title}>
						<Separator />
						<div
							className={cs(styles.project, {
								['cursor-scale small']: cert.completed,
							})}
						>
							<img
								className={cs(
									styles.certImage,
									cert.small && styles.smallImage
								)}
								src={cert.imageUrl}
								alt={cert.title}
							/>
							<span className={styles.title}>{cert.title}</span>
							{cert.completed ? (
								<a
									className={styles.link}
									href={cert.link}
									target="_blank"
									rel="noreferrer"
								>
									<span className={styles.label}>
										<span className={styles.view}>View&nbsp;</span>
									</span>
									<span className={styles.icon}>&rarr;</span>
								</a>
							) : (
								<span className={styles.link}>Coming soon</span>
							)}
						</div>
						{i === certificates.length - 1 ? <Separator /> : null}
					</React.Fragment>
				))}
			</div>
		</motion.div>
	);
};

export default Certificates;
