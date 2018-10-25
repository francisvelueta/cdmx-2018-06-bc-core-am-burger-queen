const initState = {
  menus: [
    {
      Dia: [
        {id: 1, item: 'Hamburguesas Simple', price: 10,
        types: [
          {type: "Res"},
          {type: "Pollo"},
          {type: "Vegana"},
        ],},
        {id: 2, name: 'Hamburguesas Doble', price: 15,
        types: [
          {id: 1, type: "Res"},
          {id: 2, type: "Pollo"},
          {id: 3, type: "Vegana"}
        ],
          Acompanamientos: [
          {id: 1, item: "Papas fritas"},
          {id: 2, type: "Onion Rings"},
          ],
        },

      { id: 3, name: 'Agua',
      sizes: [
        { id: 1, size: "500ml", price: 5, },
        { id: 1, size: "700ml", price: 8, }
      ],},
      { id: 4, name: 'Refrescos',
      sizes: [
        { id: 1, size: "500ml", price: 7, },
        { id: 1, size: "700ml", price: 10, }
      ],},
    ],

    Desayuno: [
      { id: 1, size: "Cafe americano	", price: 5, },
      { id: 1, size: "Cafe con leche", price: 7, },
      { id: 1, size: "Sandwich de jamón y queso", price: 10, },
      { id: 1, size: "Jugo natural", price: 7, },
    ],
      },


],

};
const menuReducer = (state = initState , action) => {
  return state;
}
export default menuReducer;
