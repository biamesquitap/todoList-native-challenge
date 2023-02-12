import { StyleSheet } from "react-native";
import { defaultThemeColor, defaultThemeSize, defaultWeddingColor } from '../../styles/themes/default'


export const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingLeft: 12,
    marginBottom: 10,
    width: 370,
    height: 56,
    flexDirection: 'row',
    backgroundColor: defaultWeddingColor['blue-300'],
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: defaultThemeColor['gray-100'],
  },
  name: {
    flex: 1,
    width: "100%",
    fontSize: 16,
    color: '#FFFFFF',
    paddingLeft: 16,
  },
  button: {
    marginRight: 12,
  },
  buttonTrash: {
    backgroundColor: 'trans',
    padding: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  checkbox: {

  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 3,
  },
  checkboxContainer: {
    marginTop: 12,
    paddingLeft: 12,
    marginBottom: 10,
    height: 'auto',
    flexDirection: 'row',
    backgroundColor: defaultWeddingColor['blue-300'],
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: defaultThemeColor['gray-100'],
  }
})