import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import cs from 'classnames';

import CategoryHeader from '~molecules/categoryHeader/CategoryHeader';
import Separator from '~atoms/separator/Separator';

import styles from './Projects.module.scss';

interface IProject {
	title: string;
	kind: string;
	link: string;
	isReady: boolean;
	description?: string;
	position: string;
}

const projects: IProject[] = [
	{
		title: 'ScyllaDB Cloud',
		kind: 'Database-as-a-Service Platform',
		link: 'https://www.scylladb.com/product/scylla-cloud/',
		position: 'Product Engineer',
		isReady: true,
	},
	{
		title: 'Mopla',
		kind: 'Public Transport App',
		link: 'https://www.mopla.solutions',
		description: 'Uber-like application for public transport is Germany',
		position: 'Team Lead Product Engineer',
		isReady: true,
	},
	{
		title: 'Work4All',
		kind: 'CRM+ERP',
		link: 'https://work4all.de',
		description:
			'work4all is the multiple award-winning all-in-one software that combines commercial functions, filing of communication and documents, and project management. ',
		position: 'Product Engineer',
		isReady: true,
	},
	{
		title: 'BetCheck',
		kind: 'Betting Sportsbook',
		link: 'https://sports.betcheck.com',
		description:
			'BetCheck operates a comparison platform it has developed, which enables registered users to compare betting odds and the resulting possible payout amounts on online sports bets from various licensed sports betting providers that cooperate with BetCheck in a neutral and free manner.',
		position: 'Team Lead Front-end Engineer',
		isReady: true,
	},
	{
		title: 'TAO',
		kind: 'Open-core Assessment Software',
		link: 'https://www.taotesting.com/',
		description:
			'Open Assessment Technologies is a community driving a global movement of people using assessments as a force for good. The values and aspirations of our team are embedded in what we do.',
		position: 'Front-end Engineer',
		isReady: true,
	},
	{
		title: 'YumaPos',
		kind: 'EPOS system',
		link: 'https://www.yumapos.co.uk/',
		description:
			'An all‑in‑one cloud‑based EPOS system optimised for hospitality',
		position: 'Product Engineer',
		isReady: true,
	},
	{
		title: 'AdaptiBar',
		kind: 'Exams Simulator',
		description:
			'AdaptiBar provides you with nearly every licensed MBE question, from past bar exams, released by the NCBE. This includes the newest release of 200 licensed questions from the NCBE.',
		link: 'https://www.adaptibar.com/',
		position: 'Front-end Engineer',
		isReady: true,
	},
];

const squareVariants = {
	visible: { opacity: 1, transition: { duration: 1 } },
	hidden: { opacity: 0 },
};

const Projects = () => {
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
			<CategoryHeader title="Selected Works" id="works" number={3} />
			<div className={styles.projectsGrid}>
				{projects.map((p, i) => (
					<React.Fragment key={p.title}>
						<Separator />
						<div
							className={cs(styles.project, {
								['cursor-scale small']: p.isReady,
							})}
						>
							<span className={styles.title}>{p.title}</span>
							<span className={styles.kind}>{p.kind}</span>
							<span className={styles.subtitle}>{p.position}</span>
							{p.isReady ? (
								<a
									className={styles.link}
									href={p.link}
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
						{i === projects.length - 1 ? <Separator /> : null}
					</React.Fragment>
				))}
			</div>
		</motion.div>
	);
};

export default Projects;
