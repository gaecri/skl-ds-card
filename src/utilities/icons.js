
import icomoonSelection from './../font/icons/selection.json'

export const iconList = icomoonSelection.icons.map((icon) => icon.properties.name);

// export const iconList = [
//     'home',
//     'alarm',
//     'chat',
//     'user', 
//   ];

console.log("iconListjs", iconList)