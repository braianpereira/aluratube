import React from "react";
import {useRouter} from "next/router";
import slugify from 'react-slugify';
import config from "../../config.json"
import ReactPlayer from "react-player";
import styled from "styled-components";

export default function Video(props) {
	const router = useRouter()

	const [playlist, slug] = router.query.all

	const video = config.playlists[playlist].filter((item) => {
		const titleNormalized = slugify(item.title)
		return titleNormalized == slug
	})

	const StyledVideo = styled.div`
		margin-top: 90px;
	`

	return(
		<StyledVideo>
			<div>
				<h3>{video[0].title}</h3>
				<ReactPlayer width={"100%"} controls={'true'} url={video[0].url} />
			</div>
		</StyledVideo>

	)
}