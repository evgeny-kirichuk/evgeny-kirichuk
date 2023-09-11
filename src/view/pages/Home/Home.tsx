import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';

import About from '~organisms/about/About';
import Articles from '~organisms/articles/Articles';
import Projects from '~organisms/projects/Projects';
import Experience from '~organisms/experience/Experience';
import Speeches from '~organisms/speeches/Speeches';
import Contacts from '~organisms/contacts/Contacts';
import { Header } from '~organisms/header/Header';
import Certificates from '~/view/components/organisms/certificates/Certificates';

import styles from './Home.module.scss';

const Home = () => {
	useLayoutEffect(() => {
		const cursor = document.querySelector('.cursor');
		const cursorScale = document.querySelectorAll('.cursor-scale');
		let mouseX = 0;
		let mouseY = 0;

		gsap.to({}, 0.01, {
			repeat: -1,

			onRepeat: function () {
				gsap.set(cursor, {
					css: {
						left: mouseX,
						top: mouseY,
					},
				});
			},
		});

		window.addEventListener('mousemove', function (e) {
			mouseX = e.clientX;
			mouseY = e.clientY;
		});

		cursorScale.forEach((link) => {
			link.addEventListener('mouseleave', () => {
				cursor?.classList.remove('grow');
				cursor?.classList.remove('grow-small');
			});
			link.addEventListener('mousemove', () => {
				cursor?.classList.add('grow');
				if (link.classList.contains('small')) {
					cursor?.classList.remove('grow');
					cursor?.classList.add('grow-small');
				}
			});
		});

		const currentLocation = window.location.href;
		const hasCommentAnchor = currentLocation.includes('/#');
		if (hasCommentAnchor) {
			const anchorCommentId = `${currentLocation.substring(
				currentLocation.indexOf('#') + 1
			)}`;
			const anchorComment = document.getElementById(anchorCommentId);
			if (anchorComment) {
				anchorComment.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, []);

	return (
		<main className={styles.root}>
			{navigator.maxTouchPoints <= 1 ? <div className="cursor"></div> : null}
			<Header />
			<About />
			<Certificates />
			<Speeches />
			<Articles />
			<Projects />
			<Experience />
			<Contacts />
			{/*<div className={styles.l1} />*/}
			{/*<div className={styles.l2} />*/}
			{/*<div className={styles.l3} />*/}
			{/*<div className={styles.l4} />*/}
			{/*<div className={styles.l5} />*/}
			{/*<div className={styles.l6} />*/}
		</main>
	);
};

export default Home;
