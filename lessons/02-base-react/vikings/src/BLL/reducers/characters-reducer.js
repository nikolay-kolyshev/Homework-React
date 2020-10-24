const initialState = {
    title: "Главные персонажи",
    subtitle: "О лучших из лучших",
    description: `Персонажи "Викингов" имеют множество граней характера и не дадут
                  зрителю усомниться в их уникальности. Каждая сюжетная линяя прописана
                  с филигранным мастерством и любовью к своему делу без намёка на
                  клишированность. Вы будете сопереживать каждому герою сериала.`,
    characters: [
        {
            id: 1,
            name: "Рагнар Лодброк"
        },
        {
            id: 2,
            name: "Лагерта Лодброк"
        },
        {
            id: 3,
            name: "Флоки Вильгердарсон"
        },
        {
            id: 4,
            name: "Бьёрн Железнобокий"
        }
    ]

}

const charactersReducer = (state = initialState, action) => {

    switch (action.type) {

        default:
            return state

    }


}

export default charactersReducer