// import React, { useMemo, useEffect, useState } from 'react'
// import {StyleSheet, View} from 'react-native'
// import TabItem from '../tab-item'

// const TabBar = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
// 	return (
//     <View style={[styles.bar]}>
//       {items.map((it, index) => (
//         <TabItem
//           key={index}
//           style={styles.item}
//           icon={it.icon}
//           label={it.label}
//           active={index === activeIndex}
//           onPress={() => setActiveIndex(index)}
//         />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   bar: {
//     flexDirection: "row",
//     height: 60,
//     paddingLeft: 20,
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     backgroundColor: "white",
//     overflow: "hidden",
//   },
//   item: {
//     flex: 1,
//   },
// });

// export default TabBar
