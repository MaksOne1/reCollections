import CollectionCard from '../components/CollectionCard'
import { collections } from '../data/collections'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import ScrollContainer from 'react-indiana-drag-scroll'

export default function Home() {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<div className={styles.container}>
				<div className={styles.body}>
					<h3 className={styles.title}>Подборки</h3>
					<ScrollContainer horizontal={true} className={styles.collections}>
						{collections.map(card => (
							<div style={{ marginRight: '2rem', paddingTop: '1rem' }}>
								<CollectionCard {...card} key={card.title} />
							</div>
						))}
					</ScrollContainer>
				</div>
			</div>
		</>
	)
}
