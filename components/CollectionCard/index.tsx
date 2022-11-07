import { ICollection } from '../../interfaces/ICollection'
import styles from './CollectionCard.module.css'

export default function CollectionCard(props: ICollection) {
	return (
		<a href={props.href}>
			<div
				className={styles.container}
				style={{ background: `url(${props.backgroundImage})` }}>
				<img src={props.image} alt='Персонаж' />
				<div className={styles.text}>
					<h4>{props.title}</h4>
					<p>{props.description}</p>
				</div>
			</div>
		</a>
	)
}
