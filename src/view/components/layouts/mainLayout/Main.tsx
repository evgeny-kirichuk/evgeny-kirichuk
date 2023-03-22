import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '~organisms/header/Header';
import { OnlineStatusContext } from '~utils/OnlineStatusProvider';
import Portal from '~atoms/portal/Portal';
import { OfflineMessage } from '~molecules/offlineMessage/OfflineMessage';

import styles from './Main.module.scss';

const Main: React.FC = () => {
	const online = useContext(OnlineStatusContext);
	const [showOfflineMessage, setShowOfflineMessage] = useState(!online);

	const closeOfflineMessage = () => setShowOfflineMessage(false);

	useEffect(() => {
		setShowOfflineMessage(!online);
	}, [online]);

	return (
		<div className={styles.mainWrapper}>
			<Header />
			<Outlet />
			<Portal display={showOfflineMessage} onWrapperClick={closeOfflineMessage}>
				<OfflineMessage onOkClick={closeOfflineMessage} />
			</Portal>
		</div>
	);
};

export default Main;
