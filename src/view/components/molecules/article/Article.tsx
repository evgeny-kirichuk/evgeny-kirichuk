import React, { ReactNode } from 'react';
import cs from 'classnames';

import styles from './Article.module.scss';

interface IArticle {
	title: ReactNode;
	date: string;
	link: string;
}

const Article: React.FC<IArticle> = ({ link, date, title }) => {
	return (
		<div className={cs(styles.root, 'cursor-scale')}>
			<div className={styles.title}>{title}</div>
			<span className={styles.subtitle}>{date}</span>
			<a className={styles.link} href={link} target="_blank" rel="noreferrer">
				<span className={styles.label}>
					<span className={styles.view}>Read&nbsp;</span>
				</span>
				<span className={styles.icon}>&rarr;</span>
			</a>
		</div>
	);
};

export default Article;
