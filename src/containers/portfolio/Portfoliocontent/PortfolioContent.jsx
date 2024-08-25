import React from "react";
import { PortfolioCard } from "../../../components/ExpCard/Cards";

export default function PortfolioContent(props) {
  return (
    <div className="portfolio_grid_item">
      <PortfolioCard
        onClick={props.onClick}
        index={props.index}
        subtitle={props.subtitle}
        title={props.title}
        by={props.title}
        image={props.image}
        id={props.id}
        link={`#/project${props.id}`}
      />
    </div>
  );
}
