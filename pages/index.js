import config from "../config.json"
import styled from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/menu";
import {StyledTimeline} from "../src/components/TimeLine";
import Favoritos from "../src/components/Favoritos";

function HomePage() {
	return (
		<>
			<CSSReset />
			<div style={{
				display: "flex",
				flexDirection: "column",
				flex: 1
			}}>
				<Menu />
				<Header />
				<TimeLine  playlists={config.playlists}/>
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
    margin-top: 50px;
	display: flex;
	align-items: center;
	width: 100%;
	padding: 16px 32px;
	gap: 16px;
  }
  .banner {
    width: 100%;
    height: 45vh;
    object-fit: cover;
	
  }
`

function Header() {
	return (
		<StyledHeader>
			<section>
				<img className={'banner'} src={config.banner} alt=""/>
			</section>
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

function TimeLine(props) {
	// console.log("Dentro do componente", props)
	const playlistNames = Object.keys(props.playlists)
	//Statement
	//Retorno por expressão
	return (
		<StyledTimeline>
			{playlistNames.map((playlistName, index) => {
				const videos = props.playlists[playlistName]
				return (
					<section key={index}>
						<h2>{playlistName}</h2>
						<div>
							{videos.map((video, videoIndex) => {
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

