import { useState } from 'react';

import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(6);

	const onButtonBackClick = () => {
		setActiveIndex(activeIndex - 1);
	};
	const onButtonForwardClick = () => {
		setActiveIndex(activeIndex + 1);
	};
	const onButtonRestartClick = () => {
		setActiveIndex(0);
	};
	const isFirstStep = activeIndex === 0 ? true : false;
	const isLastStep = activeIndex === steps.length - 1 ? true : false;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }) => {
							return (
								<li
									className={
										(activeIndex >= Number(id) - 1
											? styles.done
											: '') +
										' ' +
										(activeIndex === Number(id) - 1
											? styles.active
											: '') +
										' ' +
										styles['steps-item']
									}
								>
									{/* При клике на кнопку установка выбранного шага в качестве активного */}
									<button className={styles['steps-item-button']}>
										{Number(id)}
									</button>
									{title}
								</li>
							);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							disabled={isFirstStep}
							onClick={onButtonBackClick}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={
								isLastStep ? onButtonRestartClick : onButtonForwardClick
							}
						>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
