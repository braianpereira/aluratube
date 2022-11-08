import config from "../config.json"
import styled from "styled-components";
import {CSSReset} from "../src/components/CSSReset";
import Menu from "../src/components/menu";
import {StyledTimeline} from "../src/components/TimeLine";

function HomePage() {
	return (
		<>
			<CSSReset />
			<div style={{
				display: "flex",
				flexDirection: "column",
				flex: 1,
				// backgroundColor: "red",
			}}>
				<Menu />
				<Header />
				<TimeLine  playlists={config.playlists}/>
			</div>
		</>
	)
}

export default HomePage

const StyledHeader = styled.div`
	img {
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
`

function Header() {
	return (
		<StyledHeader>
			{/*<img src="banner" alt=""/>*/}
			<section className={'user-info'}>
				<img src={`https://github.com/${config.github}.png`} alt=""/>
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
			{playlistNames.map((playlistName) => {
				const videos = props.playlists[playlistName]
				return (
					<section>
						<h2>{playlistName}</h2>
						<div>
							{videos.map((video) => {
								return (
									<a href={video.uri}>
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