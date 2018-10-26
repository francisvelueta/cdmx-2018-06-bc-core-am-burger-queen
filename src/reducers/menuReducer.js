const initState = {
  menus: [
    {
      Dia: [
        {id: 1, name: 'Hamburguesas Simple', price: 10,
        types: [
          {type: "Res"},
          {type: "Pollo"},
          {type: "Vegana"},
        ],},
        {id: 2, name: 'Hamburguesas Doble', price: 15,
        types: [
          {id: 3, type: "Res"},
          {id: 4, type: "Pollo"},
          {id: 3, type: "Vegana"}
        ],
          Acompanamientos: [
          {id: 5, name: "Papas fritas"},
          {id: 6, type: "Onion Rings"},
          ],
        },

      { id: 6, name: 'Agua',
      sizes: [
        { id: 7, size: "500ml", price: 5, },
        { id: 8, size: "700ml", price: 8, }
      ],},
      { id: 9, name: 'Refrescos',
      sizes: [
        { id: 10, size: "500ml", price: 7, },
        { id: 11, size: "700ml", price: 10, }
      ],},
    ],

    Desayuno: [
      { id: 12, name: "Cafe americano	", price: 5, },
      { id: 13, name: "Cafe con leche", price: 7, },
      { id: 14, name: "Sandwich de jamón y queso", price: 10, },
      { id: 15, name: "Jugo natural", price: 7, },
    ],
      },


],

};
const menuReducer = (state = initState , action) => {
  return state;
}
export default menuReducer;
