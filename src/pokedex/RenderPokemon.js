import React, { Component } from 'react'
import ListItem from './ListItem.js'

export default class RenderPokemon extends Component {
    render() {
        const filteredPokemon = this.props.pokeDex.filter((creature) => {
            if (!this.props.filter) return true;

            if(creature.shape === this.props.filter) return true;

            if (creature.pokebase === this.props.filter) return true;

            if (creature.type_1 === this.props.filter) return true;

            if(creature.type_2 === this.props.filter) return true;

            if(creature.attack === this.props.filter) return true

            return false
        });
        return (
            <div className="pokemon-body">
                {
                    filteredPokemon.map(creature => <ListItem
                    _id={creature._id}
                    pokemon={creature.pokemon}
                    url={creature.url_image}
                    type1={creature.type_1}
                    type2={creature.type_2}
                    />)
                }
            </div>
        )
    }
}