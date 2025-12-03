import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";



interface FacilityItem {
     id: string;
     label: string;
}

interface FacilitiesProps {
     icon: React.ReactNode;
     title: string;
     items: FacilityItem[];
     onSelect?: (selectedIds: string[]) => void;
}

const ImkanlarComp = ({ icon, title, items, onSelect }: FacilitiesProps) => {
     const [selectedIds, setSelectedIds] = useState<string[]>([]);

     const toggleItem = (id: string) => {
          let updated: string[];

          if (selectedIds.includes(id)) {
               updated = selectedIds.filter(item => item !== id);
          } else {
               updated = [...selectedIds, id];
          }

          setSelectedIds(updated);
          onSelect && onSelect(updated);
     };

     return (
          <View style={styles.container}>
               <View style={styles.headerRow}>
                    {icon}
                    <Text style={styles.title}>{title}</Text>
               </View>

               <View style={{ marginLeft: 20 }}>
                    {items.map((item) => {
                         const isSelected = selectedIds.includes(item.id);
                         return (
                              <TouchableOpacity
                                   key={item.id}
                                   style={styles.row}
                                   onPress={() => toggleItem(item.id)}
                              >
                                   <View style={styles.checkboxOuter}>
                                        {isSelected && <View style={styles.checkboxInner} />}
                                   </View>
                                   <Text style={styles.label}>{item.label}</Text>
                              </TouchableOpacity>
                         );
                    })}
               </View>
          </View>
     );
};

export default ImkanlarComp;

const styles = StyleSheet.create({
     container: { width: "100%", paddingHorizontal: 10 },
     headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
     title: {
          fontSize: 18,
          fontWeight: "600",
          marginLeft: 6,
          color: "#1C60D6",
     },
     row: { flexDirection: "row", alignItems: "center", marginVertical: 6 },
     checkboxOuter: {
          width: 22,
          height: 22,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: "#1C60D6",
          justifyContent: "center",
          alignItems: "center",
          marginRight: 8,
     },
     checkboxInner: {
          width: 12,
          height: 12,
          backgroundColor: "#1C60D6",
          borderRadius: 2,
     },
     label: { fontSize: 16, color: "#333" },
     showMore: {
          marginTop: 8,
          fontSize: 14,
          textDecorationLine: "underline",
          color: "#1C60D6",
     },
});
