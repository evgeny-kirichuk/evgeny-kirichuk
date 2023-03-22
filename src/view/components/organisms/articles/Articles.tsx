import React, { ReactNode, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import Article from '~molecules/article/Article';
import CategoryHeader from '~molecules/categoryHeader/CategoryHeader';

import styles from './Articles.module.scss';

interface IArticle {
	title: ReactNode;
	date: string;
	link: string;
}

const articles: IArticle[] = [
	{
		title: (
			<>
				Let’s Touch the Serverless <br /> Architecture on AWS
			</>
		),
		date: 'Jan 1, 2023',
		link: 'https://medium.com/aws-tip/lets-touch-the-serverless-architecture-on-aws-706194c5f54b',
	},
	{
		title: <>React Code Splitting Tricks</>,
		date: 'Aug 24, 2022',
		link: 'https://medium.com/@kirichuk/react-code-splitting-tricks-4be0c3c4b788',
	},
	{
		title: (
			<>
				What Is Enterprise, System, <br /> and Software Architecture
			</>
		),
		date: 'Aug 3, 2022',
		link: 'https://medium.com/@kirichuk/what-is-enterprise-system-and-software-architecture-480f23bbf43d',
	},
	{
		title: (
			<>
				7 Must-Have Features <br /> for Any React App
			</>
		),
		date: 'July 29, 2022',
		link: 'https://medium.com/@kirichuk/7-must-have-features-for-any-react-app-10b086038d9a',
	},
];
const squareVariants = {
	visible: { opacity: 1, transition: { duration: 1 } },
	hidden: { opacity: 0 },
};
const Articles = () => {
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
				title="Articles"
				link="https://medium.com/@kirichuk"
				cta="Medium"
				icon="&rarr;"
				id="articles"
				number={3}
			/>
			<div className={styles.articlesGrid}>
				{articles.map((a) => (
					<Article key={a.link} title={a.title} link={a.link} date={a.date} />
				))}
			</div>
		</motion.div>
	);
};

export default Articles;
