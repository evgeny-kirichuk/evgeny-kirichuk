import React from 'react';

import { ThemeProvider } from '~theme';
import CrashMessage from '~molecules/crashMessage/CrashMessage';
import ErrorBoundary from '~organisms/errorBoundary/errorBoundary';
import AppRoutes from '~routes/AppRouter';

const ViewEntrypoint: React.FunctionComponent = () => {
	return (
		<ThemeProvider>
			<ErrorBoundary errorScreen={<CrashMessage />}>
				<AppRoutes />
			</ErrorBoundary>
		</ThemeProvider>
	);
};

export default ViewEntrypoint;
