import { useState } from 'react'
import UsernameInput from '../components/UsernameInput'
import PasswordInputs from '../components/PasswordInputs'
import { LoginContext } from '../providers/LoginProvider'
import {
  Image,
  Button,
  Alert,
  Modal
} from 'antd'
import 'antd/dist/antd.css'
import '../index.css'
import Wrapper from './Wrapper'
import TSTTitle from './TSTTitle'
import TitleWrapper from './TitleWrapper'
import TitleContentWrapper from './TitleContentWrapper'
import InputsWrapper from './InputsWrapper'
import ContentWrapper from './ContentWrapper'

const alertMessage = 'Your account has been successfully created!'

function App() {
  const {
    isUsernameValidated,
    isPasswordValidated,
    isConfirmPasswordValidated
  } = LoginContext()

  const [ showModal, setShowModal ] = useState(false)

  const disableCreateAccountBtn = !isUsernameValidated || !isPasswordValidated || !isConfirmPasswordValidated

  return (
    <Wrapper>
        <Modal
            closable={false}
            visible={showModal}
            onOk={() => setShowModal(false)}
            onCancel={() => setShowModal(false)}
        >
            <Alert message={alertMessage} type='success' />
        </Modal>

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
                <Button
                    onClick={() => setShowModal(true)}
                    disabled={disableCreateAccountBtn}
                >
                        Create Account
                </Button>
            </InputsWrapper>
        </ContentWrapper>
    </Wrapper>
  )
}

export default App