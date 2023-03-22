import cs from 'classnames';
import React, { ReactNode } from 'react';

import styles from './CategoryHeader.module.scss';

interface CategoryHeaderProps {
	title: ReactNode;
	cta?: string;
	link?: string;
	id: string;
	number: number;
	children?: ReactNode;
	icon?: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({
	title,
	link,
	cta,
	id,
	number,
	children,
	icon,
}) => {
	return (
		<div
			className={cs(styles.root, !!children ? styles.half : styles.long)}
			id={id}
		>
			<span className={styles.number}>{`(0${number})`}</span>
			<h1 className={cs(styles.title)}>{title}</h1>

			{children ? (
				children
			) : link ? (
				<a
					className={cs(styles.link, 'cursor-scale small')}
					href={link}
					rel="noreferrer"
					target="_blank"
				>
					<span className={styles.label}>
						<span className={styles.view}>View&nbsp;</span>
						{cta}
					</span>
					<span className={styles.icon}>{icon}</span>
				</a>
			) : null}
		</div>
	);
};

export default CategoryHeader;
