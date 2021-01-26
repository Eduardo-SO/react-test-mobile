import styled from 'styled-components/native'
// import RNPickerSelect from 'react-native-picker-select'
// import DatePicker from 'react-native-datepicker'

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #121212;

  padding: 16px;
  height: 100%;
`

// export const Content = styled.View`
//   width: 100%;
//   max-width: 1140px;
// `

// export const Filters = styled.View`
//   display: grid;
//   gap: 16px;

//   grid-template-columns: repeat(4, 1fr);

//   @media (max-width: 800px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media (max-width: 670px) {
//     grid-template-columns: 1fr 1fr;
//   }

//   @media (max-width: 450px) {
//     grid-template-columns: 1fr;
//   }

//   background: #121212;
//   padding: 32px;
//   border-radius: 8px;
// `

// export const FieldContainer = styled.View`
//   select {
//     height: 48px;

//     border: 1px solid #333;
//     border-radius: 4px;
//     padding: 0 24px;
//     appearance: none;
//     background: transparent;

//     margin-top: 8px;
//     margin-bottom: 16px;

//     option {
//       background: #333;
//     }
//   }
// `

// export const FilterLabel = styled.Text`
//   font-weight: bold;
// `

// export const FilterSelect = styled(RNPickerSelect)`
//   select {
//     height: 48px;

//     border: 1px solid #333;
//     border-radius: 4px;
//     padding: 0 24px;
//     appearance: none;
//     background: transparent;

//     margin-top: 8px;
//     margin-bottom: 16px;

//     option {
//       background: #333;
//     }
//   }
// `

// export const FilterInput = styled.TextInput`
//   height: 48px;

//   background: transparent;
//   color: #fff;
//   border: 1px solid #333;
//   border-radius: 4px;
//   padding: 24px;

//   margin-top: 8px;
//   margin-bottom: 16px;

//   ::-webkit-calendar-picker-indicator {
//     filter: invert(1);
//   }
// `

// export const FilterDateInput = styled(DatePicker)`
//   height: 48px;

//   background: transparent;
//   color: #fff;
//   border: 1px solid #333;
//   border-radius: 4px;
//   padding: 24px;

//   margin-top: 8px;
//   margin-bottom: 16px;

//   ::-webkit-calendar-picker-indicator {
//     filter: invert(1);
//   }
// `

export const Login = styled.View`
  display: flex;
  flex-direction: column;
`

export const LoginTitle = styled.Text`
  max-width: 400px;
  margin-bottom: 32px;
  font-size: 72px;
  color: #ffffff;
`

export const LoginDescription = styled.Text`
  max-width: 400px;
  margin-bottom: 32px;
  color: #b3b3b3;
  font-size: 18px;
  line-height: 27px;
`

export const LoginLink = styled.TouchableOpacity`
  width: 200px;
  padding: 8px 30px;
  border-radius: 40px;
  border: 2px solid transparent;

  background: #1db954;
`
export const LoginLinkText = styled.Text`
  color: #000;

  text-align: center;
  font-weight: bold;
`

export const AccessDenied = styled.Text`
  font-size: 12px;
  margin-top: 32px;
  color: #c10;
`
