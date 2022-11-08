import CollectionCard from '../components/CollectionCard'
import { collections } from '../data/collections'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import ScrollContainer from 'react-indiana-drag-scroll'
import useSWR from 'swr'
import React from 'react'
import { ICollection } from '../interfaces/ICollection'

export default function Home() {
	// @ts-ignore
	// const fetcher = (...args: any) => fetch(...args).then(res => res.json())

	// const IMAGE_API = 'http://localhost:3000/'
	// const { data: collections, error } = useSWR(
	// 'http://localhost:3000/collections',
	// fetcher
	// )

	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<div className={styles.container}>
				<div className={styles.body}>
					<h3 className={styles.title}>Подборки</h3>
					<ScrollContainer
						vertical={false}
						className={styles.collections}
						nativeMobileScroll={false}>
						{collections &&
							collections
								// .map(card => ({
								// 	...card,
								// 	backgroundImage: IMAGE_API + card.backgroundImage,
								// 	image: IMAGE_API + card.image,
								// }))
								.map(card => (
									<div
										style={{ marginRight: '2rem', paddingTop: '1rem' }}
										key={card.title}>
										<CollectionCard {...card} />
									</div>
								))}
					</ScrollContainer>
				</div>
			</div>
		</>
	)
}
