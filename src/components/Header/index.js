import styled from "styled-components";
import config from "../../../config.json";
import React from "react";

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1 };
  
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

export default function Header() {
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