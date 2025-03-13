import styled from "@emotion/styled";
import PokeNameChip from "../Common/PokeNameChip.tsx";
import PokeMarkChip from "../Common/PokeMarkChip.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useIntersectionObserver } from "react-intersection-observer-hook";
import { PokeImageSkeleton } from "../Common/PokeImageSkeleton.tsx";
import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../Store/index.ts";
import { fetchPokemonDetail } from "../Store/pokemonDetailSlice.ts";

interface PokeCardProps {
  name: string;
}

const PokeCard = (props: PokeCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const imageType = useSelector((state: RootState) => state.imageType.type);
  const { pokemonDetails } = useSelector((state: RootState) => state.pokemonDetail)
  const pokemon = pokemonDetails[props.name]
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;
  

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  useEffect(() => {
    if(!isVisible) {
      return;
    }

    // (async () => {
    //   const detail = await fetchPokemonDetail(props.name);
    //   setPokemon(detail);
    // })();

    dispatch(fetchPokemonDetail(props.name))
  }, [dispatch, props.name, isVisible]);

  if (!pokemon) {
    return (
      <Item ref={ref} color={"#fff"}>
        <Header>
          <PokeNameChip name={"포켓몬"} color={"#ffca05"} id={0} />
        </Header>
        <Body>
          <PokeImageSkeleton />
        </Body>
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Item>
    );
  }

  return (
    <Item onClick={handleClick} color={pokemon.color} ref={ref}>
      <Header>
        <PokeNameChip
          name={pokemon.koreanName}
          color={pokemon.color}
          id={pokemon.id}
        />
      </Header>
      <Body>
        <Image src={pokemon.images[imageType]} alt={props.name} />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
};

const Item = styled.li<{ color: string }>`
  display: flex;
  flex-direction: column;

  padding: 8px;

  width: 250px;
  height: 300px;

  border: 1px solid #c0c0c0;
  box-shadow: 1px 1px 3px 1px #c0c0c0;

  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: ${(props) => props.color};
    opacity: 0.8;
    transition: background-color 0s;
  }
`;

const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;
const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;
const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

export default PokeCard;
