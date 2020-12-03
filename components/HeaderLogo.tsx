import styles from './header-logo.module.scss';

export default function HeaderLogo() {
	return (
		<div className={styles.container}>
			<div className={styles.car}>
				<div className={styles.strike}/>
				<div className={[styles.strike, styles.strike2].join(' ')}/>
				<div className={[styles.strike, styles.strike3].join(' ')}/>
				<div className={[styles.strike, styles.strike4].join(' ')}/>
				<div className={[styles.strike, styles.strike5].join(' ')}/>
				<div className={[styles.car__detail, styles.back].join(' ')}/>
				<div className={[styles.car__detail, styles.center].join(' ')}/>
				<div className={[styles.car__detail, styles.center1].join(' ')}/>
				<div className={[styles.car__detail, styles.front].join(' ')}/>
				<div className={[styles.car__detail, styles.wheel].join(' ')}/>
				<div className={[styles.car__detail, styles.wheel, styles.wheel2].join(' ')}/>
			</div>
		</div>
	);
}
