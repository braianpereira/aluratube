import React from "react";
import config from "../config.json"
import {StyledTimeline} from "../src/components/TimeLine";
import Favoritos from "../src/components/Favoritos";
import Link from 'next/link'
import slugify from "react-slugify";
import Header from "../src/components/Header";

function HomePage() {
	const [valorDoFiltro, setValorDoFiltro] = React.useState('')

	return (
		<>
			<Header />
			<TimeLine searchValue={valorDoFiltro} playlists={config.playlists}/>
			<Favoritos />
		</>
	)
}

export default HomePage

function TimeLine({searchValue, ...props}) {
	// console.log("Dentro do componente", props)
	const playlistNames = Object.keys(props.playlists)
	//Statement
	//Retorno por expressão
	return (
		<StyledTimeline>
			{playlistNames.map((playlistName) => {
				const videos = props.playlists[playlistName]
				return (
					<section key={playlistName}>
						<h2>{playlistName}</h2>
						<div>
							{videos
								.filter((video) => {
									const titleNormalized = video.title.toLowerCase()
									const searchValueNormalized = searchValue.toLowerCase()
									return titleNormalized.includes(searchValueNormalized)
								})
								.map((video, videoIndex) => {
									return (
										<Link key={videoIndex} href={`/video/${playlistName}/${slugify(video.title)}`}>
											<span className={"video-item"}>
												<img src={video.thumb} alt=""/>
												<span>
													{video.title}
												</span>
											</span>
										</Link>
										)
									})
							}
						</div>
					</section>
				)
			})}
		</StyledTimeline>
	)
}

