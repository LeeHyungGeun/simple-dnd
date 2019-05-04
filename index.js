import Dnd from './dnd'

new Dnd({
  name: "MAK",
  bag: 'first-bag',
  copy: false,
  drop: (data) => setTimeout(() => console.log(data))
})