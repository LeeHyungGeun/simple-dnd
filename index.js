import Dnd from './dnd'

new Dnd({
  name: "MAK",
  bag: 'first-bag',
  drop: (data) => console.log(data)
})