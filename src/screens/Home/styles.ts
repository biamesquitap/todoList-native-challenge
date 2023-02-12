import { StyleSheet } from "react-native";
import { defaultThemeColor, defaultThemeSize, defaultWeddingColor } from '../../styles/themes/default'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultWeddingColor['blue-100'],
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerContainer: {
    flex: 1,
    marginTop: -10,
    width: '100%',
    backgroundColor: defaultWeddingColor['gray-800'],
  },
  logo: {
    marginTop: 60,
    backgroundColor: '#1E1E1E',
    marginLeft: 170,
    marginBottom: 24,
  },
  eventName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 95,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginLeft: 93,
    marginBottom: 0,
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    height: 56,
    padding: 16,
    marginTop: -60,
    marginHorizontal: 24,
    color: '#1F1E25',
    fontSize: defaultThemeSize.lg,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    marginTop: -60,
    marginRight: 24,
    backgroundColor: defaultWeddingColor['green-500'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  form: {
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: defaultThemeSize.md,
    textAlign: 'center',
  },
  tasksCountContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 0,
  },
  tasksCreated: {
    justifyContent: 'space-between',
    fontFamily: 'Inter',
    fontWeight: 'bold',
    fontSize: defaultThemeSize.md,
    color: defaultWeddingColor['gray-800'],
    marginLeft: 70,

  },
  tasksCounterView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

  },
  tasksCounter: {
    marginLeft: 7,
    paddingHorizontal: 7,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: defaultWeddingColor['green-500'],
    backgroundColor: defaultWeddingColor['gray-800'],
    borderTopRightRadius: 999,
    borderBottomRightRadius: 999,
  },
  flatlistContainer: {
    flex: 1,
    marginTop: -100,
  }

})
