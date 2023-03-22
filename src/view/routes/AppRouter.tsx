import React, { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import LazyRoute from '~routes/LazyRoute';

const HomeScreen = lazy(
	() => import(/*webpackChunkName: "Home"*/ '~pages/Home/Home')
);

const AppRoutes: React.FunctionComponent = () => (
	<React.Suspense fallback={null}>
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<LazyRoute>
							<HomeScreen />
						</LazyRoute>
					}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</BrowserRouter>
	</React.Suspense>
);

export default AppRoutes;
