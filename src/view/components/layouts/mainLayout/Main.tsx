import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '~organisms/header/Header';

import styles from './Main.module.scss';

const Main: React.FC = () => {
	return (
		<div className={styles.mainWrapper}>
			<Header />
			<Outlet />
		</div>
	);
};

export default Main;
