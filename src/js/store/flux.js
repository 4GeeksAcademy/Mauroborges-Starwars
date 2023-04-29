import { element } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorite: []
		},
		actions: {
			fetchStarWars: async (element, page = 1, limit = 10) => {
				let baseUrl = `https://www.swapi.tech/api/${element}?page=${page}&limit=${limit}`
				try {

					let response = await fetch(baseUrl)
					if (!response.ok) return response.status

					let data = await response.json();
					let obj = {};
					obj[element] = data[element == "films" ? "result" : "results"].map(item => ({ ...item, img: `https://starwars-visualguide.com/#/${element == 'people' ? characters : element}characters/${item.uid}.jpg` }));
					setStore(obj)
				}
				catch (error) {
					console.error(error)

				}
			},
			markFavorite: async (elementId, name) => {
				
				let {favorite} = getStore()
				//Verificando si el favorito ya existe
				if (!favorite.some(item => item.id == elementId)) {
					//En caso de que NO exista, se agrega
					setStore({ favorite: [...favorite, { id: elementId, name }] })
				} else {
					//En caso de que SI exista, se elimina
					let newFavorite = [...favorite]
					let index = favorite.findIndex(item => item.id == elementId)
					newFavorite.splice(index, 1)
					setStore({ favorite: newFavorite })
				}
			}


		}
	}
};


export default getState;
