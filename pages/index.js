import React from "react";
import config from "../config.json"
import styled from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import {StyledTimeline} from "../src/components/TimeLine";
import Favoritos from "../src/components/Favoritos";

function HomePage() {
	const [valorDoFiltro, setValorDoFiltro] = React.useState('')
	return (
		<>
			<CSSReset />
			<div style={{
				display: "flex",
				flexDirection: "column",
				flex: 1
			}}>
				<Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
				<Header />
				<TimeLine searchValue={valorDoFiltro} playlists={config.playlists}/>
				<Favoritos />
			</div>
		</>
	)
}

export default HomePage

const StyledHeader = styled.div`
	.perfil-img {
	  width: 80px;
	  height: 80px;
	  border-radius: 50%;
	}
  .user-info {
	display: flex;
	align-items: center;
	width: 100%;
	padding: 16px 32px;
	gap: 16px;
  }
`

const StyledBanner = styled.div `{
  background-image: url(${({bg}) => bg});
  //background-image: url("${config.banner}");
  height: 230px; 
}`

function Header() {
	return (
		<StyledHeader>
			<StyledBanner bg={config.banner} />
			<section className={'user-info'}>
				<img className={'perfil-img'} src={`https://github.com/${config.github}.png`} alt=""/>
				<div>
					<h2>{config.name}</h2>
					<p>{config.job}</p>
				</div>
			</section>
		</StyledHeader>
	)
}

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
										<a key={videoIndex} href={video.uri}>
											<img src={video.thumb} alt=""/>
											<span>
												{video.title}
											</span>
										</a>
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

