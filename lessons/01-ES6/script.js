const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ']
const nameCourse = 'Базовый React'

let command = employers.filter(employer => employer && employer.length && employer.trim())
command.forEach((item, index) => {
	item = item.toLowerCase().trim()
	command[index] = item[0].toUpperCase() + item.slice(1)
})

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
}

const calcCash = (own = 0, ...args) => {
	const [everyCash] = [...Array.prototype.slice.call(args)]
	for (cash of everyCash)
		own += +cash
	return own
}

const lesson = calcCash(null, data.cash)

const makeBusiness = (director, teacher = 'Максим', allModule, gang, course) => {
	let sumTech = [...data.react, ...data.add, 'и другие']
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}
Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!
Технологии которые мы изучим: `)
	console.log.apply(null, sumTech)

}

makeBusiness.apply(null, ['Артем', null, lesson, command, nameCourse])
