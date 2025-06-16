import { useState } from 'react';

import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(6);

	// И определить 3 обработчика: Клик назад, Клик вперед, Начать сначала

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
						<button className={styles.button} disabled={isFirstStep}>
							Назад
						</button>
						<button className={styles.button}>
							{isLastStep ? 'Начать сначала' : 'Далее'}
							{/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
							{/* Или заменять всю кнопку в зависимости от условия */}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
