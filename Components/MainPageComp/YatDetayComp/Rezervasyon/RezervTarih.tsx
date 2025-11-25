import React from 'react';
import { Button, View } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface RezervTarihProps {
     visible: boolean;
     setVisible: (value: boolean) => void;
     mode: 'date' | 'time' | 'datetime';
     date: Date;
     setDate: (value: Date) => void;
}

const RezervTarih = ({ visible, setVisible, mode, date, setDate }: RezervTarihProps) => {

     return (
          <View>
               <DateTimePickerModal
                    isVisible={visible}
                    mode={mode}
                    date={date}
                    onConfirm={(selectedDate) => {
                         setDate(selectedDate);
                         setVisible(false);
                    }}
                    onCancel={() => setVisible(false)}
               />
          </View>
     );
};

export default RezervTarih;
