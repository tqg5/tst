import UsernameInput from './components/UsernameInput'
import PasswordInputs from './components/PasswordInputs'
import { LoginContext } from './providers/LoginProvider'
import styled from 'styled-components'
import {
  Card,
  Typography,
  Image,
  Button
} from 'antd'
import "antd/dist/antd.css"
import "./index.css"

const { Title } = Typography

function App() {
  const {
    isUsernameValidated,
    isPasswordValidated,
    isConfirmPasswordValidated
  } = LoginContext()

  const disableCreateAccountBtn = !isUsernameValidated || !isPasswordValidated || !isConfirmPasswordValidated

  return (
    <AppWrapper>
      <ContentWrapper
        bodyStyle={{
          display: 'flex',
          flex: 1,
          padding: 0,
          justifyContent: 'space-between'
        }}
      >
        <TitleContentWrapper>
          <Image
            width={100}
            src='https://www.booktst.com/images/logo.png'
            preview={false}
            style={{marginLeft: 20}}
          />
          <TitleWrapper>
            <TSTTitle>
              Travel Syndication Technology
            </TSTTitle>
            <TSTTitle level={2}>
              Industry Leading Travel
              Technology & Solutions
            </TSTTitle>
          </TitleWrapper>
        </TitleContentWrapper>
        <InputsWrapper>
          <TSTTitle $color='black'>
            Create Account
          </TSTTitle>
          <UsernameInput />
          <PasswordInputs />
          <Button disabled={disableCreateAccountBtn}>Create Account</Button>

        </InputsWrapper>
      </ContentWrapper>
    </AppWrapper>
  )
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const TSTTitle = styled(Title)`
  &.ant-typography {
    color: ${props => props.$color ? props.$color : 'white'};
  }
`

const TitleContentWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: url('https://www.booktst.com/images/page-header.jpg') no-repeat;
  background-size: cover;
  background-position: center center;
`

const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;
  color: white;
`

const ContentWrapper = styled(Card)`
  display: flex;
  height: 95%;
  width: 95%;
  -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */
  box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */
`

const InputsWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

export default App