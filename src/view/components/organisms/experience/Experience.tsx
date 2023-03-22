import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import CategoryHeader from '~molecules/categoryHeader/CategoryHeader';
import Separator from '~atoms/separator/Separator';

import styles from './Experience.module.scss';

interface IJob {
	jobTitle: string;
	companyName: string;
	location: string;
	dates: string;
	responsibilities: string[];
}

const jobs: IJob[] = [
	{
		jobTitle: 'Lead Full-stack Developer',
		companyName: 'Andersen Lab',
		location: 'Warsaw, Poland',
		dates: 'July 2020 - present',
		responsibilities: [
			'Led team of 5 software engineers undertaking the development of 7 front-end applications.',
			'Engineered development environment and CI/CD processes for 3 cross platform applications using monorepository approach.',
			'Partnered with back-end team lead for the design and construction of a product PostgreSQL database.',
			'Reduced application load time by 200% using webpack code splitting, service worker, and requests/sources caching mechanisms.',
		],
	},
	{
		jobTitle: 'Full-stack Developer',
		companyName: 'OnePoint Ltd',
		location: 'Minsk, Belarus',
		dates: 'May 2018 - July 2020',
		responsibilities: [
			'Optimized a front-end application handling 1000+ websocket updates per minute using custom redux middlewares and memoization.',
			'Developed chatbots for facebook games with 5000+ active users using Node.js.',
			'Worked in open-core software development with 10 teams using LeSS framework.',
			'Released 3 facebook games using JavaScript game engines in 9 month.',
		],
	},
	{
		jobTitle: 'Front-end Engineer',
		companyName: 'Yumasoft Inc',
		location: 'Minsk, Belarus',
		dates: 'Dec 2015 - May 2018',
		responsibilities: [
			'Mentored interns on team processes and product development.',
			'Built components storybook collections for company products that enabled developers to quickly make changes.',
			'Increased product tests coverage by 10% and components reliability by by moving helper functions into common utilities.',
			'Increased a product accessibility from keyboard and screen readers using HTML semantic best practices.',
		],
	},
];

const squareVariants = {
	visible: { opacity: 1, transition: { duration: 1 } },
	hidden: { opacity: 0 },
};

const Experience = () => {
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
				title="Experience"
				link="https://www.linkedin.com/in/yesjs/"
				cta="Linkedin"
				icon="&rarr;"
				id="experience"
				number={0}
			/>
			<div className={styles.contentGrid}>
				<div className={styles.skills}>
					<div>
						<span>JavaScript (TypeScript)</span>
						<span>React (Webpack, Next.js)</span>
						<span>HTML/CSS</span>
						<span>Node.js (Express, Nest)</span>
						<span>Swagger</span>
						<span>Docker</span>
						<span>AWS</span>
						<span>PostgreSQL</span>
						<span>MongoDB</span>
					</div>
					<div>
						<span>Team leading</span>
						<span>Team load planning</span>
						<span>Code review</span>
						<span>Mentoring</span>
					</div>
				</div>
				<div className={styles.jobs}>
					<div className={styles.companies}>
						{jobs.map((job, i) => (
							<React.Fragment key={job.companyName}>
								<Separator />
								<div key={job.companyName} className={styles.company}>
									<span className={styles.dates}>{job.dates}</span>
									<span className={styles.jobTitle}>{job.jobTitle}</span>
									<span className={styles.companyName}>{job.companyName}</span>
									<span className={styles.location}>{job.location}</span>

									<div className={styles.bullets}>
										{job.responsibilities.map((r) => (
											<div className={styles.bullet} key={r}>
												<span>+&nbsp;</span>
												<span key={r}>{r}</span>
											</div>
										))}
									</div>
								</div>
								{i === jobs.length - 1 ? <Separator /> : null}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Experience;
