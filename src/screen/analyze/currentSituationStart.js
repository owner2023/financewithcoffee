import { Text, View } from 'react-native';
import ConfirmButton from '../../util/button/ConfirmButton';
import fontStyle from '../../style/fontStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export default function currentSituationStart() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={fontStyle.container}>
        <Text style={fontStyle.text}>財政家</Text>
        <Text style={fontStyle.text}>나의 재테크 현황은?</Text>
        <Text style={fontStyle.text}>
          과연 저는 잘하고 있을까요? 또래에 비해서 뒤쳐지고 있는 것은 아닐까요
          걱정되거나 궁금하다면 지금 바로 확인해보세요
        </Text>
        <ConfirmButton
          title="무료 분석하기"
          buttonStyle={{ width: 100, height: 90 }}
          onPress={() => console.log('aa')}
        />
      </View>
    </SafeAreaView>
  );
}
